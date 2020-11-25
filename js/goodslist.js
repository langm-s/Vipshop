// 事件委托，展开关闭筛选栏的更多项目
$('.command').click(function (eve) {
  var e = eve || event;
  var target = e.target;
  // console.log('点击了');
  if ($(target).hasClass("expand")) {
    //点击更多选项 展开
    $('.hide-datalist').css("display", "block");
    $('.expand').css("display", 'none');
    $('.collapse').css("display", 'block');
  }
  if ($(target).hasClass("collapse")) {
    //点击收起 关闭更多选项区域
    $('.hide-datalist').css("display", "none");
    $('.collapse').css("display", 'none');
    $('.expand').css("display", 'block');
  }
})

// 点击要筛选条件  已选条件栏显示
// 在所有条件内部给目标设置一个isadd属性 判断是否已经添加到已选
$('.datalist').find('a').attr("isadd", "false");
$('.datalist').click(function (eve) {
  var e = eve || event;
  var target = e.target;
  if ($(target).is('a')) {
    // 给选中的条件改颜色，兄弟元素没有颜色
    // $(target).siblings().removeClass("pink");
    $(target).addClass('pink');
    var domStr = ''
    var content = $('.selectedlist').html();
    // isadd属性为false  还没添加
    if ($(target).attr("isadd") == 'false') {
      // 把选中的条件添加到已选栏
      domStr += `<div class="selected-content">
                    <span></span>:<b></b>
                    <button class="del-sle">x</button>
                </div>`;
      $('.selectedlist').html(content + domStr);
      $('.selected-content span').last().text($(target).parent().siblings('h3').text());
      $('.selected-content b').last().text($(target).text());
      //指明这个目标条件已经添加
      $(target).attr("isadd", "true");
      // 显示“清空已选条件按钮”
      $('.clear-choice').css("display", "block");
    }
    // 显示已选栏
    $('.selected').css("display", 'block')
  }
})

// 已选栏中的操作
$('.selected').click(function (eve) {
  var e = eve || event;
  var target = e.target;
  // 点击删除已选栏中的条件
  if ($(target).hasClass("del-sle")) {
    // 保存我们所删除条件的分类
    var typetxt = $(target).siblings('span').text();
    // 保存我们所删除条件
    var seltxt = $(target).siblings('b').text();
    // 找到所删除的条件在选择区域对应的位置
    for (let i = 0; i < $('.datalist').length; i++) {
      // 找到分类
      if ($('.datalist').eq(i).find('h3').text() == typetxt) {
        // 找到该分类下我们删除的条件
        for (let j = 0; j < $('.datalist').eq(i).find('a').length; j++) {
          if ($('.datalist').eq(i).find('a').eq(j).text() == seltxt) {
            // 之前选中的条件颜色取消 同时更改isadd属性为false
            $('.datalist').eq(i).find('a').eq(j).removeClass('pink');
            $('.datalist').eq(i).find('a').eq(j).attr("isadd", "false");
          }
        }
      }
    }
    $(target).parent().remove();
    // 判断已选栏中是否还有内容
    if ($('.selectedlist').find('.selected-content').length == 0) {
      // 隐藏已选栏
      $('.selected').css("display", "none");
      // 隐藏更多选项区域
      $('.hide-datalist').css("display", "none");
      $('.collapse').css("display", 'none');
      $('.expand').css("display", 'block');
    }
  }
  //  点击清空已选条件
  if ($(target).hasClass("clear-choice")) {
    // 清空内容
    $('.selectedlist').html('');
    // 之前选中的条件颜色取消 同时更改isadd属性为false
    $('.datalist').find('a').removeClass('pink');
    $('.datalist').find('a').attr("isadd", "false");
    //隐藏已选栏
    $('.selected').css("display", "none");
    // 隐藏更多选项区域
    $('.hide-datalist').css("display", "none");
    $('.collapse').css("display", 'none');
    $('.expand').css("display", 'block');
  }
})

// 鼠标经过商品，显示经过边框
$('.goods').hover(
  function () {
    $(this).find('.borders').css('display', 'block');
  },
  function(){
    $(this).find('.borders').css('display', 'none');
  }
)



