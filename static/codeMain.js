function CheckAll(){
	document.querySelectorAll('input[type="checkbox"]').forEach(item => {
		if (!item.checked){
			item.click()
		}
	})
}


function UnCheckAll(){
	document.querySelectorAll('input[type="checkbox"]').forEach(item => {
		if (item.checked){
			item.click()
		}
	})
}


function GoTo(pageName){
	let currentLocation = window.location+''
	let splitted = currentLocation.split('/')
	currentLocation = currentLocation.replace(splitted[splitted.length-1], pageName)
	window.location = currentLocation
}


function ScrollToTop(){
	window.scrollTo({top: 0, behavior: 'smooth'});
}

function SearchAgain(){
	document.getElementById('SearchResults').style.display='none';
	document.getElementById('SearchBox').style.display='block';
}

function SearchIt(){
	document.getElementById('SearchResults').style.display='block';
	document.getElementById('SearchBox').style.display='none';
}


function ScrollToPos(x){
	window.scrollTo({top: x, behavior: 'smooth'});
}

function ToAcc(){
	GoTo('acc.html')
}

function GoSearch(){
	GoTo('easy_search.html')
}

function MyPatents(){
	GoTo('mypatents.html')
}

