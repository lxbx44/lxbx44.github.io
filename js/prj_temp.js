const codeBlocks = document.querySelectorAll('.code');

codeBlocks.forEach((codeBlock) => {
    codeBlock.style.position = 'relative';

    let copy = document.createElement('i');
    let md = document.createElement('div');

    copy.classList.add('fa-solid');
    copy.classList.add('fa-copy');
    md.classList.add('hov_copy');

    md.appendChild(copy);

    md.style.position = 'absolute';
    md.style.right = '0.6rem';
    md.style.top = '0.1rem';

    codeBlock.appendChild(md);
});

const copyEl = document.querySelectorAll('.hov_copy');

copyEl.forEach((copyE) => {
    copyE.addEventListener('click', () => {
        const pTag = copyE.parentElement;
        const text = pTag.textContent.trim();

        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
            })
            .catch((error) => {
                console.error('Unable to copy text:', error);
            });

        const popup = document.querySelector('.popup');

        popup.style.animation = 'none';
        void popup.offsetWidth
        popup.style.animation = 'popupPrj 1s';
    });
});


const btnInfo = document.querySelector('.information');
const infoPopup = document.querySelector('.info');

btnInfo.addEventListener('click', () => {
    infoPopup.style.display = 'block'
    infoPopup.style.animation = 'popupIn 0.5s';
    infoPopup.style.opacity = '1';
    document.querySelector('body').style.overflow = 'hidden';
});

const closePopup = document.querySelector('#infoClose');

closePopup.addEventListener('click', () => {
    infoPopup.style.animation = 'popupOut 0.5s';
    infoPopup.style.opacity = '0';
    setTimeout( () => {
        infoPopup.style.display = 'none';
    }, 500)
    document.querySelector('body').style.overflow = 'auto';

});

window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        infoPopup.style.animation = 'popupOut 0.5s';
        infoPopup.style.opacity = '0';
        setTimeout( () => {
            infoPopup.style.display = 'none';
        }, 500) 
        document.querySelector('body').style.overflow = 'auto';

    }

    if (event.code === 'KeyI') {
        infoPopup.style.display = 'block'
        infoPopup.style.animation = 'popupIn 0.5s';
        infoPopup.style.opacity = '1';
        document.querySelector('body').style.overflow = 'hidden';

    }
});




