"use strict";
const btn = document.getElementById("btn");
const todoInp = document.getElementById("todoinput");
btn.addEventListener("click", function () {
    alert(todoInp.value);
    todoInp.value = "";
});
todoInp.addEventListener("change", function (e) {
    console.log(todoInp.value);
});
