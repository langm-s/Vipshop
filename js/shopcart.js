$(function () {
  // 选择数量
  // // 数量增加
  // $('.add').click(function () {
  //   $('.num').text(Number($('.num').text()) + 1);
  // })
  // // 数量减少 大于2时触发
  // $('.decrease').click(function () {
  //   if (Number($('.num').text()) > 1) {
  //     $('.num').text(Number($('.num').text()) - 1);
  //   }
  // })
  $('.buy-list').click(function (eve) {
    var e = eve || event;
    var target = e.target;
    if ($(target).is(".add")) {
      $(target).siblings('.num').text((Number($(target).siblings('.num').text()) + 1));
    }
    if ($(target).is(".decrease")) {
      if (Number($(target).siblings('.num').text()) > 1) {
        $(target).siblings('.num').text((Number($(target).siblings('.num').text()) - 1));
      }
    }
  })
})