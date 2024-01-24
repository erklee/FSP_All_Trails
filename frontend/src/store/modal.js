const SHOW_MODAL = 'modal/showModal';
const HIDE_MODAL = 'modal/hideModal';

export const showModal = (modalType) => ({
    type: SHOW_MODAL,
    modalType
});

export const hideModal = () => ({
    type: HIDE_MODAL
});

function modalsReducer(state = { type: null }, action) {
    let newState = {...state}
    switch (action.type) {
      case SHOW_MODAL: {
        newState[action.modalType] = action.modalType
        return newState
      }
      case HIDE_MODAL:
        newState[action.modalType] = false 
        return newState
      default:
        return state;
    }
}

export default modalsReducer;