import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [19, 20, 34];
  const classrooms = rooms.map((room) => new ClassRoom(room));
  return classrooms;
}
