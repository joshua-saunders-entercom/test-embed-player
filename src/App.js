import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super (props)
        //get params
        this.state = {
            source: 'https://embed.radio.com/index.html',
            value: '',
            width: '100%',
            widthValue:'',
            slug: 'radioalice',
            stationId: ''
        }
    }

    handleChange = event => {
        const { id } = event.target;
        console.log('handle change event, ', event.target.id)
        switch(id){
            case('source'):
                this.setState({source: event.target.value});
            break;
            case('width'):
                this.setState({widthValue: event.target.value});
            break;
            case('slug'):
                this.setState({slugValue: event.target.value});
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
                break;
            case('slugForm'):
                this.setState({
                    slug: this.state.slugValue,
                    slugValue: ''
                })
        }
        event.preventDefault();
    }




    render(){
        const { source, width, slug } = this.state
        const fullSrc = source + '?slug=' + slug
        let widthStyle = width.indexOf('%') === -1 && width.indexOf('px') === -1 ? width + 'px' : width
        return (
            <div className="App">
                <div className="content title" >
                    <div>Environment:
                      <select id="source" onChange={this.handleChange}>
                        <option value="https://embed.radio.com/index.html" selected={source === 'https://embed.radio.com/index.html'} >Production</option>
                        <option value="https://embed-stg.radio.com/index.html" selected={source === 'https://embed-stg.radio.com/index.html'} >Stage</option>
                        <option value="http://local.radio.com:8080" selected={source === 'http://local.radio.com:8080'} >Local</option>
                      </select>
                    </div>
                    <div>Slug: <span id="sourceTitle">{slug}</span></div>
                    <div id="currentWidth">Current Width is: <span id="widthTitle">{widthStyle}</span></div>
                </div>
                <div className="content" id="formWrapper">
                    <div>
                        <form id="slugForm" onSubmit={this.handleSubmit}>
                            <label>
                                Update Slug:
                                <input id="slug" type="text" value={this.state.slugValue} onChange={this.handleChange} />
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
                <div className="content"><iframe scrolling="no" src={fullSrc} width={width} style={{height: '145px', width: widthStyle, border: '0'}} title="Radio.com embedded player"></iframe></div>
                <div className="content">Embed this: <strong>{`<iframe src="${source}?slug=${slug}"></iframe>`}</strong></div>
            </div>
        )
    }
}

export default App;
