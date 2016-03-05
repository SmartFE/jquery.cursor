/**********************************************
 * Created by liangshaofeng on 2016年3月5日
 * 基于jquery的控制光标的插件
 **********************************************/

(function ($) {

  var defaultOptions = {
    "text": "此处添加文本",
    "beginPos": 0,
    "endPos": 5,
    "autoFocus": true
  };

  var methods = {

    init: function (options) {
      var _self = this[0];
      var setting = $.extend(defaultOptions, options);
      var currentCursorPos = methods.getCurrentCursorPos.call(this);
      var str = this.val();
      var length = str.length;
      this.val(str.substring(0, currentCursorPos.selectionStart)
        + setting.text
        + str.substring(currentCursorPos.selectionEnd, length));

      // 设置选中文本
      if (setting.autoFocus) {
        var beginPos = options.beginPos ? options.beginPos : setting.beginPos;
        var endPos = options.endPos ? options.endPos : setting.text.length - 1;
        _self.selectionStart = currentCursorPos.selectionStart + beginPos;
        _self.selectionEnd = currentCursorPos.selectionStart + endPos + 1;
      }


      return this;
    },


    /**
     * 获得当前光标的位置（未考虑兼容IE）
     *
     */
    getCurrentCursorPos: function () {
      var _self = this[0];

      // selectionStart为鼠标选中区域开头的位置
      // selectionEnd为鼠标选中区域结尾的位置
      var selectionStart = _self.selectionStart;
      var selectionEnd = _self.selectionEnd;
      if (typeof  selectionStart === 'number' && typeof selectionEnd === 'number') {
        //非IE
        return ({
          "selectionStart": selectionStart,
          "selectionEnd": selectionEnd
        });
      }
    }
  };

  $.fn.cursor = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.cursor');
    }

  };
})(jQuery);