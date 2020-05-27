const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );

        const { logs } = this.props;
        return (
            <AppLayout title="INDEX PAGE">
                <div>
                    <h1>Logs Index Page</h1>
                    <h2>{this.props.username}</h2>
                    <nav>
                        <a href="/logs/new">Create a New Log</a>
                    </nav>
                    {this.props.username ? logout : ''}
                    <ul>
                        {logs.map((log, i) => {
                            console.log(log._id);
                            return (
                                <li>
                                    <a href={`/logs/${log._id}`}>
                                        {log.name}
                                    </a>{' '}<br></br>
                                    {log.entry} <br></br>
                                    {log.shipIsBroken
                                        ? `It is broken`
                                        : `It is in perfect condition`}
                                    <br />
                                    <a href={`/logs/edit/${log._id}`}>
                                        EDIT {log.name}
                                    </a>
                                    <form
                                        action={`/logs/${log._id}?_method=DELETE`}
                                        method="post"
                                    >
                                        <input type="submit" value="delete" />
                                    </form>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </AppLayout>
        );
    }
}

module.exports = Index;