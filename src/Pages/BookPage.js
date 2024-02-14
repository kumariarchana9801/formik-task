import Navigation from "../Component/Navigation";
import BookCard from "../Component/Book Card";
import { useState } from "react";
import AddBooks from "../Component/AddBooks";
import { BookData } from "../context/Context";

  const BookPage = () => {

    const {state,dispatch} = BookData();
    
    const [showAddbook,setShowAddBook] = useState(false);

    return (
      <div className="flex flex-col min-h-screen gap-3 px-2 mx-auto sm:w-11/12 bg-slate-400 sm:px-5">
          <div>
              <Navigation />
          </div>
          <div>
              {
                  showAddbook?
                  <AddBooks 
                  setShowAddBook= {setShowAddBook}
                  dispatch = {dispatch}
                  />
                  : ""
              }
          </div>

          <div className='flex flex-row justify-end'>
            { showAddbook ? "" :
                <div onClick={() => setShowAddBook(true)}
                  className= "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
                >
                    Add Book
                </div>
            }         
          </div>

            {/* Card Creating using Book data */}
          <div className="grid w-11/12 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 mx-auto lg:grid-cols-3 sm:grid-cols-2">
              {
                  state && 
                  state?.map((b,idx) => 
                      <BookCard 
                      key = {idx}
                      id={idx}
                      book = {b}
                      dispatch = {dispatch}
                      />
                  )
              }
          </div>
      </div>
    )
  }

  export default BookPage