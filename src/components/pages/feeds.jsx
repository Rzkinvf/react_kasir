import CardFeeds from "../components/cards/card-feed";
import FooterHome from "../layouts/FooterHome";
import Header from "../layouts/Header";



function Feeds() {
    return (
        <>
        
        <Header/>
        <section className="px-20 py-20 ">
        <CardFeeds/>
        </section>
        <FooterHome/>

        </>
    )
}
export default Feeds;