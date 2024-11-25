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

        const container = document.createElement('div')
        container.innerHTML = "<p>Yusuf Shaikh </p>";
        document.body.appendChild(container)
        
        container.id = "userName"

        console.log(container)