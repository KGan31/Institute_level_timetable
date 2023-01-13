
import map from './images/VJTI-LandingPageV3.jpg';
const Map = () => {
   
    return (  
        <div className="map">
        <img src={map} usemap="#image-map"/>
        <map name="image-map">
            <area alt="DL_Block" title="DL_Block" href="www.google.com" coords="1,119,77,192" shape="rect"/>
            <area alt="Quadrangle" title="Quadrangle" href="www.google.com" coords="427,201,446,200,449,183,517,182,523,198,547,202,547,328,425,326" shape="poly"/>
            <area alt="AL_Block" title="AL_Block" href="www.google.com" coords="634,152,698,396" shape="rect"/>
            <area alt="Study Space" title="Study Space" href="www.google.com" coords="601,289,628,365" shape="rect"/>
            <area alt="Ground" title="Ground" href="www.google.com" coords="709,257,959,402" shape="rect"/>
        </map>
        </div>

    );
}
 
export default Map;