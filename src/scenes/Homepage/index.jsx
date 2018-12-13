import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import Layout from '../../components/Layout';


const Markup = ({ clickHandler, active }) => (
  <Layout>
    <Button variant="contained" onClick={clickHandler} color={active ? 'secondary' : 'primary'}>
      {active ? 'Disable Button' : 'Enable Button'}
    </Button>
  </Layout>
);


class Homepage extends Component {
  state = {
    active: false,
  }

  clickHandler = () => {
    const { active } = this.state;
    this.setState({ active: !active })
  }

  render() {
    const { clickHandler } = this;
    const { active } = this.state;
    return <Markup {...{ clickHandler, active }} />
  }
}



export default Homepage
