import Header from "../components/Header";

import ProductListCotainer from "../components/ProductListContainer";
import TotalsContainer from "../components/TotalsContainer";
import PromoCodeContainer from "../components/PromoCodeContainer";

const HomePage = () => {
    return (
        <div>
            <Header />
            <ProductListCotainer/>
            <TotalsContainer/>
            <PromoCodeContainer/>
        </div>
    )
}

export default HomePage
