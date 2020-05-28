const React = require('react');
const Layout = require('./components/Layout');

class Edit extends React.Component {
    render() {
        const { job } = this.props;
        return (
            <Layout>
                <div className="edit-page">
                </div>
                <div className="edit-main-container">
                    <div className="show-footer">
                        <a id="back" href="/jobs/yourjobs">Back</a>
                    </div>
                    <form action={`/jobs/yourjobs/edit/${job._id}?_method=put`}
                    method="POST"
                    >   <fieldset>
                   
                        <legend>Edit {job.company} Listing</legend>
                            <label for="company">Company:</label>
                            <input type="text" name="company" value={job.company} id="company"/>
                      
                            <label for="applicationComplete">Application Complete?</label>
                            <input type="checkbox" checked={job.applicationComplete ? 'checked' : ''}name="applicationComplete" id="applicationComplete"/>
                      
                            <label for="isActive">Status (Check for Active):</label>
                            <input id="isActive" type="checkbox" checked={job.isActive ? 'checked' : ''}
                            name="isActive"/>

                            <label for="interviewDate">Date Posted:</label>
                            <input id="interviewDate" type="text" name="interviewDate" value={job.interviewDate} />

                            <label for="interviewer">Hiring Manager:</label>
                            <input id="interviewer" type="text" name="interviewer" value={job.interviewer} />

                            <label for="notes">Notes:</label>
                            <textarea id="notes"type="text" name="notes" value={job.notes} />

                            <label for="img">Company Logo (url)</label>
                            <input id="img" type="text" name="img" value={job.img} />

                        </fieldset>
                        
                        <input type="submit" name="" value="Edit Job" />
                    </form>
                </div>
            </Layout>  
        );
    }
}

module.exports = Edit;