<template>
  <div class="wrap" id="app">
    <div class="baidu">
      <ul class="list list-head">
        <li>
          <div>
            <input type="checkbox" v-model="checkedAll" />全选
          </div>
          <span>歌单</span>
          <span>歌手</span>
          <span>专辑</span>
        </li>
      </ul>
      <ul class="list list-body">
        <li v-for="item in music" :key="item.id" :class="{checkedColor:item.checked}">
          <div><input type="checkbox" v-model="item.checked"></div>
          <span>{{item.name}}</span>
          <span>{{item.song}}</span>
          <span>{{item.album}}</span>
        </li>
      </ul>
      <div class="select">
        <span class="selectAll">

          <span>统计：</span>
        </span>
        <div class="others">
          <span><em></em>歌手有：{{singer}}位</span>
          <span><em></em>专辑有{{album}}张</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      music:[
        {
					id:Date.now()+Math.random(),
					name: '邓紫棋',
					song: '泡沫',
					checked: false,
					album: 10
				},
				{
					id:Date.now()+Math.random(),
					name: '王杰',
					song: '泡沫',
					checked: false,
					album: 10
				},
				{
					id:Date.now()+Math.random(),
					name: '邓紫棋',
					song: '泡沫',
					checked: false,
					album: 10
				}
      ]
    }
  },
  computed: {
    // checkedAll() {
    //   return this.music.every(item => item.checked)
    // },
    checkedAll:{
      get() {
        return this.music.every(item => item.checked)
      },
      set() {
        this.music.forEach(item => {
          item.checked = !item.checked
        })
      }
    },
    singer() {
      return this.resize(this.music.filter(item => item.checked)).length
    },
    album() {
      return this.music.filter(item => item.checked).reduce((n,item) => n+item.album,0)
    }
  },
  methods: {
    resize(arr) {
      let json = {}
      let arr1 = []
      arr.forEach(item => {
        if(!json[item.name]) {
          json[item.name] = true
          arr1.push(item)
        }       
      })
      return arr1
    }
  },
}
</script>

<style lang="stylus" scoped>
.wrap {
	width: 764px;
	height: 800px;
	margin: 0 auto;
	position: relative;
	background: url(../assets/bg.png) no-repeat center center;
	overflow: hidden;
}
.baidu {
	width: 480px;
	height: 300px;
	background: #fff url(../assets/logo.png) no-repeat center center;
	margin: 100px auto;
	border-radius: 5px;
	box-shadow: 2px 2px 3px rgba(0,0,0,.3);
	position: relative;
}
.list {
	width: 100%;
	background: rgba(255,255,255,.9);
	border-radius: 5px;
	padding: 19px 0;
}
.list li {
	height: 36px;
	padding: 0 30px;
	box-sizing: border-box;
	color: #000000;
	display: flex;
	flex-direction: row;
}
.list li div,.select .selectAll {
	float: left;
	height: 12px;
	position: relative;
	top: 11px;
	margin-right: 20px;
	font: 14px/12px arial;
	cursor: pointer;
}
.list li span {
	height: 100%;
	font: 14px/36px "微软雅黑";
	flex: auto;
	text-align: center;
}
.select {
	width: 100%;
	height: 46px;
	background: #e15671;
	box-sizing: border-box;
	padding: 0 30px;
	font: 14px/46px "微软雅黑";
	color: #eee;
	border-radius: 0 0 5px 5px;
	position: absolute;
	bottom: 0;
	left: 0;
}
.select .selectAll {
	top: 16px;
	position: relative;
}
.select .selectAll span {
	position: absolute;
	top: 0px;
	right: -48px;
	cursor: pointer;
}
.select .selectAll:hover {
	color: #fff;
}
.select div {
	float: right;
	height: 100%;
	width: 300px;
}
.select div span {
	display: inline-block;
	height: 100%;
	margin-right: 42px;
}
.select div span:nth-child(3) {
	margin: 0;
}
.select div span em {
	display: inline-block;
	width: 24px;
	height: 20px;
	background: url(../assets/1.png) no-repeat;
	margin-right: 10px;
	position: relative;
	top: 5px;
}
.select div span:nth-of-type(1) em {
	background-position: 0 0;
}
.select div span:nth-of-type(2) em {
	background-position: 0 -21px;
	height: 24px;
	top: 6px;
}
.select div span:nth-of-type(3) em {
	background-position: 0 -46px;
	height: 24px;
}
.list-head {
	padding: 0;
	background: #e15671;
}
.list-head li {
	padding: 0 20px;
}
.list-head li div {
	margin: 0;
}
.list-body li:nth-child(even) {
  background: yellow;
}
.list-body li:nth-child(odd) {
  background: #fff;
}
.list-body li:hover {
  background: green;
}
.list-body li.checkedColor {
  background: green;
}
</style>
