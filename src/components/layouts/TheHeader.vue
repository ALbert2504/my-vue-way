<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <h1 class="header-logo">
          My Vue Way
        </h1>
        <nav class="header-nav">
          <ul class="header-list">
            <li v-for="navLink in navLinks" :key="navLink.id" class="header-list__item">
              <a class="header-list__item_link" href="#">
                {{ navLink.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          id: 1,
          label: 'Home'
        },
        {
          id: 2,
          label: 'About'
        },
        {
          id: 1,
          label: 'Contact'
        },
      ]
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  background-color: lightcyan;
  padding: 25px 0;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-logo {
  font-size: 24px;
  color: coral;
}
.header-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header-list__item {
  margin: 0 12px;
}
.header-list__item_link {
  padding: 20px;
  color: coral;
  border: solid 1px transparent;
  transition: all .3s ease-in-out;
}
.header-list__item_link:hover {
  border-color: coral;
}
.header-list__item_link:active {
  background-color: coral;
  color: white;
}
</style>