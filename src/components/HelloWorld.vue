<template>
  <div class="hello">
    <div>
      <input type="text" v-model="text">
      <button @click="addGoog">添加商品</button>
    </div>
    <ul>
      <li v-for="good in goods" :key="good.name">
        <span>{{good.name}}</span>---
        <span>￥{{good.price}}</span>
        <button @click="addCart(good)">加购物车</button>
      </li>
    </ul>
    <cart ref="cart" @addCart="onAdd"></cart>
  </div>
</template>

<script>
import Cart from './Cart.vue'
export default {
  name: 'HelloWorld',
  components: {
    Cart
  },
  data() {
    return {
      goods: [
        {
          id: 1,
          name: '香蕉',
          price: 5
        },
        {
          id: 2,
          name: '苹果',
          price: 10
        },
        {
          id: 3,
          name: '西瓜',
          price: 20
        }
      ],
      text: ''
    }
  },
  methods: {
    addGoog() {
      if(this.text) {
        this.goods.push({
          id: this.goods.length+1,
          name: this.text,
          price: 100
        })
        this.text = ''
      }
    },
    addCart(good) {
      this.$refs.cart.addCart(good)
      //this.$bus.$emit('addCart', good)
    },
    onAdd() {
      console.log('添加成功了')
    }
  },
}
</script>

<style scoped lang="stylus">
</style>
