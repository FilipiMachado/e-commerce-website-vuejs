<template>
<div>
  <NoAuth v-if="!$auth.isAuthenticated"/>
  <div v-if="$auth.isAuthenticated" class="userpage__main-content">
    <div class="userpage__main-title__wrapper">
      <span class="material-symbols-outlined userpage__main-title__icon">
        person
      </span>
      <span class="userpage__main-title">User Info</span>
    </div>
    <div class="userpage__userinfo__container">
      <div class="userpage__userinfo__left-content">
        <div class="userpage__userinfo__left-content__img-container">
          <img class="userpage__userinfo__left-content__img" src="@/assets/profile_example.jpg" alt="">
        </div>
        <div class="userpage__userinfo__left-content__user-container">
          <span class="userpage__userinfo__left-content__username">Welcome, John Doe</span>
          <div class="userpage__userinfo__left-content__user-email__container">
            <span style="color: purple;" class="material-symbols-outlined">
              mail
            </span>
            <span class="userpage__userinfo__left-content__user-email">johndoe@myemail.com</span>
          </div>
        </div>
        <div class="userpage__userinfo__left-content__user-config__container">
          <span class="material-symbols-outlined user-info-icon">
            settings
          </span>
        </div>
      </div>
      <div class="userpage__userinfo__right-content">
        <div class="userpage__userinfo__credits__container">
          <span class="userpage__userinfo__credits__credit-title">Available Credits</span>
          <span class="userpage__userinfo__credits__credit-value">$ 0,00</span>
        </div>
      </div>
    </div>
    <div>
      <UserData />
    </div>
  </div>
</div>
</template>
 
<script>
import UserData from '@/components/UserData.vue'
import NoAuth from '@/components/NotAuth.vue'

export default {
  name: 'UserPage',
  components: {
    UserData,
    NoAuth,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.userpage__main-content {
  max-width: 1280px;
  margin: 0 auto;
}
.userpage__main-title__wrapper {
  margin: 30px 40px;
  display: flex;
  align-items: center;
}
.userpage__main-title__icon {
  color: purple;
  transform: scale(1.5);
}
.userpage__main-title {
  font-size: 24px;
  font-weight: bold;
  color: #42464d;
  margin-left: 16px;
  text-transform: uppercase;
}
.userpage__userinfo__container {
  display: flex;
  justify-content: space-between;
  margin: 40px;
}

/* Left Content */
.userpage__userinfo__left-content {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  align-items: center;
  width: 45%;
}
.userpage__userinfo__left-content__img-container {
}
.userpage__userinfo__left-content__img {
  width: 60%;
  border-radius: 10%;
}
.userpage__userinfo__left-content__user-container {
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
}
.userpage__userinfo__left-content__username {
  font-size: 1.25rem;
  font-weight: 700;
  color: #42464D;
}
.userpage__userinfo__left-content__user-email__container {
  display: flex;
  align-items: center;
  margin: 10px 0px;
}
.userpage__userinfo__left-content__user-email {
  margin: 0px 5px;
  font-size: 0.875rem;
  font-weight: 400;
  color: #42464D;
}
.userpage__userinfo__left-content__user-config__container {
  margin: 0px 20px;
}
.user-info-icon {
  color: purple;
  cursor: pointer;
  transform: scale(1.5);
}

/* Right Content */
.userpage__userinfo__right-content {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  align-items: center;
  width: 45%;
}
.userpage__userinfo__credits__container {
  display: flex;
  flex-direction: column;
}
.userpage__userinfo__credits__credit-title {
  font-size: 0.875rem;
  font-weight: 400;
  color: #7F858D;
}
.userpage__userinfo__credits__credit-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: purple;
}
</style>

