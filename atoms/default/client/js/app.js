// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"
import { Voxbox } from 'shared/js/voxbox'

fetch('https://interactive.guim.co.uk/docsdata/1B8xj0stauT_yD54Xi_XR6iRoCBDDRC5DqxcGDPQ_lYA.json')
    .then(res => res.json())
    .then(json => {

		const googledoc = json.sheets;

		new Voxbox(googledoc)

    });
