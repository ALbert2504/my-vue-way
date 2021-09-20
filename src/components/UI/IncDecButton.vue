<template>
  <button @click="$emit('change')" :class="mode" class="inc-dec-button">
    <slot></slot> 
  </button>  
</template>

<script>
export default {
  props: ['mode'],
  emits: ['change'] 
}
</script>

<style scoped>
.inc-dec-button {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
}
.inc-dec-button:hover {
  cursor: pointer;
}
.inc-dec-button.inc {
  border: solid 1px green;
  color: green;
}
.inc-dec-button.inc:hover, .inc-dec-button.inc:active {
  color: white;
  background-color: green;
  box-shadow: 0 0 5px 2px green;
}
.inc-dec-button.dec {
  color: red;
  border: solid 1px red;
}
.inc-dec-button.dec:hover, .inc-dec-button.dec:active {
  color: white;
  background-color: red;
  box-shadow: 0 0 5px 2px red;
}
</style>