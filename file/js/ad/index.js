$.get("https://v1.hitokoto.cn/?encode=text",function(data,status){
 
        if (status=='success'){
        document.writeln('<div class="mdui-card"><div class="mdui-card-media"><img src="https://api.dujin.org/bing/1920.php"/><div class="mdui-card-media-covered mdui-card-media-covered-transparent"><div class="mdui-card-primary"><div class="mdui-card-primary-title"><i class="mdui-icon material-icons">textsms</i>'+data+'</div></div></div></div>');
        }
    });
