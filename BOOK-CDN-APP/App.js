import React from "react";
import Book from "./Book.js";
const bookdata=[
    {image:"",title:"React JS",price:465},
    {image:"",title:"Node JS",price:500},
    {image:"",title:"Mongo DB",price:600},
    {image:"",title:"Express JS",price:700},
    {image:"",title:"JavaScript",price:800},];
function App(){
    const bookstore=bookdata.map((b)=>{
        return Book(b);
})
const div=React.createElement("div",{className:"bookstore"},bookstore);
return div;
}
export default App;