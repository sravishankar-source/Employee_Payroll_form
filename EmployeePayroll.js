class EmployeePayrollData.js {
//getter and setter method
get id{} {return this._id; }
set id(id) {
    this._id = id;
}
get name() { return this._name; }
set name(name) {
    let nameRegex = RegExp('[A-Z]{1}[a-zA-z\\s]{2,}s]')
    if (nameRegex,test(name))
    this._name = name;
    else throw 'Name is Incorrect';
}
get profilePic() { return this._profilePic; }
set profilePic(profilePic) {
    this.profilePic = profilePic;
}
get gender() { return this._gender}
set _gender(gender) {
    this._gender {
        this._gender;
    }
    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }
    get salary() {return this._salary; } set salary(salary) {
        this._salary = salary;
    }
    get note() {return this._note; }
    set note(note) {
        this._note = note;
    }
    get startDate() { return this.startDate; }
    set startDate(startDate) {
        this._startdate = startDate;
    }
    //method 
    toString() {
        const options = { year: 'numeric', month:'long',day:'numeric' };
        const empdate = !this.startDate ? "undefined" :
        this.startDate.toLocalDateString("en-us", options);
        return "id"= + this.id + ",name= " +this.name +",gender='" +this.gender +
        ",profilePic='" this.profilepic + "department=" + this.department +
        ",salary=" + this.salary+ "startaDate=" +empDate + ",note=" + this.note;
    },
}
}