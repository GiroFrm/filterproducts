import ProductCategoryRow  from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


export default function ProductTable({products, filterText, inStockOnly}){
   
    const rows =[];
    let lastcategory = null;



    products.forEach(product => {
    

        if(product.name.toLowerCase().indexOf(
           filterText.toLowerCase()
        )=== -1){
            return;
        }

        if(inStockOnly && !product.stocked) {
            return;
        }

        if(product.category!= lastcategory){
            rows.push(
                <ProductCategoryRow key={product.category} category={product.category}/>
            )
        }

        rows.push(
            <ProductRow  key={product.name} 
            product={product}
            filterText={filterText}
            inStockOnly={inStockOnly}
            />
        )
       lastcategory = product.category; 
    });

    return (
        <>
        <p>Product Table</p>
        <table>
     <thead/>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    <thead/>
    <tbody>
        {rows}
    </tbody>
        </table>
        </>
    )
}