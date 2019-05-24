$(function(){
    indexUser.unopenTip();
})

var indexUser = {
    /*点击未启动模块提示*/
    unopenTip: function(){
        $('.modules li.default button').click(function(){
            window.location.href = 'addCart.html';
        })
    }
}