var salesSlider1 = document.getElementById("slider-1");
var salesSlider2 = document.getElementById("slider-2");
var salesSlider3 = document.getElementById("slider-3");

var images1 = [
    "./assest/1 (1).jpg",
    "./assest/1 (2).jpg",
    "./assest/1 (3).jpg"
];

var images2 = [
    "./assest/1 (4).jpg",
    "./assest/1 (5).jpg",
    "./assest/1 (6).jpg"
];

var images3 = [
    "./assest/1 (7).jpg",
    "./assest/1 (8).jpg",
    "./assest/1 (9).jpg"
];

var len1 = images1.length;
var len2 = images2.length;
var len3 = images3.length;
var i1 = 0;
var i2 = 0;
var i3 = 0;

function fadeIn(element) {
    element.classList.remove("show");
    void element.offsetWidth; // Trigger reflow to restart the animation
    element.classList.add("show");
}

function salesSliderShow1() {
    if (i1 > len1 - 1) {
        i1 = 0;
    }
    salesSlider1.src = images1[i1];
    fadeIn(salesSlider1);
    i1++;
    setTimeout(salesSliderShow1, 5000);
}

function salesSliderShow2() {
    if (i2 > len2 - 1) {
        i2 = 0;
    }
    salesSlider2.src = images2[i2];
    fadeIn(salesSlider2);
    i2++;
    setTimeout(salesSliderShow2, 5000);
}

function salesSliderShow3() {
    if (i3 > len3 - 1) {
        i3 = 0;
    }
    salesSlider3.src = images3[i3];
    fadeIn(salesSlider3);
    i3++;
    setTimeout(salesSliderShow3, 5000);
}

function allfunction(func1, func2, func3) {
    func1();
    func2();
    func3();
}

// Call all the slider functions
allfunction(salesSliderShow1, salesSliderShow2, salesSliderShow3);


    function message(event){
    let nameB = document.getElementById("name").value;
    console.log(nameB)
    event.preventDefault();
    console.log(nameB);
    alert("Thank you " + nameB + " for contacting Nwacha's Agency. We promise to give you response in no time.")
}

document.getElementById("contact-form").addEventListener("submit", message);

function buy(){
    window.location.href ="https://bit.ly/3XMYK8b";
}
function rent(){
    window.location.href ="https://bit.ly/4c43CK5";
}