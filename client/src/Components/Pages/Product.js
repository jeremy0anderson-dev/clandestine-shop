// import {useState, useEffect} from "react";
// import {useQuery} from "@apollo/client";
// import {query} from '../../utils/queries';
// const {products}=query;
// export default function ProductPage(props){
//     const {loading,error, data} = useQuery(products);
//     const [product, setProducts] = useState([])
//     console.log(data);
//     // useEffect(()=>{
//     //
//     // },[setProducts])
//     setProducts(data.products.map(({title, description, price})=>{
//         return(
//             <div>
//                 <p>{title}</p>
//                 <p>{description}</p>
//                 <p>{price}</p>
//             </div>
//         )
//     }));
//     return(
//         <div className={"products"}>
//             {product}
//         </div>
//     )
// }