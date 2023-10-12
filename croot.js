import { setInner } from "https://jscroot.github.io/element/croot.js";
setInner("demo","Gading Khairlambang");

import { onClick } from "https://jscroot.github.io/element/croot.js";
onClick("tombol",aktif)

function aktif(){
    alert("udah aktif")
}

import { container } from "https://jscroot.github.io/element/croot.js";

function container(id){
    return document.getElementById(id)
}
var elemen = container("myDiv")
if (elemen){
    elemen.textContent = "Teks ini telah diubah dengan JavaScript!"    
} else {
    console,error("Elemen dengan ID 'myDiv' tidak ditemukan.")
}
