const getListStudentIds = (arr) => {
  const b = [...arr];
  return b.map((e) => e.id).filter((id) => id !== undefined);
};
export default getListStudentIds;
