$.get("https://v1.hitokoto.cn/?encode=text",function(data,status){
        alert("数据: " + data + "\n状态: " + status);
        if (status=='success'){
        document.writeln('');
        }
    });
