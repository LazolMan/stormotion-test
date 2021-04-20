export default function useEnemyTurn(
  totalCount,
  enemyCount,
  maxTotal,
  maxTake
) {
  let value;

  if (totalCount < maxTake) {
    if (enemyCount % 2 === 0) {
      if (totalCount % 2 === 0) {
        value = totalCount;
      } else {
        if (totalCount > 1) {
          value = totalCount - 1;
        } else {
          value = 1;
        }
      }
    } else {
      if (totalCount % 2 === 0) {
        value = totalCount - 1;
      } else {
        value = totalCount;
      }
    }
  } else {
    if ((maxTotal - 1) % (maxTake + 1) === 0) {
      value = Math.floor(Math.floor(Math.random() * maxTake + 1) / 2) * 2 + 1;
    } else {
      value = Math.floor(Math.random() * maxTake + 1);
    }
  }

  return value;
}
