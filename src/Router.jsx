import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AppNavBar from "./NavBar";
import Register from "./Register";
import Students from "./Students";
import UpdateStudent from "./UpdateStudent";

const AppRouter = () => {
  const [title, setTitle] = useState("");
  const [selectedStudent, selectStudent] = useState({});

  return (
    <>
      <AppNavBar title={title} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Students selectStudent={selectStudent} setTitle={setTitle} />
          )}
        />
        <Route
          path="/register"
          component={() => <Register setTitle={setTitle} />}
        />
        <Route
          path="/student/*"
          render={() => (
            <UpdateStudent setTitle={setTitle} student={selectedStudent} />
          )}
        />
        <Route path="*" component={() => "404 Not found!"} />
      </Switch>
    </>
  );
};

export default AppRouter;
