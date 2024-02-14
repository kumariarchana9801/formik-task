/* eslint-disable react/prop-types */
import { createContext,useContext, useReducer } from "react";

// Author Initial Data
const data = [
    {
      id: 1,
      name: "John Doe",
      birthDate: "1970-07-15",
      biography: "John Doe, born in a small town in England, is a renowned author known for his thrilling mystery novels. His works often explore the human psyche and the blurred lines between reality and illusion."
    },
    {
      id: 2,
      name: "Jane Smith",
      birthDate: "1980-02-02",
      biography: "Jane Smith, a native of Australia, is a celebrated author of historical fiction. Her books, set in the backdrop of the World Wars, provide a poignant exploration of love and loss during turbulent times."
    },
    {
      id: 3,
      name: "Richard Roe",
      birthDate: "1990-03-03",
      biography: "Richard Roe, hailing from the United States, is a popular science fiction author. His futuristic novels, filled with imaginative technologies and extraterrestrial life, have captivated readers worldwide."
    },
    {
      id: 4,
      name: "Mary Major",
      birthDate: "2000-04-04",
      biography: "Mary Major, born in Canada, is a rising star in the realm of fantasy literature. Her epic tales of magic and adventure have quickly made her a favorite among young readers."
    },
    {
      id: 5,
      name: "Robert Minor",
      birthDate: "2010-05-05",
      biography: "Robert Minor, a young prodigy from India, has taken the literary world by storm with his insightful coming-of-age novels. Despite his young age, his profound understanding of human emotions has earned him critical acclaim."
    },
    {
      id: 6,
      name: "Alice Major",
      birthDate: "2020-06-06",
      biography: "Alice Major, a young author from France, is known for her captivating romance novels. Her books, filled with vivid characters and compelling narratives, have won the hearts of readers around the globe."
    },
]

//Author Updating function using Reducer
function reducer(state,action){
    switch(action.type){
        case "addAuthor":
          return [...state,{
            id: action.id,
            name: action.name,
            birthDate: action.birthDate,
            biography: action.biography,
          }]
  
        case "delete":
          return state.filter((f) => f.id !== action.id);
  
        case "authorEdit":
          return state.map((m) => {
            if(m.id === action.id){
              return {
                id:action.id,
                name: action.name,
                birthDate: action.birthDate,
                biography: action.biography,
              }
            }else{
              return m
            }
          })
    }
}

const AuthorContext = createContext(null);

const AuthorContextData = ({children}) => {

    const [state,dispatch] = useReducer(reducer,data);
  
    return (
      <div>
  
        <AuthorContext.Provider
        value ={
          {
            state,
            dispatch,
          }
        }
        >
          {children}
        </AuthorContext.Provider>
  
      </div>
    )
  }
  
export default AuthorContextData;
  
export const AuthorData = () => {
    return useContext(AuthorContext);
}