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
