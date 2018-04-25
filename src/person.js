export const isAdult = (age) => {
    if (age < 18) {
        return false
    } else {
        true
    }

}

const canDrink = (age) => age < 18 ? false : true;
export default (age)=> age >= 65;
export {canDrink}