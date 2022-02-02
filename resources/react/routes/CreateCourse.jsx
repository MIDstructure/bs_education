import React, { useState } from "react";
import "../../sass/_create-course.scss";
import { LoadingButton } from "@mui/lab";
import TextField from "@mui/material/TextField";

const CreateCourse = () => {
    const [course, setCourse] = useState({
        name: "",
        info: "",
        phone: "",
        email: "",
        photo: "",
        patent: "",
    });

    const formData = new FormData()
    formData.append('name', course.name) 
    formData.append('info', course.info) 
    formData.append('phone', course.phone) 
    formData.append('email', course.email) 
    formData.append('photo', course.photo) 
    formData.append('patent', course.patent) 


    const handleInput = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCourse({
            name: "",
            info: "",
            phone: "",
            email: "",
            photo: "",
            patent: "",
        });
        
    };

    
    return (
        <div className="create">
            <h2>Создать новый курс</h2>
            <form>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={course.name}
                    onChange={handleInput}
                    name="name"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={course.info}
                    onChange={handleInput}
                    name="info"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={course.phone}
                    onChange={handleInput}
                    name="phone"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={course.email}
                    onChange={handleInput}
                    name="email"
                />
                <input 
                    type='file'
                    value={course.photo}
                    onChange={handleInput}
                    name="photo"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={course.patent}
                    onChange={handleInput}
                    name="patent"
                />
                <LoadingButton onClick={handleSubmit} variant="outlined">
                    Submit
                </LoadingButton>
            </form>
        </div>
    );
};

export default CreateCourse;
