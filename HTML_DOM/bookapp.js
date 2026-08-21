const bookdata=[
    {image:"Author_Author_Cover.jpg",price:465},
    {image:"book1.jpeg",price:723},
    {image:"book2.avif",price:389},
]
function Book(props){
const div=document.createElement("div");
div.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src",props.image)
image.setAttribute("width","100px");
image.setAttribute("height","100px");
const h2=document.createElement("h2");
h2.innerText="Price: ₹"+props.price;
const bt=document.createElement("button");
bt.innerText="AddToCart";
bt.onclick=()=>addToCart();
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return div;
}
const cart=[];
function addToCart(data){
  cart.push(data);
  console.log(data,"data added successfully");
  alert("book added successfully");
}
const bookstore=bookdata.map((i)=>(
    Book(i)
))

const parent =document.getElementById("root");
for(let b of bookstore){
parent.appendChild(b);
}

