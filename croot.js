import { setInner } from "https://jscroot.github.io/element/croot.js";
setInner("demo", "Gading Khairlambang");

import { onClick } from "https://jscroot.github.io/element/croot.js";
onClick("tombol", aktif);

function aktif() {
  alert("udah aktif");
}

import { container } from "https://jscroot.github.io/element/croot.js";

function container() {
  var elemen = container("myDiv");
  if (element) {
    element.textContent = "Teks ini telah diubah dengan JavaScript!";
  }
}

document.getElementById("klik").addEventListener("click", container);
