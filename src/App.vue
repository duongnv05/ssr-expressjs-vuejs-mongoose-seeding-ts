<template>
  <div>
    <div :class="$style.links">
      <router-link to="/" :class="$style.link">Main</router-link>
      <router-link to="/hello-seeding" :class="$style.link">Hello Seeding</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default class {}
</script>

<style module>
.link {
  border: 1px solid rgba(65, 86, 255, 0.79);
  padding: 8px;
  color: #394fcc;
  text-decoration: none;
}
.links {
  margin: 16px 0 56px;
}
</style>

<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>