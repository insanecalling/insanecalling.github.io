!function(e){function t(t){var n=t.match(/\d+/)[0]/100,i=t.match(/[vwh]+/)[0];return("vh"==i?e(window).height()*n:e(window).width()*n)+"px"}function n(e){var n,i;for(n in e)i=e[n],/[vwh]$/.test(i)&&(e[n]=t(i));return e}e.fn.v2p=function(e){return this.css(n(e))}}(jQuery),$(window).resize(function(){$(".cbp-spmenu").v2p({height:"100vh"})}),$(window).resize();