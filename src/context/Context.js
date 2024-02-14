/* eslint-disable react/prop-types */
import { createContext,useContext, useReducer } from "react";

// Book Initial Data

const bookData = [
  {
    title: "The Mystery of Reality",
    id:1,
    author: "John Doe",
    isbn: 1234567890,
    date: "2020-10-30"
  },
  {
    title: "War and Love",
    id:2,
    author: "Jane Smith",
    isbn: 2345678901,
    date: "2011-09-13"
  },
  {
    title: "Future Unveiled",
    id:3,
    author: "Richard Roe",
    isbn: 3456789012,
    date: "2015-04-05"
  },
  {
    title: "The Magic Within",
    id:4,
    author: "Mary Major",
    isbn: 4567890123,
    date: "2013-05-28"
  },
  {
    title: "The Journey of Life",
    id:5,
    author: "Robert Minor",
    isbn: 5678901234,
    date: "2002-12-16"
  },
  {
    title: "The Power up",
    id:6,
    author: "Alice Major",
    isbn: 6789012345,
    date: "2010-09-11"
  }
]

//Book Updating function using Reducer
function reducer(state,action){
  switch(action.type){
      case "AddBook":
          return [...state,{
              title: action.title,
              author: action.author,
              isbn: action.isbn,
              date: action.date,
          }]
      case "delete":
          return state.filter((t,idx) => idx !== action.id)
      case "BookEdit":
          return state.map((d,idx) => {
            if(idx === action.id){
              return {
                title: action.title,
                author: action.author,
                isbn: action.isbn,
                date: action.date,
              }
            }else{
              return d
            }
          })

  }
}

const BookContext = createContext(null);

const AppContext = ({children}) => {

  const [state,dispatch] = useReducer(reducer,bookData);

  return (
    <div>

      <BookContext.Provider
      value ={
        {
          state,
          dispatch,
        }
      }
      >
        {children}
      </BookContext.Provider>

    </div>
  )
}

export default AppContext;

export const BookData = () => {
  return useContext(BookContext);
}