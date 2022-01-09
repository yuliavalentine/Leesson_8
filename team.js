let employees = [
    {
        name: "Ivan Shevchenko",
        workingPeriod: 23,
    },

    {
        name: "Polina Stadnichenko",
        workingPeriod: 3,
    },

    {
        name: "Pavlo Marchenko",
        workingPeriod: 54,
    },

    {
        name: "Iryna Romanyshyn",
        workingPeriod: 16,
    }
];

let salaryCalc = 0;
//let workingPeriod;


function salaryCalculate() {
    for (let person in employees) {
        let working_months = employees[person]['workingPeriod'];
        //console.log(work_period);
        if (working_months <= 3){
            salaryCalc = 100;
            console.log(`1. ${salaryCalc}`);
        } else if (working_months >= 4 && working_months <= 12){
            salaryCalc += 100 * (working_months - 3);
            console.log(`2. ${salaryCalc}`);
        } else if (working_months >= 13 && working_months <= 24){
            salaryCalc += 500 * (working_months - 12);
            console.log(`3. ${salaryCalc}`);
        } else if (working_months >= 25 && working_months <= 36){
            salaryCalc += 250 * (working_months - 24);
            console.log(`4. ${salaryCalc}`);
        } //else salaryCalc += 2000 * (work_period - 36);

    }
}

salaryCalculate();

for (let person in employees) {
    employees[person]['salary'] = salaryCalc;
}

console.log(employees);

