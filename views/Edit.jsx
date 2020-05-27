const React = require('react');

class Edit extends React.Component {
    render() {
        const { log } = this.props;
        return (
            <div>
                <h1>Edit Logs page</h1>
                <form
                    action={`/logs/edit/${log._id}?_method=put`}
                    method="POST"
                >
                    Name: <input type="text" name="name" value={log.name} />
                    <br />
                    Entry:{' '}
                    <input type="text" name="entry" value={log.entry} />
                    <br />
                    Ship is Broken?:{' '}
                    <input
                        type="checkbox"
                        checked={log.shipIsBroken ? 'checked' : ''}
                        name="shipIsBroken"
                    />
                    <br />
                    <input type="submit" name="" value="Edit Log" />
                </form>
            </div>
        );
    }
}

module.exports = Edit;