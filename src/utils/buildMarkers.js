export function _buildMarkers (offset = 0, {
  data,
  markerStyles = [],
  setLastIcon = true,
  initIcon,
  markerOpt = {},
  markerFormatter,
  clickCallback
}) {
  const icons = {};
  markerStyles.forEach(({ iconName, icon }) => {
    if (!iconName || !icon) {
      throw Error('markerStylesItem must has iconName as String and icon as AMap.Icon');
    }
    icons[iconName] = new AMap.Icon(icon);
  });

  console.log(icons);
  initIcon = initIcon || (markerStyles[0] && markerStyles[0].iconName);

  const markers = data.map((item, index) => {
    const opt = markerFormatter ? markerFormatter(item, index, icons) : {};

    const marker = new AMap.Marker({
      position: [item.longitude, item.latitude],
      extData: item,
      anchor: 'bottom-center',
      offset: new AMap.Pixel(0, 0),
      topWhenClick: true,
      icon: icons[initIcon],
      ...markerOpt,
      ...opt
    });

    marker._u_key = item.key || marker._amap_id;
    marker._u_dataIndex = index + offset;

    marker._u_setIcon = marker.setIcon;
    marker.setIcon = (iconName) => {
      let icon;
      if (typeof (iconName) === 'string') {
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

    clickCallback && marker.on('click', e => {
      this.oldClickMarker && setLastIcon && this.oldClickMarker.setIcon(this.oldClickMarker.lastIcon);
      this.oldClickMarker = e.target;
      clickCallback(e, this.oldClickMarker, icons);
    });

    return marker;
  });

  return markers;
}


export default { _buildMarkers }