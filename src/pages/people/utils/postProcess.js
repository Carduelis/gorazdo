export const postProcessNullify = (formData) => {
  // { a: 1, b: 2 } => [['a', 1], ['b', 2]]
  const processedEntries = Object.entries(formData).map((pair) => {
    const [key, value] = pair;
    if (value === '') {
      console.log('Поле', key, 'было заменено на', null);
      return [key, null];
    }
    return pair;
  });

  // [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  return Object.fromEntries(processedEntries);
};

export const postProcess = (formData) => {
  // { a: 1, b: 2 }, => [['a', 1], ['b', 2]]

  const processedEntries = Object.entries(formData).filter((pair) => {
    const [key, value] = pair;
    if (value === '' || value === undefined) {
      console.log(
        `Поле ${key} не было сохранено на сервере из-за значения:`,
        JSON.stringify(value)
      );
      return false;
    }
    return true;
  });
  return Object.fromEntries(processedEntries);
};
