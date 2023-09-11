import { FaHeart, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-primary p-3 shadow-md ">
        <div className="container">
          <div className="w-full flex justify-between items-center">
            <span className="w-1/12 py-1 bg-white rounded-2xl text-center ">
              <p className="text-primary font-kaushan text-lg font-semibold">
                Tokoku
              </p>
            </span>
            <div className="relative w-1/4">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Product..."
                className="w-full bg-slate-100 text-black py-2 px-10 rounded-full focus:outline-none focus:ring-blue-500 focus:ring-1 focus:border-blue-500 mb-2"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch size={20}/> 
              </div>
            </div>
            <div className="flex text-white font-semibold ">
              <Link to="/" className="m-1 hover:scale-110 transition ease-in-out duration-100 flex gap-1 ">
                
                <FaHome size={20}/>
                <span>Home</span>
              </Link>
              <Link className="m-1 hover:scale-110 transition ease-in-out duration-100 flex gap-1">
                <FaHeart size={20}/>
                <span>Feed</span>
              </Link >
              <Link to="/keranjang" className="m-1 hover:scale-110 transition ease-in-out duration-100 flex gap-1">
                <FaShoppingCart size={20}/>
                
                <span>Troli</span>
              </Link>
            </div>
            <Link to='/login'><div className="w-24">

            <img src="../img/foto.jpg" alt="" className="w-1/2 rounded-full"/>
            </div>
            
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
