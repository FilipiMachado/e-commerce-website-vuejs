<template>
  <div class="singleproduct__main-content">
    <div class="singleproduct__main-content__wrapper">
      <div class="singleproduct__left-content__wrapper">
      </div>
      <div class="singleproduct__right-content__wrapper">
        <div class="singleproduct__right-content__title-wrapper">
          <span class="singleproduct__right-content__title">Nonstick dishwasher PFOA</span>
        </div>
        <div class="singleproduct__right-content__reviews-wrapper">
          <span class="singleproduct__right-content__stars">stars</span>
          <span class="singleproduct__right-content__reviews">(102) Review(s)</span>
        </div>
        <div class="singleproduct__right-content__price-wrapper">
          <span class="singleproduct__right-content__price">$70.00</span>
          <span class="singleproduct__right-content__discounted-price">$80.00</span>
        </div>
        <div class="singleproduct__right-content__description-wrapper">
          <span class="singleproduct__right-content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id itaque architecto? Deserunt, est libero culpa atque ratione, maiores ipsum voluptate facere voluptates quae repellat perferendis beatae, cum cupiditate mollitia!</span>
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
}

img {
  max-height: 400px;
}
</style>