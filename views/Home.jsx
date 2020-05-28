const React = require('react');
const Layout = require('./components/Layout');

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <div className="home-main-container">
                    <div className="welcome">
                        <h1>A Single Platform for Your Entire Job Hunt.</h1>
                    </div>
                    <div className="home-body-section">
                        <div className="home-icon-1">
                            <img src="./images/find_jobs_icon.png" alt="find-icon"/>
                            <h3>Find Jobs</h3>
                        </div>
                        <div className="home-icon-2">
                            <img src="./images/apply_icon.png" alt="apply-icon"/>
                            <h3>Apply to Jobs</h3>
                        </div>
                        <div className="home-icon-3">
                            <img src="./images/track_progress_icon.png" alt="track-icon"/>
                            <h3>Track Progress</h3>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Home;