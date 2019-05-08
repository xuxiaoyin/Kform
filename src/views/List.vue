<template>
  <div>
    <ul>
      <li v-for="good in goods" :key="good.name">
        <router-link :to="`detail/${good.id}`">
          <span>{{good.name}}</span>---
          <span>￥{{good.price}}</span>
          <button @click="addCart(good)">加购物车</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          name: "香蕉",
          price: 5
        },
        {
          id: 2,
          name: "苹果",
          price: 10
        },
        {
          id: 3,
          name: "西瓜",
          price: 20
        }
      ],
      text: ""
    };
  },
  methods: {
    addCart(good) {
      this.$refs.cart.addCart(good);
      //this.$bus.$emit('addCart', good)
    },
    onAdd() {
      console.log("添加成功了");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>