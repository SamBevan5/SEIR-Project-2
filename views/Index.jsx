const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        const { jobs } = this.props;
        return (
            <Layout title="INDEX PAGE">
                <div>
                    <h1>Your Job Journal</h1>
                    <nav>
                        <a href="/jobs/new">Add a New Job</a>
                    </nav>
                    <ul>
                        {jobs.map((job, i) => {
                            return (
                                <li>
                                    <a href={`/jobs/${job._id}`}>
                                        {job.company}
                                    </a>{' '}<br></br>
                                    {job.applicationComplete
                                        ? `It is not complete`
                                        : `It is complete`}
                                    <br />
                                    {job.interviewDate} <br></br>
                                    {job.interviewer} <br></br>
                                    {job.notes} <br></br>

                                    <a href={`/jobs/edit/${job._id}`}>
                                        EDIT {job.company}
                                    </a>
                                    <form
                                        action={`/jobs/${job._id}?_method=DELETE`}
                                        method="post"
                                    >
                                        <input type="submit" value="delete" />
                                    </form>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Layout>
        );
    }
}

module.exports = Index;