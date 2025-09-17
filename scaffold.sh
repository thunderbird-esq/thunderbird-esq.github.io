#!/bin/bash

# ==============================================================================
# ARCHITECTURAL SCAFFOLDING SCRIPT
#
# This script automates the foundational setup for the Thunderbird OS project
# as per the "Plan of Action". It configures tooling, creates canonical
# implementation examples, and generates the required documentation.
#
# Idempotent: Safe to run multiple times.
#
# Author: Dr. Gemini, Senior Software Architect
# Date: 2025-09-16
# ==============================================================================

# Function for logging progress
log() {
  echo "✅  $1"
}

# --- Phase 1: Configure Tooling (Task 1.2) ---

## Create required directories first
log "Ensuring core directories exist..."
mkdir -p src/components
mkdir -p src/composables
mkdir -p src/stores
mkdir -p docs

## Task 1.2.1: Configure main.ts with Pinia
log "Configuring src/main.ts for Pinia..."
cat > src/main.ts <<'EOF'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // Assuming a root App.vue component exists

// Initialize Pinia for global state management
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
EOF

## Task 1.2.2: Create vitest.config.ts
log "Creating vitest.config.ts..."
cat > vitest.config.ts <<'EOF'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitest.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  },
})
EOF

## Task 1.2.3: Update tsconfig.json for Vitest globals
log "Updating tsconfig.json with Vitest types..."
if [ -f "tsconfig.json" ]; then
  # Check if the type is already present to maintain idempotency
  if ! grep -q '"vitest/globals"' tsconfig.json; then
    # Use sed to add 'vitest/globals' to the compilerOptions.types array.
    # This is a safe way to append within the array.
    sed -i '' '/"types": \[/a\
      "vitest/globals",
' tsconfig.json
    log "  -> Added 'vitest/globals' to types."
  else
    log "  -> 'vitest/globals' already present."
  fi
else
  echo "⚠️  Warning: tsconfig.json not found. Skipping."
fi

# --- Phase 2: Canonical Implementation (Tasks 2.1 - 2.4) ---

## Task 2.1: Create Standard Component (BaseButton.vue)
log "Creating canonical component: src/components/BaseButton.vue..."
cat > src/components/BaseButton.vue <<'EOF'
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const buttonClasses = computed(() => [
  'px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500': props.variant === 'primary',
    'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400': props.variant === 'secondary',
    'opacity-50 cursor-not-allowed': props.disabled,
  },
])

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>
EOF

## Task 2.2: Create Standard Composable (useApi.ts)
log "Creating canonical composable: src/composables/useApi.ts..."
cat > src/composables/useApi.ts <<'EOF'
import { ref, readonly } from 'vue'

// This is a generic API composable. In a real application, you might
// instantiate it with a base URL or an API client instance.

export function useApi<T>(url: string) {
  const data = ref<T | null>(null)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchData() {
    isLoading.value = true
    error.value = null
    try {
      // Replace this with your actual fetch logic (e.g., using Axios or Fetch API)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      data.value = (await response.json()) as T
    } catch (e) {
      error.value = e instanceof Error ? e : new Error('An unknown error occurred')
    } finally {
      isLoading.value = false
    }
  }

  return {
    // We use readonly to prevent components from directly mutating the state
    data: readonly(data),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchData,
  }
}
EOF

## Task 2.3: Create Standard Pinia Store (userStore.ts)
log "Creating canonical Pinia store: src/stores/userStore.ts..."
cat > src/stores/userStore.ts <<'EOF'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
  id: string
  name: string
  email: string
}

export const useUserStore = defineStore('user', () => {
  // State
  const currentUser = ref<User | null>(null)

  // Getters
  const isLoggedIn = computed(() => !!currentUser.value)
  const userName = computed(() => currentUser.value?.name || 'Guest')

  // Actions
  function login(user: User) {
    currentUser.value = user
  }

  function logout() {
    currentUser.value = null
  }

  return {
    currentUser,
    isLoggedIn,
    userName,
    login,
    logout,
  }
})
EOF

## Task 2.4: Write Unit Tests for Exemplars
log "Creating unit tests for canonical examples..."
cat > src/components/BaseButton.spec.ts <<'EOF'
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton.vue', () => {
  it('renders the slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click Me',
      },
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('emits a click event when clicked', async () => {
    const wrapper = mount(BaseButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit a click event when disabled', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeUndefined()
  })

  it('applies the primary variant class by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('bg-blue-600')
  })

  it('applies the secondary variant class when specified', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('bg-gray-200')
  })
})
EOF

