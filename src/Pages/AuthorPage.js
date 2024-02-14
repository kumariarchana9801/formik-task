import Navigation from "../Component/Navigation"
import AuthorCard from "../Component/AuthorCard"
import { useState } from "react"
import AddAuthor from "../Component/AddAuthor"
import { AuthorData } from "../context/AuthorContext"
  
const AuthorPage = () => {
    const {state, dispatch} = AuthorData();

    
    const [showAddAuthor,setShowAddAuthor] = useState(false);

  return (
    <div className="flex flex-col min-h-screen gap-3 px-2 pb-5 mx-auto sm:w-11/12 bg-slate-400 sm:px-5">
        <div>
            <Navigation />
        </div>

        {/* Add Author Button and Add Form */}
        <div>
            {
                showAddAuthor?
                <AddAuthor 
                setShowAddAuthor = {setShowAddAuthor}
                data = {state}
                dispatch ={dispatch}
                />
                : ""
            }
        </div>
        <div className='flex flex-row justify-end'>
            {
            showAddAuthor ? "" :
            <div onClick={() => setShowAddAuthor(true)}
            className= "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
            >Add Author</div>
            }
        </div>

        {/* Card Creating using Author data */}
        <div className="grid w-11/12 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 mx-auto lg:grid-cols-3 sm:grid-cols-2">
                {
                  
                  state.map((a) => 
                      <AuthorCard 
                      key = {a.id}
                      id={a.id}
                      author = {a}
                      dispatch = {dispatch}
                      />
                  )
                }
        </div>
    </div>
  )
}

export default AuthorPage