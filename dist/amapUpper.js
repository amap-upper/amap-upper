!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).amapUpper=t()}(this,(function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e};"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){e.exports=function(){function e(e){var a=[];return e.AMapUI&&a.push(t(e.AMapUI)),e.Loca&&a.push(r(e.Loca)),Promise.all(a)}function t(e){return new Promise((function(t,r){var n=[];if(e.plugins)for(var p=0;p<e.plugins.length;p+=1)-1==o.AMapUI.plugins.indexOf(e.plugins[p])&&n.push(e.plugins[p]);if(s.AMapUI===a.failed)r("前次请求 AMapUI 失败");else if(s.AMapUI===a.notload){s.AMapUI=a.loading,o.AMapUI.version=e.version||o.AMapUI.version,p=o.AMapUI.version;var c=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/ui/"+p+"/main.js",l.onerror=function(e){s.AMapUI=a.failed,r("请求 AMapUI 失败")},l.onload=function(){if(s.AMapUI=a.loaded,n.length)window.AMapUI.loadUI(n,(function(){for(var e=0,r=n.length;e<r;e++){var a=n[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}for(t();i.AMapUI.length;)i.AMapUI.splice(0,1)[0]()}));else for(t();i.AMapUI.length;)i.AMapUI.splice(0,1)[0]()},c.appendChild(l)}else s.AMapUI===a.loaded?e.version&&e.version!==o.AMapUI.version?r("不允许多个版本 AMapUI 混用"):n.length?window.AMapUI.loadUI(n,(function(){for(var e=0,r=n.length;e<r;e++){var a=n[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}t()})):t():e.version&&e.version!==o.AMapUI.version?r("不允许多个版本 AMapUI 混用"):i.AMapUI.push((function(e){e?r(e):n.length?window.AMapUI.loadUI(n,(function(){for(var e=0,r=n.length;e<r;e++){var a=n[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}t()})):t()}))}))}function r(e){return new Promise((function(t,r){if(o.AMap.version.startsWith("2.0"))r("Loca 暂不适配 JSAPI 2.0,请使用 1.4.15");else if(s.Loca===a.failed)r("前次请求 Loca 失败");else if(s.Loca===a.notload){s.Loca=a.loading,o.Loca.version=e.version||o.Loca.version;var n=o.Loca.version,p=o.key,c=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/loca?v="+n+"&key="+p,l.onerror=function(e){s.Loca=a.failed,r("请求 AMapUI 失败")},l.onload=function(){for(s.Loca=a.loaded,t();i.Loca.length;)i.Loca.splice(0,1)[0]()},c.appendChild(l)}else s.Loca===a.loaded?e.version&&e.version!==o.Loca.version?r("不允许多个版本 Loca 混用"):t():e.version&&e.version!==o.Loca.version?r("不允许多个版本 Loca 混用"):i.Loca.push((function(e){e?r(e):r()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a,n;(n=a||(a={})).notload="notload",n.loading="loading",n.loaded="loaded",n.failed="failed";var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},i={AMap:[],AMapUI:[],Loca:[]},p=[],c=function(e){"function"==typeof e&&(s.AMap===a.loaded?e(window.AMap):p.push(e))};return{load:function(t){return new Promise((function(r,n){if(s.AMap==a.failed)n("");else if(s.AMap==a.notload){var i=t.key,l=t.version,u=t.plugins;i?(window.AMap&&"lbs.amap.com"!==location.host&&n("禁止多种API加载方式混用"),o.key=i,o.AMap.version=l||o.AMap.version,o.AMap.plugins=u||o.AMap.plugins,s.AMap=a.loading,l=document.body||document.head,window.___onAPILoaded=function(o){if(delete window.___onAPILoaded,o)s.AMap=a.failed,n(o);else for(s.AMap=a.loaded,e(t).then((function(){r(window.AMap)})).catch(n);p.length;)p.splice(0,1)[0]()},(u=document.createElement("script")).type="text/javascript",u.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+i+"&plugin="+o.AMap.plugins.join(","),u.onerror=function(e){s.AMap=a.failed,n(e)},l.appendChild(u)):n("请填写key")}else if(s.AMap==a.loaded)if(t.key&&t.key!==o.key)n("多个不一致的 key");else if(t.version&&t.version!==o.AMap.version)n("不允许多个版本 JSAPI 混用");else{if(i=[],t.plugins)for(l=0;l<t.plugins.length;l+=1)-1==o.AMap.plugins.indexOf(t.plugins[l])&&i.push(t.plugins[l]);i.length?window.AMap.plugin(i,(function(){e(t).then((function(){r(window.AMap)})).catch(n)})):e(t).then((function(){r(window.AMap)})).catch(n)}else if(t.key&&t.key!==o.key)n("多个不一致的 key");else if(t.version&&t.version!==o.AMap.version)n("不允许多个版本 JSAPI 混用");else{var M=[];if(t.plugins)for(l=0;l<t.plugins.length;l+=1)-1==o.AMap.plugins.indexOf(t.plugins[l])&&M.push(t.plugins[l]);c((function(){M.length?window.AMap.plugin(M,(function(){e(t).then((function(){r(window.AMap)})).catch(n)})):e(t).then((function(){r(window.AMap)})).catch(n)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},i={AMap:[],AMapUI:[],Loca:[]}}}}()}));var n=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e};function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0,a=r.data,n=r.markerStyles,o=void 0===n?[]:n,s=r.setLastIcon,i=void 0===s||s,c=r.initIcon,l=r.markerOpt,u=void 0===l?{}:l,M=r.markerFormatter,f=r.clickCallback,d={};o.forEach((function(e){var t=e.iconName,r=e.icon;if(!t||!r)throw Error("markerStylesItem must has iconName as String and icon as AMap.Icon");d[t]=new AMap.Icon(r)})),console.log(d),c=c||o[0]&&o[0].iconName;var y=a.map((function(r,a){var n=M?M(r,a,d):{},o=new AMap.Marker(p(p({position:[r.longitude,r.latitude],extData:r,anchor:"bottom-center",offset:new AMap.Pixel(0,0),topWhenClick:!0,icon:d[c]},u),n));return o._u_key=r.key||o._amap_id,o._u_dataIndex=a+t,o._u_setIcon=o.setIcon,o.setIcon=function(e){var t;if("string"==typeof e){if(!(t=d[e]))throw Error("no has this icon, plase check you iconName:"+e)}else t=e;o.lastIcon=o.getIcon(),o._u_setIcon(t)},f&&o.on("click",(function(t){e.oldClickMarker&&i&&e.oldClickMarker.setIcon(e.oldClickMarker.lastIcon),e.oldClickMarker=t.target,f(t,e.oldClickMarker,d)})),o}));return y}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var k=function(){function t(r){e(this,t),this.map=null,this.initMap(r)}return r(t,[{key:"initMap",value:function(e){this.map=new AMap.Map(e.target,Object.assign(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({center:[120.682817,30.513707],zooms:[3,20],zoom:13,expandZoomRange:!0},e)))}}]),t}();k.prototype.triggerEvent=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};AMap.event.trigger(e,t,s({target:e},r))},function(e){e.prototype.mapMarkers=function(e){var t=e.type,r=e.data,a=e.markerStyles,n=void 0===a?{}:a,o=(e.initGroup,e.setLastIcon),s=void 0===o||o,i=e.initIcon,p=e.markerOpt,l=void 0===p?{}:p,u=e.markerFormatter,M=e.clickCallback;this.mapMarkersMap||(this.mapMarkersMap=new Map);var f=this.mapMarkersMap.get(t);f||((f=new AMap.OverlayGroup)._u_data=[],f._u_lastLength=0,f._u_markersOptions={markerStyles:n,setLastIcon:s,initIcon:i,markerOpt:l,markerFormatter:u,clickCallback:M},this.mapMarkersMap.set(t,f)),f.clearOverlays(),f._u_data=r;var d=c.call.apply(c,[this,0].concat(Array.prototype.slice.call(arguments)));return f.setMap(this.map),f.addOverlays(d),d},e.prototype.inactiveLastMarker=function(){this.oldClickMarker&&this.oldClickMarker.setIcon(this.oldClickMarker.lastIcon),this.oldClickMarker=null},e.prototype.getMapMarkersByType=function(e){return this.mapMarkersMap&&this.mapMarkersMap.get(e)||null},e.prototype.showMapMarkersByType=function(e){var t=this.mapMarkersMap&&this.mapMarkersMap.get(e)||null;return t&&t.show(),t},e.prototype.hideMapMarkersByType=function(e){var t=this.mapMarkersMap&&this.mapMarkersMap.get(e)||null;return t&&t.hide(),t},e.prototype.clearMapMarkersByType=function(e){var t=this.mapMarkersMap&&this.mapMarkersMap.get(e)||null;return t&&(t.setMap(null),this.mapMarkersMap.delete(e)),t},e.prototype.addMapMarkersByType=function(e,t){var r=this.mapMarkersMap&&this.mapMarkersMap.get(e)||null;if(!r)throw Error("no have this type");var a=c.call(this,r._u_data.length,u(u({},r._u_markersOptions),{},{data:t}));return r.addOverlays(a),r._u_data=r._u_data.concat(t),r},e.prototype.getMarkerExtDataByType=function(e){var t=this.mapMarkersMap&&this.mapMarkersMap.get(e)||null;if(t)return t._u_data;throw Error("no have this type")}}(k),function(e){e.prototype.massMarks=function(e){var t=this,r=e.type,a=e.data,n=e.initIcon,o=e.markerStyles,s=void 0===o?[]:o,i=e.setLastIcon,p=void 0===i||i,c=e.initGroup,l=void 0===c||c,u=e.styleFormatter,M=e.options,d=void 0===M?{}:M,y=e.clickCallback,h={},k=[];if(s.forEach((function(e,t){var r=e.iconName,a=e.icon;if(!r||!a)throw Error("markerStylesItem must has iconName as String and icon as mass Icon");k.push(a),h[r]=t})),n=n||s[0]&&s[0].iconName,a.forEach((function(e,t){if(e.style=h[n]||0,u){var r=u(e,t);"number"==typeof h[r]&&(e.style=h[r])}})),!l)return a;this.massMarksMap||(this.massMarksMap=new Map);var v=this.massMarksMap.get(r);v&&(v.setMap(null),this.massMarksMap.delete(r)),(v=new AMap.MassMarks(a,f(f({zIndex:100,alwaysRender:!1},d),{},{style:k})))._u_styles=k,v._u_data=a,v._u_massOptions={type:r,initIcon:n,markerStyles:s,setLastIcon:p,styleFormatter:u},y&&v.on("click",(function(e){t.oldClickMassData&&p&&t.oldClickMassData.setIcon(t.oldClickMassData._u_lastIcon),e.data.setIcon=function(t){"number"==typeof h[t]&&(e.data._u_lastIcon=Object.keys(h).find((function(t){return h[t]===e.data.style})),e.data.style=h[t])},t.oldClickMassData=e.data,y(e,h),setTimeout((function(){t.renderMassMarks(r)}))})),v.setMap(this.map),this.massMarksMap.set(r,v)},e.prototype.renderMassMarks=function(e){var t=this.massMarksMap.get(e);t&&t.setStyle(t._u_styles)},e.prototype.getMassMarkersByType=function(e){return this.massMarksMap&&this.massMarksMap.get(e)||null},e.prototype.showMassMarkersByType=function(e){var t=this.massMarksMap&&this.massMarksMap.get(e)||null;return t&&t.show(),t},e.prototype.hideMassMarkersByType=function(e){var t=this.massMarksMap&&this.massMarksMap.get(e)||null;return t&&t.hide(),t},e.prototype.clearMassMarkersByType=function(e){var t=this.massMarksMap&&this.massMarksMap.get(e)||null;return t&&(t.setMap(null),this.massMarksMap.delete(e)),t},e.prototype.addMassMarkersByType=function(e,t){var r=this.massMarksMap&&this.massMarksMap.get(e)||null;if(!r)throw Error("no have this type");var a=Object.assign({},r._u_massOptions,{initGroup:!1,data:t});return t=this.massMarks(a),r._u_data=r._u_data.concat(t),r.setData(r._u_data),r},e.prototype.getMassExtDataByType=function(e){var t=this.massMarksMap&&this.massMarksMap.get(e)||null;if(t)return t._u_data;throw Error("no have this type")}}(k),function(e){e.prototype.markerClusterer=function(e){var t=e.type,r=e.data,a=e.markerStyles,n=void 0===a?[]:a,o=e.setLastIcon,s=void 0===o||o,i=e.initIcon,p=e.markerOpt,l=void 0===p?{}:p,u=e.markerFormatter,M=e.clickCallback,f=e.clusterStyles,d=void 0===f?[]:f,h=e.clusterOption,k=void 0===h?{}:h;this.clusterMarkersMap||(this.clusterMarkersMap=new Map);var v=this.clusterMarkersMap.get(t);v||((v=new AMap.MarkerClusterer(this.map,[],y({styles:d,minClusterSize:5},k)))._u_data=[],v._u_markersOptions={markerStyles:n,setLastIcon:s,initIcon:i,markerOpt:l,markerFormatter:u,clickCallback:M},this.clusterMarkersMap.set(t,v)),v._u_data=r;var m=c.call.apply(c,[this,0].concat(Array.prototype.slice.call(arguments)));v.setMarkers(m)},e.prototype.getMarkerClustererByType=function(e){return this.clusterMarkersMap&&this.clusterMarkersMap.get(e)||null},e.prototype.clearMarkerClustererByType=function(e){var t=this.clusterMarkersMap&&this.clusterMarkersMap.get(e)||null;return t&&(t.setMap(null),this.clusterMarkersMap.delete(e)),t},e.prototype.addMarkerClustererByType=function(e,t){var r=this.clusterMarkersMap&&this.clusterMarkersMap.get(e)||null;if(!r)throw Error("no have this type");var a=c.call(this,r._u_data.length,y(y({},r._u_markersOptions),{},{data:t}));return r.addMarkers(a),r},e.prototype.getClusterExtDataByType=function(e){var t=this.clusterMarkersMap&&this.clusterMarkersMap.get(e)||null;if(t)return t._u_data;throw Error("no have this type")}}(k);var v=function(){function t(r){var n=this;e(this,t),this.PENDING="pending",this.FULFILLED="fulfilled",this.REJECTED="rejected",this.status=this.PENDING,this.onFulfillInitMaps=[];var o=Object.assign({},{version:"1.4.15",plugins:["AMap.Geocoder","AMap.PolyEditor","AMap.MarkerClusterer","AMap.MouseTool","AMap.Autocomplete","AMap.PlaceSearch"]},r);if(!o.key)throw Error("key has not be fount.");a.load(o).then((function(e){window.AMap=e,n.status=n.FULFILLED,n.onFulfillInitMaps.forEach((function(e){return e()}))}))}return r(t,[{key:"initMap",value:function(e,t){if(this.status===this.REJECTED)throw Error("jsApi加载出错，请检查！");this.status===this.FULFILLED&&t(new k(e)),this.status===this.PENDING&&this.onFulfillInitMaps.push((function(){t(new k(e))}))}}]),t}(),m=null;return{load:function(e){return m||(m=new v(e)),m},initMap:function(e,t){if(!m)throw Error("You must execute load before executing initMap");m.initMap(e,t)}}}));
