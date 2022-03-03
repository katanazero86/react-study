import React, { Component } from 'react';

interface IExampleClassComponentProps {
  msg?: string;
}

interface IExampleClassComponentStates {
  name: string;
}

export default class ExampleClassComponent extends Component<
  IExampleClassComponentProps,
  IExampleClassComponentStates
> {
  state: IExampleClassComponentStates = {
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
}
