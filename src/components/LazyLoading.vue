<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: 'LazyLoading',
  data() {
    return {}
  }
}
</script>

<style scoped>
.lds-dual-ring {
  display: flex;
  margin: 0 auto;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #7c7c7c;
  border-color: #7c7c7c transparent #7c7c7c transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>