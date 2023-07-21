class GameAdapter {
  constructor() {
    this.itemArray = [];
  }

  async getArray() {
    this.itemArray = new Array(9).fill("empty");

    return this.itemArray;
  }

  async reloadGame() {
    return this.getArray();
  }

  async checkIsWinner(itemArray) {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      return `${itemArray[0]} won`;
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      return `${itemArray[3]} won`;
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      return `${itemArray[6]} won`;
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      return `${itemArray[0]} won`;
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      return `${itemArray[1]} won`;
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      return `${itemArray[2]} won`;
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      return `${itemArray[0]} won`;
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      return `${itemArray[2]} won`;
    }
  }
}

export default GameAdapter;
