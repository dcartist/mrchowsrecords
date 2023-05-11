console.log("Hello World!")
let recordsCollection = document.querySelector('#records')
console.log(recordsCollection)
function insertRecord(information){
    console.log(information.release.artist)
const newListingItem = document.createElement('li')

const listingText_Description = document.createTextNode(information.release.description)

newListingItem.innerHTML +=  `<h3> ${information.release.artist} </h3> <p> ${information.release.description} </p>`


// newListingItem.innerHTML = recordBox
// newListingItem.appendChild(listingText)
document.getElementById('records').appendChild(newListingItem)
    // let recordSection = `<p> ${information.release.artist} </p>`
    // recordsCollection.appendChild(recordSection)
}



fetch('https://api.discogs.com/users/100_BPM/inventory')
.then(res => res.json())
.then(data => {
    console.log("oompa")
    console.log(data.listings)
    data.listings.map(listing => {
        insertRecord(listing)
        console.log(listing)})
// for (recordData in data.listings) {
// insertRecord(recordData)
//     console.log(data.listings[recordData])

// }

}
    )

.catch(err => console.log(err));