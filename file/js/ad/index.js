// 常用工具函数
var tools = {


	/* ajax请求get
     * @param url     string   请求的路径
     * @param query   object   请求的参数query
     * @param succCb  function 请求成功之后的回调
     * @param failCb  function 请求失败的回调
     * @param isJson  boolean  true： 解析json  false：文本请求  默认值true
     */
    ajaxGet: function (url, query, succCb, failCb, isJson) {
        // 拼接url加query
        if (query) {
            var parms = tools.formatParams(query);
            url += '?' + parms;
            // console.log('-------------',url);
        }

        // 1、创建对象
        var ajax = new XMLHttpRequest();
        // 2、建立连接
        // true:请求为异步  false:同步
        ajax.open("GET", url, true);
        // ajax.setRequestHeader("Origin",STATIC_PATH); 

        // ajax.setRequestHeader("Access-Control-Allow-Origin","*");   
        // // 响应类型    
        // ajax.setRequestHeader('Access-Control-Allow-Methods', '*');    
        // // 响应头设置    
        // ajax.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');  
        // ajax.withCredentials = true;
        // 3、发送请求
        ajax.send(null);

        // 4、监听状态的改变
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    // 用户传了回调才执行
                    // isJson默认值为true，要解析json
                    if (isJson === undefined) {
                        isJson = true;
                    }
                    var res = isJson ? JSON.parse(ajax.responseText == "" ? '{}' : ajax.responseText) : ajax.responseText;
                    succCb && succCb(res);
                } else {
                    // 请求失败
                    failCb && failCb();
                }

            }
        }


    },
    
    
    	/* ajax请求post
     * @param url     string   请求的路径
     * @param data   object   请求的参数query  
     * @param succCb  function 请求成功之后的回调
     * @param failCb  function 请求失败的回调
     * @param isJson  boolean  true： 解析json  false：文本请求  默认值true
     */
    ajaxPost: function (url, data, succCb, failCb, isJson) {
    
        var formData = new FormData();
        for (var i in data) {
            formData.append(i, data[i]);
        }
        //得到xhr对象
        var xhr = null;
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");

        }

        xhr.open("post", url, true);
		// 设置请求头  需在open后send前
		// 这里的CSRF需自己取后端获取，下面给出获取代码
        xhr.setRequestHeader("X-CSRFToken", CSRF);

        xhr.send(formData);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 判断isJson是否传进来了
                    isJson = isJson === undefined ? true : isJson;
                    succCb && succCb(isJson ? JSON.parse(xhr.responseText) : xhr.responseText);
                }
            }
        }

    },

	 formatParams: function (data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        arr.push(("v=" + Math.random()).replace(".", ""));
        return arr.join("&");
    }

}
let url = "https://v1.hitokoto.cn/"
// 传输数据 为object
let data = {
encode="text",
}

tools.ajaxGet(url, data, function(res){
	mdui.snackbar({
  message: res,
  position: 'top',
});
})
