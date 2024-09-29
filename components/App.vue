<style>
  .CustomHome{
    width: 100%;
    max-width: 1152px;
    height: 500px;
    margin:20px auto;
    background: url('./assets/go.png');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  }
  .image-container {
    margin: 40px auto;
    width: 1152px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.image-row {
    display: flex;
    justify-content: space-between;
}

.image-row img {
    width: calc((100% - 3 * 20px) / 12);
}
</style>
<template>
<div class="CustomHome"></div>
<div class="image-container">
    <div class="image-row">
        <img src="/assets/221212112.svg" alt="Image 1">
        <img src="/assets/91b7b86cc6.svg" alt="Image 2">
        <img src="/assets/en2gie.svg" alt="Image 3">
        <img src="/assets/17f8d97df5.svg" alt="Image 5">
        <img src="/assets/1ff3d37f70.svg" alt="Image 6">
        <img src="/assets/e2a6211ba4.svg" alt="Image 7">
        <img src="/assets/337fde51ba.svg" alt="Image 8">
        <img src="/assets/300eb16d19.svg" alt="Image 8">
        <img src="/assets/dc288f8032.svg" alt="Image 8">
    </div>
</div>
</template>