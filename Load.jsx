import { useEffect, useState } from "react";
import './style/load.css'
const Loud = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton]=useState(false);
                                                            
    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`
            );
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setProduct(prevProducts => [...prevProducts, ...result.products]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(()=>{
         if(products && products.length===194) {
            setDisableButton(true)
         }
    },[products])
    useEffect(() => {
        fetchData();
    }, [count]);

    if (loading) {
        return <div>Loading data! Please wait...</div>;
    }

    return (
        <div className="all">
            <div className="products">
                {products && products.length ? products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                )) : null}
            </div>
            <div >
                <button className="btn-load" disabled={disableButton} onClick={() => setCount(count + 1)}>Load more products</button>
           {
            disableButton ?<p>you have 194 products</p>:null
           }
            </div>
        </div>
    );
};

export default Loud;
