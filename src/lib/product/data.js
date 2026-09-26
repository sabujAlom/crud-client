export const getAllData=async()=>{
    const res = await fetch('http://localhost:8000/products');
    const data = res.json();
    return data;
}