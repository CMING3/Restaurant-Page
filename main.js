(()=>{"use strict";function e(){const e=document.querySelector("article");e.innerHTML="";const n=document.createElement("div");n.innerHTML="\n        <h2>ABOUT</h2>\n        <br>\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum voluptate, obcaecati rerum eius quod odio iste non consectetur officia libero consequuntur velit est, et voluptates nesciunt. Obcaecati, perferendis quod!</p>\n    ",e.appendChild(n)}(function(){const e=document.querySelector("#content"),n=document.createElement("header");n.innerHTML='\n        <div class="logo">\n            <h1>POOR GUYS</h1>\n            <p>BURGERS and FRIES</p>\n        </div>\n        <div class="navbar">\n            <div class="home">HOME</div>\n            <div class="menu">MENU</div>\n            <div class="contact">CONTACT</div>\n        </div>\n        <article></article>\n    ',e.appendChild(n)})(),e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",(function(){const e=document.querySelector("article");e.innerHTML="";const n=document.createElement("div");n.classList.add("menu-list"),n.innerHTML='\n    <div class="item">\n        <img src="./images/burger1.jpeg" width="200px" alt="">\n        <div class="disc">\n            <h3>Jeez Burger</h3>\n            <p>Holy moly, bring you to the heaven on the first bite. </p>\n        </div>\n    </div>\n    <div class="item">\n        <img src="./images/burger2.jpeg" width="200px" alt="">\n        <div class="disc">\n            <h3>Fillet-O-Freak Burger</h3>\n            <p>A normal burger after a ridiculous special processing. It\'s toe licken good! </p>\n        </div>\n    </div>\n\n    ',e.appendChild(n)})),document.querySelector(".contact").addEventListener("click",(function(){const e=document.querySelector("article");e.innerHTML="";const n=document.createElement("div");n.innerHTML="\n        <h2>How to find us</h2>\n        <br>\n        <p>\n            <ul>\n                <li>Phone Number: </li>\n                <li>0555-5555-5555</li>\n                <br>\n                <li>Address: </li>\n                <li>Hogwarts, Platform 9¾, Kings Cross train station, London</li>\n            </ul>\n        </p>\n    ",e.appendChild(n)}))})();