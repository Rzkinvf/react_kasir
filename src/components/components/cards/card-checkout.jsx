function CardBayar() {
  return (
    <>
      <div className="w-full border-black border-2 rounded-md p-5 m-4">
        <div className="">
          <h1 className="text-md mb-3 font-semibold bg-slate-100 p-2 w-1/2 text-center rounded-md shadow-sm">
            Detail pesanan
          </h1>
        </div>
        <div className="border-y-2 m-4 py-5 px-3">
          <div className="bg-slate-100 p-4  rounded-lg">
            <h1 className="font-semibold">Opsi Pengiriman</h1>
            <label className="flex items-center justify-between my-2">
              <span>
                <input type="radio" name="shippingOption" id="regulerCOD" />
                <span className="m-2">Reguler COD</span>
              </span>
              <p>Rp 10.000</p>
            </label>
            <label className="flex items-center justify-between my-2">
              <span>
                <input type="radio" name="shippingOption" id="siCepatEXPRESS" />
                <span className="m-2">siCepat EXPRESS</span>
              </span>
              <p>Rp 20.000</p>
            </label>
            <label className="flex items-center justify-between my-2">
              <span>
                <input type="radio" name="shippingOption" id="siCepatEXPRESS" />
                <span className="m-2">NinjaX EXPRESS</span>
              </span>
              <p>Rp 25.000</p>
            </label>
          </div>
          <div className="py-3 bg-slate-100 rounded-3xl  mt-4 p-4">
            <div className="flex items-center">
              <label htmlFor="pesan" className="block font-semibold mr-2">
                Pesan:
              </label>
              <input
                type="text"
                name="pesan"
                id="pesan"
                className="w-full bg-slate-100 text-black  focus:border-b-2 focus:outline-none "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-3 mx-3">
          <p>Total pesanan:</p>
          <p>Rp 0</p>
        </div>

        <button className="py-3 bg-slate-100 rounded-md w-full font-semibold text-lg hover:shadow-md transition-all">
          Buat Pesanan
        </button>
      </div>
    </>
  );
}
export default CardBayar;
