const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        const { jobs } = this.props;
        return (
            <Layout title="INDEX PAGE">
                <h1 className="indexH1">Your Jobs:</h1>
                <div className="switch">
                    <div className="switches">
                        <a href="/jobs/new"><img id="add" src="./images/add_icon.svg" alt="add_icon"/></a>
                        <div class="switches-content">
                            <p>Click to add another job you're interested in</p>
                        </div> 
                    </div>
                </div>
                <div className="allJobs">
                        {jobs.map((job, i) => {
                            return (
                                <div className="jobBlock" id={`block${i}`}>
                                    <div className="blockIcons">
                                        <div id="icons">
                                            <a href={`/jobs/edit/${job._id}`}>
                                                <img className="editImg" src="./images/edit_icon_4.png" alt=""/>
                                            </a>
                                            <form
                                                action={`/jobs/${job._id}?_method=DELETE`}
                                                method="post"
                                            >
                                                <input type="image" src="./images/delete_icon.png" alt="Submit feedback"/>
                                            </form>
                                            <div id="status">{job.isActive
                                            ? <img src="./images/active.png" alt="active"/>
                                            : <img src="./images/inactive.png" alt="inactive"/>}   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jobBlockInfo">
                                        <div className="jobBlockImage">
                                            <a href={`/jobs/${job._id}`}><img src={job.img} alt="company-logo"/></a>
                                        </div>
                                        <div className="jobDate">
                                            <h2>{job.company}</h2>
                                        </div>
                                    </div>  
                                </div>
                            );
                        })}
                </div>
            </Layout>
        );
    }
}

module.exports = Index;