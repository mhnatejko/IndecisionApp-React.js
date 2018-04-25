//folder localization:: c:\MAKSYMILIAN\javascript\REACT-Udemy-project1\indecision-app
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'


// //do rendera:: <User name='maksio' age={31}/>

//Domyslne opcje ladowane z auto na poczatku do <IndecisionApp />:: options={['option one', 'option two']}
ReactDOM.render(<IndecisionApp />, document.getElementById('appRoot'))
////////////////////////////////////////////
class OldSyntax {
    constructor() {
        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `my name is ${this.name}`;
    }
}


const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting());
///////////////////////

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `my name is ${this.name}`
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;

console.log(newGetGreeting());

