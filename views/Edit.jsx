const React = require('react');

class Edit extends React.Component {
    render() {
        const { job } = this.props;
        return (
            <div>
                <h1>Edit Job Info</h1>
                <form
                    action={`/jobs/edit/${job._id}?_method=put`}
                    method="POST"
                >
                    Company: <input type="text" name="company" value={job.company} />
                    Application Complete?:{' '}
                    <input
                        type="checkbox"
                        checked={job.applicationComplete ? 'checked' : ''}
                        name="applicationComplete"
                    />
                    <br />
                    Interview Date:<input type="text" name="interviewDate" value={job.interviewDate} />
                    <br />
                    Interviewer:<input type="text" name="interviewer" value={job.interviewer} />
                    <br />
                    Notes:<input type="text" name="notes" value={job.notes} />
                    <br />
                    <input type="submit" name="" value="Edit Job" />
                </form>
            </div>
        );
    }
}

module.exports = Edit;