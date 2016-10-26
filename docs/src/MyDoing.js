import React, { Component } from 'react';
import { Form, FormControl, ControlLabel, FormGroup, HelpBlock } from '../../src/index';


class FormExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      facebook_id: '',
      facebook_email : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //
  }

  handleChange(event) {
    // const newSearch = Object.assign({}, this.state.search, { [event.target.id]: event.target.value});
    this.setState({
      [event.target.id]: event.target.value
    });


  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="facebook_id">
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.search.facebook_id}
            placeholder="Enter text"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>{this.state.search.facebook_id}</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="facebook_email">
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.search.facebook_email}
            placeholder="Enter text"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>{this.state.search.facebook_email}</HelpBlock>
        </FormGroup>
      </Form>
    );
  }
}

export default FormExample;
