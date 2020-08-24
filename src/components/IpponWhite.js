import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIpponWhite, deleteIpponWhite } from '../actions/actions';

const IpponWhite = () => {
    const dispatch = useDispatch()
    const {ipponWhite} = useSelector(state => state)
    const [ippon, setIppon] = useState(0)
    const addIppon = () =>{
        if(ippon == 0){
            dispatch(setIpponWhite())
        }
        if(ippon == 1){
            dispatch(deleteIpponWhite())
            setIppon(0)
            return
        }
        setIppon(ippon + 1)
    }
    return ( 
        <div>
            <h2 className="text-center">Ippon</h2>
            <p className="text-center" onClick={addIppon}>{ipponWhite ? 1 : 0}</p>
        </div> 
     );
}
 
export default IpponWhite;