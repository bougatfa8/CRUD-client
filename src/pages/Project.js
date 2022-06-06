import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";

import Header from "./Header";
function Project() {
  const [projects, setprojects] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandlerP = (e)=>{
    
    e.preventDefault();
    axios.post('/api/projects', form)
    .then(res=>{
      console.log("erreur")

      setMessage(res.data.message)
      
      /* hide form after save */
      setForm({})
      /* hide errors after save */
      setErrors({})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  /* delete */
  const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this user")){
 
     axios.delete(`/api/projects/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }
  /* find all project */
  useEffect(async () => {
    await axios.get("/api/projects").then((res) => {
      setprojects(res.data);
    });
  });
  return (
    <>
    <Header/>
    
    <div className="row p-4">
      <Alert message={message} show={show}/>
      <div className="mt-4">
        <h2> Project</h2>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandlerP}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            onChangeHandler={onChangeHandler}
            errors={errors.Email}
          />
          <InputGroup
            label="Lastname"
            type="text"
            name="Lastname"
            onChangeHandler={onChangeHandler}
            errors={errors.Lastname}
          />
          <InputGroup
            label="Firstname"
            type="text"
            name="Firstname"
            onChangeHandler={onChangeHandler}
            errors={errors.Firstname}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            onChangeHandler={onChangeHandler}
            errors={errors.Age}
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Budget</th>
              <th scope="col">Time estimeted</th>
              <th scope="col">start date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(({ Email, Lastname, Firstname, Age, _id }) => (
              <RowDetails
                Email={Email}
                Lastname={Lastname}
                Firstname={Firstname}
                Age={Age}
                Id={_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  );
}

export default Project;
