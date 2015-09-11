$(function(){
    //注册
    $('#find-bt').click(function() {
        //数据验证
        validate();
    });
    //刷新验证码
    $('#update-valid-code').click(function(){
        updateValidCode();
    });
    //数据验证
    function validate() {

        //window.location.href='regSuccess.html';

        var username = $('#username').val();
        var validate_code = $('#password').val();

        if (username == ''){
             Msg('请输入邮箱');
             return false;
        }

        if(!validator.isEmail(username)){
            Msg('邮箱格式错误');
            return false;   
        }
        rmMsg();

        //找回密码
        $.ajax({
            url:'findPassword.php',
            type:'post',
            date:{

            },
            dataType:'json',
            success:function(ret){
                if(ret['code'==100]){
                    alert('成功！');
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