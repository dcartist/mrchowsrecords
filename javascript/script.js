
let recordsCollection = document.querySelector('#records')
console.log(recordsCollection)
function insertRecord(information){
    console.log(information.release.artist)
const newListingItem = document.createElement('li')
newListingItem.innerHTML +=  `<h3> ${information.release.artist} </h3> <p class="recordParagraph"> ${information.release.description} </p> <a href="${information.uri}" target="_blank" rel="noopener noreferrer" class="recordButton"> for more information </a> `
document.getElementById('records').appendChild(newListingItem)
}



function lastpage(pageNumber){
    console.log(pageNumber)
    fetch(`https://api.discogs.com/users/100_BPM/inventory?page=${pageNumber}&per_page=50`)
.then(res => res.json())
.then(data => {
    console.log("oompa")
    console.log(data)
    data.listings.map(listing => {
        insertRecord(listing)
        console.log(listing)})
}
    )

}


function gettingPages(numberEntered){
    fetch(`https://api.discogs.com/users/100_BPM/inventory?page=${numberEntered}&per_page=50`)
.then(res => res.json())
.then(data => {
    console.log("oompa")
    console.log(data.listings.length)
console.log(numberEntered)
lastpage(numberEntered)
    if (data.listings.length < 10){
        lastpage(numberEntered - 1)
        
    }

}
    )
}



// fetch('https://api.discogs.com/users/100_BPM/inventory?page=13&per_page=50')
fetch('https://api.discogs.com/users/100_BPM/inventory')
.then(res => res.json())
.then(data => {
    // console.log("oompa")
    // let page = data.pagination.pages-1
    // console.log(page)
    // console.log(data.pagination.pages)
    // lastpage(data.pagination.pages)
    gettingPages(data.pagination.pages)




    // data.listings.map(listing => {
    //     insertRecord(listing)
    //     console.log(listing)})
}
    )

.catch(err => console.log(err));