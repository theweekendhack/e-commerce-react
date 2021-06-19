import Header from "../components/Header";

import ProductListCotainer from "../components/ProductListContainer";
import TotalsContainer from "../components/TotalsContainer";
import PromoCodeContainer from "../components/PromoCodeContainer";

const HomePage = () => {
    return (
        <div id="container">
            <Header />
            <main>
                <ProductListCotainer />
                <TotalsContainer/>
                <PromoCodeContainer/>
            </main>

        </div>
    )
}

export default HomePage
