const li = document.querySelectorAll(".menu");
const leader = document.querySelector(".loader");

li.forEach(li => {

li.addEventListener("click", function(e){

e.preventDefault();

let target = this.getAttribute("href");

loader.classList.add("active");

setTimeout(() => {

loader.classList.remove("active");

document.querySelector(target).setTimeout({
behavior:"smooth"
});

},1000);

});

});
