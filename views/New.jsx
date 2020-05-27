const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Log page</h1>
              <form action="/logs" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Entry: <input type="text" name="entry" /><br/>
                  Is Broken?: <input type="checkbox" name="shipIsBroken" /><br/>
                  <input type="submit" name="" value="Create Log"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;