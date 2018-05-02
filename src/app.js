//folder localization:: c:\MAKSYMILIAN\javascript\REACT-Udemy-project1\indecision-app
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
// //do rendera:: <User name='maksio' age={31}/>

//Domyslne opcje ladowane z auto na poczatku do <IndecisionApp />:: options={['option one', 'option two']}

const ExpenceDashboardPage = () => (
    <div>
        this is from my dashboard component
    </div>
);

const AddExpencePage = () => (
    <div>
        this is from my dashboard 
    </div>
);

const EditExpensePage = () => (
    <div>
        this is edit
    </div>
);

const HelpPage = () => (
    <div>
        this is help
    </div>
);

const NotFoundPage = () => ( //<a href="/">go home</a>
    <div>
       404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expanse page </NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenceDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpencePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch> 
        </div>
                
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('appRoot'))


