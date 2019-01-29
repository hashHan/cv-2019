import { fromJS } from "immutable";

export const initialState = fromJS({
  error: null,
  loading: false,
  cvs: [] // multiple CVs
});
