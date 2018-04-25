import React from 'react';

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

export default Header;

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