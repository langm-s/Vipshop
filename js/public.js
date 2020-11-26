//取给定区间的一个随机整数
function getNumFrom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
//判断素数
function isPrime(num) {
	//1 不是一个素数，排除1这个值
	if (num === 1) return false;
	//判断num是否是一个素数，
	//如果是素数，函数返回 一个true
	//如果不是素数，函数返回 一个false;
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			//执行到这里，num不是一个素数
			return false; //不是素数
		}
	}
	//当程序执行到这里，说明num是一个素数
	return true;
}
//获取随机六进制颜色值
function getColor() {
	var str = "0123456789abcdef"; //index 0-15
	var color = "#";
	//随机到str中取出六个字符
	//将这六个字符拼接在#后面返回
	for (var i = 0; i < 6; i++) {
		color += str[getNumFrom(0, 15)]; //利用随机下标到str中随机取出字符
	}
	return color;
}
//本地化时间函数封装
function formatDate(date) {

	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	//w 0-6
	var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]

	return y + "年" + toDB(m) + "月" + toDB(d) + "日 " + toDB(h) + ":" + toDB(f) + ":" + toDB(s) + " " + week[w];
}
//给1-9的数字前加0处理
function toDB(num) {
	//0-9 前要加0 
	return num < 10 ? "0" + num : num;
}

