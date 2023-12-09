function adjustLights(lights: Array<'🟢' | '🔴'>): number {
  let firstGreenCount = 0;
  let firstRedCount = 0;
  lights.forEach((light, index) => {
    const currentLight = index % 2 ? '🔴' : '🟢';
    const count = light !== currentLight;
    firstGreenCount += Number(count);
  });
  lights.forEach((light, index) => {
    const currentLight = index % 2 ? '🟢' : '🔴';
    const count = light !== currentLight;
    firstRedCount += Number(count);
  });
  return Math.min(firstGreenCount, firstRedCount);
}
const changes = adjustLights(['🔴', '🔴', '🟢']);

console.log(changes);

function adjustLights_2(lights: Array<'🟢' | '🔴'>): number {
  const result = lights.reduce((acc, curr, index) => {
    const light = index % 2 ? '🔴' : '🟢';
    curr !== light ? acc[0]++ : acc[1]++;
    return acc;
  }, [0, 0]);
  return Math.min(...result);
}
const change = adjustLights_2(['🔴', '🔴', '🟢', '🟢', '🔴', '🔴']);

console.log(change);