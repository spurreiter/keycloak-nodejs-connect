/**
 * get value at `path` from `object`
 * @example
 * get({a: {b: {c: 2}}}, ['a', 'b', 'c']) //> 2
 */
const _get = (object, path = [], def) => {
  if (typeof path === 'string') path = path.split('.')
  let o = object
  for (let p of path) {
    if (!(p in o)) return def
    o = o[p]
  }
  return o
}

module.exports = _get
