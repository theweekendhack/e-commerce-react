import ProductLine from "./ProductLine";

const ProductListContainer = () => {
    return (
        <div>
            <ProductLine title="Pants" unitPrice={10} qty={0} extendedPrice={0} />
            <ProductLine title="Shirt" unitPrice={5} qty={0} extendedPrice={0}/>
            <ProductLine title="Shoes" unitPrice={100} qty={0} extendedPrice={0}/>
        </div>
    )
}

export default ProductListContainer
