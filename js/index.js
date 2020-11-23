var area = document.querySelector('#area');
var areaPro = document.querySelector('.area');
var closeArea = document.querySelector('.close')
// 设置选择地区的显示与隐藏
area.onclick = function(){
  console.log(11)
    areaPro.style.display = 'block';
}
closeArea.onclick = function(eve){
  var e = eve || event;
  e.stopPropagation();//阻止事件冒泡
  areaPro.style.display = 'none';
}
area.onblur = function(){
  areaPro.style.display = 'none';
}
