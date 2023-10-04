const footerNode = document.querySelector('footer');
const headerNode = document.querySelector('header');
const mainNode = document.querySelector('.main');
const errorsContainerNode = document.querySelector('.errors')
const headerMenuButton = document.querySelector('.header-menu__button');
const menu = document.querySelector('nav.nav');
const menuLinks = document.querySelectorAll('.nav__left-list li a');
const documentsList = document.querySelector('.documents-list');


function toggleClass(element, className) {
    if(element.classList.contains(className))
    {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}
function menuOpenClose() {
    if(headerMenuButton.classList.contains('animate')) {
        headerMenuButton.classList.remove('animate');
        headerMenuButton.classList.add('animate-back');
    } else {
        headerMenuButton.classList.add('animate');
        headerMenuButton.classList.remove('animate-back');
    }
    if(menu) toggleClass(menu, 'active');
    
    setTimeout(() => {
        toggleClass(headerMenuButton, 'active');
    }, 400)
    setTimeout(() => {
    }, 500)
}

function setListMaxHeight(list, maxItems) {

    if (list && maxItems) 
    {
        let children = list.children[0];
        let childrenHeight = children.offsetHeight;
        list.style.maxHeight = childrenHeight ? childrenHeight * maxItems - 3 + "px" : 'unset';
    }
}

function setMainMinHeigth()
{
    // const headerHeight = Number(headerNode.offsetHeight) || 0;
    const footerHeight = Number(footerNode.offsetHeight) || 0;

    if(mainNode) {
        mainNode.style.minHeight = window.innerHeight - footerHeight +'px';
        // mainNode.style.paddingTop = headerHeight +'px';
    }
}

function setErrorsMinHeigth()
{
    const footerHeight = Number(footerNode.offsetHeight) || 0;

    if(errorsContainerNode) {
        errorsContainerNode.style.minHeight = window.innerHeight - footerHeight +'px';
    }
}

function changePattern()
{

}

if (documentsList) {
    setListMaxHeight(documentsList, 7);
}
setMainMinHeigth()
setErrorsMinHeigth()


window.addEventListener('resize', () => {
    if (documentsList) {
        setListMaxHeight(documentsList, 7)
    }
    setMainMinHeigth()
    setErrorsMinHeigth()
    
});

if(headerMenuButton)
{
    headerMenuButton.addEventListener('click', () =>{
        menuOpenClose();
    })
}
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuOpenClose();
    })
})
Fancybox.defaults.closeButton = false;

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


/*PANO SCRIPTS*/

function isTouchDevice() {
    return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

function accessWebVr(curScene, curTime){
    unloadPlayer();
    eventUnloadPlugins();
    loadPlayer(true, curScene, curTime);
}
function accessStdVr(curScene, curTime){
    unloadPlayer();
    resetValuesForPlugins();
    loadPlayer(false, curScene, curTime);
}
function loadPlayer(isWebVr, curScene, curTime) {
    embedpano({
        id:"krpanoSWFObject"
        ,xml:"indexdata/index.xml"
        ,target:"panoDIV"
        ,passQueryParameters:true
        ,bgcolor:"#000000"
        ,html5:"auto"
        ,vars:{startscene:curScene,starttime:curTime}
        ,webglsettings:{preserveDrawingBuffer:false, depth:true, stencil:true}
    });
}
function unloadPlayer(){
    if(jQuery('#krpanoSWFObject')){
        //stop all sounds playing before the removepano
        if (getCurrentTourPlayer() != null) {
            getCurrentTourPlayer().call("stopTourSounds();");
        }
        currentPanotourPlayer = null;
        removepano('krpanoSWFObject');
    }
    
}
var currentPanotourPlayer = null;

function getCurrentTourPlayer() {
    if (currentPanotourPlayer == null) {
        currentPanotourPlayer = document.getElementById('krpanoSWFObject');
    }
    return currentPanotourPlayer;
}
function isVRModeRequested() {
    var querystr = window.location.search.substring(1);
    var params = querystr.split('&');
    for (var i=0; i<params.length; i++){
        if (params[i].toLowerCase() == "vr"){
            return true;
        }
    }
    return false;
}