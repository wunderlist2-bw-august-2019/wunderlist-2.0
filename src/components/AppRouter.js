import React from "react";
import { Route } from "react-router-dom";

import Login from "./user/Login";
import Register from "./user/Register";
import NewTask from "./tasks/NewTask";

const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/add-new-task" component={NewTask} />
    </div>
  );
};

export default AppRouter;
