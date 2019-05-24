$(function(){
    shoppingCart.shopCartTable();
    shoppingCart.buyModule();
    shoppingCart.submitList();
})

var shoppingCart = {
    shopCartTable: function(){
        //折叠面板中图标的变化
        layui.use(['element', 'layer'], function(){
            var element = layui.element;
            var layer = layui.layer;

            //监听折叠
            element.on('collapse(test)', function(data){
                // layer.msg('展开状态：'+ data.show);
                if(data.show == true){
                    data.title.find('.fa-minus-circle').show();
                }else{
                    data.title.find('.fa-minus-circle').hide();
                }
            });
        });

        /*删除表格内部行-网站信息/ip地址*/
        $('.deleteTr').click(function(){
            var that = this;
            layer.confirm('确认删除行吗？', {
                icon:2,
                btn: ['删除', '取消']
            },function(index){
                console.log($(this));
                $(that).parent().parent('tr').remove();
                layer.msg("删除成功!",{ icon: 1, time: 1000 });
            });
        });

        /*删除模块*/
        $('.delete').click(function(){
            var that = this;
            layer.confirm('确认放弃购买此模块吗？', {
                icon:3,
                btn: ['删除', '取消']
            },function(index){
                console.log($(this));
                $(that).parent('.layui-colla-item').remove();
                layer.msg("删除成功!",{ icon: 1, time: 1000 });
            });
        });

        /*点击select选择框阻止父级事件冒泡*/
        $('.number').click(function(){
            event.stopPropagation();
        })
    },

    /*去购买路径*/
    buyModule: function(){
        $('.buyModule').click(function(){
            window.location.href = "addCart.html";
        })
    },

    /*提交采购单*/
    submitList: function(){
        $('.submitList').click(function(){
            window.location.href = "contractCartList.html";
        })
    }
}