const React = require('react');
const Layout = require('./components/Layout');

class Show extends React.Component {
    render() {
        const { company, applicationComplete, interviewDate, interviewer, notes, isActive, img } = this.props.job;
        return (
            <Layout>
                <div className="main-container">
                    <div className="show-header">
                        <h1> {company}</h1>
                        <img src={img} alt="company-logo"/>
                    </div>
                    <p><h3>Date Job was Posted:</h3>{interviewDate}</p>
                    <h3>Status:</h3><p>{isActive ? <span id="active">{`ACTIVE`}</span> : <span id="inactive">{`INACTIVE`}</span>}</p>
                    <h3>Application Complete?:</h3><p>{applicationComplete ? <span id="active">{`COMPLETE`}</span> : <span id="inactive">{`INCOMPLETE`}</span>}</p>
                    <p><h3>Hiring Manager:</h3>{interviewer}</p>
                    <p><h3>Notes:</h3>{notes}</p>
                    <div className="show-footer">
                        <a id="back" href="/jobs/yourjobs">Back</a>
                    </div>
                    
                </div>

            </Layout>
        )
    }
}

module.exports = Show;