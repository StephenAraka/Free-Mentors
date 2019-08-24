/* eslint-disable no-param-reassign */
const tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button');
const tabPanels = document.querySelectorAll('.tabContainer .tabPanel');

const showPanel = (panelIndex) => {
    tabButtons.forEach((node) => {
        node.style.backgroundColor = '';
        node.style.color = '';
    });
    tabButtons[panelIndex].style.backgroundColor = 'gray';
    tabButtons[panelIndex].style.color = 'white';
    tabPanels.forEach((node) => {
        node.style.display = 'none';
    });
    tabPanels[panelIndex].style.display = 'block';
};

showPanel(0);
