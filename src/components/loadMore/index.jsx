import { useEffect, useState } from "react";

export default function LoadMoreData(){

    const[loading,setLoading]=useState(false)
    const[products,setProducts] = useState([])
    const[count,setCount] = useState(0)
    const[nextProducts,setNextProducts] = useState([])

    async function fetchProducts(){
        try{
            setLoading(true)
            const response = await fetch (`https://dummyjson.com/products?limit=10&skip=${count===0 ? 0 : count*10}`);
            const result = await response.json()
            console.log(result)

            if(result&& result.products && result.products.length){
                setProducts(result.products)
                setLoading(false)
            }

        } catch(e) {
            console.log(e)
            setLoading(false)
        }
    }

    async function loadMore(){
        setCount(count+10)
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count}`)
        const result = await response.json()
        setNextProducts(result.products)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    if(loading){
        return (<div>Loading data, please wait...</div>)
    }

    return(<>
        <div className="container">
        {products && products.length ? (
        products.map(product=>
        <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
        </div>)
        ) : null}

            {nextProducts ?(
            nextProducts.map(product=><div key={product.id}>{product.title}</div>)
            ) : null}

        <button onClick={loadMore}>Load more data</button>
        </div>
    </>)
}