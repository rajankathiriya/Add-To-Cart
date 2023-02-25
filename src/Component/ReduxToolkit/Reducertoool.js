// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

// const Reducertoool = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },

//         incrementanddecrement: (state, action) => {
//             state.value += parseInt(action.payload)
//         },

//     },
// });

// export const { increment, decrement, incrementanddecrement } = Reducertoool.actions

// export default Reducertoool.reducer


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getlist = createAsyncThunk(
    'posts/getlist',
    async () => {
        return fetch(`https://jsonplaceholder.typicode.com/comments`).then(y => y.json())

    }
)

const initialState = {
    data: [],
    isLoading: null
}

const Reducertoool = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [getlist.pending]: (state, action) => {
            state.isLoading = "loading"
        },
        [getlist.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = "success"
        },
        [getlist.rejected]: (state, action) => {
            state.isLoading = "failed"
        }
    }
});



export default Reducertoool.reducer
