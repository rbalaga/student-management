import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import "./styles.css";

const studentsdata = [
  {
    name: "rammohana rao",
    studentId: 1,
    grade: 10,
    gender: "male",
    email: "ramanji.balaga@gmail.com"
  },
  {
    name: "Vignesh",
    studentId: 2,
    grade: 12,
    gender: "male",
    email: "vignesh.g@gmail.com"
  },
  { name: "Satish", studentId: 2, grade: 13, gender: "female", email: "" },
  {
    name: "Sujani",
    studentId: 2,
    grade: 9,
    gender: "female",
    email: "sujani@gmail.com"
  }
];

const Students = (props) => {
  const [students, setStudents] = useState(studentsdata);
  const history = useHistory();

  const fetchStudents = async () => {
    const response = {};
    // response = await axios.get("http://localhost:3001/students");
    response.data = studentsdata;
    setStudents(response.data);
  };

  const navigate = (student) => {
    props.selectStudent(student);
    history.push(`/student/${student.studentId}`);
  };

  //triggered only when component mounted. and unmounted.
  useState(() => {
    console.log("Fetching student details.");
    props.setTitle("Students");
    fetchStudents();
  }, []);

  const renderStudents = students.map((student) => (
    <li
      className="mt-4 d-flex justify-content-start list-group-item list-group-item-action border align-left"
      onDoubleClick={() => navigate(student)}
    >
      <span className="text-left">
        <strong>{student.name}</strong>
      </span>
    </li>
  ));

  return (
    <Container>
      <div className="App d-flex flex-column align-items-center">
        <div className="col-9 mt-3">
          {students.length > 0 ? renderStudents : "No Students Regsitered.!"}
        </div>
      </div>
    </Container>
  );
};

export default Students;
