<template>
  <div class="tabbar">
    <!-- 自己封装 -->
    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tabbar__item" @click="tabbarClick(item.path, index)">
        <img class="tabbar__item__img" 
             :src="currentIndex === index ? getAssetsUrl(item.imgActive) : getAssetsUrl(item.img)" 
             alt=""
        />
        <span class="tabbar__item__text" 
              :class="{'active': currentIndex === index}"
        >
          {{item.text}}
        </span>
      </div>
    </template> -->

    <!-- 使用 vant UI库 -->
    <van-tabbar route 
                active-color="#ff9645"
                v-model="currentIndex" 
    >
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img :src="currentIndex !== index ? getAssetsUrl(item.img) : getAssetsUrl(item.imgActive)" 
                 alt=""
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import tabbarData from '@/assets/data/tabbar'
  import { getAssetsUrl } from '@/utils/load_assets' 

  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const router = useRouter()
  const currentIndex = ref(0)

  const tabbarClick = (path, index) => {
    router.push(path)
    currentIndex.value = index
  }

</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  height: 49px;
  background-color: #fff;
  &__item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid#ccc;
    .active{
      color: var(--primary-color);
    }
    &__img{
      width: 32px;
    }
    &__text{
      font-size: 12px;
      margin-top: 2px;
      color: #646566;
    }
  }
}

.van-tabbar-item__icon img{
  width: 32px;
}

// :deep(.van-tabbar-item__icon){
//   font-size: 40px;
// }

</style>