import "./Item.css"
const Item = ({props}) => {
  return (
    <div className="item">
        <img src={props.image} width={100} height={100} alt="item" />
        <h2>Title: {props.title}</h2>
        <h3>Price: ₹{props.price}</h3>
        <button className="button">Add to Cart </button>
    </div>
  )
}

export default Item
