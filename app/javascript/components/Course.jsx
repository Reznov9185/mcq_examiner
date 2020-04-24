import React from "react";
import { Link } from "react-router-dom";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course: { name: "", description: "", credits: "" } };
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ course: response }))
      .catch(() => this.props.history.push("/courses"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { course } = this.state;
    const courseName = this.addHtmlEntities(course.name);
    const courseDesc = this.addHtmlEntities(course.description);
    const courseCredit = this.addHtmlEntities(course.credits);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {courseName}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">
                  Description
                </h5>
                <div className="float-left">
                  {courseDesc}
                </div>
              </ul>
            </div>
          </div>
          <Link to={`/lessons/${course.id}`} className="btn custom-button">
            View Lessons
          </Link>
          <Link to="/courses" className="btn btn-link">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

}

export default Course;
