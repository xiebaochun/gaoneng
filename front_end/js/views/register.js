$(function() {
    //注册
    $('#register-bt').click(function() {
        //数据验证
        validate();
    });
    //验证输入框失去焦点时审核验证码
    $('#ensure-password').blur(function(){
        var valid_code = $(this).val();
        validateCode(valid_code);
    });
    //刷新验证码
    $('#update-valid-code').click(function(){
        updateValidCode();
    });
    //soft keyboard bind
    $('.pw-input')
        .keyboard({
            openOn : null,
            stayOpen : true,
            layout : 'qwerty'
        })
        .addTyping();

    $('#soft-kb-pw').click(function(){
        var kb = $('#password').getkeyboard();
        // close the keyboard if the keyboard is visible and the button is clicked a second time
        if ( kb.isOpen ) {
            kb.close();
        } else {
            kb.reveal();
        }
    });
    $('#soft-kb-epw').click(function(){
        var kb = $('#ensure-password').getkeyboard();
        // close the keyboard if the keyboard is visible and the button is clicked a second time
        if ( kb.isOpen ) {
            kb.close();
        } else {
            kb.reveal();
        }
    });
    //数据验证
    function validate() {

        window.location.href='regSuccess.html';

        var username = $('#username').val();
        var pw = $('#password').val();
        var epw = $('#ensure-password').val();
        var validate_code = $('#password').val();

        if (username == ''){
             Msg('请输入账号');
             return false;
        }

        if(!validator.isEmail(username)){
            Msg('邮箱格式错误');
            return false;   
        }

        if(pw.length<6){
            Msg('密码少于6位');
            return false;   
        }

        if(pw!=epw){
            Msg('两次输入的密码不一致');
            return false;   
        }
        rmMsg();

        //注册
        $.ajax({
            url:'register.php',
            type:'post',
            date:{

            },
            dataType:'json',
            success:function(ret){
                if(ret['code'==100]){
                    alert('注册成功！');
                }
            }
        });
       
    }
    //审核验证码
    function validateCode(code){
        $.ajax({
            url:'validateCode.php?code='+code,
            type:'get',
            success:function(ret){
                console.log(ret);
                if(ret['code']==101){
                    Msg('验证码输入错误！');
                }
            }
        });
    }
    //刷新验证码
    function updateValidCode(){
        $.ajax({
            url:'validateCode.php',
            type:'get',
            success:function(ret){
                console.log(ret);
                if(ret['code']==101){
                    Msg('验证码刷新失败！');
                }
            }
        });
    }
    function Msg(text){
        rmMsg();
        tools.tips('msg',text,$('.panel-header'),{right:'5px',top:'10px'});
    }
    function rmMsg(){
        tools.rmTips('msg');
    }
});