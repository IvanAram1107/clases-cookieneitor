export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPercentage() {
  return getRandomInt(0, 100);
}

export function getRandomPosition(maxX, maxY) {
  return {
    x: getRandomInt(0, maxX - 1),
    y: getRandomInt(0, maxY - 1)
  }
}