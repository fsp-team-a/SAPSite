function MarkThisPatent(element){
	let realParentDiv = element.parentElement.parentElement
	if (element.checked){
		realParentDiv.classList.add('marked')
		realParentDiv.querySelector('.PointImg').style.filter='brightness(0.8)';
	} else {
		realParentDiv.classList.remove('marked')
		realParentDiv.querySelector('.PointImg').style.filter='brightness(1)';
	}
}

function CreatePatentElement(time){
	if (time > 0){
		let inner = `
					<div class="LeftOptions">
						<input class="CheckPat" type="checkbox" onclick="MarkThisPatent(this)">
						<img class="GoDown" src="img/go_down.png">
					</div>
					<div class="RightOptions">
						<span id="Title"> Название патента </span>
						<div class="ContentLine">
							<img class="PointImg" src="img/rectangle-39-2.svg" style="filter: brightness(1);">
							<span id="CountryIndex"> Это индекс </span>
							<span id="Grant"> Грант / Не грант </span>
							<span id="Fam"> Семейство </span>
							<span id="juris"> Семейные юрисдикции </span>
						</div>
						<span id="LegalStatus">Легальный статус: (статус)</span>
						<div class="ContentLine">
							<span id="NumberOfInlucded"> № приложения: (номер) </span>
							<span id="InArchive"> В архиве: (дата) </span>
							<span id="Fam"> Семейство </span>
							<span id="juris"> Семейные юрисдикции </span>
						</div>
						<span id="Owners">Владельцы: (компания)</span><br><br>
						<span id="Applicants">Заявители: (компания)</span><br><br>
						<span id="Creators">Изобретатели: (имя)</span>
					</div>
				
		`
		let boxDiv = document.createElement('div')
		boxDiv.className='box';
		boxDiv.innerHTML=inner
		
		document.getElementById('SearchResults').appendChild(boxDiv)
		CreatePatentElement(time-1)
	}
	
}




window.onload = function(){
		let MainDiv = document.querySelector('#SearchResults')
		MainDiv.onscroll = function(){
			let Divs = document.querySelectorAll('.box')
			let screenHeight = window.innerHeight;
			var scrollPosition = MainDiv.scrollY || MainDiv.scrollTop;
				
				let heights = Array(Divs.length).fill(0)
				for (let i = 0; i < Divs.length; i++){
					heights[i] = Divs[i].offsetHeight + Divs[i].offsetTop
				}
				for (let i = 0; i < heights.length; i++){
					if (heights[i] < scrollPosition || (heights[i]-Divs[i].offsetHeight) > screenHeight+scrollPosition){
						Divs[i].style.opacity = "0.65"
						Divs[i].style.scale = "0.955"
						Divs[i].style.filter = "blur(1px)"
					} else {
						Divs[i].style.filter = "blur(0px)"
						Divs[i].style.opacity = "1"
						Divs[i].style.scale = "1"
					}
				}
		}
}