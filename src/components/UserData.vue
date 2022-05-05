<template>
  <div class="userdata__main-content">
    <div class="userdata__userinfo__container">
      <div class="userdata__userinfo__left-content">
        <div class="userdata__form-title__container">
          <div class="userdata__form-title__wrapper">
            <span class="material-symbols-outlined userdata__form-title__icon">
              feed
            </span>
            <span class="userdata__form-title__title">Dados Básicos</span>
          </div>
          <button class="userdata__form-title__change-password">Alterar Senha</button>
        </div>
        <div class="userdata__form-data__container">
          <form class="userdata__form-data__wrapper">
            <label class="userdata__form-data__label">Full Name *</label>
            <input class="userdata__form-data__text-input" type="text">
            <label class="userdata__form-data__label">Last Name *</label>
            <input class="userdata__form-data__text-input" type="text">
            <label class="userdata__form-data__label">Email *</label>
            <input class="userdata__form-data__text-input" type="text">
          </form>
        </div>
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
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  width: 45%;
}
.userdata__form-title__container {
  display: flex;
  align-items: center;
}
.userdata__form-title__wrapper {
  display: flex;
  flex: 1 1 0%;
}
.userdata__form-title__icon {
  color: purple;
  transform: scale(1.5);
}
.userdata__form-title__title {
  margin: 0px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #42464d;
}
.userdata__form-title__change-password {
  padding: 5px 10px;
  color: purple;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid purple;
  border-radius: 5px;
}
.userdata__form-data__container {}
.userdata__form-data__wrapper {
  display: flex;
  flex-direction: column;
}

input {
  background-color: red;
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