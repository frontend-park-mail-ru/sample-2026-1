var a = document.getElementById('button');
console.log(a)
a.addEventListener('click', ()=> {
    const b = document.getElementsByTagName('h1');
    console.log(b);
    b[0].style.color = 'aqua';
});