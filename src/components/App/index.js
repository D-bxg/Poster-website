/**
 * 此处是用于配置路由的。
 */
import React from 'react';
// React的Router组件
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";
//页面
import Home from './Home' ;//导航页面
import Details from './Details';//详情页面

const history = createHashHistory();

class App extends React.Component {
    render() { 
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={() => (
                        <Redirect to='/index/1' />
                    )} />
                    <Route path='/index/:majorid' component={Home} />{/*此处为导航页面*/}
                    <Route path="/details/r/:reportid/n/:num" component={Details} />{/*此处为导航页面*/}
                </Switch>
            </Router>
        )
    }
}
export default App;
