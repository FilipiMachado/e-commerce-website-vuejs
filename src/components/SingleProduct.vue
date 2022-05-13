<template>
  <div class="singleproduct__main-content">
    <div class="singleproduct__main-content__wrapper">
      <div class="singleproduct__mini-images__container">
        <div class="singleproduct__mini-images__img mini-img-selected"></div>
        <div class="singleproduct__mini-images__img"></div>
        <div class="singleproduct__mini-images__img"></div>
        <div class="singleproduct__mini-images__img"></div>
      </div>
      <div class="singleproduct__left-content__wrapper">
      </div>
      <div class="singleproduct__right-content__wrapper">
        <div class="singleproduct__right-content__title-wrapper">
          <span class="singleproduct__right-content__title">Nonstick dishwasher PFOA</span>
        </div>
        <div class="singleproduct__right-content__reviews-wrapper">
          <span class="singleproduct__right-content__stars">stars</span>
          <span class="singleproduct__right-content__reviews">(102)Review(s)</span>
        </div>
        <div class="singleproduct__right-content__price-wrapper">
          <span class="singleproduct__right-content__price">$70.00</span>
          <span class="singleproduct__right-content__discounted-price"><strike>$80.00</strike></span>
        </div>
        <div class="singleproduct__right-content__description-wrapper">
          <span class="singleproduct__right-content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id itaque architecto? Deserunt, est libero culpa atque ratione, maiores ipsum voluptate facere voluptates quae repellat perferendis beatae, cum cupiditate mollitia!</span>
        </div>
        <div class="singleproduct__product-options__wrapper">
          <span class="singleproduct__product-options__title">Available Options</span>
        </div>
        <div class="singleproduct__product-options__container">
          <div class="singleproduct__product-options__left-wrapper">
            <span class="singleproduct__product-options__left-title">Colors</span>
            <div class="singleproduct__product-options__left-colors-wrapper">
              <div class="singleproduct__product-options__left-colors color1"></div>
              <div class="singleproduct__product-options__left-colors color2"></div>
              <div class="singleproduct__product-options__left-colors color3"></div>
              <div class="singleproduct__product-options__left-colors color4"></div>
            </div>
          </div>
          <div class="singleproduct__product-options__right-wrapper">
            <span class="singleproduct__product-options__right-title">Sizes</span>
            <div class="singleproduct__product-options__right-sizes-wrapper">
              <div class="singleproduct__product-options__right-sizes">S</div>
              <div class="singleproduct__product-options__right-sizes">M</div>
              <div class="singleproduct__product-options__right-sizes">L</div>
              <div class="singleproduct__product-options__right-sizes">XL</div>
              <div class="singleproduct__product-options__right-sizes">XXL</div>
            </div>
          </div>
        </div>
        <div class="singleproduct__quantity__container">
          <span class="singleproduct__quantity-title">Quantity:</span>
          <div class="singleproduct__quantity-wrapper">
            <span class="singleproduct__quantity-minus">-</span>
            <span class="singleproduct__quantity">1</span>
            <span class="singleproduct__quantity-plus">+</span>
          </div>
          <div class="singleproduct__quantity__add-to-cart-btn">
            <span class="singleproduct__quantity__add-to-cart">Add To Cart</span>
          </div>
          <div class="singleproduct__quantity__favorite-btn">
            <span class="material-icons favorite-icon">
              favorite
            </span>
          </div>
        </div>
        <div class="singleproduct__category-wrapper">
          <span class="singleproduct__category">Category: </span>
          <span class="singleproduct__category-title">Clothing</span>
        </div>
        <div class="singleproduct__availability-wrapper">
          <span class="singleproduct__availability">Availability: </span>
          <span class="singleproduct__availability-quantity">180 Products in stock</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
  data() {
    return {}
  }
}
</script>

