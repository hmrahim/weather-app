const field = (id)=>{
    const element = document.getElementById(id)
    return element
}

const innerText = (id, text) => {
    const field = document.getElementById(id)
    field.innerText = text
    
}

const weather = async () => {
    if (field("city").value == "") {
        alert("this field cannot be empty")
    } else {
    const api_keys = "7eb1025b3d1f30ca70c68121689b7a6a"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${field("city").value}&appid=${api_keys}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
        innerText("cityname", data.name)
        innerText("temp",data.main.temp)
    }
    
}



field("btn").addEventListener("click", (e) => {
    e.preventDefault()
    weather()
    
})