// Modificando o header

 let header = document.querySelector('header');
 header.style.backgroundColor = 'blue';
 header.style.height = '200px';
 header.style.paddingTop = '100px';

 // Modificando box importantes e nao importantes

let box = document.querySelector('.emergency-tasks');
box.style.backgroundColor = 'pink';

let noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor = 'yellow';

let divs = document.querySelectorAll('div');
for (i = 0 ; i < divs.length; i += 1) {
    divs[i].style.height = '100px';
    divs[0].style.backgroundColor = 'purple';
    divs[1].style.marginTop = '100px';
    divs[1].style.backgroundColor = 'purple';
    divs[2].style.backgroundColor  = 'black';
    divs[3].style.marginTop = '100px';
    divs[3].style.backgroundColor = 'black';
}

// Modificando footer

let footer = document.querySelector('footer');
footer.style.backgroundColor = 'green';