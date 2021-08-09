//Return all monitors from the api
function showAll() {
	fetch('http://localhost:9002/monitor/findAll').then(response => {
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
		document.querySelector('#list').insertAdjacentHTML('afterbegin', html);
	}).catch(error => {
		console.log(error);
	});
}

//----------------------------------------------
//find monitor by name
findMonitor()