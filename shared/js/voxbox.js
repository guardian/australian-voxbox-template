import template from 'shared/templates/template.html'
import palette from 'shared/js/palette'
import Ractive from 'ractive'
Ractive.DEBUG = false;

export class Voxbox {

	constructor(data) {

		var self = this

		data.vox.forEach(function(item, index) {

			item.id = index

			item.solo = (item.full==='') ? true : false ;

			item.active = (index===0) ? true : false ;

		});

		this.database = {

			"vox" : data.vox,

			"headline" : data.settings[0].title,

			"standfirst" : data.settings[0].intro,

			"primary" : palette[data.settings[0].theme],

			"distance" : data.vox.length,

			"panel" : data.vox[0],

			"active" : true,

			sizer: () => ( 100 / data.vox.length ) + '%' 

		}

		this.ractivate()
		
	}

	ractivate() {

		var self = this

        this.ractive = new Ractive({

            target: "#app",

            template: template,

            data: self.database

        }); 

		this.ractive.on( 'activate', function ( context, number ) {

			var elems = document.getElementsByClassName("headshot");

			for (var i = 0; i < elems.length; i++) {

				elems[i].classList.remove("pulse");

			}

			context.node.classList.add("pulse");

			context.node.style.borderColor = self.database.primary

			self.database.active = true

			self.database.vox.forEach((item) => item.active = false)

			self.database.vox[+number].active = true

			self.database.panel = self.database.vox[+number]

			self.ractive.set(self.database)

		});

		document.getElementsByClassName("headshot")[0].classList.add("pulse");

		document.getElementsByClassName("headshot")[0].style.borderColor = self.database.primary

	}  

}