//封装时间差函数,获取时间差秒数
function getDiffTime(startDate, endDate) {
	return (endDate.getTime() - startDate.getTime()) / 1000;
}
//封装 获取子元素节点  解决ie8 兼容性问题
function getChidren(obj) {
	var childList = obj.childNodes;
	var list = [];
	for (var i = 0; i < childList.length; i++) {
		if (childList[i].nodeType === 1) {
			list.push(childList[i]);
		}
	}
	return list;
}
//封装方法与list.contains类似的功能，hasClass(ele,val),返回true或false;
function hasClass(ele, val) {
	var classArr = ele.className.split(" "); //将该元素的类名存储在一个数组中
	for (var i = 0; i < classArr.length; i++) {
		if (classArr[i] === val) {
			return true;
		}
	}
	return false;
}
//封装方法与list.remove类似的功能，removeClass(ele,val);
function removeClass(ele, val) {
	var classArr = ele.className.split(" ");
	for (var i = 0; i < classArr.length; i++) {
		if (classArr[i] === val) {
			classArr.splice(i, 1);
			i--; //防止出现多个同类名
		} else if (classArr[i] === "") {
			classArr.splice(i, 1);
			i--; //删除多个空格
		}
	}
	div.className = classArr.join(" "); //将删除后的类名返还给元素
}
//自定义函数清除字符串左右空格
function myTrim(str) {
	var startIndex, endIndex; //声明两个变量存储要截取的子字符串的开始下标和结束下标
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === " ") {
			continue;
		} else {
			startIndex = i;
			break;
		}
	}
	for (var j = str.length - 1; j >= 0; j--) {
		if (str.charAt(j) === " ") {
			continue;
		} else {
			endIndex = j;
			break;
		}
	}
	return str.slice(startIndex, endIndex + 1); //结束下标+1，才能截到所有字符
}
//获取obj的子元素节点
function getChildElementNode(obj) {
	//获取obj下的所有的子节点
	var childList = obj.childNodes;
	var list = []; //用于保存元素节点集合
	//循环每一个元素
	for (var i = 0; i < childList.length; i++) {
		//判断每一个元素是否是元素节点
		if (childList[i].nodeType === 1) { //是元素节点
			//将元素节点添加到一个新的数组中
			list.push(childList[i]);
		}
	}
	return list;
}
//找到obj第一个子元素节点
function getFirstChildEleNode(obj) {
	//console.log(getChildElementNode(obj)[0]);
	//return getChildElementNode(obj)[0] ? getChildElementNode(obj)[0] : null;

	var ele = getChildElementNode(obj)[0];
	//if(ele){//ele有对象隐式类型转换，更消耗性能
	if (!!ele) { //程序性能优化
		return ele;
	}
	return null;
}
//找到obj最后一个子元素节点
function getLastChildEleNode(obj) {
	var list = getChildElementNode(obj);
	var lastEle = list[list.length - 1]
	if (!!lastEle) { //程序性能优化
		return lastEle;
	}
	return null;
}
// 解决ie8鼠标单击返回值不同的兼容性
function getButton(eve) {
	//现代浏览器中 0 1 2
	//ie 1 4 2
	//eve接收事件对象的形参
	//通过这个形参可以判断是不是ie8浏览器
	//eve上undefined的情况下是ie8浏览器
	if (!!eve) { //eve对象存在，是现代浏览器
		return eve.button;
	}
	//这里的代码在ie8环境下执行
	var button = window.event.button;
	switch (button) {
		case 1:
			return 0;
		case 4:
			return 1;
		case 2:
			return 2;
	}
}
//给ele添加value这个class名称
function addClass(ele, value) {
	var cName = myTrim(ele.className); //去掉左右空格，防止class="    "这种情况出现

	if (cName === "") {
		//直接将value添加到ele的class中
		ele.className = value;
		return; //不需要再往后执行
	};
	//程序执行到这里，class中是有内容的
	//判断value在ele的class中是否存在，
	//存在不需要再添加
	if (hasClass(ele, value)) return; //存在就退出，不往后执行

	//不存在累加在最后
	ele.className += " " + value;

}
//找到ele的上一个兄弟元素节点
function getPreviousSibling(ele) {
	var pEle = ele.parentNode;
	var firstEle = getFirstChild(pEle);
	if (firstEle === ele) return null;
	var prevNode = ele.previousSibling;
	if (prevNode.nodeType != 1) {
		return getPreviousSibling(prevNode);
	}
	return prevNode;
}
//自定义 通过类名获取有该类名的所有元素集合，返回数组
function getElementByClassName(key) {
	var allEle = document.getElementsByTagName("*"); //获取所有的html元素对象集合
	var keyArr = [];
	for (var i = 0; i < allEle.length; i++) {
		if (allEle[i].className.hasClass(allEle[i], key)) {
			keyArr.push(allEle[i]);
		}
	}
	return keyArr;
}
//自定义阻止默认行为函数
function preventDefault(e) {
	//判断是否在ie8环境下
	if (!!e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	//三目运算符
	//!!e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
//自定义函数阻止事件冒泡
function stopPropagation(e) {
	if (!!e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
	//三目运算符
	!!e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}
//自定义函数事件监听
function addEventListener(ele, event, callBack, flag) {
	if (!!ele.addEventListener) {
		//高版本浏览器
		ele.addEventListener(event, callBack, flag);
	} else {
		//ie8
		ele.attachEvent("on" + event, callBack);
	}
}
//自定义函数解除事件绑定
function removeEvent(ele, event, callBack) {
	if (!!ele.removeEventListener) {
		ele.removeEventListener(event, callBack);
	} else {
		ele.detachEvent("on" + event, callBack);
	}
}
//自定义封装函数  获取样式属性的值 兼容低版本ie
function getStyle(dom, attr) {
	if (dom.currentStyle) {
		return dom.currentStyle[attr];
	} else {
		return getComputedStyle(dom, null)[attr];
	}
}
//自定义运动函数
function animate(dom, options, callback) {
	// 遍历对象属性
	for (var attr in options) {
		// 获取元素当前的attr值
		if (attr === 'opacity') {
			// 获取当前元素的透明度*100
			var current = parseInt(getComputedStyle(dom)[attr] * 100)
			var target = options[attr] * 100
		} else if (attr.indexOf('scroll') !== -1) {
			var current = dom[attr]
			var target = options[attr]
		} else {
			var current = parseInt(getComputedStyle(dom)[attr])
			var target = options[attr]
		}
		options[attr] = {
			'current': current,
			'target': target
		}
	}
	clearInterval(dom.timer)
	dom.timer = setInterval(function () {
		// 遍历对象，取出数据
		for (var attr in options) {
			var current = options[attr].current
			var target = options[attr].target
			// 持续变化的速度
			var speed = (target - current) / 10
			// 浮点数计算会造成结果有偏差，可能造成数据丢失：取整
			// 判断运动方向取整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

			// 临界值判断：剩余运动量<=每次的运动量
			if (Math.abs(target - current) <= Math.abs(speed)) {
				// 到达终点
				if (attr === 'opacity') {
					dom.style[attr] = target / 100 // 立即到达终点
				} else if (attr.indexOf('scroll') !== -1) {
					dom[attr] = target
				} else {
					dom.style[attr] = target + 'px'
				}

				// 删除已运动完成的属性
				delete options[attr]

				for (var attr in options) {
					// 还有其他属性没运动完成，提前结束当前程序，不清除计时器
					return false;
				}
				//如果有回调函数，则执行回调函数
				typeof callback === 'function' ? callback() : ''
				clearInterval(dom.timer) // 清除计时器
			} else {
				// 未到达终点
				options[attr].current += speed
				if (attr === 'opacity') {
					dom.style[attr] = options[attr].current / 100
				} else if (attr.indexOf('scroll') !== -1) {
					dom[attr] = options[attr].current
				} else {
					dom.style[attr] = options[attr].current + 'px'
				}
			}
		}
	}, 20)
}
// 获取元素到最外层定位父级的距离
function offset(dom, bool) {
	var t = 0, l = 0
	var bdl = dom.clientLeft // 保存当前元素的左边框
	var bdt = dom.clientTop// 保存当前元素的上边框
	while (dom) {
		l += dom.offsetLeft + dom.clientLeft
		t += dom.offsetTop + dom.clientTop
		// 每次循环完让当前dom元素等于他的定位父级
		dom = dom.offsetParent
	}
	if (bool) {// 包含自身边框
		return { left: l, top: t }
	} else {// 不包含自身边框
		return { left: l - bdl, top: t - bdt }
	}
}
//封装函数判断是否是对象类型
function isObject(obj){
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}
//封装Ajax函数
function ajax(options){
  // data -> 'key=value&key=value'
  // 1.创建数据交互对象
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest() // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
  }

  // 判断并格式化参数data
  var data = ''
  // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
  if (isObject(options.data)) {
    // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
    for (var key in options.data) {
      data += key+'='+options.data[key]+'&'
    }
    // data = 'k1=v1&k2=v2&k3=v3&'
    data = data.substring(0,data.length-1)
  }

  if (typeof options.data === 'string') {
    data = options.data
  }

  // 判断请求方式
  if (options.type.toLowerCase() === 'get') {
    var time = ''
    time = options.cache ? '' : Date.now()
    // 2.打开连接
    xhr.open(options.type,options.url+'?'+data+'&_='+time,true) // 默认true，异步
    // 3.发送请求
    xhr.send(null) // get请求传null
  }
  if (options.type.toLowerCase() === 'post') {
    // 2.打开连接
    xhr.open(options.type,options.url,true) // 默认true，异步
    // post 请不会有缓存问题

    // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")

    // 3.发送请求
    xhr.send(data) // post请求 要传递的参数在此传
  }
  
  // 4.等待请求/响应状态
  // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
  xhr.onreadystatechange = function (){
    // console.log( xhr.readyState );// 2 3 4
    if (xhr.readyState === 4) {// 请求完成
    // xhr.status 响应状态
      if (xhr.status === 200) {// OK 响应就绪
        // xhr.responseText 响应的数据
        // options.success(xhr.responseText)
        // 支持dataType配置
        if (options.dataType === 'json') {
          var json = JSON.parse(xhr.responseText)
          options.success(json)
        } else if (options.dataType === 'xml') {
          options.success(xhr.responseXML)
        } else {
          options.success(xhr.responseText)
        }
      } else {
        // console.log(xhr.status)
        options.error(xhr.status)
      }
    }
  }
}
//封装jsonp函数
function jsonp(options){
  // options.success 变成全局函数
  window[options.jsonpCallback] = options.success

  // 判断 options.data的数据类型
  // 如果字符串，直接赋值data变量
  // 如果是对象，转成参数序列的字符串
  var data = ''
  if (typeof options.data === 'string') {
    data = options.data
  }
  if (isObject(options.data)) {
    for (var key in options.data){
      data += key+'='+options.data[key]+'&'
    }
    data = data.substring(0,data.length-1)
  }

  // 创建 script标签
  var oScript = document.createElement('script')
  // 给src属性赋值（url+接口参数）
  oScript.src = options.url+'?'+options.jsonp+'='+options.jsonpCallback+'&'+data
  // 把script插入文档中
  document.body.appendChild(oScript)
  // script标签加载完成时，删除此标签
  oScript.onload = function (){
    document.body.removeChild(oScript)
  }
}

function $1(selector){
  return document.querySelector(selector)
}
function $2(selector){
  return document.querySelectorAll(selector)
}
function promiseAjax(options){
  return new Promise((resolve,reject)=>{
    // data -> 'key=value&key=value'
    // 1.创建数据交互对象
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest() // 非IE5 6
    } else {
      var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
    }

    // 判断并格式化参数data
    var data = ''
    // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
    if (isObject(options.data)) {
      // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
      for (var key in options.data) {
        data += key+'='+options.data[key]+'&'
      }
      // data = 'k1=v1&k2=v2&k3=v3&'
      data = data.substring(0,data.length-1)
    }

    if (typeof options.data === 'string') {
      data = options.data
    }

    // 判断请求方式
    if (options.type.toLowerCase() === 'get') {
      var time = ''
      time = options.cache ? '' : Date.now()
      // 2.打开连接
      xhr.open(options.type,options.url+'?'+data+'&_='+time,true) // 默认true，异步
      // 3.发送请求
      xhr.send(null) // get请求传null
    }
    if (options.type.toLowerCase() === 'post') {
      // 2.打开连接
      xhr.open(options.type,options.url,true) // 默认true，异步
      // post 请不会有缓存问题

      // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")

      // 3.发送请求
      xhr.send(data) // post请求 要传递的参数在此传
    }
    
    // 4.等待请求/响应状态
    // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
    xhr.onreadystatechange = function (){
      // console.log( xhr.readyState );// 2 3 4
      if (xhr.readyState === 4) {// 请求完成
      // xhr.status 响应状态
        if (xhr.status === 200) {// OK 响应就绪
          // xhr.responseText 响应的数据
          // options.success(xhr.responseText)
          // 支持dataType配置
          if (options.dataType === 'json') {
            var json = JSON.parse(xhr.responseText)
            resolve(json)
          } else if (options.dataType === 'xml') {
            resolve(xhr.responseXML)
          } else {
            resolve(xhr.responseText)
          }
        } else {
          // console.log(xhr.status)
          reject(xhr.status)
        }
      }
    }
  })
}

// 设置cookie
function setCookie(options){
  options.days = options.days || 0
  options.path = options.path || ''
  if (options.days === 0) {
    document.cookie = options.key+'='+options.val+'; path='+options.path
  } else {
    var d = new Date()
    d.setDate(d.getDate()+options.days)
    document.cookie = options.key+'='+options.val+'; expires='+d+'; path='+options.path
  }
}

// 获取cookie
function getCookie(key){
  var arr = document.cookie.split('; ')
  for (var i = 0, len = arr.length; i < len; i++){
    var arr2 = arr[i].split('=')
    if (arr2[0] === key) {
      return arr2[1]
    }
  }
  return null
}

// 删除cookie（cookie过期浏览器自动删除）
function removeCookie(key){
  setCookie({
    key: key,
    val: '123',
    days: -2
  })
}

