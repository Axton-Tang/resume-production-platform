import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Title from './title/index';

const styles: React.CSSProperties = {
  fontSize: '25px',
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>这是 Axton 的简历制作平台</div>
          <Title text="测试" styles={styles} />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
