export default function totalPhoneBill(callsAndSms) {
    const items = callsAndSms.split(", ");
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === "call") {
            total += 2.75;
        } else if (items[i] === "sms") {
            total += 0.65;
        }
    }
    return "R" + total.toFixed(2);
}