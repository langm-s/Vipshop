$(function () {
  // 渲染详情页数据
  $.ajax({
    url: './data/goods.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      var leftStr = '';
      var rightStr = ''
      $.each(json, function (index, item) {
        // 找到对应的商品码
        if (item.code == getCookie("goodsCode")) {
          // detail-left
          leftStr += `<div><img src="${item.imgurl}" alt="" class="bigimg"></div>
                      <div class="imgplay">
                        <ul>
                          <li><img src="${item.imgurl}" alt=""></li>
                          <li><img src="${item.imgurl}" alt=""></li>
                          <li><img src="${item.imgurl}" alt=""></li>
                          <li><img src="${item.imgurl}" alt=""></li>
                          <li><img src="${item.imgurl}" alt=""></li>
                          <li><img src="${item.imgurl}" alt=""></li>
                        </ul>
                      </div>
                      <div class="product-text">
                        <b>商品编码：FN289a8326</b>
                        <span><i class="iconfont icon-wujiaoxingxingxing"></i>收藏商品</span>
                        <button>分享</button>
                      </div>
                      <div class="promise-box">
                        <div><i class="iconfont icon-weipinhui"></i>100%正品</div>
                        <div><i class="iconfont icon-weipinhui"></i>天天有三折</div>
                      </div>`;
          // detail-right
          rightStr += `<a href="#" class="store-name"> I'M ONE</a>
                        <p class="goods-details">${item.message}</p>
                        <div class="price-wrap">
                          <div class="price-box">
                            <span>￥${item.price}</span>
                            <div class="ori-price">￥<b>${item.oriprice}</b></div>
                            <div class="acount">${item.discount}</div>
                            <img src="img/wpkq.png" alt="">
                            <div class="process">
                              <div class="process-out">
                                <div class="process-in"></div>
                              </div>
                              已抢<i>24</i>%
                            </div>
                          </div>
                        </div>
                        <dl class="deliver">
                          <span>配送</span>
                          <a class="location">
                          <b>请选择省市区</b>
                            <i class="iconfont icon-arrow-down"></i>
                            <div class="area area-aside">
                              <p>请选择你所在的地区</p>
                              <span class="close">x</span>
                              <span class="province">省份
                                <ul>
                                  <li>北京市</li>
                                  <li>广东省</li>
                                  <li>江西省</li>
                                  <li>湖南省</li>
                                  <li>天津市</li>
                                  <li>湖北省</li>
                                  <li>广西省</li>
                                  <li>云南省</li>
                                  <li>贵州省</li>
                                  <li>四川省</li>
                                  <li>山东省</li>
                                  <li>陕西省</li>
                                  <li>山西省</li>
                                  <li>北京市</li>
                                  <li>广东省</li>
                                  <li>江西省</li>
                                  <li>湖南省</li>
                                  <li>天津市</li>
                                  <li>湖北省</li>
                                  <li>广西省</li>
                                  <li>云南省</li>
                                  <li>贵州省</li>
                                  <li>四川省</li>
                                  <li>山东省</li>
                                  <li>陕西省</li>
                                  <li>山西省</li>
                                </ul>
                              </span>
                            </div>
                          </a>
                        </dl>
                        <dl class="freight">
                          <span>运费</span>
                          <a>新会员专享首单满38元免邮(限唯品自营商品，部分商品不可用)</a>
                        </dl>
                        <dl class="color">
                          <span>颜色</span>
                          <ul>
                            <li>浅紫色</li>
                            <li>浅卡其</li>
                          </ul>
                        </dl>
                        <dl class="size">
                          <span>尺码</span>
                          <ul>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                          </ul>
                        </dl>
                        <dl class="count">
                          <span>数量</span>
                          <div class="num">
                            <button class="decrease">-</button>
                            <b>1</b>
                            <button class="add">+</button>
                          </div>
                        </dl>
                        <div class="button-box">
                          <button class="btn1">
                            <h3>￥${item.oriprice}</h3>
                            全网低价
                          </button>
                          <button class="btn2">
                            <h3>￥${item.price}</h3>
                            特卖价
                          </button>
                        </div>
                        <div class="other">
                          <div class="customer-sev">
                            <span>客服</span>
                            <a href="#"><b>在线客服</b>(9:00-22:00)</a>
                          </div>
                          <div class="services">
                            <span>服务</span>
                            <b><i class="iconfont icon-weipinhui"></i>唯品会发货及售后</b>
                            <b><i class="iconfont icon-weipinhui"></i>顺丰配送</b>
                            <b><i class="iconfont icon-weipinhui"></i>7天无理由退货</b>
                            <b><i class="iconfont icon-weipinhui"></i>退货无忧</b>
                            <b><i class="iconfont icon-weipinhui"></i>7天可换</b>
                          </div>
                        </div>`;
        }
      })
      $('.detail-left').html(leftStr);
      $('.detail-right').html(rightStr);
    }
  })
  

  // 选择省市区
  $('.detail-right').on("click",".location",function () {
    $('.area-aside').css("display", "block");
  })
  // 点击关闭选地址框
  $('.detail-right').on("click",".close",function (eve) {
    var e = eve || event;
    e.stopPropagation();//阻止事件冒泡
    $('.area-aside').css('display', 'none');
  })
  // 所选地址对应起来
  $('.detail-right').on("click",".province",function (eve) {
    var e = eve || event;
    e.stopPropagation();//阻止事件冒泡
    var target = e.target;
    if ($(target).is("li")) {
      $('.location b').text($(target).text());
      $('.area-aside').css('display', 'none');
    }
  })
  // 选择颜色
  $('.detail-right').on("click",".color",function (eve) {
    var e = eve || event;
    e.stopPropagation();//阻止事件冒泡
    var target = e.target;
    if ($(target).is("li")) {
      $(target).siblings().css("border", "")
      $(target).css("border", "2px solid #d11365");
    }
  })
  // 选择尺码
  $('.detail-right').on("click",".size",function (eve) {
    var e = eve || event;
    e.stopPropagation();//阻止事件冒泡
    var target = e.target;
    if ($(target).is("li")) {
      $(target).siblings().css("border", "")
      $(target).css("border", "2px solid #d11365");
    }
  })
  // 选择数量
  // 数量增加
  $('.detail-right').on("click",".add",function () {
    $('.num b').text(Number($('.num b').text()) + 1);
  })
  // 数量减少 大于2时触发
  $('.detail-right').on("click",".decrease",function () {
    if (Number($('.num b').text()) > 1) {
      $('.num b').text(Number($('.num b').text()) - 1);
    }
  })
})