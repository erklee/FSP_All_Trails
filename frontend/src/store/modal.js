const SHOW_MODAL = 'modal/showModal';
const HIDE_MODAL = 'modal/hideModal';

export const showModal = (modalType) => ({
    type: SHOW_MODAL,
    modalType
});

export const hideModal = () => ({
    type: HIDE_MODAL
});
