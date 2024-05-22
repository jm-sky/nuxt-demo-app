<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import NavLink from '@/components/Nav/NavLink.vue'
import ResponsiveNavLink from '@/components/Nav/ResponsiveNavLink.vue'
import { RouteMap } from '@/router/routeMap'
import { useAuthStore } from '@/stores'
import MenuDropdown from '~/components/Menu/MenuDropdown.vue'

const authStore = useAuthStore()

const showingNavigationDropdown = ref(false)

const userMenuOptions = [
  [{
    label: 'Profile',
    to: RouteMap.PROFILE_EDIT,
  }],
  [{
    label: 'Logout',
    to: RouteMap.LOGOUT,
  }],
]
</script>

<template>
  <div>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav class="bg-white border-b border-gray-100 dark:bg-gray-950 dark:border-gray-900">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="shrink-0 flex items-center">
                <RouterLink :to="RouteMap.HOME">
                  <ApplicationLogo
                    size="w-10 h-10"
                    class="block h-3 w-auto fill-current text-gray-800 dark:text-gray-300"
                  />
                </RouterLink>
              </div>

              <!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink :to="RouteMap.HOME">
                  Dashboard
                </NavLink>

                <NavLink :to="'/contact'">
                  Contact
                </NavLink>

                <NavLink :to="'/admin'">
                  Admin
                </NavLink>
              </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ms-6">
              <ColorModeButton />

              <!-- Settings Dropdown -->
              <div class="ms-3 relative">
                <MenuDropdown
                  :items="userMenuOptions"
                >
                  {{ authStore.user?.fullName }}
                  <FaIcon
                    icon="user"
                    class="mx-2"
                  />
                </MenuDropdown>
              </div>
            </div>

            <!-- Hamburger -->
            <div class="-me-2 flex items-center sm:hidden">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                @click="showingNavigationDropdown = !showingNavigationDropdown"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    :class="{
                      'hidden': showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="{
                      'hidden': !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
          :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink :to="RouteMap.HOME">
              Dashboard
            </ResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="px-4">
              <div class="font-medium text-base text-gray-800">
                {{ authStore.user?.fullName }}
              </div>
              <div class="font-medium text-sm text-gray-500">
                {{ useAuthStore().user?.email }}
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <ResponsiveNavLink :to="RouteMap.PROFILE_EDIT">
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                :to="RouteMap.LOGOUT"
                method="post"
                as="button"
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page Heading -->
      <header
        v-if="$slots.header"
        class="bg-white shadow"
      >
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
