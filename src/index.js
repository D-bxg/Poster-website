import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './Details';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";

const history = createHashHistory();

class RouterConfig extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={() => (
                        <Redirect to='/index/1' />
                    )} />
                    <Route path='/index/:majorid' component={App} />{/*此处为导航组件*/}
                    <Route path="/details/r/:reportid/n/:num" component={Details} />{/*此处为导航后到达组件*/}
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;

ReactDOM.render(<RouterConfig />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
