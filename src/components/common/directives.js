Vue.directive('demo', function (value) {
//	var vue = this;
//	this.el.innerHTML = "hello " + vue.arg + " " + value;

	this.el.innerHTML = this.arg + " " + value;
})

Vue.directive('example', {
  params: ['a','c'],
  bind: function () {
    console.log(this.params.a,this.params.c) // -> "hi" kitty
  }
})