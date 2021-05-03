export default function Destructuring(obj) {
  const { special: specialArr } = obj;
  for (let i = 0; i < specialArr.length; i += 1) {
    let k = 0;
    for (const prop in specialArr[i]) {
      if (prop === 'description') {
        k += 1;
      }
    }
    if (k === 0) {
      specialArr[i].description = 'Описание недоступно';
    }
  }
  return specialArr;
}
