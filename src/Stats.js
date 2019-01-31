import React from 'react'

class Stats extends React.Component {

    render() {
        return (
            <div className={`card ${this.props.class}`}>
                <div className="card_content"><h2>{this.props.num}</h2><span className="small">{this.props.adj}</span></div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default Stats;