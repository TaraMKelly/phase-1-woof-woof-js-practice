// When a user clicks on a pup's span in the dog bar, that pup's info 
// (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". 
// When you have the pup's information, the dog info div should have the following children:
// -an img tag with the pup's image url
// -an h2 with the pup's name
// -a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false.

function fetchDogs () {
    fetch("http://localhost:3000/pups/")
    .then(resp => resp.json())
    .then(dogs => dogs.map(addDogName))
}
fetchDogs()

function addDogName(dog) {
    console.log(dog)
    let dogBar = document.querySelector("#dog-bar")
    let dogSpan = document.createElement("span")
    dogSpan.textContent = dog.name
    dogBar.append(dogSpan)

    dogSpan.addEventListener("click", () => {
        let dogInfo = document.querySelector("#dog-info")
        let img = document.createElement("img")
        let dogh2 = document.createElement("h2")
        let dogButton = document.createElement("button")
        img.src = dog.image
        dogh2 = dog.name
        dog.isGoodDog ? dogButton.textContent = "Good Dog!" : dogButton.textContent = "Bad Dog!"
        dogInfo.append(img, dogh2, dogButton)
    })
}