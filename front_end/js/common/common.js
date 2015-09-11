!function(){
    var p ={};
    p.tips = function(id,text,target,position){
        if($('#'+id).length){
            return false;
        }
        $(target).css(
        {
        'position':'relative',
        'display':'inline-block'
        });
        position = position?position:{left:0,top:0};
        var html = '<span class="popBox" id="'+id+'">'+text+'</span>';
        var tips = $(html);
        tips.css({
            'display':'inline-block',
            'position':'absolute',
            'left':position.left?position.left+'':'auto',
            'top':position.top?position.top+'':'auto',
            'right':position.right?position.right+'':'auto',
            'bottom':position.bottom?position.bottom+'':'auto',
            'line-height':'16px',
            'font-size':'12px',
            'color':'#ee6666',
            'border':'0px solid #ee8888',
            'border-radius':'5px'
        });
        $(target).append(tips);
    }
    p.rmTips = function(name){
        $('#'+name).remove();
    }
    
    window['tools'] = p;
}();