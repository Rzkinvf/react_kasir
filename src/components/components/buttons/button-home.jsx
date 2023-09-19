import {  FaSun } from "react-icons/fa"


function IconBtn() {
    return (
        <>
          <span className=" m-1 bg-primary p-10 text-white rounded-md shadow-md">
              <FaSun size={25} className="hover:scale-125 transition ease-in-out duration-100"/>
            </span>
           
        </>
    )
}
export default IconBtn