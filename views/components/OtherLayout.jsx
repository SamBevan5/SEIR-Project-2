const React = require('react');

class OtherLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Job Journal</title>
                    <link rel="stylesheet" href="/css/styles2.css"/>
                </head>
                <nav>
                        <img src="/images/JJ_Logo2.png" alt=""/>
                        <a href="/jobs">Home</a>
                        <a href="/jobs/new">Add a New Job</a>
                        <a href="/jobs/about">About</a>
                </nav>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = OtherLayout;