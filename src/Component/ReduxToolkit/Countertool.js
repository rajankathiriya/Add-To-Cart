// import { React, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, incrementanddecrement } from './Reducertoool'

// export default function Countertool() {
//     const mydis = useDispatch()
//     const counter = useSelector(y => y.counter)

//     const [data, setdata] = useState(0);

//     const Mytextbox = (e) => {
//         setdata(e.target.value)
//     }

//     return (
//         <div>
//             <h1>{counter.value}</h1>
//             <button onClick={() => { mydis(increment()) }}>Increment</button>
//             <button onClick={() => { mydis(decrement()) }}>Decrement</button><br />
//             <input type="text" onChange={Mytextbox} />
//             <button onClick={() => { mydis(incrementanddecrement(data)) }}>IncrementbyNumber</button>
//         </div>
//     )
// }


import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getlist } from './Reducertoool';



const Countertool = () => {

    const data = useSelector(y => y.post)
    const mydis = useDispatch()

    console.log(data);

    useEffect(() => {
        mydis(getlist())
    }, []);
    return (
        <div>
            {data?.data.map((val, index) => {
                return (
                    <div className='text-center col-4 ' id='rajan' key={index}>
                        <div className="card  m-3 " >
                            <div className="card-body ">
                                <h1>{val.category}</h1>
                                <h5 className="card-title">{val.title}</h5>
                                <h5 className="card-title">{val.price}</h5>
                                <p className="card-text">{val.description}</p>
                                {/* <p ></p> */}
                                <img src={val.image} className='w-50 mx-auto' alt="" />
                                <div>
                                    <p >{val.rating.rate}</p>
                                </div>
                                <a href="#" className="btn btn-outline-primary mx-1">Buy Now</a>
                                <a href="#" className="btn btn-outline-primary mx-1">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}



export default Countertool;

