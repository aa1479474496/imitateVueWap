//时间格式化
var moment = require('moment');

Vue.filter('dateAccurateToMS', function (value) {
	if(value){
		return moment(value).format('YYYY-MM-DD HH:mm:ss');
	}else{
		return "";
	}
});

Vue.filter('date', function (value,type) {
if(null != value && '' != value){
	var date = new Date(value);	
	if('yyyy-MM-dd' == type){
		 return moment(date).format('YYYY-MM-DD');
	}else if('yyyy/MM/dd' == type){
		 return moment(date).format('YYYY/MM/DD');
	}else if('yyyy-MM-dd hh:mm:ss' == type){
		 return moment(date).format('YYYY-MM-DD HH:mm:ss'); 
	}else if('yyyy' == type){
		 return moment(date).format('YYYY'); 
	}else{
		 return moment(date).format('YYYY-MM-DD');
	}
}else{
	return "";
}
});

//时间格式化--双向绑定
Vue.filter('dateSync',{	
	read: function(value,type) {
		if(null != value && '' != value){
			var date = new Date(value);	
			if('yyyy-MM-dd' == type){
				 return moment(date).format('YYYY-MM-DD');
			}else if('yyyy/MM/dd' == type){
				 return moment(date).format('YYYY/MM/DD');
			}else if('yyyy-MM-dd hh:mm:ss' == type){
				 return moment(date).format('YYYY-MM-DD HH:mm:ss'); 
			}else if('yyyy' == type){
				 return moment(date).format('YYYY'); 
			}else{
				 return moment(date).format('YYYY-MM-DD');
			}
		}else{
			return '';
		}
		 
    },
    write: function(value, oldValue) {    	
    	 return value;
    }
});

Vue.filter('concat',function(val,input){
		return  input + val;
});
Vue.filter('changeClass',function(val){
	if(val%2){
		return false;
	}
	else{
		return true;
	}
});


//home 图片标题文字隔断
Vue.filter('splitTitle',function(val,input){
	var flag = val.indexOf('（');
	var a0 = val.substring(0,flag);
	var a1 = val.substring(flag);
	if(input){
		return a0;
	}
	return a1;
	
});

