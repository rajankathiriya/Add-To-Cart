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
    const dis = useDispatch()

    console.log(data);

    useEffect(() => {
        dis(getlist({ name: 1 }))
    }, [dis]);
    return (
        <div><ul>
            {data?.data?.map((val, index) => {
                return (

                    <li key={index}>
                        {val.name}
                    </li>

                )
            })}
        </ul></div>
    );
}

export default Countertool;

