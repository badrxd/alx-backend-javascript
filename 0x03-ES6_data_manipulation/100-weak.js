const weakMap = new WeakMap();

const queryAPI = (obj) => {
  if (!obj || !(obj instanceof Object)) {
    return;
  }
  if (!weakMap.has(obj)) {
    weakMap.set(obj, 0);
  }
  const req = weakMap.get(obj);
  if (req < 4) {
    weakMap.set(obj, (req + 1));
  } else {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
