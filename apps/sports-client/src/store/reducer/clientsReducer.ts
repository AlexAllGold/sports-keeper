import { Reducer } from 'redux';
import { ClientActionTypes, ClientAction, ClientState } from '../../types/clients';

const initialState: ClientState = {
  clients: [],
  loading: false,
  error: null,
}

// eslint-disable-next-line default-param-last
export const clientsReducer: Reducer<ClientState, ClientAction> = (state = initialState, action: ClientAction): ClientState => {
  switch (action.type) {
    case ClientActionTypes.FETCH_CLIENT:
      return { ...state, loading: true };
    case ClientActionTypes.FETCH_CLIENT_SUCCESS:
      return { ...state, loading: false, clients: action.payload };
    case ClientActionTypes.FETCH_CLIENT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
