const btn = document.getElementById("btn") as HTMLButtonElement;
const todoInp = document.getElementById("todoinput") as HTMLInputElement;

btn.addEventListener("click", function(){
    alert(todoInp.value);
    todoInp.value = "";
});

todoInp.addEventListener("change",function(e){
    console.log(todoInp.value)
})