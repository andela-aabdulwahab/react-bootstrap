import React, { Component } from 'react';
import { Form, FormControl, ControlLabel, FormGroup, HelpBlock, Grid, Row } from '../../src/index';
import { NavDropdown, Nav, MenuItem } from '../../src/index';


class MyNavDropdown extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isHovering: false
      };
    }

    render() {

    const onMouseOver = () => {
      console.log('onMouseOver fired');
      this.setState({ isHovering: true });
    };

    const onMouseLeave = () => {
      console.log('onMouseLeave fired');
      this.setState({ isHovering: false });
    };

    const dropDownClasses = this.state.isHovering ? 'open nav-links' : 'nav-links';

    return (
      <NavDropdown
        className={dropDownClasses}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseLeave}
        ref="myDropdown"
        eventKey="4"
        title={this.props.title}
        id="nav-dropdown"
        noCaret={true}>
          <MenuItem className="dropdownMenuItem" eventKey="4.2">Sponsors</MenuItem>
      </NavDropdown>
    );
  }
};

const OpportunitiesLinks = () => (
  <MenuItem className="dropdownMenuItem" eventKey="4.2">Sponsors</MenuItem>
);

class MyDoing extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid" >
          <Nav pullRight>
            <MyNavDropdown title="Opportunities" />
          </Nav>
        </Row>
      </Grid>
    );
  }
}

export default MyDoing;
