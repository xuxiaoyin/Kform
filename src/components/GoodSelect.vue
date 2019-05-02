<template>
  <div id="content">
    <h2 id="title">
      <span>您的选择：</span>
      <a href="javascript:" 
        v-for="(item, key) in choose" :key="key"
      >{{item}}<em class="close" @click="close(key)">X</em></a>
    </h2>
    <div id="detail">
      <p class="list" v-for="(item, index) in goods" :key="index">
        <span class="name">{{item.title}}</span>
        <a href="javascript:" 
          v-for="(option, i) in item.list" 
          :key="i"
          :class="{active: item.index === i}"
          @click="chooseGood(option, index, i)"
        >{{option}}</a>
      </p>          
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          title: '品牌',
          list: ['苹果','小米','荣耀','魅族','华为','三星','OPPO','vivo','乐视','360','中兴','索尼']
        },
        {
          title: '尺寸',
          list: ['3.0英寸以下','3.0-3.9英寸','4.0-4.5英寸','4.6-4.9英寸','5.0-5.9英寸','6.0英寸以上']
        },
        {
          title: '系统',
          list: ['安卓(Android)','苹果(IOS)','微软(WindowsPhone)','无','其他']
        },
        {
          title: '网络',
          list: ['联通3G','双卡单4G','双卡双4G','联通4G','电信4G','移动4G']
        }
      ],
      choose: {},
      activeIndex: ''
    }
  },
  methods: {
    close(key) {
      this.$delete(this.choose, key)
      this.goods[key].index = -1
    },
    chooseGood(good, index, i){
      if (!this.choose[index]) {
        this.$set(this.choose,index,good)
      } else {
        this.choose[index] = good
      }
      this.goods[index].index = i
    }
  },
  mounted() {
    this.goods.forEach(item => this.$set(item, 'index', -1))
  },
}
</script>

<style lang="stylus" scoped>
#content{ 
  width: 760px; 
  margin: 50px auto; 
  background: rgba(255,255,255,.8);
  box-shadow: 0px 0px 4px 0px rgba( 0, 0, 0,.1 ); 
  font-family: "微软雅黑";
  font-size: 14px;
}
a{ 
  text-decoration: none;
}
h2,p{ 
  margin: 0;
}
#title,#detail{
  padding: 10px 20px;
}
#title{ 
  line-height: 26px; 
  background: #e0efed; 
  height: 26px;
}
#title span,#title a{ 
  float: left; 
  margin-right: 10px;
}
#title a{ 
  padding: 0 34px 0 5px; 
  line-height: 24px; 
  border: 1px solid #0098BE; 
  color: #28a5c4; 
  font-weight: normal; 
  position: relative;
}
.close{ 
  width: 18px; 
  height: 18px; 
  text-align: center; 
  line-height: 18px; 
  position: absolute; 
  right: 6px; 
  top: 3px; 
  color: #fff; 
  background: #28a5c4; 
  font-style: normal;
} 
.list{ 
  height: 42px; 
  line-height: 42px; 
  border-bottom: 1px dotted #0098be;
}
.list span,.list a{ 
  float: left;
  margin-right: 24px;
}
.list .name{ 
  color: #989898;
}
.list a{ 
  color: #202020;
}
.list .active{
   color: #28a5c4;
}
</style>
