const torinTroop = [
  {
    dwarfName: 'Balin',
    weapon: 'Axe',
    age: 324
  },
  {
    dwarfName: 'Dvalin',
    weapon: 'Axe, Axe',
    age: 299
  },
  {
    dwarfName: 'Nori',
    weapon: 'Hammer',
    age: 387
  }
];

export const requestDwarwesList = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve(torinTroop), 1500);
  });
}