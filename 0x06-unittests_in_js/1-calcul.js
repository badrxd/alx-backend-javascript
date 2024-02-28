const calculateNumber = (type, a, b) => {
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  let c = 0;
  if (type === 'SUM') {
    c = aRound + bRound;
  }
  if (type === 'SUBTRACT') {
    c = aRound - bRound;
  }
  if (type === 'DIVIDE') {
    if (b === 0) {
      c = 'Error';
    }
    c = aRound / bRound;
  }
  return c;
};

module.exports = calculateNumber;
