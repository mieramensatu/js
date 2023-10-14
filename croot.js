import {
  onClick,
  container,
} from "https://jscroot.github.io/element/croot.js";

function container(id){
    return document.getElementById(id);
}
const demoElement = container("demo")
demoElement.innerHTML = "Gading Khairlambang"
onClick("tombol", aktif);
function aktif() {
  alert("udah aktif");
}