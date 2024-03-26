<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="icon-container">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    value: String,
  },
}
</script>

<style>
.card {
  position: relative;
  width: 350px;
  height: 100px;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin-right: 25px;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    min-width: 150px;
    padding: 10px;
  }
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
}

.value {
  font-size: 24px;
  font-weight: bold;
}

.icon-container {
  position: absolute;
  top: 30px;
  right: 30px;

  @media (max-width: 1024px) {
    top: 30px;
    right: 10px;
  }
}
</style>
