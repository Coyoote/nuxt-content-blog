<template>
  <div>
    <Header />
    <div class="m-4 grid min-h-screen sm:grid-cols-[15%,70%,15%]">
      <LeftSidebar class="col-start-1 col-end-2" />
      <main class="col-start-2 col-end-3 max-h-screen overflow-auto px-4">
        <slot />
      </main>
      <RightSidebar class="col-start-3 col-end-4" />
    </div>
    <Footer />
  </div>
</template>
