"use strict"
//Array of images to be used
let imageOne = [
        'Favorites/311835528-2012-11-08-0008.jpg',
        'Favorites/6TyC5S5xnvM.jpg',
        'Favorites/7527892460_a0465b27f3_o.jpg',
        'Favorites/7527947672_9642a0edc0_o.jpg',
        'Favorites/AgricultureHeart_EN-US11072776280_1920x1080.jpg',
        'Favorites/BandiagaraDogon_EN-US11747337209_1920x1080.jpg',
        'Favorites/Flowerbed.jpg',
        'Favorites/GlisGlis_EN-US11460364843_1920x1080.jpg',
        'Favorites/HawaiiGST_EN-US13793614204_1920x1080.jpg',
        'Favorites/JohnstonCanyon_EN-US13753864901_1920x1080.jpg',
        'Favorites/KyrgyzstanCat_EN-US10859527245_1920x1080.jpg',
        'Favorites/LongtailedMacaque_EN-US13267702746_1920x1080.jpg',
        'Favorites/Megadyptes_EN-US9915851755_1920x1080.jpg',
        'Favorites/Mellieha_EN-US9931288836_1920x1080.jpg',
        'Favorites/OrangutanBaby_EN-US10532835014_1920x1080.jpg',
        'Favorites/PreservationHallStage_EN-US8992559975_1920x1080.jpg',
        'Favorites/PuntaEspinosa_EN-US12660083085_1920x1080.jpg',
        'Favorites/SEopPfow6Tg.jpg',
        'Favorites/ScreechOwl_EN-US8795938080_1920x1080.jpg',
        'Favorites/Sparrowhawk_EN-US9288842659_1920x1080.jpg',
        'Favorites/StubenamAlberg_EN-US7684816211_1920x1080.jpg',
        'Favorites/SwissFoxSnow_EN-US12956141356_1920x1080.jpg',
        'Favorites/X_l9o-4UjTY.jpg',
        'Favorites/Yl9YFBtZFcQ.jpg',
        'Favorites/animewallpaper.jpg',
        'Favorites/as5uAH_bSLw.jpg','Favorites/astronomy101_hk_750.jpg',
        'Favorites/avengers-2012-full-hd-wallpaper-1920x1080-movie-1080p.jpeg',
        'Favorites/bc8479fb6c955902273d3d8d5ccb8780.jpg',
        'Favorites/dantespeak.jpg','Favorites/dsc_0596.jpg',
        'Favorites/fotos___38_.jpg','Favorites/fundo__659_.jpg',
        'Favorites/giant_turtle_by_matzell-d586r3p.jpg',
        'Favorites/gits_site_1920_at_06.jpg',
        'Favorites/hd_wallpapers.jpg',
        'Favorites/hexxx.png',
        'Favorites/july-12-hot_july__47-nocal-1920x1200.jpeg',
        'Favorites/killing_joke.jpg',
        'Favorites/konj.jpg',
        'Favorites/lara_croft_ultra_hd.jpg',
        'Favorites/qnw2y.jpg',
        'Favorites/tumblr_m2isebqafy1qbkusho1_1280.png',
        'Favorites/unnamed--e0b39b61e3.jpg',
        'Favorites/wRgNwR9CZDA.jpg',
        'Favorites/wallpaper-1658213.jpg',
        'Favorites/wallpaper-2274058.jpg',
        'Favorites/zhnKlABmTP0.jpg'
        ];
    let imageTwo = [
    'img/-4.png',
    'img/00Dy3T-PtE8.jpg',
    'img/072_-_yszudgw.jpg',
    'img/09_-_wpix_1175873.jpg',
    'img/1257730602344.jpg',
    'img/1600x1200_-_026.jpg',
    'img/2fm0qco.jpg',
    'img/50477.jpg',
    'img/790694.jpg',
    'img/7YZJ_jhQVNM.jpg',
    'img/9-5-WYEBDz0.jpg',
    'img/9repp_-_imgur.jpg',
    'img/AgricultureHeart_EN-US11072776280_1920x1080.jpg',
    'img/AlgaeRocks_EN-US13964069883_1920x1080.jpg',
    'img/BandiagaraDogon_EN-US11747337209_1920x1080.jpg',
    'img/BlueMushroom_EN-US9252668987_1920x1080.jpg',
    'img/FearlessGirl_EN-US8770808173_1920x1080.jpg',
    'img/GlisGlis_EN-US11460364843_1920x1080.jpg',
    'img/Motherboard_EN-US12641512843_1920x1080.jpg',
    'img/ResplendentQuetzal_EN-US9863376005_1920x1080.jpg',
    'img/SecretaryHunt_EN-US11569265072_1920x1080.jpg',
    'img/Sparrowhawk_EN-US9288842659_1920x1080.jpg',
    'img/VF5NASA_EN-US11160261487_1920x1080.jpg',
    'img/VkFhaQHVcE4.jpg',
    'img/WolongPanda_EN-US10387402321_1920x1080.jpg',
    'img/YellowNPFirehole_EN-US14008559204_1920x1080.jpg',
    'img/Yl9YFBtZFcQ.jpg',
    'img/ZnxVCij0xro.jpg',
    'img/april-10-splatter-nocal-1920x1200.jpg',
    'img/army_of_darkness__1920x1080_.jpg',
    'img/avengers-2012-full-hd-wallpaper-1920x1080-movie-1080p.jpeg',
    'img/avvyd.jpg',
    'img/big_efdb88061cd763a0ae0b406c579d70d5a56ad26d.jpg',
    'img/girl.png',
    'img/grain-moisture-plant-macro-photography--1440x2560.jpg',
    'img/hdpacksuperiorwallpapers375_025.jpg',
    'img/hellboy.jpg',
    'img/hexxx.png',
    'img/historical_places___6_.jpg',
    'img/mt._everest__oc___4000x5701_.jpg',
    'img/summer-wallpaper2.jpg',
    'img/the-pacific-01-1080p.jpg',
    'img/tinted_landscape_vol.7-15.jpg',
    'img/trey-ratcliff-the-hills-outhouse.jpg',
    'img/trippy_space-2015-02-12-1734.jpg',
    'img/tumblr_m2isebqafy1qbkusho1_1280.png',
    'img/tumblr_m48d4hozhm1qizk91o1_1280.jpg',
    'img/tumblr_n47wxi5nsi1sc39qro1_1280.jpg',
    'img/underworld1080.jpg',
    'img/wallpaper-1658213.jpg',
    'img/wallpaper-187993.jpg',
    'img/wallpaper-2274058.jpg',
    'img/wallpaper-696324.jpg',
    'img/wallpaper-860924.jpg',
    'img/ymnMEMj9X_4.jpg',
    'img/zhnKlABmTP0.jpg'
    ];
