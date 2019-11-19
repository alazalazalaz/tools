function JsChange(){
	
}

JsChange.prototype = {
	/**
	* @return bool
	* @param eg:'{ "name": "mady", "age": 24 }'
	**/
	strToJson:function(str){
		if (typeof(str) != 'string' || str.length<=0) {
			alert('输入的不是一个有效字符串');
			return str;
		}
		var encodedStr = JSON.parse(str);
		return encodedStr;
	},

	jsonToStr:function(obj){
		return JSON.stringify(obj);
	},

	/**
	* 字符串转为格式化后的字符串
	* 1、先把字符串转为json对象
	* 2、再把json对象转为格式化后的字符串
	**/
	strToFormatStr:function(str){
		var msg = "";
		var isJsonString = true;
		for (var i = 0; i < 10; i++) {
			if (isJsonString == true) {
				if (typeof(str) == 'string') {
					try{
						var str = JSON.parse(str);
					}catch(e){
						isJsonString = false;
					}
				}else{
					msg = '解析' + i + '次，';
					break;
				}
			}else{
				msg = '已经是一个字符串了';
			}
		}

		if (isJsonString) {
			return JSON.stringify(str, null, '\t');
		}else{
			return str;
		}

		
	}
}