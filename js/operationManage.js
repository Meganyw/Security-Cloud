$(function(){
    operationManage.changeOrSave();
    operationManage.orderTable();
    operationManage.changeStatus();


})

var operationManage = {

    /*运维订单信息表格*/
    orderTable: function(){
        $("#orderTable").datagrid({
            url:  '',
            method: 'POST',
            fitColumns:true,
            striped: true,
            singleSelect: false,
            rownumbers: true,
            pagination: true,
            checkbox: true,
            nowrap: false,
            pageSize: 10,
            idField: 'taskId',
            pageList: [10, 20, 50, 100, 150, 200],
            showFooter: true,
            columns: [[
                {field: 'generateUsbDisk',hidden: true},
                {field: 'taskName', title: '序号', width: 50, align: 'center'},
                {field: 'unitNum', title: '单位名称', width: 100, align: 'center'},
                {field: 'systemNum', title: '订单号', width: 100, align: 'center'},
                {field: 'taskState',title: '账号',width: 100,align: 'center'},
                {field: 'releaseTime', title: '联系人', width: 100, align: 'center'},
                {field: 'startTime',title: '联系电话',width: 100 ,align: 'center'},
                {field: 'stopTime',title: '合同附件',width: 100 ,align: 'center'},
                {field: 'fiveSysSum',title: '清单',width: 95,align: 'center',
                    formatter: function (value, row, index) {
                        var c = '<a class="btn_small btnGreen" onclick="showBeianSys(' + index + ')">' + '下载' + '</a>';
                        return c;
                    }
                },
                {field: 'stop',title: '付款状态',width: 100 ,align: 'center'},
                {field: 'update',title: '操作',width: 100,align: 'center'}
            ]]
        });
    },

    /*修改订单状态*/
    changeStatus: function(){
        $('#changeStatus').click(function(){
            /*layui调用日历*/
            layui.use('laydate', function(){
                var laydate = layui.laydate;
                laydate.render({
                    elem: '#test1'
                });
            });

            /*修改订单状态弹框*/
            layer.open({
                type: 1
                ,title: '修改订单状态'
                ,area: ['400px', '250px']
                ,shade: 0.8
                ,maxmin: false
                ,content: $('.changeStatus')
                ,btn: ['保存', '取消'] //只是为了演示
                ,yes: function(){

                }
                ,btn2: function(){
                    layer.closeAll();
                    $('.changeStatus').hide();
                }
                ,cancel: function(){
                    $('.changeStatus').hide();
                }
                ,zIndex: layer.zIndex //重点1
                ,success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });

            /*监听付款状态，判断日期显示隐藏*/
            layui.use(['form','jquery'],function(){
                var form = layui.form,
                $ = layui.$;
                form.on('select(status)',function(data){
                    if(data.value == '已付清'){
                        $('.payTime').hide();
                    }else{
                        $('.payTime').show();
                    }
                })
            })

        })
    },

    /*调用日期插件*/

    /*编辑模块费用修改和保存按钮点击事件*/
    changeOrSave: function(){
        var input = $('.editOrder td input');
        input.attr('disabled',true);
        $('.save').click(function(){
            input.css('background','#eee');
            input.attr('disabled',true);
        })
        $('.change').click(function(){
            input.css('background','#fff');
            input.attr('disabled',false);
        })
    }
}