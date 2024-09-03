export default function countAllPaarl(reg) {
    let Count = 0;

    let regArr = reg.split(",");
    for (let v in regArr) {
        let trimmed = regArr[v].trim();
        if (trimmed.startsWith("CJ")) {
            Count += 1;
        }
    }
    return Count;
}
