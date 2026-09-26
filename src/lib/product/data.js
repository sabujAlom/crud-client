export const getAllData=async()=>{
    const res = await fetch('http://localhost:8000/products');
    const data = res.json();
    return data;
}

export const getProductById=async(id)=>{
    const res = await fetch(`http://localhost:8000/products/${id}`);
    const data = res.json();
    return data;

}