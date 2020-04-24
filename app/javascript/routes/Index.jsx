import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Courses from "../components/Courses";
import Course from "../components/Course";
import Lessons from "../components/Lessons";
import Questions from "../components/Questions";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/course/:id" exact component={Course} />
      <Route path="/lessons/:course_id" exact component={Lessons} />
      <Route path="/questions/:lesson_id" exact component={Questions} />
    </Switch>
  </Router>
);
