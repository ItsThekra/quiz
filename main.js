const container = document.getElementById("container")

// const apiUrl = "https://restcountries.com/v3.1/all"


// fetch data from api
// async function getData(){
// let getData = await fetch("https://restcountries.com/v3.1/all");
// let data = getData.json();

// data.map((item) => {
//     // const card = document.createElement("div")
//     // card.classList.add("card")
//     console.log(item)

// })
// }

fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => ()=>{
        console.log(data)
        data.forEach(element => {
            // console.log(element);  
            const card = document.createElement("div")
            card.classList.add("card")

            

        });
})

// console.log("ggg")
    
    // getData()
//  function displayData(data) {
//     data.forEach((item) => {
    // const card = document.createElement("div")
    // card.classList.add("card")
    // console.log(item)
// })


    // console.log(item)


    // const name_common = document.createElement("h3")
    // name_common.classList.add("name_common")


  

    // name_common.innerText = item.name.common
    

    // const flags =document.createElement("img")
    // flags.src = item.flags.png
    // flags.classList.add("")

//     card.appendChild(name_common)
//     card.appendChild(flags)

//  });
//    container.appendChild(card)
// }
// }









// function display(data) {
//     data.forEach(item => {
//     const card = document.createElement("div")
//     card.classList.add = ("card")

//     const name_common = document.createElement("h3")
//     name_common.classList.add =("name_common")
//     name_common.innerText = item.name.common

//     card.appendChild(name_common)

//     }
// );
//    container.appendChild(card)
    // const name_common = document.createElement("h3")
    // const name_official = document.createElement("h3")
    // const population =document.createElement("p")
    // const flags =document.createElement("p")
    // const languages =document.createElement("p")
    // const region =document.createElement("p")
    // const maps =document.createElement("p")

// }

