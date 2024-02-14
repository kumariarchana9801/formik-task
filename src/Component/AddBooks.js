/* eslint-disable react/prop-types */
import { bookSchema } from "../Schema/scheme";
import { useFormik } from "formik";



const AddBooks = ({setShowAddBook,dispatch}) => {

    //Setting up Formik for Data Adding
    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
        initialValues: {
            title:"",
            author:"",
            isbn:"",
            date:"",
        },
        validationSchema: bookSchema,
        onSubmit: (newBooks) => {
            handleAddBook(newBooks)
        }
    });

    //Reducer Function to Add Data
    function handleAddBook(newBook){        
        dispatch({
            type:"AddBook",
            title: newBook.title,
            author: newBook.author,
            isbn: newBook.isbn,
            date: newBook.date,
        })
        setShowAddBook(false);
    }

  return (
    <form className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none" onSubmit={handleSubmit}>

        <input type="text" placeholder="Enter Book Title" id="title"
        name="title"
        value={values.title}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />
        {
        touched.title && errors.title ? 
        <div className="text-xs text-red-700">
            {errors.title}
        </div>
        : ""
        }

        <input type="text" placeholder="Enter Author Name" id="author"
        name="author"
        value={values.author}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />
        {
        touched.author && errors.author ? 
        <div className="text-xs text-red-700">
            {errors.author}
        </div>
        : ""
        }

        <input type="text" placeholder="Enter Book ISBN" id="isbn"
        name="isbn"
        value={values.isbn}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />
        {
        touched.isbn && errors.isbn ? 
        <div className="text-xs text-red-700">
            {errors.isbn}
        </div>
        : ""
        }

        <input type="date" placeholder="Select Date" id="publishing-date"
        name="date"
        value={values.date}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none cursor-text"
        />
        {
        touched.date && errors.date ? 
        <div className="text-xs text-red-700">
            {errors.date}
        </div>
        : ""
        }

        <div className="flex flex-row items-center justify-center gap-5">
            <button 
            type="button"
            onClick={() => {
                setShowAddBook(false);
            }}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-800"
            >
                Cancel
            </button>
            
            <button
            type="submit"
            className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
            >
                Add Book
            </button>
        </div>
    </form>
  )
}

export default AddBooks