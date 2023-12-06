import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    const prefix = chance.prefix({gender: 'all'})
    const name = chance.name()
    const age = chance.age()
    const bDay = chance.birthday()
    const datePart = bDay.toISOString().split('T')[0]
    const timePart = bDay.toLocaleTimeString()
    return {prefix, name, age, datePart, timePart}
}

fakeUserData();