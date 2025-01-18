<template>
  <div class="flex min-h-[100vh] flex-col lg:flex-row lg:p-8">
    <Sidebar />
    <div
      class="order-1 flex flex-grow basis-3/4 pt-5 md:p-5 lg:order-2 lg:p-0 lg:pl-5"
    >
      <div class="gap-4.5 flex flex-grow flex-col">
        <header class="mb-5 ml-auto w-full">
          <h1 class="mb-0 ml-auto w-fit text-secondary-neutral-5">
            Header test
          </h1>
        </header>
        <main class="flex-grow">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
