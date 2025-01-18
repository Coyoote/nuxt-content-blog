<script lang="ts" setup></script>

<template>
  <header class="flex h-16 items-center bg-green-900 bg-opacity-75 text-white">
    <div class="px-4">
      <nav>
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink class="cursor-pointer" to="/"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink class="cursor-pointer" to="/team"> Team </NuxtLink>
          </li>
          <li>
            <NuxtLink class="cursor-pointer" to="/contact-us">
              Contact us
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="cursor-pointer" to="/about"> About us </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
