const open = document.getElementById("open");

const close = document.getElementById('close');
const container = document.getElementById('container');
console.log(open)
open.addEventListener('click',function(){
    console.log ('ok click')
    container.classList.add('active');
    });

close.addEventListener('click',function(){
        container.classList.remove('active');
    });