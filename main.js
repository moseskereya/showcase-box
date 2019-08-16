// containers
const show1 = document.querySelector('.box1')
const show2 = document.querySelector('.box2')

//butons
const button1 = document.querySelector('.control1')
const button2 = document.querySelector('.control2')


// functions
 let containerStatus = 1
button2.addEventListener('click', function(){
    if(containerStatus === 1){
        show1.style.width = '100%';
        containerStatus = 0;
    }else{
        show1.style.width = '0%';
        show2.style.height = "100%";
        containerStatus = 1;
    }

})

button1.addEventListener('click', function(){
    show1.style.width = '0%';
    show2.style.height = "0%";
})