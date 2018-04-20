class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide detailes': 'Show details'}
                </button>
                {this.state.visibility && <p>prompty, prompty</p>}
            </div>
        )
    }
}



ReactDOM.render(<VisibilityToggle/>, document.getElementById('appRoot'))

///////////////////////////////without components\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const appRoot = document.getElementById('appRoot');

// let isVisible = false;
// const clickToggle = () =>{
//     isVisible = isVisible ? false : true;//or just use: isVisible = !isVisible;
//     renderToggle();
// }

// function renderToggle(){
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={clickToggle}>
//             {isVisible ? 'Hide detailes': 'Show details'}
//             </button>
//             {isVisible && <p>prompty, prompty</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// renderToggle();