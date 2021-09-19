<template>
  <div id="intro">
    <div class="container">
      <div class="intro-content">
        <h1 class="intro-title">Finally !!</h1>
        <h2 class="intro-subtitle">All gained knwoledge in one app</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#intro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: wheat;
}
.intro-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.intro-title {
  font-size: 48px;
  margin-bottom: 24px;
  color: darkseagreen;
}
.intro-subtitle {
  font-size: 36px;
  color: teal;
}
</style>