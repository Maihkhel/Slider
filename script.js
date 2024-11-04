let allArticles = document.getElementsByTagName("article")



let index = 0

function showSlide(){
    for(let each of allArticles){
        each.style.display = "none"
    }

    allArticles[index].style.display = "block"
}

showSlide()

function nextslide(){
    index = (index + 1) % allArticles.length
    showSlide()
}

function prevslide(){
    index = (index - 1 + allArticles.length) % allArticles.length
    showSlide()
}

// auto slide
// set interval is an input function under bom(browser object model),these are functions that interact with our browser 

setInterval(function(){
    index = (index + 1) % allArticles.length
    showSlide()
}, 3000)
