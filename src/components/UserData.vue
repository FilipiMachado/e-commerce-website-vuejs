<template>
  <div class="userdata__main-content">
    <div class="userdata__userinfo__container">
      <div class="userdata__userinfo__left-content">
        <div class="userdata__form-title__container">
          <div class="userdata__form-title__wrapper">
            <span class="material-symbols-outlined userdata__form-title__icon">
              feed
            </span>
            <span class="userdata__form-title__title">INFO</span>
          </div>
          <button class="userdata__form-title__change-password">
            Change Password
          </button>
        </div>
        <div class="userdata__form-data__container">
          <form class="userdata__form-data__wrapper">
            <label class="userdata__form-data__label">Full Name *</label>
            <input class="userdata__form-data__text-input"
                   placeholder="Didines"
                   type="text"/>
            <label class="userdata__form-data__label">Last Name *</label>
            <input class="userdata__form-data__text-input"
                   placeholder="Machado"
                   type="text"/>
            <label class="userdata__form-data__label">Email *</label>
            <input class="userdata__form-data__text-input"
                   placeholder="didinesmachado@myemail.com"
                   type="text"/>
            <label class="userdata__form-data__label">Birthday *</label>
            <input class="userdata__form-data__text-input"
                   placeholder="Birthday"
                   type="text"/>
            <label class="userdata__form-data__label">Phone *</label>
            <input class="userdata__form-data__text-input"
                   placeholder="Phone"
                   type="text"/>
            <button class="userdata__form-data__save-btn">Save Changes</button>
          </form>
        </div>
      </div>
      <div class="userdata__userinfo__right-content">
        <div class="userdata__address-title__container">
          <span class="material-symbols-outlined userdata__address-title__icon">
            person_pin_circle
          </span>
          <span class="userdata__address-title__main-title">Superscription</span>
        </div>
        <div>
          <div style="border-left: 2px solid purple; background-color: #8000802d;" class="userdata__address-info__container">
            <div class="userdata__address-info__main-address">
              <span class="userdata__address-info__main-title">Main Address</span>
              <span class="userdata__address-info__chosen-default">(Default)</span>
            </div>
            <div class="userdata__address-info__details">
              204 Riverside Street Seymour, IN 47274
            </div>
            <div class="userdata__address-info__details">
              Zip Code: 995041202
            </div>
            <div class="userdata__address-info__edit-address__container">
              <span class="userdata__address-info__edit-address__empty"></span>
              <span class="userdata__address-info__edit-address__edit-btn">Edit Address</span>
            </div>
          </div>
          <div class="userdata__address-info__container">
            <div class="userdata__address-info__main-address">
              <span class="userdata__address-info__main-title">Address</span>
              <span class="userdata__address-info__chosen-default"></span>
            </div>
            <div class="userdata__address-info__details">
              204 Riverside Street Seymour, IN 47274
            </div>
            <div class="userdata__address-info__details">
              Zip Code: 995041202
            </div>
            <div class="userdata__address-info__edit-address__container">
              <span class="userdata__address-info__edit-address__empty"></span>
              <span class="userdata__address-info__edit-address__edit-btn">Edit Address</span>
            </div>
          </div>
          <div class="userdata__address-info__container">
            <div class="userdata__address-info__main-address">
              <span class="userdata__address-info__main-title">Address</span>
              <span class="userdata__address-info__chosen-default"></span>
            </div>
            <div class="userdata__address-info__details">
              204 Riverside Street Seymour, IN 47274
            </div>
            <div class="userdata__address-info__details">
              Zip Code: 995041202
            </div>
            <div class="userdata__address-info__edit-address__container">
              <span class="userdata__address-info__edit-address__empty"></span>
              <span class="userdata__address-info__edit-address__edit-btn">Edit Address</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserData",
  data() {
    return {};
  },
};
</script>

<style scoped>
.userdata__main-content {
}
.userdata__userinfo__container {
  display: flex;
  justify-content: space-between;
  margin: 40px;
}

/* Left Content */
.userdata__userinfo__left-content {
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f3f4;
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
.userdata__form-data__container {
}
.userdata__form-data__wrapper {
  display: flex;
  flex-direction: column;
}
.userdata__form-data__label {
  color: #565c69;
  font-size: 1rem;
  padding: 10px 0px;
}
.userdata__form-data__text-input {
  border: 1px solid #565c69;
  border-radius: 5px;
  padding: 10px 0px;
}
.userdata__form-data__text-input[type="text"] {
  font-size: 18px;
  padding: 10px;
}
.userdata__form-data__save-btn {
  display: block;
  margin: auto;
  margin-top: 20px;
  width: 40%;
  background-color: purple;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
}
.userdata__form-data__save-btn:hover {
  transition: all 0.5s ease;
  opacity: 0.8;
}

/* Right Content */
.userdata__userinfo__right-content {
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f3f4;
  width: 45%;
}
.userdata__address-title__container {
  display: flex;
  margin-bottom: 20px;
}
.userdata__address-title__icon {
  transform: scale(1.5);
  color: purple;
}
.userdata__address-title__main-title {
  margin: 0px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #42464d;
  text-transform: uppercase;
}
.userdata__address-info__container {
  padding: 20px 10px;
}
.userdata__address-info__main-address {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.userdata__address-info__main-title {
  font-size: 16px;
  color: #42464d;
  font-weight: 700;
}
.userdata__address-info__chosen-default {
  font-size: 16px;
  color: purple;
  font-weight: 700;
}
.userdata__address-info__details {
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
  color: #7f858d;
}
.userdata__address-info__edit-address__container {
  display: flex;
  justify-content: space-between;
}
.userdata__address-info__edit-address__empty {
}
.userdata__address-info__edit-address__edit-btn {
  background-color: transparent;
  border: 0px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #b6bbc2;
  cursor: pointer;
}
.userdata__address-info__edit-address__edit-btn:hover {
  transition: all 0.5s ease;
  color: purple;
}
</style>
