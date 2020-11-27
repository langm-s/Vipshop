$(function () {
  // 设置选择地区的显示与隐藏
  $('#area').click(function () {
    $('.area').css('display', 'block');
  })
  $('.close').click(function (eve) {
    var e = eve || event;
    e.stopPropagation();//阻止事件冒泡
    $('.area').css('display', 'none');
  })
  $('#area').blur(function () {
    $('.area').css('display', 'none');
  })

  // 设置导航栏吸顶
  // 监听事件
  $(document).scroll(function(){
    let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
    if (t > 128) {
      $('.navlist').addClass('box-active')
    } else {
      $('.navlist').removeClass('box-active')
    }
  })

  //渲染每日必看专区商品数据
  // 获取商品列表数据   把商品数据渲染到页面
  $.ajax({
    url: './data/indexhot.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      var goodsStr = '';
      $.each(json, function (index, item) {
        goodsStr += `<a href="#" id="slist">
                      <img src="img/goodli.jpg" alt="" class="goodstyle" />
                      <img src="${item.imgsrc}" alt="" class="slist" />
                      <img src="img/hot.png" alt="" class="hot" />
                      <span>${item.goodsname}</span>
                    </a>`;
      })
      $('.hot-left').html(goodsStr);
      $('.hot-right').html(goodsStr);
    }
  })

  //渲染首页女装商品数据
  // 获取商品列表数据   把商品数据渲染到页面
  $.ajax({
    url: './data/indexladies.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      var goodsStr = '';
      $.each(json, function (index, item) {
        goodsStr += `<div class="item">
                      <a href="#">
                        <img src="${item.imgsrc}" alt="" />
                        <div class="info">
                          <p>${item.message}</p>
                          <span><b>${item.discount}</b>折封顶</span>
                        </div>
                      </a>
                    </div>`;
      })
      $('.page').html(goodsStr);
    }
  })
})
