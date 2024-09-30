<style>
.CustomHome {
  display: flex;
  justify-content: center; /* 居中对齐 */
  padding: 20px 0;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
/* 基本样式 */
.CustomLogo {
    justify-content: center;
}

.CustomImg {
    display: flex;
    flex-wrap: nowrap; /* 不换行 */
    justify-content: space-between;
    gap: 1rem; /* 间距 */
}

.CustomImg img {
    height: auto;
    max-width: calc(100% / 9); /* 电脑端一行 */
    flex: 0 0 auto;
    margin-bottom: 1rem; /* 底部间距 */
}

/* 响应式样式 */
@media (max-width: 768px) {
    .CustomImg {
        flex-wrap: wrap; /* 允许换行 */
    }

    .CustomImg img {
        max-width: calc(33.3333% - 1rem); /* 手机端每行三个 */
    }
}
</style>
<template>
  <div class="CustomHome">
    <img src="../assets/go.png" alt="示例图片" class="responsive-image" />
  </div>
<div class="CustomLogo">
    <div class="CustomImg">
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