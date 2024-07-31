const arrows = document.querySelectorAll('.arrow');
const MovieList = document.querySelectorAll('.movie-list');
arrows.forEach((arrow, i) => {
    const itemNumber=MovieList[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4+clickCounter)>=0){
        MovieList[i].style.transform = `translateX(${MovieList[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else{
            MovieList[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
    })
console.log(MovieList[i].querySelectorAll("img").length);
})

// const ball=document.querySelector('.toggle-ball');
// const items = document.querySelector('.container,.movie-list-title,.navbar-cont,.sidebar,.toggle');
// ball.addEventListener("click",()=>{
//     items.forEach(item=>{
//         item.classList.toggle("active")
//     })
// })



// var icon=document.getElementById('#icon');
// icon.onclick=function (){
//     document.body.classList.toggle("lyt-theme");
//     if(    document.body.classList.contains("lyt-theme")){
//         icon.src="moon.png";
//     }
//     else{
//         icon.src="sun.png";
//     }
// }