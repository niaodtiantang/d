$.get("https://v1.hitokoto.cn/?encode=text",function(data,status){
        alert("数据: " + data + "\n状态: " + status);
        if (status=='success'){
        document.writeln('<div class="mdui-card"><div class="mdui-card-media"><img src="https://api.dujin.org/bing/1920.php"/><div class="mdui-card-media-covered mdui-card-media-covered-transparent"><div class="mdui-card-primary"><div class="mdui-card-primary-title">Title</div><div class="mdui-card-primary-subtitle">Subtitle</div></div></div></div>');
        }
    });
