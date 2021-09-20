<template>
  <table class="data-table">
    <tr class="data-table-row">
      <th class="data-table-col data-table-heading">
        ID
      </th>
      <th class="data-table-col data-table-heading">
        Name
      </th>
      <th class="data-table-col data-table-heading">
        Email
      </th>
      <th class="data-table-col data-table-heading">
        Phone
      </th>
      <th class="data-table-col data-table-heading">
        Company
      </th>
      <th class="data-table-col data-table-heading">
        Address
      </th>
    </tr>
    <tr v-for="item in data" :key="item.id" @click="clickRow(item.id)" class="data-table-row">
      <td class="data-table-col">{{ item.id }}</td>
      <td class="data-table-col">{{ item.name }}</td>
      <td class="data-table-col">{{ item.email }}</td>
      <td class="data-table-col">{{ item.phone }}</td>
      <td class="data-table-col">{{ item.company }}</td>
      <td class="data-table-col">{{ item.address }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['data'],
  emits: ['select'],
  methods: {
    clickRow(id) {
      this.$emit('select', id);
    }
  }
};
</script>

<style scoped>
.data-table, .data-table-row, .data-table-col {
  border: 1px solid brown;
  transition: background-color .2s ease-in-out;
}
.data-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 12px;
}
.data-table-row:nth-of-type(2n) {
  background-color: khaki;
}
.data-table-row:nth-of-type(2n):hover {
  background-color: #ffd900;
}
.data-table-row:nth-of-type(2n+1):not(:first-of-type):hover {
  background-color: lightcoral;
}
.data-table-row:not(:first-of-type):hover {
  cursor: pointer;
}
.data-table-col {
  padding: 5px 10px;
}
</style>