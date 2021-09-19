<template>
  <div class="submited-data">
    <div class="submited-data-group">
      <span class="submited-data-label">Name:</span>
      <span class="submited-data-value">{{ submitedData.name }}</span>
    </div>
    <div class="submited-data-group">
      <span class="submited-data-label">Surname:</span>
      <span class="submited-data-value">{{ submitedData.surname }}</span>
    </div>
    <div class="submited-data-group">
      <span class="submited-data-label">Checklist:</span>
      <span class="submited-data-value">{{ submitedData.checklist.join(', ') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['submitedData'],
}
</script>

<style scoped>
.submited-data {
  margin-left: 8px;
  padding: 5px;
  border: solid 1px whitesmoke;
  border-radius: 5px;
}
.submited-data-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>