const React = require('react');
const Layout = require('./components/Layout');

class Edit extends React.Component {
    render() {
        const { job } = this.props;
        return (
            <Layout>
                <div className="edit-page">
                    <h1>Edit {job.company} Listing</h1>
                </div>
                <div className="edit-main-container">
                    <div className="show-footer">
                        <a id="back" href="/jobs/yourjobs">Back</a>
                    </div>
                    <form action={`/jobs/yourjobs/edit/${job._id}?_method=put`}
                    method="POST"
                    >
                        Company: <input type="text" name="company" value={job.company} /> <br />
                        Application Complete?:{' '}
                        <input type="checkbox" checked={job.applicationComplete ? 'checked' : ''}
                        name="applicationComplete"/><br />
                        Status (Check for Active):{' '}
                        <input type="checkbox" checked={job.isActive ? 'checked' : ''}
                        name="isActive"/><br />
                        Date Posted:<input type="text" name="interviewDate" value={job.interviewDate} />
                        <br />
                        Hiring Manager:<input type="text" name="interviewer" value={job.interviewer} />
                        <br />
                        Notes:<input type="text" name="notes" value={job.notes} />
                        <br />
                        Company Logo (url):<input type="text" name="img" value={job.img} /><br/>
                        <input type="submit" name="" value="Edit Job" />
                    </form>
                </div>
            </Layout>  
        );
    }
}

module.exports = Edit;