import { useHistory, Switch, Route } from "react-router-dom";

const AppNavBar = (props) => {
  const history = useHistory();

  const navigateUser = (e, path) => {
    e.preventDefault();
    history.push(path);
  };

  const renderNavButton = (path, label) => {
    return (
      <a
        className="my-auto text-decoration-none text-primary text-bold ml-auto"
        href={path}
        onClick={(e) => navigateUser(e, path)}
      >
        <strong>{label}</strong>
      </a>
    );
  };
  return (
    <nav className="navbar navbar-info bg-info col-12">
      <div className="px-5 col-12 d-flex justify-content-between">
        <h2 className="navbar-brand">{props.title}</h2>
        <div className="my-auto ml-auto">
          <Switch>
            <Route
              exact
              path="/"
              render={() => renderNavButton("/register", "Register")}
            />
            <Route
              path="/register"
              render={() => renderNavButton("/", "Students")}
            />
            <Route
              path="/student/*"
              render={() => renderNavButton("/", "Students")}
            />
          </Switch>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
