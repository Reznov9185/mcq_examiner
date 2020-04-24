import React from "react";
import { Link } from "react-router-dom";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { lesson_id }
      }
    } = this.props;

    const url = `/api/v1/questions/index?lesson_id=${lesson_id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ questions: response }))
      .catch(() => this.props.history.push("/questions"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const url =
      `/api/v1/questions/evaluate?lesson_id=${this.state.questions[0].lesson_id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ message: response }))
      .catch(error => console.log(error.message));
  }

  render() {
    const { questions } = this.state;
    const allQuestions = questions.map((question, index) => (
      <div key={index} className="col-md-12 col-lg-12">
        <div className="card mb-4">
          <div className="card-body">
            <div className="question">
              <h5>
                <span id="question">Question {index+1}: {question.statement}</span>
                <div className="m-2">
                </div>
                {
                  Object.keys(question.answers)
                    .map((answer, index) => {
                      return (
                        <div>
                          <input type="radio" id={question.answers[index].id}
                                 name={question.id}
                                 value={question.answers[index].id}
                                 onChange={this.onChange}
                          />
                          {' '}
                          <label htmlFor={question.answers[index].id}>
                            {question.answers[index].statement}
                          </label>
                        </div>
                      )
                  })
                }
              </h5>
            </div>
          </div>
        </div>
      </div>
    ));
    const noQuestions = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No questions yet.
        </h4>
      </div>
    );
    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Lesson Examination</h1>
            <p className="lead text-muted">
              You can answer questions and get your lesson completed!
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              <form onSubmit={this.onSubmit} id="mcqForm">
                <div className="form-group">
                  {questions.length > 0 ? allQuestions : noQuestions}
                </div>
                <div className="alert-info my-3 p-3">
                  {
                    this.state.message !== undefined &&
                    this.state.message.message
                  }
                  {
                    this.state.message === undefined &&
                    "Your Score will Appear here!"
                  }
                </div>
                <button type="submit"
                        className="btn custom-button mt-3 col-md-12">
                  Submit & Evaluate
                </button>
              </form>
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
export default Questions;
