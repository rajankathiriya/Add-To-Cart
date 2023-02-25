import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from './Reducer';

const Product = () => {
    const data = useSelector(y => y.product)
    const mydis = useDispatch()

    useEffect(() => {
        mydis(getProduct())
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
                                <p >{val.rating.rate}</p>
                                <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Product;
