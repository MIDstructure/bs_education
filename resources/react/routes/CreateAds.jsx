import React, { useState } from "react";
import "../../sass/_create-course.scss";
import Btn from "../components/Btn";


const CreateAds = () => {
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

    const click = e => {
      console.log(course);
    }

    
    return (
        <div className="create">
          <h2>Создать новый курс</h2>
          <form>
            <input
              value={course.name}
              onChange={handleInput}
              name="name"
              className="form-control"
              placeholder="Имя"
              
            />
            <input
              value={course.info}
              onChange={handleInput}
              name="info"
              className="form-control"
              placeholder="Информация"
              
            />
            <input
              value={course.phone}
              onChange={handleInput}
              name="phone"
              className="form-control"
              placeholder="Телефон"
              
            />
            <input
              value={course.email}
              onChange={handleInput}
              type="email"
              name="email"
              className="form-control"
              placeholder="Почта"
              
            />
            <input 
              type='file'
              value={course.photo}
              onChange={handleInput}
              name="photo"
              className="form-control"
              placeholder="Фото"
              
            />
            <input
              value={course.patent}
              onChange={handleInput}
              name="patent"
              className="form-control"
              placeholder="Файл"
              
            />
            <Btn label="Сохранить" className="my-3" action={course} />
          </form>
        </div>
    );
};

export default CreateAds;
