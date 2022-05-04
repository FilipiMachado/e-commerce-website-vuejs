<template>
  <div class="userpage__main-content">
    <div class="userpage__userinfo__container">
      <div class="userpage__userinfo__left-content">
        <div class="userpage__userinfo__left-content__img-container">
          <img class="userpage__userinfo__left-content__img" src="@/assets/profile_example.png" alt="">
        </div>
        <div class="userpage__userinfo__left-content__user-container">
          <span class="userpage__userinfo__left-content__username">Bem-vindo, Filipi Rodrigues Machado</span>
          <div class="userpage__userinfo__left-content__user-email__container">
            <span class="material-symbols-outlined">
              search
            </span>
            <span class="userpage__userinfo__left-content__user-email">filipisee@hotmail.com</span>
          </div>
        </div>
        <div class="userpage__userinfo__left-content__user-config__container">
          <span class="material-symbols-outlined">
            settings
          </span>
        </div>
      </div>
      <div class="userpage__userinfo__right-content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {}
  }
}
</script>

<style scoped>
.userpage__main-content {}
.userpage__userinfo__container {
  display: flex;
  margin: 40px 60px;
}
.userpage__userinfo__left-content {
  display: flex;
  padding: 40px 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  align-items: center;
}
.userpage__userinfo__left-content__img-container {
  margin: 0px 20px;
}
.userpage__userinfo__left-content__img {}
.userpage__userinfo__left-content__user-container {
  display: flex;
  flex-direction: column;
}
</style>