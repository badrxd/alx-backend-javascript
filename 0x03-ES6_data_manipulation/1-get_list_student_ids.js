const getListStudentIds = (arr) => {
  const c = [];
  Array.from(arr).map((e) => (e.id !== undefined ? c.push(e.id) : null));
  return c;
};
export default getListStudentIds;