# --- Phase 3: Documentation (Tasks 3.1 & 3.2) ---

## Task 3.1: Draft Vue Architecture RFC
log "Creating documentation: docs/vue-architecture-rfc.md..."
cat > docs/vue-architecture-rfc.md <<'EOF'
# RFC: Vue.js 3 Frontend Architecture

**Status:** Ratified

## 1. Summary

This document outlines the architectural standards for the Thunderbird OS frontend. The primary goal is to establish a scalable, maintainable, and testable codebase by enforcing a strict separation of concerns and adopting modern best practices within the Vue.js ecosystem.

## 2. Core Technologies

- **Framework:** Vue.js 3.5.21
- **Language:** TypeScript 5.9.2
- **State Management:** Pinia 2.1
- **Testing:** Vitest 1.5 with Vue Test Utils
- **Styling:** TailwindCSS 4.1.13
- **Build Tool:** Vite 7.1.5

## 3. Architectural Patterns

### 3.1. Separation of Concerns

The fundamental principle of this architecture is the strict separation of business logic from the UI (view) layer.

- **Components (`/src/components`):** Components should be as "dumb" as possible. Their primary responsibility is to render UI based on props and emit events in response to user interaction. They should not contain complex business logic or directly fetch data.
  - *Canonical Example:* `src/components/BaseButton.vue`

- **Composables (`/src/composables`):** All reusable business logic, state management logic, and API interactions must be encapsulated within Composition API functions (composables). This makes logic portable, independently testable, and reusable across multiple components.
  - *Canonical Example:* `src/composables/useApi.ts`

- **Global State (`/src/stores`):** Application-wide state that is shared across features or pages must be managed exclusively by Pinia stores. This provides a single source of truth and predictable state management.
  - *Canonical Example:* `src/stores/userStore.ts`

### 4. Testing Strategy

- **Unit Tests:** All composables and Pinia stores must have 100% unit test coverage for their business logic.
- **Component Tests:** Components will be tested to verify correct rendering based on props and proper event emission. We will not test implementation details.

## 5. Final Verdict

This architecture provides a robust foundation for future development. Adherence to these principles is mandatory for all new contributions.
EOF

## Task 3.2: Create Contribution Guide
log "Creating documentation: CONTRIBUTING.md..."
cat > CONTRIBUTING.md <<'EOF'
# Contributing to Thunderbird OS

Thank you for your interest in contributing! To ensure a smooth and consistent development process, please adhere to the following guidelines.

## 1. Code Style & Quality

- **Linting:** All code must pass the ESLint checks. Run `pnpm lint` before committing to identify and fix issues.
- **TypeScript:** All new `.vue` and `.ts` files must be written in TypeScript. Use `<script setup lang="ts">` for all Vue components.
- **Formatting:** Code formatting is handled by Prettier (integrated with ESLint).

## 2. File Naming Conventions

To maintain consistency, please use the following naming conventions:

- **Components:** `PascalCase`. Example: `src/components/UserProfileCard.vue`
- **Composables:** `camelCase`, prefixed with `use`. Example: `src/composables/useAuthentication.ts`
- **Stores:** `camelCase`, suffixed with `Store`. Example: `src/stores/cartStore.ts`

## 3. Branching & Pull Requests

1.  **Branch:** Create a new branch from `main` for your feature or bugfix.
    -   Format: `feature/short-description` or `fix/ticket-number`
2.  **Commit:** Write clear, concise commit messages.
3.  **Pull Request:** Open a pull request against the `main` branch. Ensure all automated checks (linting, testing) are passing.
4.  **Review:** At least one other team member must approve the PR before it can be merged.

## 4. Key Resources

- **Architectural Guidelines:** For high-level patterns, see `/docs/vue-architecture-rfc.md`.
- **Component Example:** `src/components/BaseButton.vue`
- **Composable Example:** `src/composables/useApi.ts`

By following these guidelines, you help us keep the codebase clean, readable, and maintainable.
EOF

echo ""
echo "🚀 Architectural scaffolding complete. The project foundation has been established."
echo "Next steps:"
echo "1. Run 'pnpm install' to fetch the newly configured dependencies (Pinia, Vitest)."
echo "2. Review the generated files to familiarize yourself with the new standards."
echo "3. Run 'pnpm test' to verify the Vitest configuration."

