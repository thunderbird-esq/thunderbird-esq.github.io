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
