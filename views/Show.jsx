const React = require('react');

class Show extends React.Component {
    render() {
        const { company, applicationComplete, interviewDate, interviewer, notes } = this.props.job;
        return (
            <div>
                <h1> Job Show Page</h1>
                <p>{company}</p>
                <p>{applicationComplete ? `It is not` : `It is Complete`}</p>
                <p>{interviewDate}</p>
                <p>{interviewer}</p>
                <p>{notes}</p>
            </div>
        )
    }
}

module.exports = Show;