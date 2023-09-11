import CardBayar from "../components/cards/card-checkout";
import CardCheckout from "../components/cards/card-barang-checkout";
import Header from "../layouts/Header";
import FooterHome from "../layouts/FooterHome";

function Checkout() {
  return (
    <>
      <Header />
      <section className="py-20">
        <div className="w-[90%] mx-auto p-3 flex justify-between border-b-2  ">
          <h2 className="bg-slate-200 p-3 rounded-lg shadow-sm text-lg">
            Keranjang Saya
          </h2>
          <h2 className="bg-slate-200 p-3 rounded-lg shadow-sm text-lg ">
            Pembayaran
          </h2>
        </div>
        <div className="flex flex-wrap w-full justify-evenly items-start">
          <div className="w-1/3">
            <CardCheckout />
            <CardCheckout />
            <CardCheckout />
          </div>
          <div className="w-1/3">
            <CardBayar />
          </div>
        </div>
      </section>
      <FooterHome />
    </>
  );
}

export default Checkout;
