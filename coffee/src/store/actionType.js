
export const FETCH_COFFEE_REQUEST = 'coffee_request';
export const FETCH_COFFEE_SUCCESS = 'coffee_success';
export const FETCH_COFFEE_FAILURE = 'coffee_failure';
export const SORT_COFFEE_ASC = 'coffee_asc';
export const SORT_COFFEE_DESC = 'coffee_desc';


export function fetchCoffeeRequest() {
    return { type: FETCH_COFFEE_REQUEST };
}

export function fetchCoffeeSuccess(data) {
    return { type: FETCH_COFFEE_SUCCESS, payload: data };
}

export function fetchCoffeeFailure() {
    return { type: FETCH_COFFEE_FAILURE };
}

export function sortCoffeeAsc() {
    return { type: SORT_COFFEE_ASC };
}

export function sortCoffeeDesc() {
    return { type: SORT_COFFEE_DESC };
}

export const fetchCoffee = () => async (dispatch) => {
    try {
        dispatch(fetchCoffeeRequest());
        const res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee');
        const data = await res.json();
        dispatch(fetchCoffeeSuccess(data.data));
    } catch (error) {
        dispatch(fetchCoffeeFailure());
    }
};

