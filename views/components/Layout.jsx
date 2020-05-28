const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Job Journal</title>
                    <link rel="stylesheet" href="/css/styles.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,500" rel="stylesheet"/> 
                    <script src="https://code.jquery.com/jquery-3.5.0.js" integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous" defer></script>
                </head>
                <body>
                    <nav className="sticky">
                        <div className="navImg">
                            <img src="/images/JJ_Logo3.png" alt=""/>
                        </div>
                        <div className="navLinks">
                            <a href="/jobs">Home</a>
                            <a href="/jobs/new">Search Jobs</a>
                            <a href="/jobs/about">About</a>
                        </div>
                    </nav>
                    <main>
                        {this.props.children}
                    </main>
                    <footer></footer>
                </body>
            </html>
        );
    }
}

module.exports = Layout;