var box = document.querySelector('.box')

// Lamando a los datos por ajax

$.ajax('http://api.tvmaze.com/shows', {
	success: function (shows) {

		// Afectando a cada elemento
		shows.forEach(function (show){
			// removiendo el loader
			document.querySelector('#loading').style.display= "none"

			// Elementos DOM creados como template
			var div = document.createElement('div')
			var div_image = document.createElement('div')
			var div_content = document.createElement('div')

			var img = document.createElement('img')
			var h2 = document.createElement('h2')
			var p = document.createElement('p')
			var btn_action = document.createElement('input')

			// Reemplazando con los datos por elemento
			h2.innerHTML = show.name
			img.src = show.image.medium
			p.innerHTML = show.summary
			
			btn_action.type = "button"
			btn_action.value = "Like!!"
			btn_action.classList.add("btn_like")

			div.classList.add('style_box')

			div_image.classList.add('image_box')	
			div_content.classList.add('content_box')

			// Pegando los elementos en la caja de elemento
			div_image.appendChild(img)
			div_content.appendChild(h2)
			div_content.appendChild(p)
			div_content.appendChild(btn_action)	

			div.appendChild(div_image)
			div.appendChild(div_content)

			// pegando la caja de elemento
			box.appendChild(div)
		}) 

		LecturaBTN()
	}
})


// Evento Like en cada boton 

function LecturaBTN () {
	var btn_like = document.querySelectorAll('.btn_like')

	for (var i = btn_like.length - 1; i >= 0; i--) {
		var el = btn_like[i]
		
		el.addEventListener('click', function () {
			console.log("Me Gusta! :D")
		})
	}
}
