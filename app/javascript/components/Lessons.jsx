import React from "react";
import { Link } from "react-router-dom";

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { course_id }
      }
    } = this.props;

    const url = `/api/v1/lessons/index?course_id=${course_id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ lessons: response }))
      .catch(() => this.props.history.push("/lessons"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }


  render() {
    const { lessons } = this.state;
    const allLessons = lessons.map((lesson, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{lesson.name}</h5>
            <div className="card-body">{lesson.description}</div>
            <Link to={`/questions/${lesson.id}`} className="btn custom-button">
              Questions
            </Link>
          </div>
        </div>
      </div>
    ));
    const noLesson = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No lessons yet.
        </h4>
      </div>
    );
    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Course lessons</h1>
            <p className="lead text-muted">
              You can try our lesson exams!
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {lessons.length > 0 ? allLessons : noLesson}
            </div>
            <Link to="/courses" className="btn btn-link">
              Go back to the Courses
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Lessons;
