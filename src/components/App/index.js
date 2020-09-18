import React from 'react';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";

import Home from './Home' ;
import Details from './Details';

const history = createHashHistory();

class App extends React.Component {
    render() { 
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={() => (
                        <Redirect to='/index/1' />
                    )} />
                    <Route path='/index/:majorid' component={Home} />{/*此处为导航组件*/}
                    <Route path="/details/r/:reportid/n/:num" component={Details} />{/*此处为导航后到达组件*/}
                </Switch>
            </Router>
        )
    }
}
export default App;
