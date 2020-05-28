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
            <div className="show-footer">
                <a id="back" href="/jobs/yourjobs">Back</a>
            </div>
            <form action="/jobs/yourjobs" method="POST">
              <fieldset>
                  <legend>New Listing</legend>
                       <label for="company">Company:</label>
                       <input type="text" name="company" id="company" />

                       <label for="isActive">Status (Check for Active):</label>
                       <input type="checkbox" name="isActive" id="isActive"/>
                 
                       <label for="applicationComplete">Application Complete?</label>
                       <input type="checkbox" name="applicationComplete" id="applicationComplete"/>
                 

                       <label for="interviewDate">Date Posted:</label>
                       <input type="text" name="interviewDate" id="interviewDate"/>

                       <label for="interviewer">Hiring Manager:</label>
                       <input type="text" name="interviewer" id="interviewer"/>

                       <label for="notes">Notes:</label>
                       <textarea id="notes"type="text" name="notes"/>

                       <label for="img">Company Logo (url)</label>
                       <input type="text" name="img" id="img"/>

                       <input type="submit" name="" value="Create Job Entry"/>

              </fieldset>
            </form>
          </div>
        </Layout>)
    }
  }
  
  module.exports = New;