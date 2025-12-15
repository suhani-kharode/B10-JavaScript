
let cartQuality=0;

function showQuality(){
  console.log(`Cart Quantity : ${cartQuality}`);
}

function addToCart(){
  cartQuality += 1;
   console.log(`Cart Quantity : ${cartQuality}`);
} 

function addTwo(){
  cartQuality += 2;
   console.log(`Cart Quantity : ${cartQuality}`);
} 

function addThree(){
  cartQuality += 3;
   console.log(`Cart Quantity : ${cartQuality}`);
} 

function reset(){
  cartQuality = 0;
   console.log(`Cart Quantity : ${cartQuality}`);
} 