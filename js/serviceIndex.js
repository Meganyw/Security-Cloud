$(window).resize(function(){
    service.serviceHeight();
});

$(function(){
    service.serviceHeight();
    service.changeInfo();
    service.orderDetail();
    service.buyService();
    service.contract();
    service.enterService();
})


var service = {

    /*页面service的高度*/
    serviceHeight: function(){
        var body_height = $(document).height();
        $('.service').css('height',body_height);
    },



    /*查看订单详情*/
    orderDetail: function(){
        $('#orderDetail').click(function(){
            window.location.href = 'orderView.html';
        })
    },

    /*购买服务*/
    buyService: function(){
        $('#buyService').click(function(){
            window.location.href = 'addCart.html';
        })
    },

    /*合同附件、购物清单*/
    contract: function(){
        $('#contract').click(function(){
            window.location.href = 'contractCartList.html';
        })
    },

    /*进入服务大厅*/
    enterService: function(){
        $('#enterService').click(function(){
            layer.msg('您还未启动安全服务平台<br>请先完成 <b>购买服务</b>', {
                icon:4,
                time: 5000, //20s后自动关闭
                btn: ['明白了']
            });
        })
    },

    /*修改基本信息*/
    changeInfo: function(){
        $('#changeInfo').click(function(){
            layer.open({
                type: 1
                ,title: '修改基本信息'
                ,area: ['40%', '50%']
                ,shade: 0.8
                ,maxmin: false
                ,content: $('.changeInfoLayer')
                ,btn: ['保存', '取消'] //只是为了演示
                ,yes: function(){

                }
                ,btn2: function(){
                    layer.closeAll();
                    $('.changeInfoLayer').hide();
                }
                ,cancel: function(){
                    $('.changeInfoLayer').hide();
                }
                ,zIndex: layer.zIndex //重点1
                ,success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });
        })
    },
}