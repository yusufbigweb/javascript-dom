// getElementsByName() ====================================

// const btn = document.getElementsByName('language');
// console.log(btn)


// getElementsByTagName() ====================================

// const btn = document.getElementsByTagName('h1');
// console.log(btn);

// getElementByClassName() ====================================

// const cont = document.getElementById('container')
// const msg = cont.getElementsByClassName('message')
// console.log(msg);

// querySelectorAll() and querySelector() ====================================

// const cont = document.getElementById('container');
// const msg = cont.querySelectorAll('div, h1')
// const msg = cont.querySelector('div, h1')
// console.log(cont)

// ================================ Traversing Elements ================================

// Selecting parent Elements - parentNode - how to taget child or all child elements 

// const msg = document.querySelector('.mean')
// console.log(msg.parentNode)

// Selecting Child Elements ====================================

// const parent = document.querySelector('.parent');
// console.log(parent.firstChild) // here his selecting only space or node text
// console.log(parent.firstElementChild) // this are first child select
// console.log(parent.lastElementChild) // and this last child select
// console.log(parent.childNodes) // here all child incluting space text showing in nodelist on console tap in browser

// Selecting Sibling Elements ====================================
/*
const second = document.querySelector('.second');
console.log(second.previousElementSibling) // his showing Previous Sibling - before :)
console.log(second.nextElementSibling) // his showing Next Sibling - afeter :)
*/

// ================================ Mainpulating HTML Elements ================================


// createElement() ====================================

// const container = document.createElement('div')
// container.innerHTML = "<p>Yusuf Shaikh </p>";
// document.body.appendChild(container)
// container.id = "userName"
// container.className = "userName"
// console.log(container)

// appendChild() ====================================

// const menu = document.getElementById('menu');
// const list = document.createElement('li');
// list.className = "items"
// list.innerHTML = "Contect";
// menu.appendChild(list)
// console.log(menu)

// textContent() ====================================

//     const menu = document.getElementById('menu')
//     const list = document.createElement('li')
//     list.innerHTML ="Contact"
//     menu.appendChild(list)
//  /* textContent */ console.log(menu.textContent) // this only text display on console
// /* innerText */ console.log(menu.innerText) // this innerText showing only display text formate but after appeid style just like display none his on console not shoing  console and textContent are show anything on content

// innerHTML() ====================================

// const menu = document.getElementById('menu')
// menu.innerHTML = '<h1>Yusuf Shaikh</h1>';
// console.log(menu)

// after() ====================================

// const menu = document.getElementById('menu');
// console.log(menu)

// menu.after("yusuf", "shaikh",  `96891529347`)


// ==== This Code Only Pratice in Mind :) =======


// const container = document.createElement('div');
// const sureName = document.getElementById('sureName');
// const ps = document.createElement('p');

// ps.innerHTML = "Yusuf";
// container.className = "container"



// document.body.appendChild(container)
// container.appendChild(ps)

// sureName.after(ps)

// Experiment Code ==

// append() ====================================




let container2 = document.createElement('div')
let para = document.createElement('p')
para.innerHTML="Yusuf Shaikh"
document.body.appendChild(container2)
container2.id="container"
container2.append("Yes i'am", para)

