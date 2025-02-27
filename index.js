const state = {
    previousId: '1',
    rightId: '',
};

const render = (state) => {
    const hPreviousId = document.getElementById(`tab_button-${state.previousId}`)
    const hRightId = document.getElementById(`tab_button-${state.rightId}`)

    const hTabImg = document.querySelector(`.tab_img`);
    const hPreviousImg = `tab_img-${state.previousId}`;
    const hRightImg = `tab_img-${state.rightId}`;

    hPreviousId.classList.remove('open');
    hTabImg.classList.remove(hPreviousImg);

    hTabImg.classList.add(hRightImg);
    hRightId.classList.add('open');
};

const tabButtons = document.querySelectorAll('.tab_button');

tabButtons.forEach((button) => {
    button.addEventListener('click' ,(e) => {
        state.rightId = e.target.id[e.target.id.length - 1];
        render(state);
        state.previousId = state.rightId;
    });
});