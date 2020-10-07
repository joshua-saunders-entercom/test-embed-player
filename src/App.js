import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super (props)
        this.state = {
            source: 'https://embed-player-stg.radio.com/index.html',
            value: '',
            width: '100%',
            widthValue:''
        }
    }

    handleChange = event => {
        const { id } = event.target;
        console.log('handle change event, ', event.target.id)
        switch(id){
            case('source'):
                this.setState({value: event.target.value});
            break;
            case('width'):
                this.setState({widthValue: event.target.value});
            break;
        }
    }

    handleSubmit = event => {
        const { id } = event.target;
        console.log('handle submit event, ', event.target.id);
        switch(id){
            case('sourceForm'):
                this.setState({
                    source: this.state.value,
                    value: ''
                });
                break;
            case('widthForm'):
                this.setState({
                    width:this.state.widthValue,
                    widthValue: ''
                })
        }
        event.preventDefault();
    }




    render(){
        const { source, width } = this.state
        return (
            <div className="App">
                <div className="content title" >
                    <div>Iframe source is: <span id="sourceTitle">{source}</span></div>
                    <div id="currentWidth">Current Width is: <span id="widthTitle">{width}</span></div>
                </div>
                <div className="content" id="formWrapper">
                    <div>
                        <form id="sourceForm" id="sourceForm" onSubmit={this.handleSubmit}>
                            <label>
                            Update Source:
                            <input id="source" type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div>
                        <form id="widthForm" onSubmit={this.handleSubmit}>
                            <label>
                                Update Width:
                                <input id="width" type="text" value={this.state.widthValue} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="content"><iframe src={source} width={width}></iframe></div>
                <div className="content">Embed this: <strong>{`<iframe src=${source} width=${width}></iframe>`}</strong></div>
            </div>
        )
    }
}

export default App;
