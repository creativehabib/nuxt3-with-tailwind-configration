<template>
  <AppHeader/>
  <Appsidebar/>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
    <div class="sm:ml-60">
      <div class="mt-14">
        <!-- Page Content -->
        <slot/>
      </div>
    </div>
  </div>
</template>