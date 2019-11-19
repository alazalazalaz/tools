
function LineNumEditor(handler, width = '750', height = '380'){
	this.handler = handler;
	this.width = width + 'px';
	this.height = height + 'px';
	this.totalWidth = parseInt(parseInt(width) + 40) + 'px';
	this.leftHandler = {};
	this.rightHandler = {};
}

//公用的属性或者方法定义在prototype里面，这样多次创建实例会共用内存。
LineNumEditor.prototype = {
	textareaLineNum:0,

	init:function(){
		var pthis = this;
		this.leftHandler = this.handler.find(".left_text");
		this.rightHandler = this.handler.find(".right_text");

		this.leftHandler.css({'height':this.height});
		this.rightHandler.css({'height':this.height});
		this.rightHandler.css({'width':this.width});
		this.handler.css({'width':this.totalWidth});

		this.rightHandler.keyup(function(e){
			// pthis.textareaLineNum = $(this).val().split("\n").length;
    		pthis.drawLineNum();
		});

		this.rightHandler.scroll(function(){
			pthis.setLineNumScroll();
		})
	},
	
	drawLineNum:function(){
		this.textareaLineNum = this.rightHandler.val().split("\n").length;

		var numContent = '';
    	for (var i = 1; i <= this.textareaLineNum; i++) {
    		numContent += i + "\n";
    	}
    	this.leftHandler.val(numContent);
	},

	setLineNumScroll:function(){
		this.leftHandler.scrollTop(this.rightHandler.scrollTop());
	},

	getValue:function(){
		return this.rightHandler.val();
	},

	setValue:function(value){
		this.rightHandler.val(value);
		this.drawLineNum();
	}

}