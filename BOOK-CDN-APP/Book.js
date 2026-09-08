function Book(props){
    const image=React.createElement("image",{src:props.image,width:"140px",height:"200px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},props.title);
    const price=React.createElement("h3",{style:{color:"green"}},props.price);
    const btn=R
    const div=React.createElement("div",{className:"book"},[image,title,price]);
    return div;
}