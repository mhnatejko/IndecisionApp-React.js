class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0 //props.count
        }
    }
    componentDidMount(){
        //const num = localStorage.getItem('num');       
        //this.setState(() =>  ({count:Number(num)}) );
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10)
        
        if(!isNaN(count)){
            this.setState(()=>({count}));
        }    
    }
    componentDidUpdate(prevProps, prevState){
        //const num = localStorage.setItem('num', this.state.count)
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }
    
    handleAddOne(){
        this.setState((prevState) => {
            return {
            count: prevState.count + 1
        }})

    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
            count: prevState.count - 1
        }})

    }
    handleReset(){
        this.setState(()=>{
            return{
                count: 0
            }
        })

    }
    
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
    
// }

ReactDOM.render(<Counter count={0}/>, document.getElementById('appRoot'))


////////////////////////////////without components\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
////////////////////////////////////////////
