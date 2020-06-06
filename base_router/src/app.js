import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'> home </Link>
                </li>
                <li>
                    <Link to='/about'> about </Link>
                </li>
                <li>
                    <Link to='/topices'> topices </Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/topices' component={Topices} />
            </Switch>

        </Router>
    )
}

const Home = () => (<div> home </div>);
const About = () => (<div> About </div>);
const Topices = ({ match }) => (

    <div>

        <ul>
            <li>
                <Link to={`${match.url}/aa`}> aa </Link>
            </li>
            <li>
                <Link to={`${match.url}/bb`}> bb </Link>
            </li>
            <li>
                <Link to={`${match.url}/cc`}> cc </Link>
            </li>
        </ul>

        <Route
            exact
            path={match.url}
            render={() => (<div>  select it</div>)}
        />

        <Route path={`${match.url}/:id`} component={Topic} />

    </div>

);

const Topic = ({ match }) => (
    <div>  {match.params.id}</div>
)


export default App;