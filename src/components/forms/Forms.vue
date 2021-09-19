<template>
  <div class="forms">
    <div class="container">
      <div class="forms-content">
        <h2 class="forms-heading">
          Forms
        </h2>
        <div class="form-container">
          <form @submit.prevent="submit" class="form">
            <div class="form-group">
              <input 
                :value="name.value" 
                class="form-input" 
                :class="{invalid: name.touched && !name.valid, valid: name.touched && name.valid}" 
                type="tetx" name="name" placeholder="Name" @change="change($event)"
              >
              <p v-if="isFormSubmited && !name.valid" class="error-message">
                <sup>*</sup> Name must have more than 6 characters and not contain numbers.
              </p>
            </div>
            <div class="form-group">
              <input 
                :value="surname.value" 
                class="form-input" 
                :class="{invalid: surname.touched && !surname.valid, valid: surname.touched && surname.valid}" 
                type="tetx" name="surname" placeholder="Surname" @change="change($event)"
              >
              <p v-if="isFormSubmited && !surname.valid" class="error-message">
                <sup>*</sup> Surname must have more than 6 characters and not contain numbers.
              </p>
            </div>
            <div class="form-checklist">
              <div class="form-group">
                <input type="checkbox" name="checkitem" value="Cucumber" id="cucumber" v-model="checklist">
                <label for="cucumber">Cucumber</label>
              </div>
              <div class="form-group">
                <input type="checkbox" name="checkitem" value="Potato" id="potato" v-model="checklist">
                <label for="potato">Potato</label>
              </div>
              <div class="form-group">
                <input type="checkbox" name="checkitem" value="Tomato" id="tomato" v-model="checklist">
                <label for="tomato">Tomato</label>
              </div>
            </div>
            <p class="error-message" v-if="isFormSubmited && !checklist.length">
              <sup>*</sup> You must choose at least one item
            </p>
            <button class="form-submit">Submit</button>
            <button type="reset" class="form-reset" @click="reset">Reset</button>
          </form>
          <SubmitedData v-if="submitedData" :submitedData="submitedData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitedData from './SubmitedData.vue';

export default {
  components: {
    SubmitedData,
  },
  data() {
    return {
      name: {
        value: '',
        touched: false,
        valid: false
      },
      surname: {
        value: '',
        touched: false,
        valid: false
      },
      checklist: [],
      submitedData: null,
      isFormSubmited: false
    };
  },
  methods: {
    change({target: {name, value}}) {
      this[name].value = value;
      this[name].touched = true;
      this[name].valid = this.validate(name, value);
      console.log(this.name);
    },
    validate(name, value) {
      switch(name) {
        case 'name': 
        case 'surname':
          return value.length > 6 && value.split('').every(item => isNaN(+item));
      }
    },
    submit() {
      this.isFormSubmited = true;
      if(this.name.valid && this.surname.valid && this.checklist.length) {
        this.submitedData = {
          name: this.name.value,
          surname: this.surname.value,
          checklist: this.checklist
        };
      }
    },
    reset() {
      const Ø = {
        value: '',
        touched: false,
        valid: false
      };
      this.isFormSubmited = false;
      this.name = {...Ø};
      this.surname = {...Ø};
      this.checklist = [];
      this.submitedData = null;
    }
  },
}
</script>

<style scoped>
.forms {
  padding: 60px 0;
  background-color: grey;
  color: whitesmoke;
}
.forms-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.forms-heading {
  font-size: 36px;
}
.form-container {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form > .form-group {
  margin-bottom: 8px;
}
.form-input {
  padding: 5px;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  outline: none;
  transition: box-shadow .2s ease-in-out;
}
.form-input:focus {
  box-shadow: 0 0 5px 3px cornflowerblue;
}
.form-input.valid:focus {
  box-shadow: 0 0 5px 3px green;
}
.form-input.invalid:focus {
  box-shadow: 0 0 5px 3px red;
}
.form-checklist {
  width: 100%;
  border: solid whitesmoke 1px;
  border-radius: 5px;
  padding: 8px;
}
.error-message {
  margin: 2px;
}
.error-message sup {
  color: red;
}
.form-submit, .form-reset {
  margin-top: 8px;
  width: 100%;

}
</style>