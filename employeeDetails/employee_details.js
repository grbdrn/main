const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, spec: 'JS'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, spec: 'nem ért semmihez'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, spec: 'CSS' },

    //... More employee records can be added here
  ];

 function displayEmployees() {
    const totalEmployees = employees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.spec}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;

};

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);

  };


function displayHREmployees(){
    const hr_emp = employees.filter((employee)=> employee.department === "HR");
    const hr_emp_disp = hr_emp.map((employee)=> `<p>${employee.id}: ${employee.name}: ${employee.salary} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML=hr_emp_disp;

};

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
};

function JavaSpec(){
    const JS_emp = employees.filter((employee) => employee.spec === 'JS');
    const JS_emp_disp = JS_emp.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.salary} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = JS_emp_disp;
   
};