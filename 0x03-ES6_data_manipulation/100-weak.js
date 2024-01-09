const weakMap = new WeakMap();

const queryAPI = (obj) => {
  if (!weakMap.has(obj)) {
    weakMap.set(obj, 0);
  }
  const req = weakMap.get(obj);
  if (req < 5) {
    weakMap.set(obj, (req + 1));
  } else {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
