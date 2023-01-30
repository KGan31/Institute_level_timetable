import React from 'react';
import '../../App.css';
import map from '../../images/VJTI-LandingPageV3.jpg'
import { useNavigate } from "react-router-dom";
export default function Map(){
    const navigate = useNavigate();
    return (  
        
        <div className='map'>
        <img src={map} alt = "Loading..." usemap="#image-map"/>
        <map name="image-map">
            <area alt="DL_Block" title="DL_Block" href="/dl_block" coords="1,119,77,192" shape="rect" />
            <area alt="Quadrangle" title="Quadrangle" href="/quadrangle" coords="427,201,446,200,449,183,517,182,523,198,547,202,547,328,425,326" shape="poly"/>
            <area alt="AL_Block" title="AL_Block" href="/al_block" coords="634,152,698,396" shape="rect"/>
            <area alt="Ground" title="Ground" href="/ground" coords="709,257,959,402" shape="rect"/>
        </map>
        </div>

    );
}
 
