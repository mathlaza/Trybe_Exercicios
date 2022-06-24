const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragonObj) => {
  const damage = Math.ceil(Math.random() * (dragonObj.strength - 15) + 15);
  return damage;
};

const warriorDamage = (warriorObj) => {
  const min = warriorObj.strength;
  const max = min * warriorObj.weaponDmg;
  const damage = Math.ceil(Math.random() * (max - min) + min);
  return damage;
};

const mageDamage = (mageObj) => {
  const mana = mageObj.mana;
  const min = mageObj.intelligence;
  const max = min * 2;
  const status = {
    manaSpent: 0,
    damage: 'Não possui mana suficiente'
  };
  if (mana >= 15) {
    status.damage = Math.ceil(Math.random() * (max - min) + min);
    status.manaSpent = 15;
    return status;
  }
  return status;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage(warrior);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },

  mageTurn: (mageDamage) => {
    const mageDmg = mageDamage(mage).damage;
    const mageMana = mageDamage(mage).manaSpent;
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
    mage.mana -= mageMana;
  },

  dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage(dragon);
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },

  result: () => console.log(battleMembers)
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.result();
