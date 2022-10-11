let btnPass = document.querySelectorAll(".password__btn");
const form = document.querySelector(".password-form");

let pwd = form.querySelector(["#js-first-password"]);
let pwd2 = form.querySelector(["#js-second-password"]);


form.addEventListener("submit", (even) => {
  even.preventDefault();

  for (let elem of form.elements) {
    // console.log(elem.classList.value);
    if (elem.classList.value === "btn") {
      continue
    }
    if (elem.value === "") {
      elem.nextElementSibling.textContent = "Данное поле не заполнено!";
    } else {
      elem.nextElementSibling.textContent = "";
    }
  }

  console.log("ddd");

  if (pwd.value === pwd2.value && pwd2.value !== "") {
    console.log(typeof pwd2.value);
    alert("You are welcome!");
  } else {
    pwd2.nextElementSibling.textContent = "Пароли не совпадают!";
  }


});

btnPass.forEach(function (btn) {
  btn.onclick = function () {
    let target = this.getAttribute("data-target"),
      inputPass = document.querySelector(target);

    if (inputPass.getAttribute("type") === "password") {
      inputPass.setAttribute("type", "text");
      btn.classList.add("active");
    } else {
      inputPass.setAttribute("type", "password");
      btn.classList.remove("active");
    }
  };
});









// const validate = (elem) => {
//   if(elem.name === "pwd") {
//     if(pwd.value !== pwd2.value && pwd2.value !== ""){
//       elem.nextElementSibling = "Пароли не совпадают!";
//     }else {
//       elem.nextElementSibling.textContent = "";
//     }
//   }

//   if(elem.name === "pwd2") {
//     if(pwd.value !== pwd2.value && pwd2.value !== ""){
//       pwd.nextElementSibling = "Пароли не совпадают!";
//       pwd2.nextElementSibling = "Пароли не совпадают!";
//     }else {
//       pwd.nextElementSibling.textContent = "";
//       pwd2.nextElementSibling.textContent = "";

//     }
//   }
// }
