// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// export const getProduct = createAsyncThunk(
//     "posts/getproduct",
//     async () => {
//         return fetch("https://fakestoreapi.com/products").then(y => y.json())
//     }
// )

// const initialState = {
//     data: [],
//     isLoading: null
// }

// const Reducer = createSlice({
//     name: "posts",
//     initialState,
//     extraReducers: {
//         [getProduct.pending]: (state, action) => {
//             state.isLoading = "loading"
//         },
//         [getProduct.fulfilled]: (state, action) => {
//             state.data = action.payload;
//             state.isLoading = "success"
//         },
//         [getProduct.rejected]: (state, action) => {
//             state.isLoading = "failed"
//         }
//     }
// });

// export const { } = Reducer.actions

// export default Reducer.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async () => {
        return fetch("https://fakestoreapi.com/products").then(y => y.json())
    }
)
const initialState = {
    data: [],
    isLoading: null
}

const Reducer = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.isLoading = "loading"
        },
        [getProduct.fulfilled]: (state, action) => {
            state.isLoading = "success"
            state.data = action.payload
        },
        [getProduct.rejected]: (state) => {
            state.isLoading = "failed"
        },
    }
});

export const { } = Reducer.actions

export default Reducer.reducer