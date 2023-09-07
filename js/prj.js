
const copyElements = document.querySelectorAll('.fa-copy');

copyElements.forEach((cpyBtn) => {
    cpyBtn.addEventListener('click', () => {
        let cpyContent = cpyBtn.parentElement.querySelector('p span');
        navigator.clipboard.writeText(cpyContent.innerHTML);

        // Animation popup

        const popup = document.querySelector('#copyPopup');
        
        popup.style.display = 'block';
        popup.style.animation = 'copyPopup 1s'
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000)
    })
})
