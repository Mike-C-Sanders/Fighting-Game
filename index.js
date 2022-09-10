//store the canvas background in a canvas variable
const canvas = document.querySelector('canvas');
//context variable storing the context as 2d. 
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 976;

c.fillRect(0,0,canvas.width, canvas.height)