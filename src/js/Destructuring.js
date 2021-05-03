export default function Destructuring(obj) {
  const { special: specialArr } = obj;
  for (let i = 0; i < specialArr.length; i += 1) {
    if (!('description' in specialArr[i])) {
      specialArr[i].description = 'Описание недоступно';
    }
  }
  return specialArr;
}
