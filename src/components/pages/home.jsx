import IconBtn from "../components/buttons/button-home";
import CardKategori from "../components/cards/card-kategori";

import FooterHome from "../layouts/FooterHome";
import Header from "../layouts/Header";

function Home() {
  return (
    <>
      <Header />
      <section className="px-20 py-20 bg-slate-50">
        <div className="container">
          <div className="w-full px-4  border-b-2 mb-20">
            <img src="./img/banner.png" alt="" className="  w-full rounded-md  shadow-sm " />

            <div className="flex px-5 my-10 justify-center">
              <IconBtn />
              <IconBtn />
              <IconBtn />
              <IconBtn />
              <IconBtn />
            </div>
          </div>
          <div className="w-full px-4  ">
            <h1 className="p-3 bg-white w-1/6 rounded-2xl text-center mb-5 shadow-sm">
              Kategori 1
            </h1>
            <div className="flex flex-wrap justify-center">
              <CardKategori />
              <CardKategori />
              <CardKategori />
              <CardKategori />
              <CardKategori />
            </div>
          </div>
          <div className="w-full px-4 border-b-2 ">
            <h1 className="p-3 bg-white w-1/6 rounded-2xl text-center mb-5 shadow-sm">
              Kategori 2
            </h1>
            <div className="flex flex-wrap justify-center">
              <CardKategori />
              <CardKategori />
              <CardKategori />
              <CardKategori />
              <CardKategori />
            </div>
          </div>
        </div>
      </section>
      <FooterHome />
    </>
  );
}

export default Home;
