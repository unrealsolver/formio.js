Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function (ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="card">\n  <div class="card-header">\n    <ul class="nav nav-tabs card-header-tabs">\n      ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n      <li class="nav-item' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" role="presentation" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\n        <a class="nav-link' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" href="#' +
((__t = (tab.key)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(tab.label))) == null ? '' : __t) +
'</a>\n      </li>\n      ';
 }) ;
__p += '\n    </ul>\n  </div>\n  ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n  <div\n    role="tabpanel"\n    class="card-body tab-pane' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'"\n    style="display: ' +
((__t = (ctx.currentTab === index ? 'block' : 'none')) == null ? '' : __t) +
'"\n    ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'"\n  >\n    ' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'\n  </div>\n  ';
 }) ;
__p += '\n</div>\n';
return __p
}