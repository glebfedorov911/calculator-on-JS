const n = ['.n_one', '.n_two', '.n_three', '.n_four', '.n_five', '.n_six', '.n_seven',
    '.n_eight', '.n_nine', '.n_zero', '.n_plus', '.n_div', '.n_minus', '.n_multiple', '.n_dot'];
const equal = document.querySelectorAll('.n_equal')[0];
const clear_btn = document.querySelectorAll('.n_clear')[0];
const memory = document.querySelector('.n_memory');
var str = '';
var all_chet = document.querySelectorAll('.all-chet')[0];
var memory_array = new Map();
var for_memory = document.querySelector('.for_memory');

function show(e) {
    str += this.getAttribute('data-value');
    all_chet.innerHTML = str;   
}

function final(e) {
    try {
        let und = eval(str) == undefined;
        all_chet.innerHTML =  und ? 'Ошибка' : eval(str);
        memory_array.set(str, eval(str));
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

function memory_calc(e) {
    flag = 0;
    for_memory.innerHTML = '';
    for(var memory of [...memory_array].reverse()) {
        if (flag == 5) break;
        p = document.createElement('p');
        p.append(`${memory[0]} = ${memory[1]}`);
        p.classList ='chtoto';
        for_memory.appendChild(p);
        flag += 1;
    }
    var chtoto = document.querySelectorAll('.chtoto');
    chtoto.forEach(c => c.addEventListener('click', function(e){
        str = c.innerHTML.split(' = ')[0];
        all_chet.innerHTML = c.innerHTML.split(' = ')[0];
    }))
}

for (let elem of n) {document.querySelectorAll(elem)[0].addEventListener('click', show);}
equal.addEventListener('click', final);
clear_btn.addEventListener('click', clear);
memory.addEventListener('click', memory_calc);
