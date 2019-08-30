/* eslint-disable no-unused-vars */
const openMenu = () => {
    document.getElementById('side-menu').style.marginLeft = '0';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('expandArrow').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.3)';
};

const closeMenu = () => {
    document.getElementById('side-menu').style.marginLeft = '-250px';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('expandArrow').style.marginLeft = '0';
    document.body.style.backgroundColor = '#fff';
};

const requestSessionBtn = document.querySelector('.btn-request-session');

requestSessionBtn.addEventListener('click', () => {
    console.log('Holla Holla Holla!');
});
