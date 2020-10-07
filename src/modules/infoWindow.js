function infoWindow(AMapU) {
  AMapU.prototype.openInfoWindow = function({
    target,
    longitude,
    latitude,
    offset,
    closeWhenClickMap = true,
    closeCallback
  }) {
    const position = new AMap.LngLat(longitude, latitude);
    if (this.infoWindow) {
      this.infoWindow.close();
      this.infoWindow.setPosition(position);
      this.infoWindow.setContent(target);
    } else {
      this.infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: target,
        position,
        autoMove: true,
        closeWhenClickMap: closeWhenClickMap,
        offset: new AMap.Pixel(offset[0], offset[1])
      });
    }
    // 清除上一次的关闭回调
    this.infoWindow._oldCallback && this.infoWindow.off('close', this.infoWindow._oldCallback);
    // 将关闭回调保存下来
    this.infoWindow._oldCallback = closeCallback;
    closeCallback && this.infoWindow.on('close', closeCallback);

    this.infoWindow.open(this.map, position);
  };

  AMapU.prototype.clearInfoWindow = function() {
    if (this.infoWindow) {
      this.infoWindow.close();
      // 清除上一次的关闭回调
      this.infoWindow._oldCallback && this.infoWindow.off('close', this.infoWindow._oldCallback);
    }
  };
}

export default infoWindow;
