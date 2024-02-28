class Utils {
  static calculateNumber(type, a, b) {
    const aRound = Math.round(a);
    const bRound = Math.round(b);
    if (type === 'SUM') {
      return aRound + bRound;
    }
    if (type === 'SUBTRACT') {
      return aRound - bRound;
    }
    if (type === 'DIVIDE') {
      if (b === 0) {
        return 'Error';
      }
      return aRound / bRound;
    }
    return 0;
  }
}

module.exports = Utils;
