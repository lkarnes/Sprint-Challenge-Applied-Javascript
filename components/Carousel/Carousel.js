/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const imageArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg',  './assets/carousel/turntable.jpeg']

function carousel(images){
const crsl = document.createElement('div');
crsl.classList.add('carousel');
const box = document.querySelector('.carousel-container');
box.appendChild(crsl);
const left = document.createElement('div');
var counter = 0;
left.classList.add('left-button');
left.textContent = '<';
const img = document.createElement('img');
img.src = images[0];
img.style.display = 'block';
const right = document.createElement('div');
right.classList.add('right-button');
right.textContent = '>';
crsl.appendChild(left);
crsl.appendChild(img);
crsl.appendChild(right);
let image = 0;
console.log(crsl)
left.addEventListener('click',()=>{
 
 image -= 1;

if(image < 0){
  return image += 5
}else{
  console.log(image)
  img.src = images[image];
}
})
right.addEventListener('click',()=>{
 
  image += 1;
 
 if(image > 3){
   return image -= 5
 }else{
   console.log(image)
   img.src = images[image];
 }
 })
return crsl;
}
carousel(imageArray);
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
