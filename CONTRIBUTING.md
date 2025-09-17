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
