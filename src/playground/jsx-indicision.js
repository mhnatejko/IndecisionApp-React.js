console.log('its running')

// c:\MAKSYMILIAN\javascript\REACT-Udemy-project1\indecision-app








const appRoot = document.getElementById('appRoot');

const numbers = [55, 101, 1000];

const app = {
    title: 'Indecision App',
    subtitle: 'Put you life in the hands of computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
   const option = e.target.elements.option.value;
   if(option){
       app.options.push(option);
       e.target.elements.option.value = '';
       renderApp();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
    console.log('?')
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length)
    const option = app.options[randomNum];
    alert(option);
}

const renderApp = () => {
    const template = (
        <div>
        
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}   
            <p>{app.options && app.options.length > 0 ? ('Here are your options: '+app.options[0]+', '+app.options[1]) : 'No options'}</p>
            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={onRemoveAll}>remove all</button>
       
            
            <ol>                
                {
                    app.options.map(option => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button >Add Option</button>
            </form>
        </div>
    )
ReactDOM.render(template, appRoot);
}

renderApp();


 

/*
//////////////////////////
const user = {
    name: 'Maksymilian',
    age: 31,
    location: 'Torun'
}
 function getLocation(location) {
     if (location) {
         return <p>Location: {location}</p>;
     }
 }

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/

/*
let count = 0;
const myId = 'myId';

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count=0;
    renderCounterApp();
};

const appRoot = document.getElementById('appRoot');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>lycz: {count}</h1>
            <button id={myId} className='button' onClick={addOne}>+1</button>
            <button id={myId} className='button' onClick={minusOne}>-1</button>
            <button id={myId} className='button' onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderCounterApp();
*/