const FETCH_STARTED = 'fetch/FETCH_STARTED';
const FETCH_SUCCESS = 'fetch/FETCH_SUCCESS';
const FETCH_ERROR = 'fetch/FETCH_ERROR';

export const fetch_started = () => ({ type: FETCH_STARTED });
export const fetch_success = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetch_error = () => ({ type: FETCH_ERROR });


const initialState = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { error: action.payload, loading: false, data: null };
    default:
      return state;
  }
}

export default reducer;