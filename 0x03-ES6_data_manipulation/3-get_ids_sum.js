export default function getStudentIdsSum(list) {
  return list.reduce((sum, obj) => sum + obj.id, 0);
}
