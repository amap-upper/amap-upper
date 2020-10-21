/* eslint-disable no-undef */
import { polyDefaultStyle } from './drawEditor';

const markerContentDefaultCss = {
  padding: '5px',
  'border-radius': '2px',
  background: '#4169E1',
  color: '#fff'
};

export default function(AMapU) {
  AMapU.prototype.polygon = function({
    type = 'default',
    data = [/** {name:'', path:[]} */],
    styleOption = {},
    markerContentCss = {},
    clickCallback,
    styleFormatter
  }) {
    if (!data.length) {
      console.error('no has data length!');
      return;
    }

    if (!this.polygonMap) {
      this.polygonMap = new Map();
    }

    let group = this.polygonMap.get(type);
    group && group.clearAll();
    this.oldSelectPoly = null;

    const polys = [];
    const markers = [];
    const overlayGroup = new AMap.OverlayGroup();
    const markerContents = [];

    for (let i = 0; i < data.length; i++) {
      const polyData = { extData: data[i] };
      polyData.path = data[i].path;
      polyData.name = data[i].name;

      polyData.index = i;
      if (Object.prototype.toString.call(polyData.path) !== '[object Array]') {
        console.error(`path in data[${i}] is not a Array`);
        continue;
      }

      const formatStyle = styleFormatter
        ? (styleFormatter(polyData) || {})
        : {};

      const poly = new AMap.Polygon({
        path: polyData.path,
        ...polyDefaultStyle,
        ...styleOption,
        ...formatStyle
      });

      poly.on('click', e => {
        clickCallback && clickCallback(e, polyData);
      });

      polyData.poly = poly;
      polys.push(poly);

      if (polyData.name) {
        const markerContent = document.createElement('div');
        markerContent.innerText = polyData.name;

        const styles = { ...markerContentDefaultCss, ...markerContentCss };
        Object.keys(styles).forEach(key => {
          markerContent.style[key] = styles[key];
        });

        markerContent.style['pointer-events'] = 'none';

        markerContents.push(markerContent);

        const center = polyData.extData.center || poly.getBounds().getCenter();
        polyData.center = center;

        var marker = new AMap.Marker({
          position: center,
          content: markerContent,
          anchor: 'center',
          clickable: false
        });

        markers.push(marker);
      }
    }

    overlayGroup.addOverlays(polys);
    overlayGroup.addOverlays(markers);
    overlayGroup.setMap(this.map);

    setTimeout(() => {
      markerContents.forEach(dom => {
        dom.parentElement && (dom.parentElement.style['pointer-events'] = 'none');
      });
    }, 600);
    setTimeout(() => {
      markerContents.forEach(dom => {
        dom.parentElement && (dom.parentElement.style['pointer-events'] = 'none');
      });
    }, 2000);

    function clearAll() {
      overlayGroup.setMap(null);
      overlayGroup.clearOverlays();
    }

    function edit({
      index,
      editorStartCallback,
      editorEndCallback
    }) {
      const poly = polys[index];

      if (!poly) {
        console.log('no has this index');
      }

      this.newPolyEditor({ source: poly, editorStartCallback, editorEndCallback });
    }

    function select(
      index,
      styleOption,
      setFitView = true
    ) {
      const poly = polys[index];
      if (!poly) {
        console.log('no has this index');
      }

      if (this.oldSelectPoly) {
        this.oldSelectPoly.setOptions(this.oldSelectPoly.oldOptions);
        delete this.oldSelectPoly.oldOptions;
      }

      poly.oldOptions = poly.getOptions();
      poly.setOptions({ ...styleOption });
      this.oldSelectPoly = poly;

      setFitView && this.map.setFitView([poly]);
    }

    group = { overlayGroup, polys, markers, extData: data, clearAll, edit: edit.bind(this), select: select.bind(this) };

    this.polygonMap.set(type, group);
    return group;
  };
}
