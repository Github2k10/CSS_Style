// All the Code for All Students Page Goes Here

let lsData = JSON.parse(localStorage.getItem("admission")) || [];

let tbody = document.querySelector("tbody");

function displayTable(data){
    tbody.innerHTML = null;

    data.forEach(function(element, index){
        let tr = document.createElement("tr");

        let name = document.createElement('td');
        name.innerText = element.name;

        let email = document.createElement('td');
        email.innerText = element.email;

        let course = document.createElement('td');
        course.innerText = element.course;

        let gender = document.createElement('td');
        gender.innerText = element.gender;

        let phone = document.createElement('td');
        phone.innerText = element.phone;

        let accpet = document.createElement("td");
        accpet.innerText = "Accept";
        accpet.style.backgroundColor = 'green';
        accpet.style.color = 'white';
        accpet.addEventListener("click", function(){
            addData("admission-accepted", element);
            deleteData(lsData, index);
        })
        
        let reject = document.createElement("id");
        reject.innerText = "Reject";
        reject.style.backgroundColor = 'red';
        reject.style.color = 'white';
        reject.addEventListener("click", function(){
            addData("admission-rejected", element);
            deleteData(lsData, index);
        })

        tr.append(name, email, course, gender, phone, accpet, reject);
        tbody.append(tr);
    })
}


function addData(key, value){
    let newLSData = JSON.parse(localStorage.getItem(key)) || [];
    newLSData.push(value);
    localStorage.setItem(key, JSON.stringify(newLSData));
}

function deleteData(data, index){
    lsData.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(data));
    displayTable(lsData);
}

displayTable(lsData);