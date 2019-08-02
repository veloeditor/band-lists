const favoriteBands = ["Nirvana", "Radiohead", "Tycho", "The Beatles", "Beatles"]


//feed the function below a parameter name for the array above

const bandList = (bandsArray) => {
    bandsArray.forEach(band => {
        console.log(band)
    });
}

bandList(favoriteBands)