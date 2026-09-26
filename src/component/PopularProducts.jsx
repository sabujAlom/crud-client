import { getAllData } from "@/lib/product/data";
import { ProductCard } from "./productCard";


const PopularProducts = async() => {
    const products = await getAllData()

    
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

            
            {
                products.map((product)=><ProductCard  key={product._id} product={product}/>)
            }


        </div>
    );
};

export default PopularProducts;