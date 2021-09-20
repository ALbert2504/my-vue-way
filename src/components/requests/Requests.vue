<template>
  <div class="reqeusts">
    <div class="container">
      <div class="requests-content">
        <h2 class="requests-heading">
          Requests
        </h2>
        <p v-if="loading">Loading...</p>
        <DataTable v-else :data="data" @select="fetchUser" />
        <UserDetails v-if="user" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from './DataTable.vue';
import UserDetails from './UserDetails.vue';
import api from '../../services/usersApi.js';

export default {
  components: {
    DataTable,
    UserDetails
  },
  data() {
    return {
      data: null,
      user: null,
      loading: false
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        this.loading = true;
        
        const res = await api.getUsers();

        this.data = res;
      } catch(error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    fetchUser(id) {
      api.getUser(id).then(res => {
        this.user = res;
      });
    }
  }
}
</script>

<style scoped>
.reqeusts {
  padding: 60px 0;
  background-color: thistle;
}
.requests-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.requests-heading {
  font-size: 24px;
  color: goldenrod;
}
</style>