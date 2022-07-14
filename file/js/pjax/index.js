$(function(){
    //这里注意
    //live只有jquery - 1.8支持
    //如果是jquery - 2.0 以上，请使用on
    $('a').on('click',function(){
        var url        =    $(this).attr('href');
        var target    =    $(this).attr('target');
        //如果是javascript:;证明是无需使用pjax跳转页面的链接
        //如果是#证明是无需使用pjax跳转页面的链接
        //如果target为真，不适用pjax改为原始a链接方法自行处理
        if(url!="javascript:;" && url!="#" && !target){
            //这里调用加载中的提示
            alert('玩命加载中');
            //调用pjax的方法
            //url是目标链接
            //container是获取目标链接内容后填充的位置
            $.pjax({
                url: url,
                container: 'body'
            })
            $.pjax({
                url: url,
                container: 'head'
            })
        }
    });
});
