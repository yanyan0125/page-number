
(function($) {

    $.fn.pager = function(options) {

        var opts = $.extend({}, $.fn.pager.defaults, options);

        return this.each(function() {
        	
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
                    
        });
    };

    function renderpager(pagenumber, pagecount, buttonClickCallback) { 
        var $pager = $('<ul class="pages"></ul>');
        $pager.append(renderButton('first', pagenumber, pagecount, buttonClickCallback)).append(renderButton('prev', pagenumber, pagecount, buttonClickCallback));
        $pager.append(renderCurBtn(pagenumber,pagecount));
        $pager.append(renderButton('next', pagenumber, pagecount, buttonClickCallback)).append(renderButton('last', pagenumber, pagecount, buttonClickCallback));
        return $pager;
    }
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');
        var destPage = 1;
        switch (buttonLabel) {
            case "first":
                destPage = 1;
                break;
            case "prev":
                destPage = pagenumber - 1;
                break;
            case "next":
                destPage = pagenumber + 1;
                break;
            case "last":
                destPage = pagecount;
                break;
        }

        if (buttonLabel == "first" || buttonLabel == "prev") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }

        return $Button;
    }
    
    function renderCurBtn(pagenumber,pagecount){
    	
        var $Button = '<li class="pgNext"><span>第'+ pagenumber +'页</span><span>/共  '+ pagecount +'页</span></li>';   	
    	return $Button;
    }
    
    
    

    // pager defaults. hardly worth bothering with in this case but used as placeholder for expansion in the next version
//  $.fn.pager.defaults = {
//      pagenumber: 1,
//      pagecount: 20
//  };

})(jQuery);





