import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: ''};
  }
  handleSubmit = (event) => {
    event.preventDefault();
    
    Meteor.call('link.insert', this.refs.link.value, (error) => {
      if(error) {
        this.setState({error:'Enter valid URL'})
      } else {
        this.setState({error:''});
        this.refs.link.value  = '';
      }
    });
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label >Add Link to Shorten</label>
            <input ref="link" className="form-control" />    
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten this link!</button>
      </form>
    );
  }
}

export default LinkCreate;