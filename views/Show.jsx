const React = require('react');

class Show extends React.Component {
    render() {
        const { name, entry, shipIsBroken } = this.props.log;
        return (
            <div>
                <h1> Log Show Page</h1>
                <p>{name}</p>
                <p>{entry}</p>
                <p>{shipIsBroken ? `It is broken` : `Is not broken`}</p>
            </div>
        )
    }
}

module.exports = Show;