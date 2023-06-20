
async function Fetch(city) {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b68d33871ed2952a289bcf9f9a40cd9a&units=metric`;
try {
	const response = await fetch(url);

	const result = await response.json();
     temp.innerHTML = result.main.temp
	 feels_like.innerHTML = result.main.feels_like
	 temp_min.innerHTML = result.main.temp_min
	 temp_max.innerHTML = result.main.temp_max
	 speed.innerHTML = result.wind.speed
	 country.innerHTML = result.sys.country
	  document.querySelector('#name').innerHTML=result.name
	  
	 
	 
	console.log(result);
} catch (error) {
	console.error(error);
}
}
const input=document.querySelector('.myinput');
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
	Fetch(input.value);
})
