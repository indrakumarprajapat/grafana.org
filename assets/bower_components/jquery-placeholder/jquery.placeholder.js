/*! http://mths.be/placeholder v2.0.9 by @mathias */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t){var n={},o=/^jQuery\d+$/;return e.each(t.attributes,function(e,t){t.specified&&!o.test(t.name)&&(n[t.name]=t.value)}),n}function n(t,n){var o=this,r=e(o);if(o.value==r.attr("placeholder")&&r.hasClass("placeholder"))if(r.data("placeholder-password")){if(r=r.hide().nextAll('input[type="password"]:first').show().attr("id",r.removeAttr("id").data("placeholder-id")),t===!0)return r[0].value=n;r.focus()}else o.value="",r.removeClass("placeholder"),o==i()&&o.select()}function o(){var o,i=this,r=e(i),a=this.id;if(""===i.value){if("password"===i.type){if(!r.data("placeholder-textinput")){try{o=r.clone().attr({type:"text"})}catch(c){o=e("<input>").attr(e.extend(t(this),{type:"text"}))}o.removeAttr("name").data({"placeholder-password":r,"placeholder-id":a}).bind("focus.placeholder",n),r.data({"placeholder-textinput":o,"placeholder-id":a}).before(o)}r=r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",a).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}function i(){try{return document.activeElement}catch(e){}}var r,a,c="[object OperaMini]"==Object.prototype.toString.call(window.operamini),s="placeholder"in document.createElement("input")&&!c,u="placeholder"in document.createElement("textarea")&&!c,d=e.valHooks,f=e.propHooks;s&&u?(a=e.fn.placeholder=function(){return this},a.input=a.textarea=!0):(a=e.fn.placeholder=function(){var e=this;return e.filter((s?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=s,a.textarea=u,r={get:function(t){var n=e(t),o=n.data("placeholder-password");return o?o[0].value:n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":t.value},set:function(t,r){var a=e(t),c=a.data("placeholder-password");return c?c[0].value=r:a.data("placeholder-enabled")?(""===r?(t.value=r,t!=i()&&o.call(t)):a.hasClass("placeholder")?n.call(t,!0,r)||(t.value=r):t.value=r,a):t.value=r}},s||(d.input=r,f.value=r),u||(d.textarea=r,f.value=r),e(function(){e(document).delegate("form","submit.placeholder",function(){var t=e(".placeholder",this).each(n);setTimeout(function(){t.each(o)},10)})}),e(window).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})}))});