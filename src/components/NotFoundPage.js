import React from 'react';
import {Link} from 'react-router-dom'
const NotFoundPage = () => ( //<a href="/">go home</a>
    <div>
       404! - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;