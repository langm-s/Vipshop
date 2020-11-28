$(function () {

  // 查看购买列表中有无数据
  // 如果没有 
  if ($('.buy-list').find('li').length === 0) {
    console.log(111);
    $('.none').css("display", "block");
    $('.show').css("display", "none");
    $('.calculate').css("display", "none");
  }
  // 计算金额
  // 计算总金额 总数量 
  var allPrice = 0;
  for (var index = 0; index < $('.single-price span').length; index++) {
    // Number($('.single-price span').eq(index).text()) 商品单价转数字
    // Number($('.single-price span').eq(index).parent("li").find(".num").text())商品数量
    allPrice += Number($('.single-price span').eq(index).text()) * Number($('.single-price span').eq(index).parents("li").find(".num").text());
  }
  $('.amount-top i').text(allPrice);
  $('.amount-bottom i').text(allPrice);


  // 添加减少数量 同时重新计算金额
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
    // 计算总金额 总数量 
    var totalPrice = 0;
    for (var index = 0; index < $('.single-price span').length; index++) {
      // Number($('.single-price span').eq(index).text()) 商品单价转数字
      // Number($('.single-price span').eq(index).parent("li").find(".num").text())商品数量
      totalPrice += Number($('.single-price span').eq(index).text()) * Number($('.single-price span').eq(index).parents("li").find(".num").text());
    }
    $('.amount-top i').text(totalPrice);
    $('.amount-bottom i').text(totalPrice);
  })

  // 点击删除  删除商品 同时重新计算金额
  $('.buy-list').click(function (eve) {
    var e = eve || event;
    var target = e.target;
    if ($(target).is('.operate')) {
      $(target).parents('li').remove();
    }
    // 计算总金额 总数量 
    var totalPrice = 0;
    for (var index = 0; index < $('.single-price span').length; index++) {
      // Number($('.single-price span').eq(index).text()) 商品单价转数字
      // Number($('.single-price span').eq(index).parent("li").find(".num").text())商品数量
      totalPrice += Number($('.single-price span').eq(index).text()) * Number($('.single-price span').eq(index).parents("li").find(".num").text());
    }
    $('.amount-top i').text(totalPrice);
    $('.amount-bottom i').text(totalPrice);
  })

})