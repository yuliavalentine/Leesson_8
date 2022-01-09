
let secondDepartment = {
    employees: [
        {
            name: "Taras Petrov",
            workingPeriod: "11",
        },
        {
            name: "Yuliia Salo",
            workingPeriod: "57",
        },
        {
            name: "Kateryna Ivanova",
            workingPeriod: "40",
        },
        {
            name: "Yaroslav Komarov",
            workingPeriod: "38",
        },
        {
            name: "Anastasia Moroz",
            workingPeriod: "42"
        },
        {
            name: "Marya Kost`",
            workingPeriod: "14"
        },
        {
            name: "Dzvenyslava Yavors`ka",
            workingPeriod: "18"
        }

    ]
}
secondDepartment.employees.forEach(employee => {

    const workingPeriod = parseInt(employee.workingPeriod);

    if(workingPeriod <= 12) { 
        employee.salary = (500 / 100 * 2) * workingPeriod + 500; 
        console.log(employee)
    } else if(workingPeriod > 12 && workingPeriod <= 24) {
        employee.salary = (1000 / 100 * 5) + 1000;
        console.log(employee)
    } else if(workingPeriod > 24 && workingPeriod <= 36) {
        employee.salary = (1500 / 100 * 15) + 1500;
        console.log(employee)
    } else {
        employee.salary = (1500 / 100 * 27) + 1500;
        console.log(employee)
    }
});

function calculateBenefit(department) {
    department.employees.forEach(employee =>{
        const workingPeriod = parseInt(employee.workingPeriod);
        employee.award = employee.salary * (Math.floor(workingPeriod / 12) * 10) / 100;
        console.log(employee)
    })
    
}
calculateBenefit(secondDepartment)

