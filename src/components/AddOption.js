import React from 'react';

export default class AddOption extends React.Component {
    state = { //* -z uzyciem nowej skladnie class properties ES6
        error: undefined
    };
    
    // constructor(props){
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     //* this.state = {
    //     //     error: undefined
    //     // }
    // }
handleAddOption = (e) => { //to jest teraz Class property
    //handleAddOption(e) { //inne metody sa przeniesiona z wnetrza komponentu do konstruktora ale to akurat lpeiej jest tu zostawic
        e.preventDefault();
       console.log('testing');
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
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type='text' name='option'/>
                    <button className='button'>Add Option</button>
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