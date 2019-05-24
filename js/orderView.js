$(function(){
    orderView.deleteOrder();
})

var orderView = {
    deleteOrder: function (){
        //折叠面板中删除按钮函数
        $('.delete').click(function(){
            var that = this;
            layer.confirm('确认删除吗？', {
                icon:2,
                btn: ['删除', '取消']
            },function(index){
                console.log($(this));
                $(that).parent('.layui-colla-item').remove();
                layer.msg("删除成功!",{ icon: 1, time: 1000 });
            });
        });

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
    }
}