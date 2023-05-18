import { IMG_CDN_URL } from "./constants";

const RestrauntCard = (props) => {

  const{name, cuisines,  cloudinaryImageId, lastMileTravelString, costForTwoString }= props
   
    
   
 

  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h2>{props.name}</h2>
      <h3>{props.cuisines.join(", ")}</h3>
      <h3>{props.costForTwoString} <br/> Good Price</h3>
      <h4>{props.lastMileTravelString} minutes</h4>
    </div>
    
  );
};

export default RestrauntCard;