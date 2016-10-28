<template>
  <div>
    <h3 v-bind:class="{ 'redColor': changeColor}">Count is {{ counterValue }}</h3>
  </div>
</template>
<script>
import { getCount } from '../../../vuex/getters'
import { changeColor } from '../../../vuex/getters'
	export default {
	  vuex: {
	    getters: {
	      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
	      counterValue: getCount,
	      changeColor: changeColor
	    }
	  }
	}
</script>