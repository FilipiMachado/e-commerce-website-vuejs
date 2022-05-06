<template>
  <div class="cartpage__main-content">
    <div class="cartpage__mycart-title__wrapper">
      <span class="material-symbols-outlined cartpage__mycart-title__icon">
        shopping_cart
      </span>
      <span class="cartpage__mycart-title__title">My Cart</span>
    </div>
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
    <div>
      asdasdasd
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
  padding: 20px;
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
  width: 70%;
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
  width: 5%;
  padding: 5px;
}
.cartpage__cart-header__quantity {}
.cartpage__cart-header__price-wrapper {
  width: 5%;
  padding: 5px;
}
.cartpage__product-info__item-value {}
.cartpage__product-info__delete-item__wrapper {}
.cartpage__product-info__delete-icon {
  color: purple;
}
</style>