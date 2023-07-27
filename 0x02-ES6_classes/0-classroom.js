export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  serialize() {
    return {
      maxStudentsSize: this._maxStudentsSize,
    };
  }
}
