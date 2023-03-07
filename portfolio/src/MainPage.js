import React from 'react';
import { Link } from 'react-router-dom'

function TopMenu(){
    return<topMenu>
        <div className='topMenuBar'>
            <div className='item'>상단메뉴1</div>
            <div className='item'>상단메뉴2</div>
            <div className='item'>상단메뉴3</div>
        </div>
    </topMenu>
}

function MainPage(props){
    return(
        <div>
            <h1>MainPage입니다</h1>
                <Link to="/Api/ApiPage"><h1>Api로</h1></Link>
                <Link to="/MainPage"><div className='topMenuBar' >Home</div></Link>
                <Link to="/Api/ApiPage"><div className='topMenuBar' >Api</div></Link>
   
            
        </div>
    )
}

export default MainPage;