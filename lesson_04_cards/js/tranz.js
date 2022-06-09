let obj = JSON.parse(localStorage.getItem('user'))

let email  = document.querySelector('.web')
email.innerHTML = obj.email
let email2  = document.querySelector('.right span')
email2.innerHTML = obj.email

let btn = document.querySelector('.add')
let back = document.querySelector('.back')
let modal = document.querySelector('.modal_block')

let form = document.forms.adding_tranz

let array = JSON.parse(localStorage.getItem('tranz')) || []
btn.onclick = () => {
    back.style.display = 'block'
    setTimeout(() => {
        back.style.opacity = '1'
        modal.style.top = '20%'
    }, 300);

    back.onclick = () => {
        back.style.opacity = '0'
        modal.style.top = '-520%'
        setTimeout(() => {
            back.style.display = 'none'
        }, 300);
    }

    form.onsubmit = (e) => {
        e.preventDefault()

        let tranz = {}

        let fm  = new FormData(form)

        fm.forEach((value, key) => {
            tranz[key] = value
        });

        array.push(tranz)

        localStorage.setItem('tranz', JSON.stringify(array))
        back.style.opacity = '0'
        modal.style.top = '-520%'
        setTimeout(() => {
            back.style.display = 'none'
        }, 300);
        reload(array)
    }
}

function reload(arr) {
    let cont  = document.querySelector('tbody')
    cont.innerHTML = ''
    for(let item of arr ) {
        cont.innerHTML +=  `
        <tr>
            <td>12312321312321313</td>
            <td>${item.send_name}</td>
            <td>${item.cotegory}</td>
            <td>${item.num}</td>
            <td>4 дня назад</td>
        </tr>
        `
    }
}

if(array.length  > 0 ) {
    reload(array)
}
let logout = document.querySelector('.log')
logout.onclick = () => {
    localStorage.clear()
}