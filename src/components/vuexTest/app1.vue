<template>
<div class="container">
  <div class="sidebar">
    <ul class="dropdown">
      <li :class="{active: show === 'home'}">
        <a @click="show = 'home'" v-link="'/home/article'"><i class="fa fa-home"></i><span>&nbsp;&nbsp;首页</span></a>
      </li>
      <li :class="{active: show === 'topic'}">
        <a @click="show = 'topic'" v-link="'/topic/topic_article'"><i class="fa fa-th"></i><span>&nbsp;&nbsp;专题</span></a>
      </li>
      <li><a href="#"><i class="fa fa-mobile"></i><span>&nbsp;&nbsp;下载手机应用</span></a></li>
    </ul>
    <ul class="nav-user">
      <li><a href=""><i class="fa fa-font"></i><span>&nbsp;&nbsp;显示模式</span></a></li>
      <li><a v-link="'/login'"><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;登录</span></a></li>
    </ul>
  </div>
 
 
 <div class="home">
    <router-view transition = 'display' transition-mode = 'out-in'></router-view>
  </div>
  
  
  <div class="rightbar">
    <nav>
      <a v-link="'/login'"><i class="fa fa-sign-in"></i>登录</a>
      <a href="#"><i class="fa fa-user"></i>注册</a>
    </nav>
  </div>
</div>
</template>