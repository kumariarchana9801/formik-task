/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState } from "react";
import { authorSchema } from "../Schema/scheme";


const AuthorCard = ({author,id,dispatch}) => {

    const [showEdit,setShowEdit] = useState(false);

    //Deleting Data Func
    function handleDelete(id){
        dispatch({
            type:"delete",
            id:id,
        })
    }

    //Setting up Formik 
    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
        initialValues: {
            authorName : author.name,
            authorBirth : author.birthDate,
            authorBio : author.biography,
        },
        validationSchema: authorSchema,
        onSubmit: (authorEditedValues) => {
            handleEdit(authorEditedValues)
        }
    });

    //Edit Data Func
    function handleEdit(authorEditedValues){
        dispatch({
            type: "authorEdit",
            id:id,
            name: authorEditedValues.authorName,
            birthDate: authorEditedValues.authorBirth,
            biography: authorEditedValues.authorBio,           
        });
        setShowEdit(false);
    }

    //Initial Card with data
    const authorShow = !showEdit ? 
    <div className="flex flex-col px-3 py-2 bg-sky-900 text-white xs:px-5 xs:py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md justify-around gap-5 h-full overflow-hidden">
        <div className="flex flex-col justify-around gap-5">
            <p>
                <span className="mr-1 font-medium">
                    Author Name:
                </span> 
                <span>{values.authorName}</span></p>
            <p>
                <span className="mr-1 font-medium">
                    Birth Date:
                </span> 
                <span>{values.authorBirth}</span></p>
            <p>
                <span className="mr-1 font-medium">
                    Biography:
                </span> 
                <span className="line-clamp-3">{values.authorBio}</span> 
            </p>
        </div>

        <div
        className="flex flex-row items-center justify-start gap-5 sm:gap-0 sm:justify-between"
        >
            <button
            onClick={() => setShowEdit(true)}
            className="px-3 py-1 text-white bg-blue-400 rounded hover:bg-blue-700"
            >
                Edit
            </button>
            <button
            onClick={() => handleDelete(id)}
            className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-800"
            >
                Delete
            </button>
        </div>
    </div> 
    : "";

    //Editable card with data
    const authorEdit = showEdit ? 
    <form 
    onSubmit={handleSubmit}
    className="flex flex-col px-3 py-2 bg-sky-900 text-white xs:px-5 xs:py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md justify-around gap-5 h-full min-h-max">
        <div className="flex flex-col justify-around gap-5">
            <p className="flex flex-col flex-wrap items-center gap-1">
                <span className="mr-1 font-medium whitespace-nowrap">
                    Author Name:
                </span> 
                <input type="text"
                name="authorName"
                value={values.authorName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-1 w-full rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black"
                />
                {
                    touched.authorName && errors.authorName ?
                    <span className="text-xs text-red-700">
                        {errors.authorName}
                    </span>
                    :""
                }
            </p>
            <p className="flex flex-col flex-wrap items-center gap-1">
                <span className="mr-1 font-medium whitespace-nowrap">
                    Birth Date:
                </span> 
                <input type="date"
                name="authorBirth"
                value={values.authorBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-1 w-full rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black cursor-text"
                />
                  {
                    touched.authorBirth && errors.authorBirth ?
                    <span className="text-xs text-red-700">
                        {errors.authorBirth}
                    </span>
                    :""
                }
            </p>
            <p className="flex flex-col flex-wrap items-center gap-1 h-26 min-h-max">
                <span className="mr-1 font-medium whitespace-nowrap">
                    Biography:
                </span> 
                <textarea type="text"
                name="authorBio"
                value={values.authorBio}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-1 w-full rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none text-black"
                > </textarea>
                  {
                    touched.authorBio && errors.authorBio ?
                    <span className="text-xs text-red-700">
                        {errors.authorBio}
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
            authorShow
        }
        {
            authorEdit
        }
    </div>
  )
}

export default AuthorCard