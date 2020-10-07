(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.amapUpper = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var dist = createCommonjsModule(function (module, exports) {
  (function(m,p){module.exports=p();})(commonjsGlobal,function(){function m(a){var b=[];a.AMapUI&&b.push(p(a.AMapUI));a.Loca&&b.push(r(a.Loca));return Promise.all(b)}function p(a){return new Promise(function(h,c){var e=[];if(a.plugins)for(var f=0;f<a.plugins.length;f+=1)-1==d.AMapUI.plugins.indexOf(a.plugins[f])&&e.push(a.plugins[f]);if(g.AMapUI===b.failed)c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");
  else if(g.AMapUI===b.notload){g.AMapUI=b.loading;d.AMapUI.version=a.version||d.AMapUI.version;f=d.AMapUI.version;var l=document.body||document.head,k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/ui/"+f+"/main.js";k.onerror=function(a){g.AMapUI=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25");};k.onload=function(){g.AMapUI=b.loaded;if(e.length)window.AMapUI.loadUI(e,function(){for(var a=0,b=e.length;a<b;a++){var c=e[a].split("/").slice(-1)[0];window.AMapUI[c]=
  arguments[a];}for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]();});else for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]();};l.appendChild(k);}else g.AMapUI===b.loaded?a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):e.length?window.AMapUI.loadUI(e,function(){for(var a=0,b=e.length;a<b;a++){var c=e[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a];}h();}):h():a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):
  n.AMapUI.push(function(a){a?c(a):e.length?window.AMapUI.loadUI(e,function(){for(var a=0,b=e.length;a<b;a++){var c=e[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a];}h();}):h();});})}function r(a){return new Promise(function(h,c){if(d.AMap.version.startsWith("2.0"))c("Loca \u6682\u4e0d\u9002\u914d JSAPI 2.0,\u8bf7\u4f7f\u7528 1.4.15");else if(g.Loca===b.failed)c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if(g.Loca===b.notload){g.Loca=b.loading;d.Loca.version=a.version||d.Loca.version;
  var e=d.Loca.version,f=d.key,l=document.body||document.head,k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/loca?v="+e+"&key="+f;k.onerror=function(a){g.Loca=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25");};k.onload=function(){g.Loca=b.loaded;for(h();n.Loca.length;)n.Loca.splice(0,1)[0]();};l.appendChild(k);}else g.Loca===b.loaded?a.version&&a.version!==d.Loca.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):h():a.version&&a.version!==
  d.Loca.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):n.Loca.push(function(a){a?c(a):c();});})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var b;(function(a){a.notload="notload";a.loading="loading";a.loaded="loaded";a.failed="failed";})(b||(b={}));var d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},g={AMap:b.notload,AMapUI:b.notload,Loca:b.notload},n={AMap:[],AMapUI:[],Loca:[]},q=[],t=function(a){"function"==
  typeof a&&(g.AMap===b.loaded?a(window.AMap):q.push(a));};return {load:function(a){return new Promise(function(h,c){if(g.AMap==b.failed)c("");else if(g.AMap==b.notload){var e=a.key,f=a.version,l=a.plugins;e?(window.AMap&&"lbs.amap.com"!==location.host&&c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"),d.key=e,d.AMap.version=f||d.AMap.version,d.AMap.plugins=l||d.AMap.plugins,g.AMap=b.loading,f=document.body||document.head,window.___onAPILoaded=function(d){delete window.___onAPILoaded;
  if(d)g.AMap=b.failed,c(d);else for(g.AMap=b.loaded,m(a).then(function(){h(window.AMap);})["catch"](c);q.length;)q.splice(0,1)[0]();},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+d.AMap.version+"&key="+e+"&plugin="+d.AMap.plugins.join(","),l.onerror=function(a){g.AMap=b.failed;c(a);},f.appendChild(l)):c("\u8bf7\u586b\u5199key");}else if(g.AMap==b.loaded)if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&
  a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else {e=[];if(a.plugins)for(f=0;f<a.plugins.length;f+=1)-1==d.AMap.plugins.indexOf(a.plugins[f])&&e.push(a.plugins[f]);if(e.length)window.AMap.plugin(e,function(){m(a).then(function(){h(window.AMap);})["catch"](c);});else m(a).then(function(){h(window.AMap);})["catch"](c);}else if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");
  else {var k=[];if(a.plugins)for(f=0;f<a.plugins.length;f+=1)-1==d.AMap.plugins.indexOf(a.plugins[f])&&k.push(a.plugins[f]);t(function(){if(k.length)window.AMap.plugin(k,function(){m(a).then(function(){h(window.AMap);})["catch"](c);});else m(a).then(function(){h(window.AMap);})["catch"](c);});}})},reset:function(){delete window.AMap;delete window.AMapUI;delete window.Loca;d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}};g={AMap:b.notload,AMapUI:b.notload,
  Loca:b.notload};n={AMap:[],AMapUI:[],Loca:[]};}}});
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function initTools(AMapU) {
    AMapU.prototype.triggerEvent = function (c, eventName) {
      var extArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      AMap.event.trigger(c, eventName, _objectSpread({
        target: c
      }, extArgs));
    };
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _buildMarkers() {
    var _this = this;

    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        data = _ref.data,
        _ref$markerStyles = _ref.markerStyles,
        markerStyles = _ref$markerStyles === void 0 ? [] : _ref$markerStyles,
        _ref$setLastIcon = _ref.setLastIcon,
        setLastIcon = _ref$setLastIcon === void 0 ? true : _ref$setLastIcon,
        initIcon = _ref.initIcon,
        _ref$markerOpt = _ref.markerOpt,
        markerOpt = _ref$markerOpt === void 0 ? {} : _ref$markerOpt,
        markerFormatter = _ref.markerFormatter,
        clickCallback = _ref.clickCallback;

    var icons = {};
    markerStyles.forEach(function (_ref2) {
      var iconName = _ref2.iconName,
          icon = _ref2.icon;

      if (!iconName || !icon) {
        throw Error('markerStylesItem must has iconName as String and icon as AMap.Icon');
      }

      icons[iconName] = new AMap.Icon(icon);
    });
    console.log(icons);
    initIcon = initIcon || markerStyles[0] && markerStyles[0].iconName;
    var markers = data.map(function (item, index) {
      var opt = markerFormatter ? markerFormatter(item, index, icons) : {};
      var marker = new AMap.Marker(_objectSpread$1(_objectSpread$1({
        position: [item.longitude, item.latitude],
        extData: item,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        topWhenClick: true,
        icon: icons[initIcon]
      }, markerOpt), opt));
      marker._u_key = item.key || marker._amap_id;
      marker._u_dataIndex = index + offset;
      marker._u_setIcon = marker.setIcon;

      marker.setIcon = function (iconName) {
        var icon;

        if (typeof iconName === 'string') {
          icon = icons[iconName];

          if (!icon) {
            throw Error('no has this icon, plase check you iconName:' + iconName);
          }
        } else {
          icon = iconName;
        }

        marker.lastIcon = marker.getIcon();

        marker._u_setIcon(icon);
      };

      clickCallback && marker.on('click', function (e) {
        _this.oldClickMarker && setLastIcon && _this.oldClickMarker.setIcon(_this.oldClickMarker.lastIcon);
        _this.oldClickMarker = e.target;
        clickCallback(e, _this.oldClickMarker, icons);
      });
      return marker;
    });
    return markers;
  }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function initMapMarkers (AMapU) {
    AMapU.prototype.mapMarkers = function (_ref) {
      var type = _ref.type,
          data = _ref.data,
          _ref$markerStyles = _ref.markerStyles,
          markerStyles = _ref$markerStyles === void 0 ? {} : _ref$markerStyles,
          _ref$initGroup = _ref.initGroup,
          _ref$setLastIcon = _ref.setLastIcon,
          setLastIcon = _ref$setLastIcon === void 0 ? true : _ref$setLastIcon,
          initIcon = _ref.initIcon,
          _ref$markerOpt = _ref.markerOpt,
          markerOpt = _ref$markerOpt === void 0 ? {} : _ref$markerOpt,
          markerFormatter = _ref.markerFormatter,
          clickCallback = _ref.clickCallback;

      if (!this.mapMarkersMap) {
        this.mapMarkersMap = new Map();
      }

      var OverlayGroup = this.mapMarkersMap.get(type);

      if (!OverlayGroup) {
        OverlayGroup = new AMap.OverlayGroup();
        OverlayGroup._u_data = [];
        OverlayGroup._u_lastLength = 0;
        OverlayGroup._u_markersOptions = {
          markerStyles: markerStyles,
          setLastIcon: setLastIcon,
          initIcon: initIcon,
          markerOpt: markerOpt,
          markerFormatter: markerFormatter,
          clickCallback: clickCallback
        };
        this.mapMarkersMap.set(type, OverlayGroup);
      }

      OverlayGroup.clearOverlays();
      OverlayGroup._u_data = data;

      var markers = _buildMarkers.call.apply(_buildMarkers, [this, 0].concat(Array.prototype.slice.call(arguments)));

      OverlayGroup.setMap(this.map);
      OverlayGroup.addOverlays(markers);
      return markers;
    };

    AMapU.prototype.inactiveLastMarker = function () {
      this.oldClickMarker && this.oldClickMarker.setIcon(this.oldClickMarker.lastIcon);
      this.oldClickMarker = null;
    };

    AMapU.prototype.getMapMarkersByType = function (type) {
      return this.mapMarkersMap && this.mapMarkersMap.get(type) || null;
    };

    AMapU.prototype.showMapMarkersByType = function (type) {
      var overlays = this.mapMarkersMap && this.mapMarkersMap.get(type) || null;
      overlays && overlays.show();
      return overlays;
    };

    AMapU.prototype.hideMapMarkersByType = function (type) {
      var overlays = this.mapMarkersMap && this.mapMarkersMap.get(type) || null;
      overlays && overlays.hide();
      return overlays;
    };

    AMapU.prototype.clearMapMarkersByType = function (type) {
      var overlays = this.mapMarkersMap && this.mapMarkersMap.get(type) || null;

      if (overlays) {
        overlays.setMap(null);
        this.mapMarkersMap.delete(type);
      }

      return overlays;
    };

    AMapU.prototype.addMapMarkersByType = function (type, data) {
      var overlays = this.mapMarkersMap && this.mapMarkersMap.get(type) || null;

      if (overlays) {
        var markers = _buildMarkers.call(this, overlays._u_data.length, _objectSpread$2(_objectSpread$2({}, overlays._u_markersOptions), {}, {
          data: data
        }));

        overlays.addOverlays(markers);
        overlays._u_data = overlays._u_data.concat(data);
      } else {
        throw Error('no have this type');
      }

      return overlays;
    };

    AMapU.prototype.getMarkerExtDataByType = function (type) {
      var overlays = this.mapMarkersMap && this.mapMarkersMap.get(type) || null;

      if (overlays) {
        return overlays._u_data;
      } else {
        throw Error('no have this type');
      }
    };
  }

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function massMarks (AMapU) {
    AMapU.prototype.massMarks = function (_ref) {
      var _this = this;

      var type = _ref.type,
          data = _ref.data,
          initIcon = _ref.initIcon,
          _ref$markerStyles = _ref.markerStyles,
          markerStyles = _ref$markerStyles === void 0 ? [] : _ref$markerStyles,
          _ref$setLastIcon = _ref.setLastIcon,
          setLastIcon = _ref$setLastIcon === void 0 ? true : _ref$setLastIcon,
          _ref$initGroup = _ref.initGroup,
          initGroup = _ref$initGroup === void 0 ? true : _ref$initGroup,
          styleFormatter = _ref.styleFormatter,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          clickCallback = _ref.clickCallback;
      var icons = {};
      var styles = [];
      markerStyles.forEach(function (_ref2, index) {
        var iconName = _ref2.iconName,
            icon = _ref2.icon;

        if (!iconName || !icon) {
          throw Error('markerStylesItem must has iconName as String and icon as mass Icon');
        }

        styles.push(icon);
        icons[iconName] = index;
      });
      initIcon = initIcon || markerStyles[0] && markerStyles[0].iconName;
      data.forEach(function (dataItem, dataIndex) {
        dataItem.style = icons[initIcon] || 0;

        if (styleFormatter) {
          var iconName = styleFormatter(dataItem, dataIndex);

          if (typeof icons[iconName] === 'number') {
            dataItem.style = icons[iconName];
          }
        }
      });

      if (!initGroup) {
        return data;
      }

      if (!this.massMarksMap) {
        this.massMarksMap = new Map();
      }

      var mass = this.massMarksMap.get(type);

      if (mass) {
        mass.setMap(null);
        this.massMarksMap.delete(type);
      }

      mass = new AMap.MassMarks(data, _objectSpread$3(_objectSpread$3({
        zIndex: 100,
        alwaysRender: false
      }, options), {}, {
        style: styles
      }));
      mass._u_styles = styles;
      mass._u_data = data;
      mass._u_massOptions = {
        type: type,
        initIcon: initIcon,
        markerStyles: markerStyles,
        setLastIcon: setLastIcon,
        styleFormatter: styleFormatter
      };
      clickCallback && mass.on('click', function (e) {
        _this.oldClickMassData && setLastIcon && _this.oldClickMassData.setIcon(_this.oldClickMassData._u_lastIcon);

        e.data.setIcon = function (iconName) {
          if (typeof icons[iconName] === 'number') {
            e.data._u_lastIcon = Object.keys(icons).find(function (key) {
              return icons[key] === e.data.style;
            });
            e.data.style = icons[iconName];
          }
        };

        _this.oldClickMassData = e.data;
        clickCallback(e, icons);
        setTimeout(function () {
          _this.renderMassMarks(type);
        });
      });
      mass.setMap(this.map);
      this.massMarksMap.set(type, mass);
    };

    AMapU.prototype.renderMassMarks = function (type) {
      var mass = this.massMarksMap.get(type);

      if (mass) {
        mass.setStyle(mass._u_styles);
      }
    };

    AMapU.prototype.getMassMarkersByType = function (type) {
      return this.massMarksMap && this.massMarksMap.get(type) || null;
    };

    AMapU.prototype.showMassMarkersByType = function (type) {
      var mass = this.massMarksMap && this.massMarksMap.get(type) || null;
      mass && mass.show();
      return mass;
    };

    AMapU.prototype.hideMassMarkersByType = function (type) {
      var mass = this.massMarksMap && this.massMarksMap.get(type) || null;
      mass && mass.hide();
      return mass;
    };

    AMapU.prototype.clearMassMarkersByType = function (type) {
      var mass = this.massMarksMap && this.massMarksMap.get(type) || null;

      if (mass) {
        mass.setMap(null);
        this.massMarksMap.delete(type);
      }

      return mass;
    };

    AMapU.prototype.addMassMarkersByType = function (type, data) {
      var mass = this.massMarksMap && this.massMarksMap.get(type) || null;

      if (mass) {
        var options = Object.assign({}, mass._u_massOptions, {
          initGroup: false,
          data: data
        });
        data = this.massMarks(options);
        mass._u_data = mass._u_data.concat(data);
        mass.setData(mass._u_data);
      } else {
        throw Error('no have this type');
      }

      return mass;
    };

    AMapU.prototype.getMassExtDataByType = function (type) {
      var mass = this.massMarksMap && this.massMarksMap.get(type) || null;

      if (mass) {
        return mass._u_data;
      } else {
        throw Error('no have this type');
      }
    };
  }

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function markerClusterer (AMapU) {
    AMapU.prototype.markerClusterer = function (_ref) {
      var type = _ref.type,
          data = _ref.data,
          _ref$markerStyles = _ref.markerStyles,
          markerStyles = _ref$markerStyles === void 0 ? [] : _ref$markerStyles,
          _ref$setLastIcon = _ref.setLastIcon,
          setLastIcon = _ref$setLastIcon === void 0 ? true : _ref$setLastIcon,
          initIcon = _ref.initIcon,
          _ref$markerOpt = _ref.markerOpt,
          markerOpt = _ref$markerOpt === void 0 ? {} : _ref$markerOpt,
          markerFormatter = _ref.markerFormatter,
          clickCallback = _ref.clickCallback,
          _ref$clusterStyles = _ref.clusterStyles,
          clusterStyles = _ref$clusterStyles === void 0 ? [] : _ref$clusterStyles,
          _ref$clusterOption = _ref.clusterOption,
          clusterOption = _ref$clusterOption === void 0 ? {} : _ref$clusterOption;

      if (!this.clusterMarkersMap) {
        this.clusterMarkersMap = new Map();
      }

      var cluster = this.clusterMarkersMap.get(type);

      if (!cluster) {
        cluster = new AMap.MarkerClusterer(this.map, [], _objectSpread$4({
          styles: clusterStyles,
          minClusterSize: 5
        }, clusterOption));
        cluster._u_data = [];
        cluster._u_markersOptions = {
          markerStyles: markerStyles,
          setLastIcon: setLastIcon,
          initIcon: initIcon,
          markerOpt: markerOpt,
          markerFormatter: markerFormatter,
          clickCallback: clickCallback
        };
        this.clusterMarkersMap.set(type, cluster);
      }

      cluster._u_data = data;

      var markers = _buildMarkers.call.apply(_buildMarkers, [this, 0].concat(Array.prototype.slice.call(arguments)));

      cluster.setMarkers(markers);
    };

    AMapU.prototype.getMarkerClustererByType = function (type) {
      return this.clusterMarkersMap && this.clusterMarkersMap.get(type) || null;
    };

    AMapU.prototype.clearMarkerClustererByType = function (type) {
      var cluster = this.clusterMarkersMap && this.clusterMarkersMap.get(type) || null;

      if (cluster) {
        cluster.setMap(null);
        this.clusterMarkersMap.delete(type);
      }

      return cluster;
    };

    AMapU.prototype.addMarkerClustererByType = function (type, data) {
      var cluster = this.clusterMarkersMap && this.clusterMarkersMap.get(type) || null;

      if (cluster) {
        var markers = _buildMarkers.call(this, cluster._u_data.length, _objectSpread$4(_objectSpread$4({}, cluster._u_markersOptions), {}, {
          data: data
        }));

        cluster.addMarkers(markers);
      } else {
        throw Error('no have this type');
      }

      return cluster;
    };

    AMapU.prototype.getClusterExtDataByType = function (type) {
      var cluster = this.clusterMarkersMap && this.clusterMarkersMap.get(type) || null;

      if (cluster) {
        return cluster._u_data;
      } else {
        throw Error('no have this type');
      }
    };
  }

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var MapUpper = /*#__PURE__*/function () {
    function MapUpper(options) {
      classCallCheck(this, MapUpper);

      this.map = null;
      this.initMap(options);
    }
    /**
     *初始化地图
     * @param {Object} options 参数配置与高德的相同
     * @memberof MapContainer
     */


    createClass(MapUpper, [{
      key: "initMap",
      value: function initMap(options) {
        this.map = new AMap.Map(options.target, Object.assign(_objectSpread$5({
          center: [120.682817, 30.513707],
          zooms: [3, 20],
          zoom: 13,
          expandZoomRange: true
        }, options)));
      }
    }]);

    return MapUpper;
  }();

  initTools(MapUpper);
  initMapMarkers(MapUpper);
  massMarks(MapUpper);
  markerClusterer(MapUpper);

  var MapLoader = /*#__PURE__*/function () {
    function MapLoader(amapApiOptions) {
      var _this = this;

      classCallCheck(this, MapLoader);

      // 定义初始化状态常量
      this.PENDING = 'pending'; // 地图api加载中

      this.FULFILLED = 'fulfilled'; // 地图API加载成功

      this.REJECTED = 'rejected'; // 地图API 加载失败

      this.status = this.PENDING; // 存放initMap

      this.onFulfillInitMaps = [];
      var _options = {
        // key: 'e4493da5c834ae788f61df36e4a98be8', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '1.4.15',
        // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geocoder', 'AMap.PolyEditor', 'AMap.MarkerClusterer', 'AMap.MouseTool', 'AMap.Autocomplete', 'AMap.PlaceSearch'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // AMapUI: { // 是否加载 AMapUI，缺省不加载
        //   version: '1.1', // AMapUI 缺省 1.1
        //   plugins: [] // 需要加载的 AMapUI ui插件
        // }

      };
      var options = Object.assign({}, _options, amapApiOptions);

      if (!options.key) {
        throw Error('key has not be fount.');
      }

      dist.load(options).then(function (pack) {
        window.AMap = pack;
        _this.status = _this.FULFILLED;

        _this.onFulfillInitMaps.forEach(function (fn) {
          return fn();
        });
      });
    }

    createClass(MapLoader, [{
      key: "initMap",
      value: function initMap(options, mapDoneCallback) {
        if (this.status === this.REJECTED) {
          throw Error('jsApi加载出错，请检查！');
        }

        if (this.status === this.FULFILLED) {
          mapDoneCallback(new MapUpper(options));
        }

        if (this.status === this.PENDING) {
          this.onFulfillInitMaps.push(function () {
            mapDoneCallback(new MapUpper(options));
          });
        }
      }
    }]);

    return MapLoader;
  }();

  var mapUpperInstance = null;

  function load(amapApiOptions) {
    if (!mapUpperInstance) {
      mapUpperInstance = new MapLoader(amapApiOptions);
    }

    return mapUpperInstance;
  }

  function initMap(options, mapDoneCallback) {
    if (!mapUpperInstance) {
      throw Error('You must execute load before executing initMap');
    }

    mapUpperInstance.initMap(options, mapDoneCallback);
  }

  var index = {
    load: load,
    initMap: initMap
  };

  return index;

})));
