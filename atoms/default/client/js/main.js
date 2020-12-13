/*
var el = document.createElement('script');
el.src = '<%= atomPath %>/app.js';
document.body.appendChild(el);
*/

import { Voxbox } from 'shared/js/voxbox'

fetch('https://interactive.guim.co.uk/docsdata/1B8xj0stauT_yD54Xi_XR6iRoCBDDRC5DqxcGDPQ_lYA.json')
    .then(res => res.json())
    .then(json => {

    const googledoc = json.sheets;

    new Voxbox(googledoc)

    });


function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight, newHeight;
    (function run(){
        newHeight = elm.clientHeight;
        if( lastHeight != newHeight )
            callback();
        lastHeight = newHeight;

        if( elm.onElementHeightChangeTimer )
            clearTimeout(elm.onElementHeightChangeTimer);

        elm.onElementHeightChangeTimer = setTimeout(run, 250);
    })();
}

if (window.frameElement) {

    onElementHeightChange(document.body, function() {
        window.frameElement.height = document.body.offsetHeight + 160
    });

}