let imageHistory = imageOne.concat(imageTwo);


//-- Declaration of variables -->
let images = new Array(imageHistory.length); //array of created elements based on the array imageHistory
let imageIndex = 0; //variable to track h current index of the image showing on the page
let prevIndex = 0; //variable to track the previosly viewed image on thr page
let changeImageTimer = setInterval(changeImage, 5000); //calls the function changeImage every 5sec

let largeImageCont = document.querySelector(".container");
let smallImageCont = document.querySelector(".sub_viewer");
let imageIcon = document.querySelector("#small-img");
let imageOptions = document.querySelector(".img-opt");
let nextImage = document.querySelector("#next");
let prevImage = document.querySelector("#previous");
let showImageHistory = document.querySelector("#history");
let onSlide = document.querySelector("#slide");
let langSelect = document.querySelector("#lang-select");
let langOptions = document.querySelector(".lang-opt");
let langUs = document.querySelector("#us");
let langNig = document.querySelector("#nig");
<<<<<<< HEAD
let activity = document.querySelector("#activity"); 
let headTop = document.querySelector('.header');
=======
>>>>>>> cf1438e178394ed20711feec6a09b26d3f20ec79
//--- End of variable declaration




(function (){

<<<<<<< HEAD
    setWidth();

=======
>>>>>>> cf1438e178394ed20711feec6a09b26d3f20ec79
    // -- Setting on click handler on nessary elements
    showImageHistory.onclick = function() {
        if (smallImageCont.style.display == 'flex'){
            smallImageCont.style.display = 'none';
            showImageHistory.style.listStyleType = 'none';
        } else {
        smallImageCont.style.display = 'flex';
        showImageHistory.style.listStyleType = 'initial';
        imageOptions.style.display = 'none';
        }

    };

    langUs.onclick = function() {
        langSelect.innerHTML = '<small id="lang-select">en<sub>1</sub></small>';
        langUs.style.listStyleType = 'initial';
        langNig.style.listStyleType = 'none';
        langOptions.style.display = 'none';
    };

    langNig.onclick = function() {
        langSelect.innerHTML = '<small id="lang-select">en<sub>2</sub></small>';
         langUs.style.listStyleType = 'none';
        langNig.style.listStyleType = 'initial';
        langOptions.style.display = 'none';
    };


    langSelect.onclick = function() {
        if (langOptions.style.display == 'block'){
            langOptions.style.display = 'none'
        }else {
            langOptions.style.display = 'block'
            imageOptions.style.display = 'none';

        }
    };

    nextImage.onclick = function() {
        nextImg();
    };

    prevImage.onclick = function() {
        prevImg();
    };

           

    imageIcon.onclick = function() {
        if (imageOptions.style.display == 'block') {
            imageOptions.style.display = 'none';
        }else {
            imageOptions.style.display = 'block';
             langOptions.style.display = 'none'
        }
    };

<<<<<<< HEAD
    activity.addEventListener('click', function(){
        if ( (largeImageCont.getAttribute('class') == 'container-modal') &&
         (document.body.getAttribute('class') == 'body-modal') ){
            largeImageCont.setAttribute('class', 'container');
            document.body.setAttribute('class', '');
            document.body.removeChild(headTop);
            largeImageCont.appendChild(headTop);
         }
         else{
            largeImageCont.setAttribute('class', 'container-modal');
            document.body.setAttribute('class', 'body-modal');
            document.body.appendChild(headTop);
            largeImageCont.removeChild(headTop);
         }
    });

=======
>>>>>>> cf1438e178394ed20711feec6a09b26d3f20ec79
    //-- End of the onclick set up


    /* -- Page set up -->
        *Dectecting the browser width and height then setting the body to it
        *set the page container to the browser width and height also
        *set the image sub view element to browser height/5
        *set the width to the browser width.
    */
<<<<<<< HEAD
   function setWidth(){
=======
>>>>>>> cf1438e178394ed20711feec6a09b26d3f20ec79
    document.body.style.minWidth = window.innerWidth + 'px'; 
    document.body.style.minHeight = window.innerHeight + 'px';
    largeImageCont.style.minWidth = window.innerWidth + 'px';
    largeImageCont.style.minHeight = window.innerHeight + 'px';
    smallImageCont.style.height = Math.floor(window.innerHeight / 5) + 'px';
    smallImageCont.style.width = window.innerWidth + 'px';
<<<<<<< HEAD
   }
=======
>>>>>>> cf1438e178394ed20711feec6a09b26d3f20ec79
    //-- End of page Setup

    /*Loops that:
        *create image element elements based on imageHistory array Length
        *sets the src attribute to the the array of image src in imageHistory array
        *sets the height of the image to the height of the sub viewer
        *set the width to 150px
        *set on onclick handler on all the images that:
            *set the src of the largeImage to that of the clicked
            *set the largeImage index to that of the index of the click image--//
        *appends all images to the sub viewer.
        ***************************************************************************
    */
    for (let i = 0; i < imageHistory.length; i++) {
        images[i] = document.createElement('img');
        images[i].setAttribute('src', imageHistory[i]);
        images[i].style.height = smallImageCont.style.height;
        images[i].style.width = "150px";
        images[i].onclick = function() {
                                largeImageCont.style.backgroundImage = 'url(' + images[i].src + ')'
                                imageIndex = i;
                            };
    }

    for (let i = 0; i < imageHistory.length; i++) {
        smallImageCont.appendChild(images[i]);
    }

    //-- End of Loop set up->


})();

    /*Beginning of function changeImage()
        *function that:
            *set the src of the small image icon to that of the large image
            *set the backgroung image of the page to src on imageHistory array base on the index-
            imageIndex.
            *set the top border of the sub view image currently showing on the page
            *set the top border of the sub view image previously shown on the page
            *increment imageIndex by 1 each time the function runs
            *subtract 1 from imageIndex to get the prevIndex
    */
function changeImage() {

    if (imageIndex == imageHistory.length){
        imageIndex = 0;
    }else{
        imageIcon.src = imageHistory[imageIndex];
        largeImageCont.style.backgroundImage = 'url(' + imageHistory[imageIndex] + ')';
        images[imageIndex].style.borderTop = '2px solid red';
        images[prevIndex].style.borderTop = 'none';
        imageIndex += 1;
        prevIndex = imageIndex - 1; 
    }
    
    
}

//---End of function changeImage()

//Beginning of function nextImg()
function nextImg() {
    imageIndex -= 1;
    imageIcon.src = imageHistory[imageIndex];
}

//--- End of function nextImg()

//--- Beginning of function prevImag()
function prevImg() {
<<<<<<< HEAD
    if (imageIndex == 0 || imageIndex == 1){
        imageIndex = 0;
        alert('can not go any further');
    }else{
    imageIndex -= 2;
    imageIcon.src = imageHistory[imageIndex];
    }
=======
    imageIndex -= 2;
    imageIcon.src = imageHistory[imageIndex];
>>>>>>> cf1438e178394ed20711feec6a09b26d3f20ec79
}
//--- End of function 
