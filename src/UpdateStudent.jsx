import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UpdateStudent = (props) => {
  const { student = {}, setTitle } = props;
  const [name, setName] = useState(student.name);
  const [studentId, setId] = useState(student.studentId);
  const [email, setEmail] = useState(student.email);
  const [grade, setGrade] = useState(student.grade);
  const [gender, setGender] = useState(student.gender);
  const [disableSubmit, toggleSubmit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setTitle("Update Student Profile");
  }, [setTitle]);

  const clearFields = () => {
    setName("");
    setId("");
    setEmail("");
    setGrade("");
    setGender("");
  };

  const sendRegistration = async () => {
    const response = {};
    // response = await axios.post('http://localhost:3001/register', {
    //   name: name,
    //   studentId: studentId,
    //   email: email,
    //   grade: grade,
    //   gender: gender
    // });
    console.log("Registered Saved");
    toggleSubmit(!disableSubmit);
    clearFields();
    history.push("/");
  };

  const handleSubmit = (event) => {
    console.log("form submited");
    sendRegistration();
    event.preventDefault();
  };

  return (
    <div className="container mt-5 col-12">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label for="studentId">Student Id</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(event) => setId(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label for="grade">Grade</label>
          <input
            type="number"
            id="grade"
            value={grade}
            min={1}
            max={15}
            onChange={(event) => setGrade(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label for="gender">Gender</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mt-3 d-flex justify-content-center">
          <button
            className="col-12 col-sm-12 col-md-6 btn-submit btn btn-primary"
            type="submit"
            disabled={disableSubmit}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStudent;
