window.addEventListener('DOMContentLoaded',(Event) => {
    const name = document.querySelector('.text-error');
    name.addEventListener('input',funnction() {
if (name.value.lenght == 0) {
    textError.textContent = "";
    return;
}
try {
    (new EmployeepayrollData()).name = name.value;;
    textError.textContent = "";

} catch (e) {
    textError.textContent = e;
}
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function() {
    output.textContent = salary.value;
});
const save = () => {
    try{
        let EmployeePayrollData = createEmployeepayroll();
    
    } catch (e){
        return;
    }
}
const createEmployeepayroll = () => {
    let EmployeePayrollData = new EmployeePayrollData();
    try{
        EmployeePayrollData.name = getInputvalueId('name');
    } catch (e) {
        setTextvalue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getselectvalues('name=profile').pop();
    employeePayrollData.gender = getselectvalues('[name=gender']).pop
    employeePayrollData.department =getselectvalues('[name=department]');
    employeePayrollData.salary = getInputvalueById('#salary');
    employeePayrollData.note = getInputvalueById('#notes');
    let date = getInputvalueById('#day')+""+getInputvalueById('#month')+""+
    getInputvalueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.to String());
    return employeePayrollData;
}
const getSelectionValues = (Propertyvalue) => {
    let allitems = document.querySelectorAll(Propertyvalue);
    letselItems = [];
    allitems.forEachitem => {
        if (item.checked) selitems.push(item.value);
    });
    return selitems;
}
const getInputvalueById = (id) => {
    let value = document.querySelector(id).value;
}
return value;
}
const getInputelementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

// UC4

const save => {
    try {
        let employeePayrollData = creaeteEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}
function createAndUpdateStorage(EmployeepayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployePayrollList"));
    if (employeepayrollList !=undefined) 
    employeePayrollList.push(employeePayrollData);
    
        
    } else {
        employeePayrollList = [employeePayrollData]
    }
 alert(employeePayrollList = toString());
 localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))

}
const resetForm = () => {
    setTextvalue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValues('#salary','');
    setValues('#notes','');
    setValues('#day','');
    setValues('#month',january'');
    setValues('#year','2020');

}
const setTextvalue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id,value) => {
    const element.value;
}