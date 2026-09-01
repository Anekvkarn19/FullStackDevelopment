import  Book from "./Book";

const BookStore = () => {
    const bookdata=[
        {
            image:"",title:"React JS",price:465
        },
        {
            image:"",title:"Node JS",price:500
        },
        {
            image:"",title:"Mongo DB",price:600
        },
        {
            image:"",title:"Express JS",price:700
        }
    ]
  return (
    <div className="bookstore">
      {bookdata.map((book, index) => {
        return <Book key={index} props={book} />;
      })}
    </div>
  )
}

export default BookStore