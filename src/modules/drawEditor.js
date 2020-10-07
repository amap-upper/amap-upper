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

  AMapU.prototype.mouseToolDraw = function(
    {
      type,
      styleOption = {},
      clearPoly,
      callback
    }
  ) {
    // this.mouseTool && this.mouseTool.close(true);
    const hasType = ['polyline', 'polygon', 'circle', 'rectangle', 'marker'].includes(type);
    if (!hasType) { throw new Error("type is required and in ['polyline', 'polygon', 'circle']"); }
    this.mouseTool = new AMap.MouseTool(this.map);

    this.mouseTool.on('draw', function({ obj }) {
      // 是否保留覆盖物实例
      this.mouseTool && this.mouseTool.close(!!clearPoly);
      // 把画出的实例作为参数
      callback && callback(obj);
    }.bind(this));

    this.mouseTool[type]({
      ...defaultStyle,
      ...styleOption
    });
  };

  AMapU.prototype.newPolyEditor = function({
    type,
    path,
    clearLast = true,
    styleOption = {},
    startEditorCallback,
    addNodeCallback,
    adjustCallback,
    endCallback
  }) {
    // 结束编辑事件
    this.polyEditor && this.polyEditor.close();
    if (clearLast) {
      this.lastEditorPolys && this.lastEditorPolys.forEach(last=>{
        last && last.setMap(null);
      });
      this.lastEditorPolys = [];
    }

    const fn = (poly) => {
      this.lastEditorPolys.push(poly);
      poly.setMap(this.map);

      // 缩放地图到合适的视野级别
      this.map.setFitView([poly]);
      // 初始化编辑器
      this.polyEditor = new AMap.PolyEditor(this.map, poly);

      //  添加节点事件
      this.polyEditor.on('addnode', function(event) {
        addNodeCallback && addNodeCallback(event);
      });
      // 节点改变事件
      this.polyEditor.on('adjust', function(event) {
        adjustCallback && adjustCallback(event);
      });
      // 结束编辑事件
      this.polyEditor.on('end', function(event) {
        endCallback && endCallback(event);
      // event.target 即为编辑后的折线对象
      });

      this.polyEditor.open();
      startEditorCallback && startEditorCallback(this.polyEditor);
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
      this.mouseToolDraw({type, styleOption, clearPoly: false, callback: fn});
    }
  };
}

export default drawEditor;
