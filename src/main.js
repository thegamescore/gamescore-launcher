const TOOLTIP_FADE_IN_TIME_IN_MS = 3000;

function createGameScoreLauncher() {
    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    const tooltip = document.createElement("div");

    wrapper.classList.add("gamescore-loucher-wrapper");
    button.classList.add("gamescore-loucher");
    tooltip.classList.add("tooltip");

    tooltip.textContent = "Hello, this is Gamescore! Ready to play a game?";

    const tooltipCross = document.createElement("div");
    tooltipCross.classList.add("tooltip-cross");

    tooltip.appendChild(tooltipCross);
    wrapper.appendChild(button);
    wrapper.appendChild(tooltip);

    document.body.appendChild(wrapper);

    const modal = document.createElement('div')
    const modalContent = document.createElement('div')

    modal.classList.add('modal')
    modal.classList.add('modal-content')

    modal.appendChild(modalContent)

    document.body.appendChild(modal)
}

const openTooltip = () => {
    const tooltip = document.querySelector('.tooltip')

    tooltip.classList.add('tooltip-visible')
}

const closeTooltip = () => {
    const tooltip = document.querySelector('.tooltip')

    tooltip.classList.remove('tooltip-visible')
}

const initializeToolip = () => {
    setTimeout(() => {
        openTooltip()
    }, TOOLTIP_FADE_IN_TIME_IN_MS)
}

function openModal(){
    const modal = document.querySelector('.modal')

    modal.classList.add('active')

}

function attachEventListeners(){
    const closeTooltipButton = document.querySelector('.tooltip-cross')
    const louncher = document.querySelector('.gamescore-loucher')


    closeTooltipButton.addEventListener('click', closeTooltip)
    louncher.addEventListener('click', openModal)
}

document.addEventListener("DOMContentLoaded", () => {
    createGameScoreLauncher()
    initializeToolip()
    attachEventListeners()
});


