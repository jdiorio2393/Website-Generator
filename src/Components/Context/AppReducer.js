export default (state, action) => {
  switch (action.type) {
    case 'STORE_SESSION':
      return {
        ...state,
        session: [action.payload, ...state.session],
      };
    case 'STORE_SURVEY':
      return {
        ...state,
        survey: [action.payload, ...state.survey],
      };
    default:
      return state;
  }
};
