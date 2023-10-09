/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import IconBtn from "../components/buttons/button-home";
import CardKategori from "../components/cards/card-kategori";




function Home() {

  // Start produk 1
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("./data/product.json");
        const data = await response.json();
        const product = data.produk;
        setProduk(product);

        console.log(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, []);
  // Finish produk 1

  // Start produk 2
  const [produk2, setProduk2] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("./data/product.json");
        const data = await response.json();
        const product = data.produk2;
        setProduk2(product);

        console.log(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, []);
  // finish produk 2


  return (
    <>

      <section className="px-20 py-20 bg-slate-50">
        <div className="container">
          {/* Banner  */}
          <div className="w-full px-4  border-b-2 mb-20">
            <img
              src="./img/banner.png"
              alt=""
              className="  w-full rounded-md  shadow-sm" />

            {/* Icon Btn */}
            <div className="flex px-5 my-10 justify-center">
              <IconBtn />
            </div>
          </div>

          {/* Start Kategori 1 */}
          <div className="w-full px-4  ">
            <h1 className="p-3 bg-white w-1/6 rounded-2xl text-center mb-5 shadow-sm">
              Kategori 1
            </h1>
            <div className="flex flex-wrap justify-center ">
              {produk.map((item) => (
                <CardKategori
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  stock={item.stock}
                  urlPoster={item.urlPoster}
                />
              ))}
            </div>
          </div>
          {/* Finish kategori 1 */}

          {/* Start kategori 2 */}
          <div className="w-full px-4 border-b-2 ">
            <h1 className="p-3 bg-white w-1/6 rounded-2xl text-center mb-5 shadow-sm">
              Kategori 2
            </h1>
            <div className="flex flex-wrap justify-center">
              {produk2.map((item) => (
                <CardKategori
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  stock={item.stock}
                  urlPoster={item.urlPoster}
                />
              ))}
            </div>
          </div>
          {/* Start kategori 2 */}
        </div>
      </section>

    </>
  );
}

export default Home;
