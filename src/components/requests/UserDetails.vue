<template>
  <ul class="user">
    <li v-for="(value, key) in user" :key="key" class="user-item">
      {{ key }}: {{ value }}
    </li>
  </ul>  
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
.user {
  margin-top: 12px;
}
</style>