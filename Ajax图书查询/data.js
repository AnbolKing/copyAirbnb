function ajax(type,url,parme,textType,callback){
	var xhr = null;
	var session = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}
	else{
		xhr = new ActiveXobject("Microsoft.XMLHttp");
	}
	if(type == 'get'){
		url = url + "?" + parme;
	}
	if(type == 'post'){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		session = parme;
	}
	xhr.open(type,url,true);
	xhr.send(session);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				if(textType == 'json')
				{
					var datas = xhr.responseText;
					datas = JSON.parse(datas);
					callback(datas);
				}
				if(textType == 'xml')
				{
					var datas = xhr.responseXML;
					callback(datas);
				}
			}
		}
	}
}
