<template>
  <div class="home">
    <home-nav-bar/>
    <home-banner/>
    <div class="location">
      <div class="location__city">广州</div>
      <div class="location__current">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import HomeNavBar from './cpns/HomeNavBar.vue';
  import HomeBanner from './cpns/HomeBanner.vue';
</script>

<style lang="less" scoped>
.home{
  .location{
    width: 100%;
    padding: 0 20px;
    height: 45px;
    display: flex;
    align-items: center;
    &__city{
      flex: 1;
      font-size: 15px;
      color: #333;
    }
    &__current{
      width: 74px;
      span{
        font-size: 12px;
        color: #666;
      }
      img{
        width: 18px;
        margin-left: 8px;
      }
    }

  }
}
</style>