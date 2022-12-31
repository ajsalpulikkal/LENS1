function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display = 'block';
    document.getElementById('body-section').style.opacity='0.8'
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    document.getElementById('body-section').style.opacity='1'
}

function mode(){
    let changeMode=document.body;
    changeMode.classList.toggle('change')
    
}

const url = "http://3.17.216.66:4000";


const getCity = async() => {
    let response = await fetch(`${url}/location`,{method:'GET'});
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(item.state)
        element.appendChild(text)
        element.value = item.state_id
        document.getElementById('city').appendChild(element)
    })
}

const getRest = async() => {
    let cityId = document.getElementById('choose').value;
    let rest = document.getElementById('smooth');
    while(rest.length>0){
        rest.remove(0)
    }
    let response = await fetch(`${url}/restaurant?stateId=${cityId}`,{method:'GET'});
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(text)
        rest.appendChild(element)
    })
}