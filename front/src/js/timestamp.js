//时间戳
	function formatTime(number,format) {
	  var formateArr  = ['Y','m','d','H','i','s'];  
	  var returnArr   = [];  
	  
	  var date = new Date(number * 1000);  
	  returnArr.push(date.getFullYear());  
	  returnArr.push(formatNumber(date.getMonth() + 1));  
	  returnArr.push(formatNumber(date.getDate()));  
	  
	  returnArr.push(formatNumber(date.getHours()));  
	  returnArr.push(formatNumber(date.getMinutes()));  
	  returnArr.push(formatNumber(date.getSeconds()));  
	  
	  for (var i in returnArr)  
	  {  
	    format = format.replace(formateArr[i], returnArr[i]);  
	  }  
	  return format;  
	}
	function formatNumber(n) {  
	  n = n.toString()  
	  return n[1] ? n : '0' + n  
	}  

	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth();
	var day = myDate.getDate();
	var h = myDate.getHours();
	var i = myDate.getMinutes();
	var s = myDate.getSeconds();
	var now_time = year + '-' + month + '-' + day + ' ' + h + ':' + i + ':' + s;
	var now_time_timestamp = Date.parse(myDate).toString().substr(0, 10);
	// Date.getTime();//此函数为获取毫秒级时间戳
	$("#t_now_date").html(now_time);
	$("#t_now_date_ts").html(now_time_timestamp);

	//复制功能
	var clipboard = new ClipboardJS('button');
    
    $("#time_change").click(function(){
    	var before = $("#t_change_before").val();
    	var myDate = new Date(before);
    	$("#t_change_after").html(Date.parse(myDate).toString().substr(0, 10));
    })

    $("#ts_change").click(function(){
    	var timestamp = $('#ts_change_before').val();
    	var YmdHis = formatTime(timestamp, 'Y-m-d H:i:s');
        $('#ts_change_after').html(YmdHis);
    })
    //时间戳