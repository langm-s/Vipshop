// 渲染数据  根据浏览器本地存储  读取加入购物车的商品数据
var goodsCode = getCookie("linkcarCode").split(",");
var goodsCount = getCookie("goodsCount").split(",");
var goodsSize = getCookie("goodsSize").split(",");
var goodsIndex = getCookie("goodsIndex").split(",");
$.ajax({
  url: './data/goods.json',
  type: 'get',
  dataType: 'json',
  success: function (json) {
    var goodsStr = '';
    $.each(json, function (index, item) {
      for (var i = 0; i < goodsCode.length; i++) {
        if (goodsCode[i] == item.code) {
          goodsStr += `<li index="${goodsIndex[i]}">
                    <div class="msg">
                      <a href="#"><img src="${item.imgurl}" alt=""></a>
                      <a href="#" class="aside-msg"><b>自营</b><i>|</i>冬季时尚百搭亮丝钉珠木耳边优雅套头女装针织衫女</a>
                      <span class="size">尺码：<span>${goodsSize[i]}</span></span>
                    </div>
                    <div class="single-price">￥<span>${item.price}</span></div>
                    <div class="count">
                      <button class="decrease">-</button><span class="num">${goodsCount[i]}</span><button class="add">+</button>
                    </div>
                    <a class="operate">删除</a>
                  </li>`;
        }
      }
    })
    $('.buy-list').html(goodsStr);
  }
})
// 等渲染完成执行下面的功能
$(function () {
  // 查看购买列表中有无数据
  // 如果没有 
  if ($('.buy-list').find('li').length === 0) {
    // console.log(111);
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


  // 添加减少数量 同时重新计算金额 浏览器本地存储数量也要变化
  $('.buy-list').click(function (eve) {
    var e = eve || event;
    var target = e.target;
    // 点击增加
    if ($(target).is(".add")) {
      $(target).siblings('.num').text((Number($(target).siblings('.num').text()) + 1));
      goodsCount[Number($(target).parents('li').attr("index"))-1] = Number(goodsCount[Number($(target).parents('li').attr("index")-1)])+1;
      setCookie({
        key: "goodsCount",
        val: goodsCount,
        days: 99,
      });
    }
    // 点击减少
    if ($(target).is(".decrease")) {
      if (Number($(target).siblings('.num').text()) > 1) {
        $(target).siblings('.num').text((Number($(target).siblings('.num').text()) - 1));
        goodsCount[Number($(target).parents('li').attr("index"))-1] = Number(goodsCount[Number($(target).parents('li').attr("index")-1)])-1;
        setCookie({
          key: "goodsCount",
          val: goodsCount,
          days: 99,
        });
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
      // goodsCode.splice(Number($(target).parents('li').attr("index"))-1,1)
      // goodsCount.splice(Number($(target).parents('li').attr("index"))-1,1)
      // goodsSize.splice(Number($(target).parents('li').attr("index"))-1,1)
      // goodsIndex.splice(Number($(target).parents('li').attr("index"))-1,1)
      // setCookie({
      //   key: "goodsCount",
      //   val: goodsCount,
      //   days: 99,
      // });
      // setCookie({
      //   key: "goodsCode",
      //   val: goodsCode,
      //   days: 99,
      // });
      // setCookie({
      //   key: "goodsSize",
      //   val: goodsSize,
      //   days: 99,
      // });
      // setCookie({
      //   key: "goodsIndex",
      //   val: goodsIndex,
      //   days: 99,
      // });
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