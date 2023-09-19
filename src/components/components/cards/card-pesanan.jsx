function CardPesanan() {
    return (
      <>
        <div className="w-full">
        <div className="flex justify-between">
          <h1 className="text-md mb-3 font-semibold bg-slate-100 p-2 w-1/4 text-center rounded-md shadow-sm">
            PESANAN ANDA
          </h1>
            <button className="text-md mb-3 font-semibold bg-slate-100 p-1 w-1/4 text-center rounded-md shadow-sm">pesan</button>
        </div>
        <div className="border-y-2 m-4 py-5 px-48">
          <div className="bg-slate-100 p-9  rounded-lg">
            <h1 className="font-semibold">Produk</h1>
            <label className="flex items-center justify-between my-2">
              <span>
                <h4>Ekonomi</h4>
              </span>
              <p>1 X</p>
              <p>Rp 3.000</p>
            </label>
            <label className="flex items-center justify-between my-2">
              <span>
                <h4>Rinso</h4>
              </span>
              <p className="m-2 ml-7">1 X</p>
              <p>Rp 1.000</p>
            </label><hr />
            <label className="flex items-center justify-between my-2">
              <span>
                <b><span>JASA PENGIRIMAN</span></b><br /><br />
                <p className="mt-2">EXPRESS</p>
              </span>
              <p className="mt-14">Rp 25.000</p>
            </label><hr />
          </div>
          <div className="py-3 bg-slate-100 rounded-3xl  mt-4 p-4">
            <div className="flex items-center">
              <label htmlFor="pesan" className="block font-semibold mr-2">
              Total Pembayaran
              </label>
              <b><p className="ml-96">Rp. 26.000</p></b>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  export default CardPesanan;
  