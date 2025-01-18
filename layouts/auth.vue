<template>
  <main
    class="background flex min-h-[100dvh] w-full items-center justify-center px-4 py-12"
  >
    <slot />
  </main>
</template>

<style scoped>
.background {
  background: linear-gradient(
    -60deg,
    rgba(255, 255, 255, 0.01) 35%,
    rgba(255, 255, 255, 0.02) 35% 55%,
    rgba(255, 255, 255, 0.03) 55% 75%,
    rgba(255, 255, 255, 0.04) 75% 95%,
    rgba(255, 255, 255, 0.03) 95%
  );
}
</style>
