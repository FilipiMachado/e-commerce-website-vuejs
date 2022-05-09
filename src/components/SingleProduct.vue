<template>
  <div class="singleproduct__main-content">
    <div class="singleproduct__main-content__wrapper">
      <div class="singleproduct__left-content__wrapper">
        <img class="singleproduct__left-content__img" src="@/assets/single-product-example.jpg" alt="">
      </div>
      <div class="singleproduct__right-content__wrapper">
        <div class="singleproduct__right-content__title-wrapper">
          <span class="singleproduct__right-content__title">Title</span>
        </div>
        <div class="singleproduct__right-content__reviews-wrapper">
          <span class="singleproduct__right-content__stars">stars</span>
          <span class="singleproduct__right-content__reviews">(102) Review(s)</span>
        </div>
        <div class="singleproduct__right-content__price-wrapper">
          <span class="singleproduct__right-content__price">$70.00</span>
          <span class="singleproduct__right-content__discounted-price">$80.00</span>
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

img {
  max-height: 450px;
}
</style>