const Book = ({props}) => {
  return (
    <div className="book">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOTppcCu_AJmVC5fYKckbX0TlCbNPKszxColRd7_Jjw&s" width={100} height={100} alt="Book Image" />
      <h2>Title: {props.title}</h2>
      <h2>Price: ₹{props.price}/-</h2>
      <button>Add to Cart</button>
    </div>
  )
}

export default Book
