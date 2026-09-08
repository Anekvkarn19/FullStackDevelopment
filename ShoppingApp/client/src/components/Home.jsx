import Item from "./Item"
const itemData=[
  {image:"https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",title:"React JS",price:"₹756/-"},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrtQWy_JSE3o_OYbqvAYWq2TapU-w1PoxGG6sJDf7eg&s=10",title:"Node JS",price:"₹856/-"},
  {image:"https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png",title:"Mongo DB",price:"₹956/-"},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXyqM27GOXG04aEDZ32u_8JSyHNNyv3Yj5UTVO87fxg&s=10",title:"Express JS",price:"₹1056/-"},
]
const Home = () => {
  return (
    <div className="home">
      {itemData.map((item, index) => {
        return <Item key={index} props={item} />;
      })}
    </div>
  )
}

export default Home
