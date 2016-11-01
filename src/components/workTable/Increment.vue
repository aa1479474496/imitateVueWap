<template>
  <div>
    <button @click='creat(abc())'>Increment +1</button>
  </div>
</template>

<script>
import { incrementCounter } from '../../../vuex/actions'
export default {
  vuex: {
    actions: {
      creat:incrementCounter
    }
  },
  ready(){
  	
  },
  methods: {
  	abc: function(){
  		return 15
  	}
  }
  
}
</script>