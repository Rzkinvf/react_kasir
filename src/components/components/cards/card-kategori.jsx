function CardKategori() {
    return (
        <>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/5">
              <div className="bg-white rounded-md overflow-hidden shadow-lg mb-10">
                <img
                  src="https://source.unsplash.com/200x200?snack"
                  alt="draw"
                  className="w-full hover:scale-110 transition ease-in-out duration-100"
                />
                <div className="py-8 px-6">
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-dark"
                  >
                    <h3>Lorem ipsum dolor sit amet.</h3>
                  </a>
                  <p className="font-medium text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, animi.
                  </p>
                </div>
              </div>
            </div>
        </>
    )
}
export default CardKategori;