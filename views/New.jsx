const React = require('react');
const Layout = require('./components/Layout');

class New extends React.Component {
    render() {
      return (
        <Layout>
          <div className="new-page">
            <h1>New Job</h1>
          </div>
          <div className="new-main-container">
            <form action="/jobs" method="POST">
                  Company: <input type="text" name="company" /><br/>
                  Application Status (Check if Active): <input type="checkbox" name="isActive"/><br/>
                  Application Complete (Check if Complete): <input type="checkbox" name="applicationComplete"/><br/>
                  Interview Date: <input type="text" name="interviewDate" /><br/>
                  Hiring Manager: <input type="text" name="interviewer" /><br/>
                  Company Logo (url): <input type="text" name="img" /><br/>
                  Notes: <input type="text" name="notes" /><br/>
                  <input type="submit" name="" value="Create Job Entry"/>
              </form>
          </div>
        </Layout>)
    }
  }
  
  module.exports = New;