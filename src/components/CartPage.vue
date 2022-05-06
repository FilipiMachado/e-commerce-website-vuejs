<template>
  <div class="cartpage__main-content">
    <div class="cartpage__cart-items-info__container">
      <div class="cartpage__cart-header__container">
        <div class="cartpage__cart-header__product-wrapper">
          <span class="cartpage__cart-header__product">Product</span>
        </div>
        <div class="cartpage__cart-header__quantity-wrapper">
          <span class="cartpage__cart-header__quantity">Quantity</span>
        </div>
        <div class="cartpage__cart-header__price-wrapper">
          <span class="cartpage__cart-header__price">Price</span>
        </div>
      </div>
      <div class="cartpage__product-info__container">
        <div class="cartpage__product-info__img-wrapper">
          <img class="cartpage__product-info__img" src="@/assets/item-sell_example.jpg" alt="">
        </div>
        <div class="cartpage__product-info__product-title-wrapper">
          <span class="cartpage__product-info__product-title-name">Gabinete Gamer Cooler Master CMP 510, RGB, Mid-Tower, Lateral de Vidro, Com 3 Fans, Preto, CP510-KGNN-S00</span>
          <span class="cartpage__product-info__product-title-desc">SKU: CP510-KGNN-S00</span>
        </div>
        <div class="cartpage__product-info__add-remove-items__wrapper">
          <span class="material-symbols-outlined cartpage__product-info__remove-item">
            remove
          </span>
          <span class="cartpage__product-info__item-quantity">1</span>
          <span class="material-symbols-outlined cartpage__product-info__add-item">
            add
          </span>
        </div>
        <div class="cartpage__product-info__item-value">
          1x $ 795.34
        </div>
        <div class="cartpage__product-info__delete-item__wrapper">
          <span class="material-symbols-outlined cartpage__product-info__delete-icon">
            delete
          </span>
        </div>
      </div>
    </div>
    <div class="cartpage__resume-info__container">
      <div class="cartpage__resume-info__resume-wrapper">
        <span class="cartpage__resume-info__resume-title">Order Summary</span>
      </div>
      <div class="cartpage__resume-info__subtotal-wrapper">
        <span class="cartpage__resume-info__subtotal-title">Subtotal</span>
        <span class="cartpage__resume-info__subtotal-value">$ 5.227.05</span>
      </div>
      <div class="cartpage__resume-info__total-wrapper">
        <span class="cartpage__resume-info__total-title">Total</span>
        <span class="cartpage__resume-info__total-value">$ 5.227.05</span>
      </div>
      <div class="cartpage__resume-info__incash-wrapper">
        <span class="cartpage__resume-info__incash-title">in cash</span>
        <span class="cartpage__resume-info__incash-value">$4.599.80</span>
        <span class="cartpage__resume-info__incash-desc">12% discount in credit card</span>
      </div>
      <div class="cartpage__resume-info__finish-order-wrapper">
        <button class="cartpage__resume-info__finish-order-btn">Order Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {}
  }
}
</script>

<style scoped> 
.cartpage__main-content {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
}
.cartpage__mycart-title__wrapper {
  display: flex;
  align-items: center;
}
.cartpage__mycart-title__icon {
  transform: scale(1.2);
  color: purple;
}
.cartpage__mycart-title__title {
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
}
.cartpage__cart-items-info__container {
  width: 65%;
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  margin-top: 20px;
}
.cartpage__cart-header__container {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}
.cartpage__product-info__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cartpage__product-info__img-wrapper {}
.cartpage__product-info__img {
  width: 140px;
}
.cartpage__product-info__product-title-wrapper {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.cartpage__product-info__product-title-name {}
.cartpage__product-info__product-title-desc {}
.cartpage__product-info__add-remove-items__wrapper {
  display: flex;
  align-items: center;
}
.cartpage__product-info__item-quantity {
  margin: 0px 5px;
}
.cartpage__product-info__remove-item {
  color: purple;
  cursor: pointer;
}
.cartpage__product-info__add-item {
  color: purple;
  cursor: pointer;
}
.cartpage__cart-header__product-wrapper {
  width: 70%;
  padding: 5px;
}
.cartpage__cart-header__product {}
.cartpage__cart-header__quantity-wrapper {
  padding: 5px;
}
.cartpage__cart-header__quantity {}
.cartpage__cart-header__price-wrapper {
  padding: 5px;
}
.cartpage__product-info__item-value {}
.cartpage__product-info__delete-item__wrapper {
  margin: 0px 10px;
}
.cartpage__product-info__delete-icon {
  color: purple;
  cursor: pointer;
}
.cartpage__resume-info__container {
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #F2F3F4;
  margin-top: 20px;
}
.cartpage__resume-info__resume-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
}
.cartpage__resume-info__subtotal-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  font-size: 12px;
  padding: 10px;
}
.cartpage__resume-info__total-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
.cartpage__resume-info__total-value {
  color: purple;
}
.cartpage__resume-info__incash-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
}
.cartpage__resume-info__installment-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  border-bottom: 1px solid black;
  padding: 10px;
  font-size: 12px;
}
.cartpage__resume-info__finish-order-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
}
.cartpage__resume-info__finish-order-btn {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  color: purple;
  border: 1px solid purple;
}
.cartpage__resume-info__finish-order-btn:hover {
  opacity: 0.6;
  transition: all 0.5s ease;
}
.cartpage__resume-info__incash-title {
  color: purple;
}
.cartpage__resume-info__incash-value {
  color: purple;
}
.cartpage__resume-info__incash-desc {
  font-size: 12px;
}
</style>