'use server'
import { revalidatePath } from "next/cache";

export const addProduct = async(formdata)=>{

const newProduct =Object.fromEntries(formdata.entries())
// console.log(newProduct)
const modifiedData={
    title: newProduct.title,
    price:parseFloat(newProduct.price),
    stock:parseFloat(newProduct.stock),
    description: newProduct.description,
    image: newProduct.image
};

const res= await fetch("http://localhost:8000/products",{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(modifiedData)
});
if(!res.ok){
    throw new Error("Faild to add product")
}
const data = await res.json();
revalidatePath("/products");
return data;
}


// delete......................
export const deleteProduct = async(id)=>{
    const res= await fetch(`http://localhost:8000/products/${id}`,{
        method: "DELETE",
    });
    if(!res.ok) return;
    const data = await res.json()
    revalidatePath("/products")
    return data;
}