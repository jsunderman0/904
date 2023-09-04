const all = document.getElementById("all")
const selected = document.getElementById("selected")
const backToTop = document.querySelector("button")

let data = [];
async function fetchData () {
    const allData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await allData.json()
    data = json
    console.log(data)
    render()
};

fetchData();

function render () {
    const displayAll = data.map((info) => {
        return `<h4><a href="#${info.id}"> ID: ${info.id}</a> </h4>`
    })

        all.innerHTML = displayAll.join('')

    const hash = window.location.hash.slice(1)*1
    
    const dataSelection = data.find((info) => {
        return info.id === hash
    })
   
    let selectedData = " ";
    if (dataSelection){
        selectedData = `<h4> ID: ${dataSelection.id}</h4> <br>
        <h4> Title: ${dataSelection.title}</h4> <br>
        <h4> Body: ${dataSelection.body}</h4>`
        selected.scrollIntoView({
        block: "end",
        behavior: "smooth"
    })
    }
    else{
        selectedData = " You have not selected any Data "
    }
   selected.innerHTML = selectedData

   

};

window.addEventListener("hashchange", e => {
    render()
})

backToTop.addEventListener("click", e => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})



