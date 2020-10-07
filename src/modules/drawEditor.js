function drawEditor(AMapU) {
  const defaultStyle = {
    strokeColor: '#4169E1',
    strokeOpacity: 1,
    strokeWeight: 4,
    // 折线样式还支持 'dashed'
    strokeStyle: 'dashed',
    // strokeStyle是dashed时有效
    strokeDasharray: [10, 5],
    lineJoin: 'round',
    lineCap: 'round',
    zIndex: 50
  };

  let mouseing = false;
  AMapU.prototype.mouseToolDraw = function(
    {
      type,
      styleOption = {},
      clearLast = false,
      clearPoly,
      callback
    }
  ) {
    if (mouseing) {
      console.error('wait this mouse done');
      return;
    }
    mouseing = true;
    if (clearLast) {
      this.lastMouseDrawPolys && this.lastMouseDrawPolys.forEach(last=>{
        last && last.setMap(null);
      });
      this.lastMouseDrawPolys = [];
    }
    const hasType = ['polyline', 'polygon', 'circle', 'rectangle', 'marker', 'rule', 'measureArea', 'rectZoomIn', 'rectZoomOut'].includes(type);
    if (!hasType) {
      throw Error("type is required and in 'polyline', 'polygon', 'circle', 'rectangle', 'marker', 'rule', 'measureArea', 'rectZoomIn', 'rectZoomOut'");
    }
    this.mouseTool = new AMap.MouseTool(this.map);

    this.mouseTool.on('draw', function({ obj }) {
      mouseing = false;
      // 是否保留覆盖物实例
      this.mouseTool && this.mouseTool.close(!!clearPoly);
      if (!clearPoly) {
        this.lastMouseDrawPolys
          ? this.lastMouseDrawPolys.push(obj)
          : this.lastMouseDrawPolys = [obj];
      }
      // 把画出的实例作为参数
      callback && callback(obj);
    }.bind(this));

    this.mouseTool[type]({
      ...defaultStyle,
      ...styleOption
    });
  };

  let editing = false;
  AMapU.prototype.newPolyEditor = function({
    type,
    path,
    clearLast = true,
    styleOption = {},
    editorStartCallback
  }) {
    if (editing) {
      console.error('wait this editor done');
      return;
    }
    editing = true;
    // 结束编辑事件
    this.polyEditor && this.polyEditor.close();
    if (clearLast) {
      this.lastEditorPolys && this.lastEditorPolys.forEach(last=>{
        last && last.setMap(null);
      });
      this.lastEditorPolys = [];
    }

    const fn = (poly) => {
      this.lastEditorPolys
        ? this.lastEditorPolys.push(poly)
        : this.lastEditorPolys = [poly];
      poly.setMap(this.map);

      // 缩放地图到合适的视野级别
      this.map.setFitView([poly]);
      // 初始化编辑器
      this.polyEditor = new AMap.PolyEditor(this.map, poly);

      const end = ()=>{
        editing = false;
        this.polyEditor.off('end', end);
      };
      this.polyEditor.on('end', end);

      this.polyEditor.open();
      editorStartCallback && editorStartCallback(this.polyEditor);
    };

    if (path) {
      let poly = null;
      if (type === 'polyline') {
        poly = new AMap.Polyline({
          path,
          ...defaultStyle,
          ...styleOption
        });
      } else if (type === 'polygon') {
        poly = new AMap.Polygon({
          path,
          ...defaultStyle,
          ...styleOption
        });
      }
      fn(poly);
    } else {
      this.mouseToolDraw({type, styleOption, clearPoly: true, callback: fn});
    }
  };
}

export default drawEditor;
