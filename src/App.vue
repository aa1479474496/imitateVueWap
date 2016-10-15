<template>
    <div id="app">
        <!--<top></top>-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {
            'top': require('./components/top/top.vue')
        },
    }
</script>