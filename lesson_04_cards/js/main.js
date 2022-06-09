let crd = document.querySelector('.crd')

let obj = JSON.parse(localStorage.getItem('user'))

let your = document.querySelector('.name_polz')
your.innerHTML = obj.name
let email  = document.querySelector('.web')
email.innerHTML = obj.email
let email2  = document.querySelector('.right span')
email2.innerHTML = obj.email
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
let logout = document.querySelector('.log')
logout.onclick = () => {
    localStorage.clear()
}
react()
function reload(arr) { 
    crd.innerHTML = ''    
    for(let item of arr) {
        crd.innerHTML += `
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
        let span = document.querySelector('.none')
        span.style.display = 'none'
    }
}
let array = JSON.parse(localStorage.getItem('tranz')) || []
function reload_2(arr_2) {
    let cont  = document.querySelector('tbody')
    cont.innerHTML = ''
    for(let item of arr_2) {
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
    reload_2(array)
}