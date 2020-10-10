
function moveGroup(AMapU) {
  AMapU.prototype.markerMove = function({
    type,
    path = [],
    markerOptions,
    polylineOptions = {},
    showPassPolyline = false,
    passPolylineOptions = {},
    moveEndCallback,
    movingCalback,
    speed
  }) {

    if (!this.markerMoveMap) {
      this.markerMoveMap = new Map();
    }
    let moveGroup = this.markerMoveMap.get(type);
    if (moveGroup) {
      moveGroup.marker && moveGroup.marker.setMap(null);
      moveGroup.polyline && moveGroup.polyline.setMap(null);
      moveGroup.passPolyline && moveGroup.passPolyline.setMap(null);
      this.massMarksMap.delete(type);
    }

    if (path.length < 2) {
      throw Error('path length must more than 2 item');
    }

    const group = {};
    // 生成路径线
    group.polyline = new AMap.Polyline({
      path,
      strokeColor: 'rgba(0,197,148,1)',
      strokeOpacity: 1,
      strokeWeight: 4,
      strokeStyle: 'solid',
      lineJoin: 'round',
      lineCap: 'square',
      zIndex: 50,
      ...polylineOptions
    });

    group.marker = new AMap.Marker({
      position: path[0],
      autoRotation: false,
      ...markerOptions
    });

    if (showPassPolyline) {
      group.passPolyline = new AMap.Polyline({
        path: [],
        strokeColor: 'rgba(255,197,148,1)',
        strokeOpacity: 1,
        strokeWeight: 4,
        strokeStyle: 'solid',
        lineJoin: 'round',
        lineCap: 'square',
        zIndex: 60,
        ...passPolylineOptions
      });
    }
    moveEndCallback && group.marker.on('movealong', moveEndCallback);
    group.marker.on('moving', (e)=>{
      if (showPassPolyline) {
        group.passPolyline.setPath(e.passedPath);
        movingCalback & movingCalback(e);
      }
    });

    speed = speed || 1000;
    group.path = path;
    group.speed = speed;

    Object.keys(group).forEach(key=>{
      group[key].setMap && group[key].setMap(this.map);
    });

    group.marker.moveAlong(path, speed);

    this.markerMoveMap.set(type, group);
    return group;
  };

  AMapU.prototype.getMarkerMove = function(type) {
    return (this.markerMoveMap && this.markerMoveMap.get(type)) || null;
  };
  AMapU.prototype.reStartMarkerMove = function(type, speed) {
    const moveGroup = (this.markerMoveMap && this.markerMoveMap.get(type)) || null;
    if (!moveGroup) throw Error('no have this type');

    Object.keys(moveGroup).forEach(key=>{
      moveGroup[key].setMap && moveGroup[key].setMap(this.map);
    });

    speed = speed || moveGroup.speed;
    moveGroup.marker.moveAlong(moveGroup.path, moveGroup.speed);
  };

  AMapU.prototype.pauseMarkerMove = function(type) {
    const moveGroup = (this.markerMoveMap && this.markerMoveMap.get(type)) || null;
    if (!moveGroup) throw Error('no have this type');

    moveGroup.marker && moveGroup.marker.pauseMove();
    return moveGroup;

  };
  AMapU.prototype.resumeMarkerMove = function(type) {
    const moveGroup = (this.markerMoveMap && this.markerMoveMap.get(type)) || null;
    if (!moveGroup) throw Error('no have this type');

    moveGroup.marker && moveGroup.marker.resumeMove();
    return moveGroup;

  };
  AMapU.prototype.stopMarkerMove = function(type) {
    const moveGroup = (this.markerMoveMap && this.markerMoveMap.get(type)) || null;
    if (!moveGroup) throw Error('no have this type');

    moveGroup.marker && moveGroup.marker.stopMove();
    return moveGroup;

  };
  AMapU.prototype.clearMarkerMove = function(type, flag/** clear */) {
    let moveGroup = this.stopMarkerMove(type);
    Object.keys(moveGroup).forEach(key=>{
      moveGroup[key].setMap && moveGroup[key].setMap(null);
    });

    flag && (this.markerMoveMap.delete(type));

  };

}

export default moveGroup;
