import axios from 'axios';

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const res = await axios.post('/api/orders/placeorder', { token, subTotal, currentUser, cartItems });
        dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        console.log(res);
    } catch  (error) {
           dispatch({ type: 'PLACE_ORDER_FAIL' });
        console.log(error);
    }
};

export const getAllorders = () => async (dispatch, getState) => {
    dispatch({ type: 'ALL_ORDER_REQUEST' });
    // const currentUser = getState().loginUserReducer.currentUser;
   
    try {
        const response = await axios.get('/api/orders/alluserorder');
        dispatch({ type: 'ALL_ORDER_SUCCESS',payload: response.data });
    } catch (error) {
        dispatch({ type: 'ALL_ORDER_FAIL',payload:error });
        console.log(error);
    }
};

export const deliverorder = (orderid) => async (dispatch, getState) => {
    dispatch({ type: 'GET_ALL_ORDER_REQUEST' });
    // const currentUser = getState().loginUserReducer.currentUser;
   
    try {
        const orders = await axios.post('/api/orders/alluserorder');
        alert("Deliver Success")
        dispatch({ type: 'GET_ALL_ORDER_SUCCESS',payload: orders.data });
        window.location.href="/admin"

    } catch (error) {
        dispatch({ type: 'GET_ALL_ORDER_FAIL',payload:error });
        console.log(error);
    }
};