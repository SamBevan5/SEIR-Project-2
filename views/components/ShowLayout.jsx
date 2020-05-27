const React = require('react');

class ShowLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Job Journal</title>
                    <link rel="stylesheet" href="/css/styles2.css"/>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = ShowLayout;