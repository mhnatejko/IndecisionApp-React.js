import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options';
import Action from './Action.js';
import Header from './Header';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined //do sledzenia czy Modal ma byc otwarty czy zamkniety
    };

    handleClearSelectedOption = () => {
        this.setState(()=>({ selectedOption: undefined }));

    };
    
    handleDeleteOptions = () => { //z constructor - bylo handle...(){}
        this.setState(()=> ({options: []})) //musi byc w ({})    
    };

//to samo w dluzszej wersji
    // handleDeleteOptions(){
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     })
    // }

    handleDeleteOption = (optionToRemove) => { //z constructor - bylo handle...(){}
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    };

    handlePick = () => { //z constructor - bylo handle...(){}
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }))
    };

    handleAddOption = (option) => { //z constructor - bylo handle...(){}
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

    //po przerobieniu handle...s na arrowfunc nie potrzeba constructora i wiazania .bind(this)
    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: props.options //to beda wartosci domyslne
    //     }
    // }
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

    

    render(){
        //const title = 'Indecision'; //usuniete bo w domyslnej jest
        const subtitle = 'Put your life in the hand of a computer';
        
        return (//z Header usunieto title={title} bo w domyslnej jest //* dodano wewnetrzny div z klasa dla ostylowania //**dodano kolejny wewn div dla Option i AddOption
            <div>
            <Header  subtitle={subtitle}/>
                <div className='container'>
                    
                    <Action 
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}                    
                    />
                    <div className='widget'>
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                    </div>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                
            </div>

        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;