const icons = document.querySelectorAll('.hero__icons i');
let numberIcon = 0;
setInterval(() => {
    numberIcon++;
    let icon = document.querySelector('.hero__icons .change');

    icon.classList.remove('change');
    if (numberIcon >= icons.length) {
        icons[0].classList.add('change');
        numberIcon = 0
    } else {
        icon.nextElementSibling.classList.add('change')
    }
}, 2000)

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    });
});