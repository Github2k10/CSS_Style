// All the JS Code for the Add Students Page Goes Here

let taskArr = JSON.parse(localStorage.getItem('admission')) || [];

document.querySelector("form").addEventListener("submit", myTodo);

function myTodo(event){
    event.preventDefault();
    let obj = {};
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let gender = document.querySelector('#gender').value;
    let course = document.querySelector('#course').value;

    obj['name'] = name;
    obj['email'] = email;
    obj['phone'] = phone;
    obj['gender'] = gender;
    obj['course'] = course;
    taskArr.push(obj);

    localStorage.setItem('admission', JSON.stringify(taskArr));
}