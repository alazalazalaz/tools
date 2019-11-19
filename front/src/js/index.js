$(document).ready(function(){
	
	//左侧菜单
	$("#menu ul li").each(function(e){
		$(this).click(function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');

			//显示右边内容
			var num = 'li' + e;
			$("#" + num).css({display:'block'});
			$("#" + num).siblings().css({display:'none'});
		});
	});



	//左侧菜单

	//文本编辑器
	var jsChangeText = new LineNumEditor($("#js-change"), '700', '600');
	jsChangeText.init();
	var jsChangeText2 = new LineNumEditor($("#js-change2"), '700', '600');
	jsChangeText2.init();
	var pregMatchText = new LineNumEditor($("#preg-match"), '750', '280');
	pregMatchText.init();
	var pregMatchResult = new LineNumEditor($("#preg-match-result"), '750', '180');
	pregMatchResult.init();
	var pregMatchMail = new LineNumEditor($("#preg-match-mail"), '750', '100');
	pregMatchMail.init();
	var pregMatchPhone = new LineNumEditor($("#preg-match-phone"), '750', '100');
	pregMatchPhone.init();
	//文本编辑器

    //js 纯文本编辑器，带行号
    $("#js_change_format").click(function(){
    	var jsChange = new JsChange();
    	var str = jsChangeText.getValue();

					console.log(str);
					console.log(typeof(str));
    	var formatStr = jsChange.strToFormatStr(str);

    	jsChangeText.setValue(formatStr);
    });
    $("#js_change_format2").click(function(){
    	var jsChange = new JsChange();
    	var str = jsChangeText2.getValue();

					console.log(str);
					console.log(typeof(str));
    	var formatStr = jsChange.strToFormatStr(str);

    	jsChangeText2.setValue(formatStr);
    });
    //js 纯文本编辑器，带行号

    //正则
    $("#pm_change").click(function(){
    	$.ajax({
    		type:'post',
    		url:'pregMatch.php',
    		data:{data:pregMatchText.getValue()},
    		success:function(msg){
    			pregMatchResult.setValue(msg);
    		}
    	})
    })
    pregMatchMail.setValue('$mail = "ss2s44@qq.com";\
		\n$preg = "/^([\w\d]*)@[\w\d]{2,5}.com$/i";\
		\n$re = preg_match($preg, $mail, $array);\
		\nvar_dump($re, $array);\
		\n//^：从元素的起始位置开始匹配\
		\n//$:匹配元素的结尾\
		\n//()：将@前的数据匹配出来放结果数组\
	');
	pregMatchPhone.setValue('$phone=13612345678;\
		\n$preg = "/^1[3-9][0-9]{9}$/";\
		\n$re = preg_match($preg, $phone, $array);\
		\nvar_dump($re, $array);'
	);
    //正则
})


