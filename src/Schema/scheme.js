import * as yup from "yup";

// Validation for Author data

export const authorSchema = yup.object({

    authorName: yup.string().required("Please fill the Author Name")
    .max(30,"Name should be less than 16 Character")
    .min(3,"Name should atleast 3 character"),

    authorBio: yup.string().required("Please fill Author details")
    .min(5,"Atleast 5 characters required")
    .max(500,"Details Should not be more than 100 character"),

    authorBirth: yup.date().required("Please fill the data")
    .max(new Date(),"Date can't be in Future"),
});

// Validation for Book data
export const bookSchema = yup.object({
    title: yup.string().required("Book Title Required")
    .min(4,"Atleast 4 characters required")
    .max(30,"Title should not be more than 20 characters"),

    author: yup.string().required("Field Required")
    .min(4,"Atleast 4 characters required")
    .max(30,"Author name should not be more than 20 characters"),

    isbn: yup.number().required("Field Required")
    .test("length","length must be b/w 4 to 20" ,val => val.toString().length < 20 && val.toString().length > 3),
    // .min(4000,"minimum 4 numbers required")
    // .max(1000000000000,"numbers shouldn't be more than 10"),

    date: yup.date().required("Publishing date required")
    .max(new Date(),"Date can't be in future")

});