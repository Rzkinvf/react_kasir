import CardPesanan from "../components/cards/card-pesanan";
import FooterHome from "../layouts/FooterHome";
import Header from "../layouts/Header";

function Pesanan() {
    return (
        <>
        <Header />
        <div className="p-10">
        <CardPesanan />
        </div>
        <FooterHome />
        </>
    )
}

export default Pesanan;