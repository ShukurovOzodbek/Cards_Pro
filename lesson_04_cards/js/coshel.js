let obj = JSON.parse(localStorage.getItem('user'))

let email  = document.querySelector('.web')
email.innerHTML = obj.email
let email2  = document.querySelector('.right span')
email2.innerHTML = obj.email

let btn = document.querySelector('.add')
let back = document.querySelector('.back')
let modal = document.querySelector('.modal_block')

let form = document.forms.adding
let logout = document.querySelector('.log')
logout.onclick = () => {
    localStorage.clear()
}
let url = 'https://tranquil-gorge-79901.herokuapp.com/cars'
function react() {
    axios.get(url)
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                reload(res.data.data)
            }
        })
        .catch(err => console.log(err))

}
react()
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

        let card = {}

        let fm  = new FormData(form)

        fm.forEach((value, key) => {
            card[key] = value
        });


        back.style.opacity = '0'
        modal.style.top = '-520%'
        setTimeout(() => {
            back.style.display = 'none'
        }, 300);
        axios.post(url, card)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        react()
        react()
    }
}

function reload(arr) {
    let cont  = document.querySelector('.crd')
    cont.innerHTML = ''
    for(let item of arr ) {
        cont.innerHTML +=  `
        <div class="card">
        <div class="top_card">
        <h2>${item.total} СУМ</h2>
        <code>${item.nameOfCard}</code>
        </div>
        <div class="center">
            <span class="numb">${ item.password }</span>
        </div>
        <div class="bot">
            <span class="name">${ item.name }</span>
            <span class="year">${ item.date }</span>
        </div>
        </div>
        `
    }
}
