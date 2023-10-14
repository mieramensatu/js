import { setInner } from "https://jscroot.github.io/element/croot.js";
setInner("demo","Gading Khairlambang");

import { onClick } from "https://jscroot.github.io/element/croot.js";
onClick("tombol",aktif)

function aktif(){
    alert("udah aktif")
}

import { container } from "https://jscroot.github.io/element/croot.js";

const myDiv = container("myDiv")
myDiv.innerHTML = "Ini adalah konten baru untuk elemen dengan ID 'myDiv'";