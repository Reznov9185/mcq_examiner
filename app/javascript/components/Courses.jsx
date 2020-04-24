import React from "react";
import { Link } from "react-router-dom";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/courses/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ courses: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { courses } = this.state;
    const allCourses = courses.map((course, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <Link to={`/course/${course.id}`} className="btn custom-button">
              View Course
            </Link>
          </div>
        </div>
      </div>
    ));
    const noCourse = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No courses yet.
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Course for every lessons</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular courses, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {courses.length > 0 ? allCourses : noCourse}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Courses;
