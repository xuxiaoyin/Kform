<template>
<div id="box">
	<div class="list" v-for="(item,_index) in qqList" :key="item.title">
    	<h1 @click="changeShow(_index)" :class="iNow === _index ? 'active':''">
        <span class="triangle_right" :class="iNow === _index ? 'triangle_bottom':''"></span>{{item.title}}
      </h1>
        <ul :style="{display:iNow === _index ? 'block':'none'}">
        	<li 
            v-for="(firend, index) in item.list" 
            :key="index" 
            :class="{'active' : index === active}"
            @click="select(index)"
          >
            {{firend}}
          </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
       qqList: [
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
      iNow: '',
      active: ''
    }
  },
  methods: {
    changeShow(index) {
      if(this.iNow === index) {
        this.iNow = ''
      } else {
        this.iNow = index
      } 
      this.active = ''  
    },
    select(index) {
      this.active = index
    }
  },
}
</script>

<style lang="stylus" scoped>
h1,li,ul{ 
  margin:0; 
  padding:0;
}
li{ 
  list-style:none; 
  padding:0;
}
#box{ 
  width:320px; 
  height:500px; 
  border-color:#000; 
  border-width:40px 5px 60px; 
  border-style:solid; 
  margin:0 auto; 
  border-radius:16px;
  position:relative; 
  background:url(../assets/4.jpg) no-repeat;}
.triangle_right{ 
  position:absolute; 
  width:0; 
  height:0; 
  border-top:5px solid transparent; 
  border-bottom:5px solid transparent; 
  border-left:6px solid #fff;
}
.triangle_bottom{ 
  position:absolute; 
  width:0; 
  height:0; 
  border-top:6px solid #FFF; 
  border-left:5px solid transparent; 
  border-right:5px solid transparent;
}
.list{ 
  padding:5px 10px;
}
.list h1{ 
  font-size:16px; 
  line-height:48px;
  background:rgba(0,0,0,0.5); 
  color:#fff; 
  padding-left:24px; 
  position:relative;
}
.list h1 span{ 
  left:10px; 
  top:19px;
}
.list li{ 
  padding:0 32px; 
  line-height:42px; 
  color:#fff; 
  background:#666;
}
.list ul{ 
  display:none;
}
.list>.active{ 
  background:rgba(255,102,153,0.8)
}
.list ul .active{ 
  background:#F09;
}
.list ul .hover{ 
  background:#aaa;
}
</style>
