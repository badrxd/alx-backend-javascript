const getListStudentIds = (ls) => {
return Array.isArray(ls) ? ls.map((e) => e.id) : [];
};
export default getListStudentIds;
