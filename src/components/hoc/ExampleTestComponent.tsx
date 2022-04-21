import React from 'react';

export default class ExampleTestComponent extends React.Component<any, { isLogin: boolean }> {
  state = {
    isLogin: false,
  };

  toggleIsLogin() {
    this.setState(state => {
      return { isLogin: !state.isLogin };
    });
  }

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        <button onClick={this.toggleIsLogin.bind(this)}>{isLogin ? 'logout' : 'login'}</button>
        <WarpedComponent isLogin={isLogin} />
      </div>
    );
  }
}

interface withAuthProps {
  isLogin?: boolean;
}

const withAuth = (TargetComponent: React.ComponentType) => {
  return class extends React.Component<any, withAuthProps> {
    render() {
      const { isLogin } = this.props;

      if (isLogin) {
        return <TargetComponent />;
      } else {
        return <p>인증 실패</p>;
      }
    }
  };
};

class LoginSuccess extends React.Component {
  render() {
    return <div>로그인 성공!</div>;
  }
}

const WarpedComponent = withAuth(LoginSuccess);
