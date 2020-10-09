export const isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

export function isObject(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]';
}
