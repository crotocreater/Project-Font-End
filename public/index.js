var slide = [
    document.querySelector("#silde-1"),
    document.querySelector("#silde-2"),
    document.querySelector("#silde-3")
];

toLeft = () => {
    let index;
    for (let i = 0; i < slide.length; i++) {
        if (!slide[i].classList.contains("hidden")) {
            index = i;
            break;
        }
    }
    slide[index].classList.add("hidden");
    index--;
    if (index < 0) {
        index = slide.length - 1;
    }
    slide[index].classList.remove("hidden");
};

toRight = () => {
    let index;
    for (let i = 0; i < slide.length; i++) {
        if (!slide[i].classList.contains("hidden")) {
            index = i;
            break;
        }
    }
    slide[index].classList.add("hidden");
    index++;
    if (index >= slide.length) {
        index = 0;
    }
    slide[index].classList.remove("hidden");
};


setInterval(() => {
    toLeft();
}, 2500);

var btn = [
    document.querySelector("#btn-ss-1"),
    document.querySelector("#btn-ss-2"),
    document.querySelector("#btn-ss-3")
];
var ss = [
    document.querySelector("#content-ss-1"),
    document.querySelector("#content-ss-2"),
    document.querySelector("#content-ss-3")
]

ssSetting1 = () =>{
    let index = 0;
    if(!btn[index].classList.contains("text-red-600")){
        btn[index].classList.remove("text-gray-800");
        btn[index].classList.add("text-red-600");
    }else{
        btn[index].classList.add("text-gray-800");
        btn[index].classList.remove("text-red-600");
    }
    if(ss[index].classList.contains("hidden")){
        ss[index].classList.remove("hidden");
    }else{
        ss[index].classList.add("hidden");
    }
    if(!ss[1].classList.contains("hidden")){
        ss[1].classList.add("hidden");
    }
    if(btn[1].classList.contains("text-red-600")){
        btn[1].classList.add("text-gray-800");
        btn[1].classList.remove("text-red-600");
    }
    if(!ss[2].classList.contains("hidden")){
        ss[2].classList.add("hidden");
    }
    if(btn[2].classList.contains("text-red-600")){
        btn[2].classList.add("text-gray-800");
        btn[2].classList.remove("text-red-600");
    }
}
ssSetting2 = () =>{
    let index = 1;
    if(!btn[index].classList.contains("text-red-600")){
        btn[index].classList.remove("text-gray-800");
        btn[index].classList.add("text-red-600");
    }else{
        btn[index].classList.add("text-gray-800");
        btn[index].classList.remove("text-red-600");
    }
    if(ss[index].classList.contains("hidden")){
        ss[index].classList.remove("hidden");
    }else{
        ss[index].classList.add("hidden");
    }
    if(!ss[0].classList.contains("hidden")){
        ss[0].classList.add("hidden");
    }
    if(btn[0].classList.contains("text-red-600")){
        btn[0].classList.add("text-gray-800");
        btn[0].classList.remove("text-red-600");
    }
    if(!ss[2].classList.contains("hidden")){
        ss[2].classList.add("hidden");
    }
    if(btn[2].classList.contains("text-red-600")){
        btn[2].classList.add("text-gray-800");
        btn[2].classList.remove("text-red-600");
    }
}
ssSetting3 = () =>{
    let index  = 2
    if(!btn[index].classList.contains("text-red-600")){
        btn[index].classList.remove("text-gray-800");
        btn[index].classList.add("text-red-600");
    }else{
        btn[index].classList.add("text-gray-800");
        btn[index].classList.remove("text-red-600");
    }
    if(ss[index].classList.contains("hidden")){
        ss[index].classList.remove("hidden");
    }else{
        ss[index].classList.add("hidden");
    }
    if(!ss[1].classList.contains("hidden")){
        ss[1].classList.add("hidden");
    }
    if(btn[1].classList.contains("text-red-600")){
        btn[1].classList.add("text-gray-800");
        btn[1].classList.remove("text-red-600");
    }
    if(!ss[0].classList.contains("hidden")){
        ss[0].classList.add("hidden");
    }
    if(btn[0].classList.contains("text-red-600")){
        btn[0].classList.add("text-gray-800");
        btn[0].classList.remove("text-red-600");
    }
}



cardContent = [
    document.querySelector("#card1"),
    document.querySelector("#card2"),
    document.querySelector("#card3"),
]

cardButton = [
    document.querySelector("#btn-c-1"),
    document.querySelector("#btn-c-2"),
    document.querySelector("#btn-c-3"), 
]

slideCard = (index, id) =>{
    for(let i=0;i<cardButton.length;i++){
        if(i != index){
            if(cardButton[i].classList.contains("bg-red-500")){
                cardButton[i].classList.remove("bg-red-500");
                cardButton[i].classList.add("bg-gray-800");
            }
        }
        if(i == index){
            if(cardButton[i].classList.contains("bg-gray-800")){
                cardButton[i].classList.add("bg-red-500");
                cardButton[i].classList.remove("bg-gray-800");
            }
        }
        if(i != index){
            if(!cardContent[i].classList.contains("hidden")){
                cardContent[i].classList.add("hidden");
            }
        }
        if(i == index){
            if(cardContent[i].classList.contains("hidden")){
                cardContent[i].classList.remove("hidden");
            }
        }
    }
}



var prCard = document.querySelectorAll(".cr");


slideCardPr = (index, content)=>{
    if(index == 0){
        for(let i=0;i<prCard.length;i++){
            if(prCard[i].classList.contains("hidden")){
                prCard[i].classList.remove("hidden");
            }
        }
    }
    if(index != 0){
        let sumHidden = 0;
        for(let k=0;k<prCard.length;k++){
            if(prCard[k].classList.contains("hidden")){
                sumHidden++;
            }
        }
        if(sumHidden > 4){
            for(let i=0;i<prCard.length;i++){
                if(prCard[i].classList.contains("hidden")){
                    prCard[i].classList.remove("hidden");
                }
            }
        }
        let j = -1;
        for(let i=0;i<index;i++){
            let i = Math.floor(Math.random()*10);
            j = i;
            while(! (j!=i)){
                i = Math.floor(Math.random*10);
            }
            prCard[i].classList.add("hidden");
        }
    }
}