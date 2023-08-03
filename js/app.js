const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}





let open = 'fa-angles-down';
let close = 'fa-xmark';

const pythonArr = document.querySelector('.pc-python i');
const pythonContent = document.querySelector('.pc-python div');

pythonArr.addEventListener('click', () => {
    if (pythonArr.classList.contains(close)) {
        pythonArr.classList.remove(close);
        pythonArr.classList.add(open);

        pythonContent.style.display = 'none';
    } else {
        pythonArr.classList.remove(open);
        pythonArr.classList.add(close);

        pythonContent.style.display = 'block';

    }
})
