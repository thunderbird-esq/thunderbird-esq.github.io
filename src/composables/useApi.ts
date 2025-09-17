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
