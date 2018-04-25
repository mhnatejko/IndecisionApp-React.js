import React from 'react';

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

export default Action;

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