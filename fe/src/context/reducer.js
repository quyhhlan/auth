import { SETUP_USER_BEGIN } from "./actions";

function reducer(state, action) {
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  throw new Error(`no such action: ${action.type}`);
}

export default reducer;
