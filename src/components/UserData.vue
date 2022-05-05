<template>
  <div class="userdata__main-content">
    <div class="userdata__userinfo__container">
      <div class="userdata__userinfo__left-content">

      </div>
      <div class="userdata__userinfo__right-content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserData',
  data() {
    return {}
  }
}
</script>

<style scoped>
.userdata__main-content {} 
.userdata__userinfo__container {
  display: flex;
  justify-content: space-between;
  margin: 40px;
}

/* Left Content */
.userdata__userinfo__left-content {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  align-items: center;
  width: 45%;
}

/* Right Content */
.userdata__userinfo__right-content {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  align-items: center;
  width: 45%;
}
</style>