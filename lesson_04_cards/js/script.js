let form = document.forms.regist
let input = form.querySelectorAll('input')

let pattern = {
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    name:  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    surname:  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    password: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ ,
}

function validate(inp, regex) {
    if(regex.test(inp.value)) {
        inp.classList.add('valid')
        inp.classList.remove('invalid')
    }else{
        inp.classList.add('invalid')
        inp.classList.remove('valid')
    }
}

input.forEach(input => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
});

form.onsubmit = (e) => {
    e.preventDefault()
    
    let arr = []
    
    input.forEach(inp => {
        if(inp.classList.contains('invalid') || inp.value.length == 0) {
            arr.push('invalid')
            inp.classList.add('invalid')
            setTimeout(() => {
                inp.classList.remove('invalid')
            }, 3000);
        }
    })
    if(arr.length == 0) {
        setTimeout(() => {
            submit()
            let a = document.querySelector('button a')
            a.style.display = 'block'
        }, 2000);
    } 
}

let us = JSON.parse(localStorage.getItem('user'))

function submit() {

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    });

    setTimeout(() => {
        input.forEach(inp => {
            inp.value = ""
            inp.classList.remove('valid')
        })
    }, 10000);
    localStorage.user = JSON.stringify(user)

}

if(us) {
    document.body.innerHTML = ''
    document.body.innerHTML += `
    <h1>Войти</h1>
    <form action="#" name="regist">
        <input required placeholder="Почта" type="email" name="email">
        <input required placeholder="Пароль" type="password" name="password">
        <button>
            Войти
            <a href="./main.html">
                Нажмите еще раз
            </a>
        </button>
    </form>
    <button class="btn">Регестрция</button>
    `
    let form = document.forms.regist
    form.onsubmit = (e) => {
        e.preventDefault()

        let user = {}

        let fm  = new FormData(form)

        fm.forEach((value, key) => {
            user[key] = value
        });

        if(user.email === us.email && user.password === us.password) {
            let a = document.querySelector('button a')
            a.style.display = 'block'
        }else{
            alert('Пользователь не найден :(')
        }

    }
}else{
}

let btn = document.querySelector('.btn')
let btn2 = document.querySelector('#btn2')

if(btn) {
    btn.onclick = () => {
        voiti()
    }
}
if(btn2) {
    btn2.onclick = () => {
        regist()
        console.log('asdasd');
    }
}
function voiti() {
    document.body.innerHTML = ''
    document.body.innerHTML += `
    <h1>Регестрация</h1>
    <form action="#" name="regist">
        <input required placeholder="Почта" type="email" name="email">
        <input required placeholder="Имя" type="text" name="name">
        <input required placeholder="Фамилия" type="text" name="surname">
        <input required placeholder="Пароль" type="password" name="password">
        <button>
            Продолжить
            <a href="./main.html">
                Нажмите еще раз
            </a>
        </button>
    </form>
    <button id="btn2">Войти в аккаунт</button>
    `
}
function regist() {
    document.body.innerHTML = ''
    document.body.innerHTML += `
        <h1>Войти</h1>
        <form action="#" name="regist">
            <input required placeholder="Почта" type="email" name="email">
            <input required placeholder="Пароль" type="password" name="password">
            <button>
                Войти
                <a href="./main.html">
                    Нажмите еще раз
                </a>
            </button>
        </form>
        <button class="btn">Регестрция</button>
        `
}