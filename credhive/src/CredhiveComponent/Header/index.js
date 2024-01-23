import React from "react";
import './styles.css';
import { ReactComponent as StarIcon } from './star.svg';

const Header = () => {
    return( 
    <div className="container_header">
        <div className="sub_container">
            <div class="avatar">
                <p class="initials">PS</p>
            </div>
            <div className="text_value">
                <div style={{fontWeight:"bold",fontSize:"20px"}}>PS Finsec Private Limited</div>
                <div style={{fontSize:"14px",color:"grey"}}>CN:U69120DL196PTC080696</div>
                <div style={{fontSize:"14px",color:"#6599AD",fontWeight:"bold"}}>www.psfinsec.com</div>
            </div>
        </div>
        <div className="add_values">
            <StarIcon />
           <div>Add to Dashboard</div>
        </div>
    </div>
    )
}
export default Header