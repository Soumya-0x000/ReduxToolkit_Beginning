import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    const prefix = chance.prefix({gender: 'all'})
    const name = chance.name()
    const age = chance.age()
    const bDay = chance.birthday().toISOString()
    return {prefix, name, age, bDay}
}

fakeUserData();