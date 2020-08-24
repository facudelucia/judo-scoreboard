import React from 'react';
import { useSelector } from 'react-redux';
import TimerGS from './TimerGS';
import Timer from './Timer';
const Header = () => {
    
    const {goldenScore} = useSelector(state => state)
    return ( 
        <div className="container-fluid h-100">
            {goldenScore ?<TimerGS />  : <Timer />}
        </div>
     );
}
 
export default Header;