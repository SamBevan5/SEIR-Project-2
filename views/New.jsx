const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Job</h1>
              <form action="/jobs" method="POST">
                    Company: <input type="text" name="company" /><br/>
                    Application Complete?: <input type="checkbox" name="applicationComplete"/><br/>
                    Interview Date: <input      type="text" name="interviewDate" /><br/>
                    Interviewer: <input 
                    type="text" name="interviewer" /><br/>
                    Notes: <input type="text" name="notes" /><br/>
                  <input type="submit" name="" value="Create Job Entry"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;