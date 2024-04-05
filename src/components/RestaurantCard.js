import { CDN_URL } from "../../utils/constants";

let styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  // const { resName, cuisine } = props;
  const { resData } = props;
  //   console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div
      className="res-card w-80 h-[510px] m-8 p-2 rounded-lg bg-slate-300 hover:opacity-80"
      // style={styleCard}
    >
      <img
        className="res-logo w-full h-[70%] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* <h3>{resName }</h3> */}
      {/* <h4>{cuisine}</h4> */}
      {/* <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes </h4> */}
      <div className="flex flex-col ml-2 py-2 font-semibold">
        <h3 className="font-bold text-center text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
