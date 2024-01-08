const getListStudentIds = (ls) => (Array.isArray(ls) ? ls.map((e) => e.id) : []);
export default getListStudentIds;
