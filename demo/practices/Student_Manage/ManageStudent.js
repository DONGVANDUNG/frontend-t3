let input_name = document.getElementsByClassName('input-name')[0];
let input_age = document.getElementsByClassName('input-age')[0];
input_age.addEventListener('click', listenClick(input_age));
input_name.addEventListener('click', listenClick(input_name));

function listenClick(input) {
    input.style.outline = "none";
}
let btn = document.querySelector(".btn");
let amount = 0;
let id = 0;
let students = [];
let table_infor = document.getElementsByClassName('table-infor')[0];
//Add student
btn.onclick = function() {
        let name = input_name.value;
        let age = input_age.value;
        let student = {
            name,
            age
        }
        if (btn.value == "Add") {
            students.push(student);
            amount = students.length;
            let htmls = '';
            htmls += `<tr><th class="student-${amount}">${amount}</th>
    <th>${name}</th>
    <th>${age}</th>
    <th><button type="submit" class="edit-infor" onclick="editInforStudent(${amount})">Edit</button>
    <button type="submit" class="delete-infor" onclick="deleteElement(${amount})">Delete</button></th>
    </tr>`;
            table_infor.innerHTML = table_infor.innerHTML += htmls;

        }
        if (btn.value == 'Update') {
            for (let i = 0; i < students.length; i++) {
                students[id - 1].name = input_name.value;
                students[id - 1].age = input_age.value;
            }
            updateStudent();
            btn.value = "Add";
        }
        input_name.value = '';
        input_age.value = '';
    }
    //delete student
function deleteElement(amount) {
    let value_delete = document.getElementsByClassName(`student-${amount}`)[0];
    if (students.length == 1) {
        students.pop();
    } else {
        students.splice(amount - 1, 1);
    }
    value_delete.remove();
    updateStudent();
}
//update Student
function updateStudent() {
    let htmlCurrent = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Edit</th>
</tr>`;
    let htmls = '';
    htmls += htmlCurrent;
    for (let i = 0; i < students.length; i++) {
        htmls += `
    <tr class="student-${i+1}"><th>${i+1}</th>
        <th>${students[i].name}</th>
        <th>${students[i].age}</th>
        <th><button type="submit" class="edit-infor" onclick="editInforStudent(${i+1})">Edit</button>
        <button type="submit" class="delete-infor" onclick="deleteElement(${i+1})">Delete</button></th>
        </tr>`
    }

    table_infor.innerHTML = htmls;
}
//edit student
function editInforStudent(idStudent) {
    id = idStudent;
    let name_student;
    let age_student;
    for (let i = 0; i < students.length; i++) {
        name_student = students[idStudent - 1].name;
        age_student = students[idStudent - 1].age;
    }
    input_name.value = name_student;
    input_age.value = age_student;
    btn.value = 'Update';
}