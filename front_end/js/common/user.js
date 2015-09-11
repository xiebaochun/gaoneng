!function(){
    var user = {};
    var p = user;
    //login
    p.login = function(data){
        $.ajax({
            url:'login.php',
            type:'post',
            // data:data,
            dataType:'json',
            success:function(ret){
                alert(ret);
            }
        });
        //alert('login');
    };
    //logout
    p.logout = function(){
        $.ajax({
            url:'logout.php',
            type:'get',
            // data:data,
            dataType:'json',
            success:function(ret){
                alert(ret);
            }
        });
    }
    //checkout user status
    p.checkLogin = function(){

    }
    //
    window['user'] = user;
}();