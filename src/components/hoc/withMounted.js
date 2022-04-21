import React from 'react';

function withMounted(TargetComponent, componentName) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`mounted..`, componentName);
    }

    render() {
      return <TargetComponent {...this.props} />;
    }
  };
}

export default withMounted;
