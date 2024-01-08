const getListStudentIds = (arr) => {
  const b = [...arr];
  const c = [];
  b.map((e) => (e.id !== undefined ? c.push(e.id) : null));
  return c;
};
export default getListStudentIds;
