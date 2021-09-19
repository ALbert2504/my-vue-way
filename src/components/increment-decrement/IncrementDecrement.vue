<template>
  <div class="increment-decrement">
    <div class="container">
      <div class="increment-decrement-content">
        <h2 class="increment-decrement-heading">
          Increment-Decrement
        </h2>
        <p 
          :class="stateOfValue"
          class="value"
        >
          {{ value }}
        </p>
        <div class="buttons-container">
          <inc-dec-button @change="changeValue(1)" mode="inc">+</inc-dec-button>
          <inc-dec-button @change="changeValue(-1)" mode="dec">-</inc-dec-button>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import IncDecButton from '../UI/IncDecButton.vue';
export default {
  components: { IncDecButton },
  data() {
    return {
      value: 0
    };
  },
  computed: {
    stateOfValue() {
      if(this.value < 0) {
        return 'negative';
      } else if(this.value > 0) {
        return 'positive';
      }
      return 'neutral';
    }
  },
  methods: {
    changeValue(value) {
      this.value += value;
    }
  }
}
</script>

<style scoped>
.increment-decrement {
  padding: 60px 0;
  background-color: cadetblue;
}
.increment-decrement-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.increment-decrement-heading {
  color: blanchedalmond;
  font-size: 36px;
}
.value {
  font-size: 28px;
  margin: 12px 0;
}
.value.neutral {
  color: #333333;
}
.value.negative {
  color: brown;
}
.value.positive {
  color: chartreuse;
}
.buttons-container :nth-child(n) {
  margin: 0 4px;
}
</style>