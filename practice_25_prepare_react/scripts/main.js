const dwarwesLocations = [
  { name: "Erebor", king: "Tror" },
  { name: "Moria", king: "Balin" },
  { name: "IronHills", king: "Dain" },
];

const dwarf = {
  name: "Torin",
  surname: "Oakshield",
  race: "Dwarwes",
};

const torinsArmour = {
  helmet: "Steel helmet",
  armour: "Orichalk armour",
  shield: "Oak shield",
};

const armedDwarf = {
  name: "Dain",
  surname: "Ironfoot",
  race: "Dwarwes",
  weapons: ["hammer", "axe", "knife"],
};

const dwarfWarrior = {
  name: "Dvalin",
  surname: "",
  race: "Dwarwes",
  weapons: ["axe", "axe", "hammer", "knife"],
  armours: {
    helmet: null,
    armour: "Leather armour",
    shield: "Iron shield",
  },
};

const dwarfSage = {
  name: "Balin",
  surname: "",
  race: "Dwarwes",
  weapons: ["hammer"],
  skills: {
    magic: null,
    archery: 3,
  },
};

// 1. spread-оператор. Есть массив `dwarwesLocations` - места проживания гномов. С использованием спред-оператора, создать новый массив, который будет содержать те же объекты, что и старый массив.

const dwarwesLocationsCopy = [...dwarwesLocations];

// 2. Получить из массива `dwarwesLocations` массив `dwarwesLocationsWithPopulation` - он будет содержать копии объектов из оригинального массива, и при этом каждому новому объекту добавим свойство `population`, со значением 30000. При этом, объекты из оригинального массива не изменяем!

const dwarwesLocationsWithPopulation = dwarwesLocations.map((location) => ({
  ...location,
  population: 30000,
}));
console.log(dwarwesLocationsWithPopulation);

// 3. spread-оператор. У нас есть объект `dwarf`. Нужно создать его копию, с использованием оператора `spread`.

const dwarfCopy = { ...dwarf };
console.log(dwarfCopy);

// 4. Есть объект `dwarf`, и объект `torinsArmour`. Нужно с использованием спред-оператора объединить эти объекты - получить новый объект, который будет содержать свойства обеих этих объектов.

const merge = { ...dwarf, ...torinsArmour };
console.log(merge);

// 5. С использованием спред-оператора, создать объект `greedyTorin`, который будет содержать все свойства объекта `dwarf`, и новое свойство - `isGreedy: true`.

const greedyTorin = { ...dwarf, isGreedy: true };
console.log(greedyTorin);

// 6. С использованием спред-оператора, создать объект `smartTorin`, который будет содержать все свойства объекта `greedyTorin`, но свойство `isGreedy` нужно переопределить как `false`.

const smartTorin = { ...greedyTorin, isGreedy: false };
console.log(smartTorin);

// 7. Создать копию объекта `armedDwarf`. Обратите внимание на свойство `weapons` - это массив. Нужно также создать и его копию (т.е. развернуть и его).

const armedDwarfCopy = { ...armedDwarf, weapons: [...armedDwarf.weapons] };
console.log(armedDwarfCopy);

// 8. Теперь поработаем с деструктуризацией. С использованием деструктуризации, объявить переменные `name`, `armours` и записать в них соответствующие свойства объекта `dwarfWarrior`.

const { name, armours } = dwarfWarrior;
console.log(name, armours);

// 9. Сделать алиасы - с помощью деструктуризации, записать в переменные `aliasName`, `aliasArmours` значения свойств `name`, `armours` объекта `dwarfWarrior`.

const { name: aliasName, armours: aliasArmours } = dwarfWarrior;
console.log(name);
console.log(armours);
console.log(aliasName);
console.log(aliasArmours);

// 10. С использованием деструктуризации, записать в переменную `secondaryWeapon` второй элемент массива `weapons` объекта `dwarfWarrior`.

const [, secondaryWeapon] = dwarfWarrior.weapons;
// или
const {
  weapons: [, _secondaryWeapon],
} = dwarfWarrior;
console.log(_secondaryWeapon);

// 11. Немного усложним. С использованием деструктуризации, записать в переменную `shield` значение свойства `dwarfWarrior.armours.shield`.

const {
  armours: { shield },
} = dwarfWarrior;
console.log(shield);

// 12. Параметры по умолчанию. Создаем функцию `forgeryOfMoria`. Эта функция будет выпускать оружие для гномов. Она принимает параметр - вид вооружения (`axe`, `hammer`, `sword`, ...), и материал из которого будет изготовлено оружие. Должна возвращать объект, у которого будет свойство type (вид оружия), material (из чего сделан), и weight (вес) - заполняем случайным числом. Нужно определить параметры по умолчанию: по умолчанию куем топор (`axe`) из железа (`steel`).

function forgeryOfMoria(type = "axe", material = "steel") {
  return {
    type,
    material,
    weight: Math.random(),
  };
}
console.log(forgeryOfMoria());

// 13. Пишем функцию `upgradeWeapon`. Она будет принимать объект-оружие, и в зависимости от его типа, наделять какими-то свойствами. Если это сделано из железа (`steel`) - то нам нужно вернуть глубокую копию этого оружия, и добавить ему свойство `hardened: true`. Если это сделано из дерева - добавляем свойство `bogged: true`. При этом, нам нужно сделать деструктуризацию в аргументе функции (то есть, в спецификации указать что первым аргументом зайдет объект, и нас интересует его свойство `type`).

function upgradeWeapon({ type, material, ...rest }) {
  if (material === "steel") {
    return { type, material, ...rest, hardened: true };
  } else if (material === "wood") {
    return { type, material, ...rest, bogged: true };
  } else {
    return { type, material, ...rest };
  }
}

const weapon1 = { type: "axe", material: "steel", damage: 50 };
const upgradedWeapon1 = upgradeWeapon(weapon1);
console.log(upgradedWeapon1);

const weapon2 = { type: "bow", material: "wood", range: 100 };
const upgradedWeapon2 = upgradeWeapon(weapon2);
console.log(upgradedWeapon2);
