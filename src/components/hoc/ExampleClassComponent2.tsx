import React, { Component } from 'react';
import withMounted from './withMounted';

interface IExampleClassComponent2Props {
  msg?: string;
}

interface IExampleClassComponent2States {
  name: string;
}

const ExampleClassComponent2 = class ExampleClassComponent2 extends Component<
  IExampleClassComponent2Props,
  IExampleClassComponent2States
> {
  state: IExampleClassComponent2States = {
    name: '',
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      name: 'ExampleClassComponent',
    });
  }

  render() {
    return (
      <div>
        {this.props.msg} {this.state.name}
      </div>
    );
  }
};

export default withMounted(ExampleClassComponent2, 'ExampleClassComponent2');
