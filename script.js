const n = ['.n_one', '.n_two', '.n_three', '.n_four', '.n_five', '.n_six', '.n_seven',
    '.n_eight', '.n_nine', '.n_zero', '.n_plus', '.n_div', '.n_minus', '.n_multiple'];
const equal = document.querySelectorAll('.n_equal')[0];
const clear_btn = document.querySelectorAll('.n_clear')[0];
var str = '';
var all_chet = document.querySelectorAll('.all-chet')[0];

function show(e) {
    str += this.getAttribute('data-value');
    all_chet.innerHTML = str;
}

function final(e) {
    try {
        let und = eval(str) == undefined;
        all_chet.innerHTML =  und ? 'Ошибка' : eval(str);
        str = und ? '' : eval(str);
    } catch {
        all_chet.innerHTML = 'Ошибка';
        str = '';
    }
}

function clear(e) {
    str = '';
    all_chet.innerHTML = '';
}

for (let elem of n) {document.querySelectorAll(elem)[0].addEventListener('click', show);}
equal.addEventListener('click', final);
clear_btn.addEventListener('click', clear);