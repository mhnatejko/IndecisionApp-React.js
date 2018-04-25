//folder localization:: c:\MAKSYMILIAN\javascript\REACT-Udemy-project1\indecision-app
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options //to beda wartosci domyslne
        }
    }
    componentDidMount(){
        //w razie gdyby niepoprawny JSON
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){ //w razie gdy puste i zwroci null
                 this.setState(()=>({options}))//rownoznaczne z {options:options}
            }
        }catch(error){
            //do nothing at all
        }
        
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }

    componentWillUnmount(){
        console.log('unmount')
    }

    handleDeleteOptions(){
        this.setState(()=> ({options: []})) //musi byc w ({})    
    }

//to samo w dluzszej wersji
    // handleDeleteOptions(){
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     })
    // }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        } else {
            

            this.setState( (prevState)=>( {
                options: prevState.options.concat([option])
            } ) )
            //to samo ale dluzej
            // this.setState((prevState)=> {
            //     return {
            //         options: prevState.options.concat([option])
            //     }
            // })
        }

        
    }

    render(){
        //const title = 'Indecision'; //usuniete bo w domyslnej jest
        const subtitle = 'Put your life in the hand of a computer';
        
        return (//z Header usunieto title={title} bo w domyslnej jest
            <div>
                <Header  subtitle={subtitle}/> 
                <Action 
                hasOption={this.state.options.length > 0}
                handlePick={this.handlePick}
                
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
            </div>

        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return  (
        <div>
            <h1>{props.title}</h1>            
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>        
    )
}

Header.defaultProps = { //dla wartosci domyslnych
    title: 'Indecision'
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>        
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}            
            disabled={!props.hasOption}
            >What should I do?</button>
        </div>
    )
}

// class Action extends React.Component {
    
//      render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
                
//                 disabled={!this.props.hasOption}
//                 >What should I do?</button>
//             </div>
//         )
//     }
// }
const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add on option to get started</p>}
            {
                props.options.map( option => (
                   <Option 
                   key={option} 
                   optionText={option}
                   handleDeleteOption={props.handleDeleteOption}
                   />
                ))
            }            
        </div>
    )
}

// class Options extends React.Component {
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                    this.props.options.map( option => <Option key={option} optionText={option}/>)
//                 }            
//             </div>
//         )
//     }
// }
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e)=>{
                props.handleDeleteOption(props.optionText);
            }}
            >
            remove
            </button>
        </div>
    )
}
// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) { //inne metody sa przeniesiona z wnetrza komponentu do konstruktora ale to akurat lpeiej jest tu zostawic
        e.preventDefault();
       
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>({error}))
        //to samo ale dluzsze
        // this.setState(()=>{
        //     return {
        //         error //<- to jest rownoznaczne z error: error - mozna pominac jesli wartosc i klucz sa takie same ...
        //     }
        // })
        if (!error){
            e.target.elements.option.value='';
        }
    }       
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

// //do rendera:: <User name='maksio' age={31}/>

//Domyslne opcje ladowane z auto na poczatku do <IndecisionApp />:: options={['option one', 'option two']}
ReactDOM.render(<IndecisionApp />, document.getElementById('appRoot'))




