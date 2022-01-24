function changeColor() {

    let colors = ["#ff0000", "#ffff00",
        "#00ff00", "#0040ff", "#ff00ff", "#ff0000"




    ];


    let random = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random];


}