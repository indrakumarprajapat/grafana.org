!function(e,t,n,i){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.4.7",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n=!1,i=t.find("["+this.attr_name()+"-watch]:visible"),r=t.data(this.attr_name(!0)+"-init");if(0!==i.length){var o=i.first().offset().top;if(r.before_height_change(),t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"),i.height("inherit"),i.each(function(){var t=e(this);t.offset().top!==o&&(n=!0)}),r.equalize_on_stack!==!1||!n){var s=i.map(function(){return e(this).outerHeight(!1)}).get();if(r.use_tallest){var a=Math.max.apply(null,s);i.css("height",a)}else{var c=Math.min.apply(null,s);i.css("height",c)}r.after_height_change(),t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")}}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this);t.image_loaded(t.S("img",this),function(){t.equalize(n)})})}}}(jQuery,window,window.document);