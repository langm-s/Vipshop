// 设置选择地区的显示与隐藏
$('#area').click (function(){
    $('.area').css('display','block');
})
$('.close').click (function(eve){
  var e = eve || event;
  e.stopPropagation();//阻止事件冒泡
  $('.area').css('display','none');
})
$('#area').blur(function(){
  $('.area').css('display','none');
})

// 设置导航栏吸顶
// 监听事件
window.addEventListener('scroll', function(){
  let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
  if(t>128){
   $('.navlist').addClass('box-active')
 }else{
   $('.navlist').removeClass('box-active')
 }
})
