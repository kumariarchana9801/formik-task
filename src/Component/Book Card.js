/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useFormik } from "formik";
import { bookSchema } from "../Schema/scheme";


const BookCard = ({book,id,dispatch}) => {

    const [showEdit,setShowEdit] = useState(false);


    //Deleting Data Func
    function handleDelete(){
        dispatch({
            type:"delete",
            id:id,
        })
    }

    //Setting up Formik 
    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
        initialValues: {
            title : book.title,
            author : book.author,
            isbn : book.isbn,
            date: book.date,
        },
        validationSchema: bookSchema,
        onSubmit: (bookEditedValues) => {
            handleEdit(bookEditedValues)
        }
    });

    //Edit Data Func
    function handleEdit(bookEditedValues){
        dispatch({
            type: "BookEdit",
            id:id,
            title: bookEditedValues.title,
            author: bookEditedValues.author,
            isbn: bookEditedValues.isbn,
            date: bookEditedValues.date,            
        });
        setShowEdit(false);
    }

    //Initial Card with data
    const cardShow = !showEdit ? 
        <div className="flex flex-col px-3 py-2 bg-sky-900 text-white xs:px-5 xs:py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md justify-around gap-5 h-full">
            <div className="flex flex-col justify-around gap-5">
                <p>
                    <span className="mr-1 font-medium">
                        Title:
                    </span> 
                    <span>{book.title}</span>
                </p>
                <p>
                    <span className="mr-1 font-medium">
                        Author:
                    </span> 
                    <span>{book.author}</span>
                </p>
                <p>
                    <span className="mr-1 font-medium">
                        ISBN:
                    </span> 
                    <span>{book.isbn}</span>
                </p>
                <p>
                    <span className="mr-1 font-medium">
                        Published Date:
                    </span> 
                    <span>{book.date}</span>
                </p>
            </div>
            <div 
            className="flex flex-row items-center justify-start gap-5 sm:gap-0 sm:justify-between"
            >
                <button
                onClick={() => {
                    setShowEdit(true)
                }}
                className="px-3 py-1 text-white bg-blue-400 rounded hover:bg-blue-700"
                >
                    Edit
                </button>
                <button
                onClick={handleDelete}
                className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-800"
                >
                    Delete
                </button>
            </div>
        </div>
        : "";
    
    //Editable card with data
    const cardEdit = showEdit ? 
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col px-3 py-2 bg-sky-900 text-white xs:px-5 xs:py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md justify-around gap-5 h-full">
            <div className="flex flex-col justify-around gap-1 flex-warp">
                
                <p className="flex flex-col flex-wrap items-center gap-1">
                    <span className="mr-1 font-medium whitespace-nowrap">
                        Title:
                    </span> 
                    <input type="text" 
                    name="title"
                    value={values.title} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black"
                    />
                    {
                        touched.title && errors.title ?
                        <span className="text-xs text-red-700">
                            {errors.title}
                        </span>
                        :""
                    }
                </p>
                <p className="flex flex-col flex-wrap items-center gap-1">
                    <span className="mr-1 font-medium">
                        Author:
                    </span> 
                    <input type="text" 
                    name="author"
                    value={values.author} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black"
                    />
                    {
                        touched.author && errors.author ?
                        <span className="text-xs text-red-700">
                            {errors.author}
                        </span>
                        :""
                    }
                </p>
                <p className="flex flex-col flex-wrap items-center gap-1">
                    <span className="mr-1 font-medium">
                        ISBN:
                    </span> 
                    <input type="text" 
                    name="isbn"
                    value={values.isbn} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black"
                    />
                    {
                        touched.isbn && errors.isbn ?
                        <span className="text-xs text-red-700">
                            {errors.isbn}
                        </span>
                        :""
                    }
                </p>
                <p className="flex flex-col flex-wrap items-center gap-1">
                    <span className="mr-1 font-medium">
                        Published Date:
                    </span> 
                    <input type="date" 
                    name="date"
                    value={values.date} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black cursor-text"
                    />
                    {
                        touched.date && errors.date ?
                        <span className="text-xs text-red-700">
                            {errors.date}
                        </span>
                        :""
                    }
                </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 sm:gap-0">
                <button
                type="submit"
                className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
                >
                    Save
                </button>
            </div>
        </form>
        : "";
    
  return (
    <div>
        {
            cardShow
        }

        {
            cardEdit
        }
        
    </div>
  )
}

export default BookCard