<template>
  <div>
    <div class="text-center">
      <h2 class="text-gray-600 dark:text-gray-400">
        login
      </h2>
      <form class="space-y-4 md:space-y-6">
          <div class="">
            <label id="email" class="text-gray-300 dark:text-gray-400 block">Email</label>
            <input type="email" id="email" name="email" class="" placeholder="Enter your email">
          </div>
        <div class="mt-4">
          <label id="password" class="text-gray-300 dark:text-gray-400 block">Password</label>
          <input type="password" id="password" name="password" class="" placeholder="Enter your password">
        </div>
        <button>Login</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>