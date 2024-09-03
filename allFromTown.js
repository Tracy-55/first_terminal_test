
export default function allFromTown(regNums, town) {
    let regNumsArr = regNums.split(",");
    let townRegNums = [];
    for (let i = 0; i < regNumsArr.length; i++) {
        let currentRegNum = regNumsArr[i].trim();
        if (currentRegNum.startsWith(town)) {
            townRegNums.push(currentRegNum);
        }
    }
    return townRegNums;
}