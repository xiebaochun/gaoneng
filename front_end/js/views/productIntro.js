$(function(){
    $.fn.is_on_screen = function(){
        var win = $(window);
        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
     
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
     
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };
    $('#spot-ad-link').addClass('link-active').children('i').addClass('ico-spot-ad-active');
    var isTouched=false;
    $(window).scroll(function(){  
      if ($(".banner").offset().top-$(window).scrollTop()<5){ 
        if(isTouched==false){
          isTouched=true;
          //console.log($(".banner").offset().top);
          $(".banner").css({"position":"fixed","top":"-33px",'width':'100%'});
        }     
      }  
      if ($(window).scrollTop() < 100) { 
        if(isTouched == true){
          isTouched = false;
          //console.log($(".banner").offset().top);
          $(".banner").css({"position":"relative","top":"0px"});
        }   
      }   
      if($('#spot-ad').is_on_screen()){
        $('#ad-banner-link').removeClass('link-active').children('i').removeClass('ico-ad-banner-active');
        $('#app-wall-link').removeClass('link-active').children('i').removeClass('ico-app-wall-active');
        $('#spot-ad-link').addClass('link-active').children('i').addClass('ico-spot-ad-active');
      }   
      if($('#app-wall').is_on_screen()){
        $('#ad-banner-link').removeClass('link-active').children('i').removeClass('ico-ad-banner-active');
        $('#spot-ad-link').removeClass('link-active').children('i').removeClass('ico-spot-ad-active');
        $('#app-wall-link').addClass('link-active').children('i').addClass('ico-app-wall-active');
      }  
      if($('#ad-banner').is_on_screen()){
        $('#app-wall-link').removeClass('link-active').children('i').removeClass('ico-app-wall-active');
        $('#spot-ad-link').removeClass('link-active').children('i').removeClass('ico-spot-ad-active');
        $('#ad-banner-link').addClass('link-active').children('i').addClass('ico-ad-banner-active');
      }   

    }); 

});