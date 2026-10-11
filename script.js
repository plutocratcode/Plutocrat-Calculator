let screen = document.getElementById("screen");

let numbers = document.querySelectorAll(".number");

let ariths = document.querySelectorAll(".arith");

let clear = document.getElementById("C");

let equal = document.getElementById("equal");

clear.addEventListener("click", function(clear){
  screen.value = "";
});

let del = document.getElementById("D");

del.addEventListener("click", function(del){
  screen.value = screen.value.slice(0,-1);
});

numbers.forEach(function(number) {
  number.addEventListener("click", function(event) {
    screen.value += event.target.innerText;
  });
});

ariths.forEach(function(arith) {
  arith.addEventListener("click", function(event) {
    screen.value += event.target.innerText;
  });
});

equal.addEventListener("click", function(equal) {
  if(screen.value === "") {
    screen.value = "Invalid Input";
  }

  else {
    screen.value = eval(screen.value);
  }
});