import ClassRoom from './0-classroom';

export default function initializeRooms(second) {
  let i = 0;
  const obj = ['19', '20', '34'];
  while (i < 3) {
    obj[i] = new ClassRoom(obj[i]);
    i++;
  }
  return obj;
}
