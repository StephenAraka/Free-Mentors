// eslint-disable-next-line no-unused-vars
const openMenu = () => {
    document.getElementById('side-menu').style.marginLeft = '0';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('expandArrow').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.3)';
};

// eslint-disable-next-line no-unused-vars
const closeMenu = () => {
    document.getElementById('side-menu').style.marginLeft = '-250px';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('expandArrow').style.marginLeft = '0';
    document.body.style.backgroundColor = '#fff';
};
