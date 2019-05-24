$(function(){
    login.loginOrRegiste();
})

var login = {
    /*去登录-去注册点击显示隐藏函数*/
    loginOrRegiste: function(){
        $('.registeButton').click(function(){
            $('.login').hide();
            $('.registe').show();
        })
        $('.loginButton').click(function(){
            $('.registe').hide();
            $('.login').show();
        })
    }
}