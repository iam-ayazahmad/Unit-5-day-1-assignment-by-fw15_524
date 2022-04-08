import"./index.css"

import logo from "./avatar.svg"

var logodiv=document.querySelector(".logodiv")

var mylogo=document.createElement("div")
// mylogo.src="./src/avatar.svg"
mylogo.innerHTML=logo


logodiv.append(mylogo)
