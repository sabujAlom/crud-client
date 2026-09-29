import EditProductForm from '@/component/EditProductForm';
import { getProductById } from '@/lib/product/data';
import React from 'react';

const EditProductPage = async({params}) => {
    const {id}= await params;
    const product =await getProductById(id)
    return (
        <div>
           <h1 className='text-2xl font-bold'>Edit {product.title}</h1>
            <EditProductForm product={product}/>
        </div>
    );
};

export default EditProductPage;