export default function menuTab() {
    // selections
    const imgCont = document.querySelector("#img-cont");
    const navCont = document.querySelector("#nav-cont");
    const contentCont = document.querySelector("#content-cont")

    //change content
    while (contentCont.firstChild) {
        contentCont.removeChild(contentCont.firstChild);
    }

    // change image
    imgCont.style.backgroundImage = 'url("/src/assets/images/menu.jpg")';
    imgCont.style.backgroundSize = "cover";
    imgCont.style.borderTopLeftRadius = "30px";
    imgCont.style.borderBottomLeftRadius = "30px";

    // change active button
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contBtn = document.querySelector("#contBtn");
    menuBtn.style.backgroundColor = "#FFA737";
    homeBtn.style.backgroundColor = "#FFB452";
    contBtn.style.backgroundColor = "#FFB452";
    homeBtn.style.fontSize = "1.5em";
    menuBtn.style.fontSize = "1.7em";
    contBtn.style.fontSize = "1.5em"
    homeBtn.style.boxShadow = "none";
    menuBtn.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
    contBtn.style.boxShadow = "none";

    // create content
    contentCont.removeAttribute('style');
    contentCont.style.display = "flex";
    contentCont.style.flexDirection = "column";
    contentCont.style.justifyContent = "space-between";
    contentCont.style.alignItems = "stretch";
    contentCont.style.padding = "60px 0";
    const secContainer1 = document.createElement("div");
    const secP1 = document.createElement("p");
    const secImg1 = document.createElement("img");
    const secContainer2 = document.createElement("div");
    const secP2 = document.createElement("p");
    const secImg2 = document.createElement("img");

    secContainer1.append(secP1);
    secContainer1.append(secImg1);
    secContainer2.append(secP2);
    secContainer2.append(secImg2);

    contentCont.append(secContainer1);
    contentCont.append(secContainer2);

    secContainer1.style.display = "flex";
    secContainer1.style.flexDirection = "row-reverse";
    secContainer1.style.justifyContent = "space-between";
    secContainer1.style.alignItems = "center";
    secContainer1.style.padding = "20px 20px 60px 20px";
    secContainer2.style.display = "flex";
    secContainer2.style.flexDirection = "row";
    secContainer2.style.justifyContent = "space-between";
    secContainer2.style.alignItems = "center";
    secContainer2.style.padding = "20px 20px";



    secP1.innerHTML = "<span class='menuItem'>GUACAMOLE</span> HERBS, AVOCADO<br> <span class='menuItem'>SALAD</span> FRESH BEANS, COTIJA, PISTACHIO<br> <span class='menuItem'>MUSSEL ESCABECHE</span> FRIJOLES DE LA OLLA<br> <span class='menuItem'>FISH TARTARE TOSTADA</span> AVOCADO, FURIKAKE<br> <span class='menuItem'>UNI TOSTADA</span> CAESAR SALAD, PARMIGIANO<br> <span class='menuItem'>CEVICHE</span> OLIVE KOSHO, SUNGOLD TOMATO<br> <span class='menuItem'>SMOKED CLAM</span> CHILI SEED SHOYU, CUCUMBER<br> <span class='menuItem'>TLAYUDA</span> ZUCCHINI, QUESO FRESCO, SHRIMP SHELL";
    secP1.style.lineHeight = "26px";
    secP1.style.letterSpacing = "1px";
    secP2.innerHTML = "<span class='menuItem'>FISH TEMPURA TACO</span> CABBAGE, PONZU<br> <span class='menuItem'>GORDITA</span> BLUE SHRIMP, AVOCADO SHISO SALSA<br> <span class='menuItem'>OCTOPUS HUARACHE</span> POTATO, CHIPOTLE MAYONNAISE<br> <span class='menuItem'>TAMAL DE ELOTE</span> QUESO FRESCO, EPAZOTE<br> <span class='menuItem'>TETELA</span> CREAMED SPINACH, RICOTTA, POBLANO<br> <span class='menuItem'>QUESADILLA SUIZA</span> MUSHROOM, GRUYÈRE, TRUFFLE";
    secP2.style.lineHeight = "26px";
    secP2.style.letterSpacing = "1px";

    secImg1.src = "/src/assets/images/menu1.jpg"
    secImg1.style.boxShadow = "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
    secImg2.style.boxShadow = "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
    secImg1.width = "400";
    secImg1.height = "200";
    secImg1.style.borderRadius = "8px";
    secImg2.src = "/src/assets/images/menu3.jpg"
    secImg2.width = "400";
    secImg2.height = "200";
    secImg2.style.borderRadius = "8px";

    const menuItems = document.querySelectorAll(".menuItem");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.fontWeight = "bold";
        menuItems[i].style.fontSize = "1.1em";
    }

}