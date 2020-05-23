const searchContainer =  document.querySelector('#searchField');
const photos = document.querySelectorAll('a');

searchContainer.addEventListener('keyup', (event) => {
	for(let i = 0; i < photos.length; i++ ) {
		if(searchContainer.value == '') {
			photos[i].style.display = 'inline';
		} else if(photos[i].dataset.title.includes(searchContainer.value.toLowerCase() )) {
			photos[i].style.display = "inline";		
		} else {
			photos[i].style.display = 'none';
		}
	}	
});



