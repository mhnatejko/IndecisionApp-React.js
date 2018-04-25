import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options';
import Action from './Action.js';
import Header from './Header';

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

export default IndecisionApp;