/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CardKategori(props) {
  return (
    <>
      <div className="p-2 flex ">
        <div className="w-full max-w-[15rem] bg-white rounded-md overflow-hidden border-2  mb-10 hover:scale-105 hover:shadow-lg  transition ease-in-out duration-200">
          <img src={props.urlPoster} alt="draw" className="w-full" />
          <div className="py-8 px-6">
            <h3 className="block mb-3 font-semibold text-xl ">{props.name}</h3>
            <p className="text-ellipsis text-sm overflow-hidden ">{props.desc}</p>
            <span className="flex justify-between items-center mt-3">
              <p className="font-bold text-base ">Rp {props.price}</p>
              <Link
                to="/keranjang"
                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-md px-5 py-2.5 text-center"
              >
                Buy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardKategori;
