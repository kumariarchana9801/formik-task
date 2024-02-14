/* eslint-disable react/prop-types */

import { useFormik } from "formik";
import { authorSchema } from "../Schema/scheme";


const AddAuthor = ({setShowAddAuthor,data,dispatch}) => {

    //Setting up Formik for Data Adding
    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
        initialValues:{
            authorName:"",
            authorBirth:"",
            authorBio:"",
        },
        validationSchema : authorSchema,
        onSubmit: (newAuthors) => {
            handleAddAuthor(newAuthors);
        },
    });

    //Reducer Function to Add Data
    const handleAddAuthor = (newAuthor) => {  
        const id = data.length ? Number(data[data.length-1].id) + 1 : 1;    
        dispatch({
            type: "addAuthor",
            id:id,
            name: newAuthor.authorName,
            birthDate: newAuthor.authorBirth,
            biography: newAuthor.authorBio,
        });
        setShowAddAuthor(false);
    }

  return (
    <form className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none"
    onSubmit={handleSubmit}
    >


        <input type="text" placeholder="Enter Author Name"
        name="authorName"
        value={values.authorName}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />
        
        {touched.authorName && errors.authorName ? 
        <div className="text-xs text-red-700">{errors.authorName}</div> : ""
        }


        <input type="date" placeholder="Select Author Birth Date"
        name="authorBirth"
        value={values.authorBirth}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none cursor-text"
        />

        {touched.authorBirth && errors.authorBirth ? 
        <div className="text-xs text-red-700">{errors.authorBirth}</div> : ""
        }

        <textarea id="bio" cols="20" rows="1" placeholder="Add Author Biography"
        name="authorBio"
        value={values.authorBio}
        onBlur={handleBlur}
        onChange={handleChange}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        ></textarea>

        {touched.authorBio && errors.authorBio ? 
        <div className="text-xs text-red-700">{errors.authorBio}</div> : ""
        }

        <div className="flex flex-row items-center justify-center gap-5">

            <button 
            type="button"
            onClick={() => {
                setShowAddAuthor(false);
            }}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-800"
            >
                Cancel
            </button>
            
            <button
            type="submit"
            className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
            >
                Add Author
            </button>
        </div>
    </form>
  )
}

export default AddAuthor