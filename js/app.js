const days = document.querySelectorAll('.days h1');
const hours = document.querySelectorAll('.hours h1');
const minutes = document.querySelectorAll('.minutes h1');
const seconds = document.querySelectorAll('.seconds h1');

const tick =()=>{
	const now = new Date();
	days.forEach(day=> {
		// statements
		day.textContent = now.getDay();
	});
	hours.forEach(hour=>{
		hour.textContent = now.getHours();
	});
	minutes.forEach(minute=>{
		minute.textContent = now.getMinutes();
	});
	seconds.forEach(second=>{
		second.textContent = now.getSeconds();
	});
	
    
}
setInterval(tick,1000);