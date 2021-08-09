//Return all monitors from the api
function showAll() {
	showAllUrl('http://localhost:9002/monitor/findAll');
}

// works for all and search by passing api url
function showAllUrl(url) {
	fetch(url).then(response => {
		if(!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	}).then(data => {
		console.log(data);
		const html = data.map(monitor => {
			return `
			<div class="monitor">
			<p>ID: ${monitor.id} Monitor Name: ${monitor.name} Price: £${monitor.price}</p>
			</div>
			`;
		})
		.join("");
		document.querySelector('#list').innerHTML = '';
		document.querySelector('#list').insertAdjacentHTML('afterbegin', html);
	}).catch(error => {
		console.log(error);
	});
}

//----------------------------------------------
//find monitor by name
function findMonitor(monitorName) {
	showAllUrl('http://localhost:9002/monitor/findByName/' + monitorName);
}	
