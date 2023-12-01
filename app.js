
let closeShopping = document.querySelector('.closeShopping');
let total = document.querySelector('.total');


////////////////////////////////////////////
let openShopping = document.querySelector('.shopping');
const btns = document.querySelectorAll(".box button")
const quantity = document.querySelector('.quantity');
const sideNav = document.createElement('div')
const close = document.querySelector(".closeShopping")
const addCart = (event) =>{
        let picCArt = '' ;
        nameProduct = ''
        price = Number
        }

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active'));
//  }

for(let btn of btns){
    btn.addEventListener('click', function (){
        quantity.innerText++ 

        
    })}

openShopping.addEventListener('click',function(){ 
    sideNav.setAttribute("class","card")
 sideNav.innerHTML = `
    
        <h1>Card</h1>
           <div class="checkOut">
            <div class="total" type="button">0.00 </div>
            <div class="closeShopping" type="button"> Close</div>
          </div>
   `
    document.body.append(sideNav)
    // document.body.insertAdjacentHTML("beforeend",sideNav)
    
document.addEventListener('click',function(e){
    if (e.target.classList.contains('closeShopping')){
        sideNav.classList.add("hide")
    }
        
    
})
})
// element.getElementsByClassName("test");
element.getElementsByClassName("")
    


close.addEventListener('click',function(){
    console.log("gfj")
})