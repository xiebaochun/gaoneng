$(function(){
    //sliders of page
    $('#banner-slider').slidesjs({
      width: 1920,
      height: 757,
      navigation: {
        active: false,
        effect: "slide"
      },
      pagination: {
        active: false,
        effect: "slide"
      },
      play: {
        active: false,
        effect: "fade",
        interval: 10000,
        auto: true,
        swap: true,
        pauseOnHover: false,
        restartDelay: 2500
      },
      effect: {
        slide: {
          speed: 500
        },
        fade: {
          speed: 3000,
          crossfade: true
        }
      }
    });
    $('.content-slider').slidesjs({
      width: 1920,
      height: 757,
      navigation: {
        active: true,
        effect: "slide"
      },
      pagination: {
        active: false,
        effect: "slide"
      },
      play: {
        active: false,
        effect: "slide",
        interval: 5000,
        auto: true,
        swap: true,
        pauseOnHover: false,
        restartDelay: 2500
      },
      effect: {
        slide: {
          speed: 1000
        },
        fade: {
          speed: 3000,
          crossfade: true
        }
      }
    });
    //user login
    $('#username').blur(function(){
        validateEmail(this);
    });
    $('#password').blur(function(){
        validatePassword(this);
    });
    $('#RemenberPw-label').click(function(){
        var checkedBox = $('#isRemenberPw');
        if(checkedBox.is(":checked")){
            checkedBox.prop('checked', false); 
        }else{
            checkedBox.prop('checked', true);
        }
        
    });
    //soft keyboard bind
    $('#password')
        .keyboard({
            openOn : null,
            stayOpen : true,
            layout : 'qwerty'
        })
        .addTyping();

    $('#soft-kb').click(function(){
        var kb = $('#password').getkeyboard();
        // close the keyboard if the keyboard is visible and the button is clicked a second time
        if ( kb.isOpen ) {
            kb.close();
        } else {
            kb.reveal();
        }
    });
    $('#login-bt').click(function(){
        //登录验证
        if(!loginValidate()){
            return false;
        }
        

        var userName = $('#username').val();
        var pw = $('#password').val();
        var isRemenberPw = $('#isRemenberPw').is(":checked");
        //alert(isRemenberPw);

        var postData = {
            username:username,
            password:pw,
            isRemenber:isRemenberPw
        }
        user.login(postData);
    });
    function validateEmail(target){
        var self = target;
        var parent = $(self).parent();
        var email = $(self).val();

        if(email){
            //alert($(this).val());    
            //var validator = require('validator');
            if(validator.isEmail(email)){
                
                formSuccess(parent);
                tools.rmTips('email');
                return true;
            }else{
                formErr(parent);
                tools.tips('email','邮箱格式输入错误！',parent,{right:'5px',bottom:'1px'});
                return false;
            }
        }else{
            formCls(parent);
            tools.rmTips('email');
            return false;
        }
    }
    function validatePassword(target){
        var self = target;
        var parent = $(self).parent();
        var pw = $(self).val();

        if(pw){
            //alert($(this).val());    
            //var validator = require('validator');
            if(pw.length <= 6){
                formErr(parent);
                tools.tips('pw','密码少于6位！',parent,{right:'45px',bottom:'1px'});
                return false;
            }else{
                formCls(parent);//formSuccess(parent)
                tools.rmTips('pw');
                return true;
            }
        }else{
            formCls(parent);
            tools.rmTips('pw');
            return false;
        }
    }
    function loginValidate(){
        if(validateEmail($('#username'))&&validatePassword($('#password'))){
            return true;
        }else{
            return false;
        }
    }
    function formErr(target){
        target.removeClass('input-success');
        target.addClass('input-error'); 
    }
    function formSuccess(target){
        target.removeClass('input-error');
        target.addClass('input-success');
    }
    function formCls(target){
        target.removeClass('input-success');
        target.removeClass('input-error');
    }
})