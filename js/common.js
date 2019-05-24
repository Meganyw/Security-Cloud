$(function(){
    // common.changePassword();
})

var common = {
    /*修改密码*/
    changePassword: function(){
        $("#oldPassword").val("");
        $("#newPassword").val("");
        $("#secondPassword").val("");
        layer.open({
            area: ['350px', '320px']
            ,shade: 0.3 //不显示遮罩
            ,shadeClose: true //点击遮罩关闭
            ,skin: 'yourclass'
            ,icon:3
            ,title:'修改密码'
            ,type: 1
            ,closeBtn:1
            ,content:$("#changeId")
            ,btn: ['确认', '取消']
            ,yes: function(){
                //校验
                var oldPassword = $("#oldPassword").val();
                var newPassword = $("#newPassword").val();
                var secondPassword = $("#secondPassword").val();
                if (oldPassword == "") {
                    layer.msg("旧密码不能为空!",{time:1500});
                    $("#oldPassword").focus();
                    return;
                }
                if (newPassword == "") {
                    layer.msg("新密码不能为空!",{time:1500});
                    $("#newPassword").focus();
                    return;
                }
                if (newPassword.length > 16 || newPassword.length < 6) {
                    layer.msg("请输入6至16位字符的密码！",{time:1500});
                    $("#newPassword").focus();
                    return;
                }
                if (newPassword != secondPassword) {
                    layer.msg("两次输入密码不一致!",{time:1500});
                    $("#secondPassword").focus();
                    return;
                }
                $.ajax({
                    url : basePath + "/user/updatePwd",
                    type : "POST",
                    data : {
                        oldPassword : oldPassword,
                        newPassword : newPassword
                    },
                    dataType : "json",
                    success : function(data) {// 1修改成功 2修改失败 3旧密码有误
                        if (data == "1") {
                            layer.closeAll();
                            layer.msg('修改成功！', {icon: 1}, 1500);
                        } else if (data == "3"){
                            layer.msg('旧密码有误，请重新输入!', {time:1500});
                            $("#oldPassword").focus();
                        } else {
                            layer.msg('修改失败!', {icon: 2}, 1500);
                        }
                    }
                });
            }
            ,end: function () {
                $('#changeId').hide();
            }
        });
    },
}