<style scoped>
.singleproduct__main-content {}
.singleproduct__main-content__wrapper {
  display: flex;
  max-width: 1280px;
  margin: 40px 10%;
  justify-content: center;
}
.singleproduct__left-content__wrapper {
  width: 40%;
  height: 500px;
  background-image: url('@/assets/single-product-example.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px 10px;
  border-radius: 4px;
}
.singleproduct__right-content__wrapper {
  width: 40%;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
}
.singleproduct__right-content__title-wrapper {
  margin-bottom: 10px;
}
.singleproduct__right-content__title {
  font-size: 24px;
  font-weight: 500;
}
.singleproduct__right-content__reviews-wrapper {
  margin-bottom: 10px;
}
.singleproduct__right-content__stars {
  margin-right: 10px;
}
.singleproduct__right-content__reviews {
  font-weight: 400;
}
.singleproduct__right-content__price-wrapper {
  margin-bottom: 10px;
}
.singleproduct__right-content__price {
  font-size: 18px;
  color: #800080;
  font-weight: bold;
  margin-right: 10px;
}
.singleproduct__right-content__discounted-price {
  font-size: 18px;
  font-weight: bold;
}
.singleproduct__right-content__description-wrapper {
  margin-bottom: 15px;
}
.singleproduct__right-content__description {
  letter-spacing: 1.5px;
  font-size: 14px;
}
.singleproduct__product-options__wrapper {
  margin-bottom: 5px;
}
.singleproduct__product-options__title {
  font-size: 18px;
  font-weight: 500;
}
.singleproduct__product-options__container {
  display: flex;
}
.singleproduct__product-options__left-wrapper {
  display: flex;
  flex-direction: column;
}
.singleproduct__product-options__left-title {
  font-weight: 500;
}
.singleproduct__product-options__left-colors-wrapper {
  display: flex;
  margin-right: 40px;
}
.singleproduct__product-options__left-colors {
  color: #fff;
  padding: 20px;
  margin-right: 5px;
  border-radius: 4px;
  cursor: pointer;
}
.color1 {
  background-color: #d81b60;
}
.color2 {
  background-color: #5e35b1;
}
.color3 {
  background-color: #1e88e5;
}
.color4 {
  background-color: #00acc1;
}
.singleproduct__product-options__right-wrapper {
  display: flex;
  flex-direction: column;
}
.singleproduct__product-options__right-title {
  font-weight: 500;
}
.singleproduct__product-options__right-sizes-wrapper {
  display: flex;
}
.singleproduct__product-options__right-sizes {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6b6b;
  border: 1.5px solid #b1b1b1;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 4px;
  cursor: pointer;
}
.singleproduct__product-options__container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.singleproduct__quantity__container {
  display: flex;
  align-items: center;
  margin: 10px 0px;
}
.singleproduct__quantity-title {
  font-weight: 500;
  margin-right: 10px;
}
.singleproduct__quantity-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #b1b1b1;
  color: #6b6b6b;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 0px 8px;
}
.singleproduct__quantity-minus {
  cursor: pointer;
}
.singleproduct__quantity {
  margin: 0px 20px;
}
.singleproduct__quantity-plus {
  cursor: pointer;
}
.singleproduct__quantity__add-to-cart-btn {
  background-color: #3d3d3d;
  color: #fff;
  padding: 8px 22px;
  border-radius: 5px;
  margin-left: 35px;
  cursor: pointer;
}
.singleproduct__quantity__add-to-cart {
}
.singleproduct__quantity__favorite-btn {
  background-color: #3d3d3d;
  padding: 8px;
  border-radius: 5px;
  margin-left: 10px;
}
.singleproduct__quantity__favorite {}
.favorite-icon {
  display: flex;
  color: #fff;
  cursor: pointer;
}
.singleproduct__category-wrapper {
  margin: 15px 0px;
}
.singleproduct__category {
  font-weight: bold;
}
.singleproduct__category-title {
  font-weight: 400;
}
.singleproduct__availability-wrapper {}
.singleproduct__availability {
  font-weight: bold;
}
.singleproduct__availability-quantity {
  font-weight: 400;
}
.singleproduct__mini-images__container {
  width: 10%;
  display: flex;
  flex-direction: column;
  float: right;
}
.singleproduct__mini-images__img {
  width: 80px;
  height: 80px;
  background-image: url('@/assets/single-product-example.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px;
  border-radius: 4px;
  border: 2px solid #b1b1b1;
}
.mini-img-selected {
  border: 2px solid #800080;
  opacity: 0.5;
}

img {
  max-height: 400px;
}
</style>