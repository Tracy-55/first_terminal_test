export default function mostProfitableDepartment(salesData) {
    var result = {};
    for (var i = 0; i < salesData.length; i++) {
        var department = salesData[i].department;
        if (result[department] === undefined) {
            result[department] = 0;
        }
        result[department] += salesData[i].sales;
    }
    var maxSales = 0;
    var maxDepartment = '';
    for (var department in result) {
        if (result[department] > maxSales) {
            maxSales = result[department];
            maxDepartment = department;
        }
    }
    return maxDepartment;
}