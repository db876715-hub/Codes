const display = document.getElementById("display");

function calc(event) {
  const value = event.target.value;
  if (value === "=") {
    display.value = eval(display.value);
  } else if (value === "C") {
    display.value = 0;
  } else if (display.value === "0") {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
}
// // let mode = "blue";
// // let color;

// // if(mode === "dark"){
// //     color = "red";
// // }
// //  else color = "black"
// //  console.log(color);

// // let age = 16

// // if (age >= 18){
// //     console.log("You Can Vote");
// // }
// // else console.log("You Can not Vote");

// let value = prompt("Enter A Number!!")

// if (value % 5===0){
//     console.log("yes");
// }
// else console.log("no");