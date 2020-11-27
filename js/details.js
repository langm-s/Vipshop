$(function () {
  $.ajax({
    url: './data/',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      var goodsStr = '';
      $.each(json, function (index, item) {
        goodsStr += ``;
      })
      $('.goodslist').html(goodsStr);
    }
  })

  // 选择省市区
  $('.location').click(function () {
    $('.area-aside').css("display", "block");
  })
  // 点击关闭选地址框
  $('.close').click(function (eve) {
    var e = eve || event;
    e.stopPropagation();//阻止事件冒泡
    $('.area-aside').css('display', 'none');
  })
  // 所选地址对应起来
  $('.province').click(function (eve) {
    var e = eve || event;
    var target = e.target;
    if ($(target).is("li")) {
      $('.location').text($(target).text());
    }
  })
  // 选择颜色
  $('.color').click(function (eve) {
    var e = eve || event;
    var target = e.target;
    if ($(target).is("li")) {
      $(target).siblings().css("border", "")
      $(target).css("border", "2px solid #d11365");
    }
  })
  // 选择尺码
  $('.size').click(function (eve) {
    var e = eve || event;
    var target = e.target;
    if ($(target).is("li")) {
      $(target).siblings().css("border", "")
      $(target).css("border", "2px solid #d11365");
    }
  })
  // 选择数量
  // 数量增加
  $('.add').click(function () {
    $('.num b').text(Number($('.num b').text()) + 1);
  })
  // 数量减少 大于2时触发
  $('.decrease').click(function () {
    if (Number($('.num b').text()) > 1) {
      $('.num b').text(Number($('.num b').text()) - 1);
    }
  })
})