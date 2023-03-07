import React from 'react';
import { Link } from 'react-router-dom'

function ApiPage(props){
    return(
        <div>
            ApiPage입니다.
            <Link to="/">Main으로</Link>
        </div>
    )
}

export default ApiPage;