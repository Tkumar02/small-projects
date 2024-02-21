import { useEffect, useState } from "react";
import './styles.css'

//STRICT MODE IN INDEX.JS CAUSES DOUBLE RENDERING THEREBY CAUSING 20+20 TOTAL 40 PRODUCTS TO LOAD ON FIRST LOAD OF WEBPAGE, REST SEEMS TO BE WORKING OK.

export default function LoadMoreData(){

    const[loading,setLoading]=useState(false)
    const[products,setProducts] = useState([])
    const[count,setCount] = useState(0)
    // const[nextProducts,setNextProducts] = useState([])
    // const[countProducts,setCountProducts] = useState(0)
    const[disableButton,setDisableButton] = useState(false)

    async function fetchProducts(){
        try{
            setLoading(true)
            const response = await fetch (`https://dummyjson.com/products?limit=20&skip=${count===0 ? 0 : count*20}`);
            const result = await response.json()

            if(result&& result.products && result.products.length){
                // setProducts(result.products)
                setProducts((prevData)=>[...prevData, ...result.products])
                setLoading(false)
                console.log(result, 'length=',result.products.length)
            }

        } catch(e) {
            console.log(e)
            setLoading(false)
        }
    }

    // async function loadMore(){
    //     const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count+10}`)
    //     const result = await response.json()
    //     let nextSet = [...nextProducts]
    //     nextSet.push(result.products)
    //     setNextProducts(nextSet)
    //     console.log(nextProducts,'length of nextProducts = ', nextProducts.length)
    //     setCountProducts(countProducts+1)
    //     setCount(count+10)
    // }

    useEffect(()=>{
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(products && products.length===100){
            setDisableButton(true)
        }
    },[products])

    if(loading){
        return (<div>Loading data, please wait...</div>)
    }

    return(<>
        <div className="container">
        <div className="product-container">
            {products && products.length ? (
            products.map(product=>
            <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
            </div>)
            ) : null}
        

        {/* {nextProducts ? nextProducts.map(innerArray =>
            innerArray.map((product) =>
                <div className="product" key={product.id}>
                    <img src={product.thumbnail} alt={product.title}/>
                    <p>{product.title}</p>
                </div>)) : null} */}
        
        </div>
            
        <div className="button-container">
            {/* <button onClick={loadMore}>Load more data</button> */}
            <button disabled={disableButton} onClick={()=>setCount(count+1)}>Load more data</button>
        </div>
        </div>
    </>)
}