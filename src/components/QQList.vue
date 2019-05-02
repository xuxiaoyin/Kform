<template>
<div id="box">
	<div class="list">
    	<h1><span class="triangle_right"></span>我的好友</h1>
        <ul>
        	<li>宝贝</li>
            <li>爸爸</li>
            <li>妈妈</li>
            <li>爱人</li>
            <li>姐姐</li>
        </ul>
    </div>
    <div class="list">
    	<h1><span class="triangle_right"></span>企业好友</h1>
        <ul>
        	<li>阿婷</li>
            <li>科长</li>
            <li>阿弟</li>
            <li>静静</li>
            <li>伟少</li>
        </ul>
    </div>
    <div class="list">
    	<h1><span class="triangle_right"></span>黑名单</h1>
        <ul>
        	<li>广告</li>
            <li>微商</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  
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
