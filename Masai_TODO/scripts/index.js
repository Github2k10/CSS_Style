const url = "http://127.0.0.1:9090/employees";
let page = 1;


let mainSection = document.getElementById("main-section");
let fetchEmployeesButton = document.getElementById("fetch-employees");

window.addEventListener("load", () => {
  // getData();

  // document.getElementById("sort-low-to-high").onclick = () => {
  //   sortLowToHigh();
  // };

  // document.getElementById("sort-high-to-low").onclick = () => {
  //   sortHighToLow();
  // };

  // document.getElementById("greater-than").onclick = () => {
  //   greaterThan();
  // };

  // document.getElementById("less-than").onclick = () => {
  //   lessThan();
  // };

  fetchEmployeesButton.addEventListener("click", function() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // mainSection.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
        let display_card = renderDom(data)
        console.log(display_card);
        console.log(data[0]);
      })
  })  
});


let getData = async () => {
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
  renderDom(res);
};

let postData = async () => {
  let name = document.getElementById("name");
  let batch = document.getElementById("batch");
  let section = document.getElementById("section");
  let score = document.getElementById("eval_score");
  let image = document.getElementById("image");

  let data = {
    name: name.value,
    batch: batch.value,
    section: section.value,
    score: score.value,
    image: image.value,
  };

  data = JSON.stringify(data);

  let res = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  name.value = null;
  batch.value = null;
  section.value = null;
  score.value = null;
  image.value = null;

  getData();
};

let card = ({ id, name, batch, section, score, image }) => {
  let div = document.createElement("div");
  div.setAttribute("class", "student");
  let img = document.createElement("img");
  img.src = image;

  let h3 = document.createElement("h3");
  h3.innerText = name;

  let p1 = document.createElement("p");
  p1.setAttribute("class", "student_score");
  p1.innerText = score;

  let p2 = document.createElement("p");
  p2.innerText = `Batch: ${batch}`;

  let p3 = document.createElement("p");
  p3.innerText = section;

  let button_div = document.createElement("div");

  let remove_btn = document.createElement("button");
  remove_btn.setAttribute("class", "remove_student");
  remove_btn.innerText = "Remove";
  remove_btn.onclick = () => {
    removeStudent(id);
  };

  let update_btn = document.createElement("button");
  update_btn.setAttribute("class", "update_score");
  update_btn.innerText = "Update Score";
  update_btn.onclick = () => {
    updateData(id);
  };

  button_div.append(remove_btn, update_btn);

  div.append(img, h3, p1, p2, p3, button_div);

  return div;
};

let renderDom = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    container.append(card(el));
  });
};

let removeStudent = async (id) => {
  let res = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  getData();
};

let updateData = async (id) => {
  let score = document.getElementById("new_score");
  score.removeAttribute("disabled");
  score.onkeypress = () => {
    updateScore(event, id);
  };
  let student = await fetch(`${url}/${id}`);
  student = await student.json();
  score.value = student.score;
};

let updateScore = async (e, id) => {
  let new_score = document.getElementById("new_score");
  let student = await fetch(`${url}/${id}`);
  student = await student.json();
  if (e.key === "Enter") {
    let data = { score: +new_score.value || +student.score };
    let res = await fetch(`${url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    new_score.value = null;
    new_score.setAttribute("disabled", true);
    getData();
  }
};

let sortLowToHigh = async () => {
  let res = await fetch(`${url}?_sort=score&_order=asc`);
  res = await res.json();
  renderDom(res);
};

let sortHighToLow = async () => {
  let res = await fetch(`${url}?_sort=score&_order=desc`);
  res = await res.json();
  renderDom(res);
};

let greaterThan = async () => {
  let res = await fetch(`${url}?score_gt=5`);
  res = await res.json();
  renderDom(res);
};

let lessThan = async () => {
  let res = await fetch(`${url}?score_lte=5`);
  res = await res.json();
  renderDom(res);
};
