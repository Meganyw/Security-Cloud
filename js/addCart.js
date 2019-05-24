$(function(){
    addCart.addMore();
    addCart.viewEditWeb();
    addCart.viewEditIp();
});


var addCart = {

    /*批量添加*/
    addMore: function(){
        $('.addmore').click(function(){
            layer.open({
                type: 1
                ,title: '批量导入'
                ,area: ['40%', '50%']
                ,shade: 0.8
                ,maxmin: true
                ,content: $('.batchAdd')
                ,btn: ['导入', '取消'] //只是为了演示
                ,yes: function(){

                }
                ,btn2: function(){
                    layer.closeAll();
                }
                ,zIndex: layer.zIndex //重点1
                ,success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });
        })
    },

    /*安全监测查看编辑*/
    viewEditWeb: function(){
        $('#viewEditWeb').click(function(){
            layer.open({
                type: 1
                ,title: '查看 / 编辑网站信息'
                ,area: ['60%', '70%']
                ,shade: 0.8
                ,maxmin: true
                ,content: $('.viewEditWeb')
                ,btn: ['取消']
                ,yes: function(){
                    layer.closeAll();
                    $('.viewEditWeb').hide();
                }
                ,cancel: function(){
                    $('.viewEditWeb').hide();
                }
            });
            addCart.viewEditWebTable();
        })
    },

    /*资产安全监测查看编辑*/
    viewEditIp: function(){
        $('#viewEditIp').click(function(){
            layer.open({
                type: 1
                ,title: '查看 / 编辑IP段'
                ,area: ['60%', '70%']
                ,shade: 0.8
                ,maxmin: true
                ,content: $('.viewEditIp')
                ,btn: ['取消']
                ,yes: function(){
                    layer.closeAll();
                    $('.viewEditIp').hide();
                },
                cancel: function(){
                    $('.viewEditIp').hide();
                }
            });
            addCart.viewEditIpTable();
        })
    },

    /*查看编辑表格*/
    viewEditWebTable: function(){
        $("#viewEditWebTable").datagrid({
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
                {field: 'unitNum', title: '网站名称', width: 100, align: 'center'},
                {field: 'systemNum', title: '网站URL', width: 100, align: 'center'},
                {field: 'fiveSysSum',title: '操作',width: 95,align: 'center',
                    formatter: function (value, row, index) {
                        var c = '<a class="layui-btn layui-btn-danger layui-btn-sm">' + '删除' + '</a>';
                        return c;
                    }
                },
            ]]
        });
    },

    viewEditIpTable: function(){
        $("#viewEditIpTable").datagrid({
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
                {field: 'systemNum', title: 'IP段', width: 100, align: 'center'},
                {field: 'fiveSysSum',title: '操作',width: 95,align: 'center',
                    formatter: function (value, row, index) {
                        var c = '<a class="layui-btn layui-btn-danger layui-btn-sm">' + '删除' + '</a>';
                        return c;
                    }
                },
            ]]
        });
    }
}

