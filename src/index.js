import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SessionPicker from './components/SessionPicker/SessionPicker';
import App from './components/App/App';

const Root = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={SessionPicker} />
                <Route path="/session/:sessionId" component={App} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
)

const NoMatch = ({ location }) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
