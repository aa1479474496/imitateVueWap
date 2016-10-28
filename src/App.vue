<template>
    <div id="app">
        <!--<top></top>-->
        <router-view></router-view>
    </div>
</template>

<script>
	import store from '../vuex/store' // import 我们刚刚创建的 store
    export default {
        components: {
            'top': require('./components/top/top.vue')
        },
         store: store // 在根组件加入 store，让它的子组件和 store 连接
    }
</script>