/**
 * Showdown Icon Extension, Glyphicon and FontAwesome support for showdown
 * http://github.com/dbtek/showdown-icon
 * 2014, Ismail Demirbilek
 * License: MIT
 */
(function() {
  var a = function(a) {
    return [{
      type: "lang",
      regex: "\\[glyphicon-([A-Za-z\\-]+) *([0-9]*)\\]",
      replace: function(a, b, c) {
        if(c) {
          return b === "\\" ? a : '<span class="glyphicon glyphicon-' + b + '" style="font-size: ' + c + 'px;">' + "</span>"
        }
        else {
          return b === "\\" ? a : '<span class="glyphicon glyphicon-' + b + '">' + "</span>"
        }
      }
    }, {
      type: "lang",
      regex: "\\[fa-([A-Za-z\\-]+) *([0-9]*)\\]",
      replace: function(a, b, c) {
        if(c) {
          return b === "\\" ? a : '<i class="fa fa-' + b + '" style="font-size: ' + c + 'px;">' + "</i>"
        }
        else {
          return b === "\\" ? a : '<i class="fa fa-' + b + '">' + "</i>"
        }
      }
    }]
  };
  typeof window != "undefined" && window.Showdown && window.Showdown.extensions && (window.Showdown.extensions.icon = a), typeof module != "undefined" && (module.exports = a)
})();