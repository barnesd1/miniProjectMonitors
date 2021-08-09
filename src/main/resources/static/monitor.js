const tableTop = `<div class="monitor">
				<table style="width:80%">
			    <tr>
				<th>ID</th>
				<th>Monitor Name</th>
				<th>Price</th>
				<tr>`;
const tableBottom = `</table>
				</div>`;
// const baseUrl = 'https://SpecialistComputerMonitors.com';'      //if application was live ;)
const baseUrl = 'http://localhost:9002';
//Return all monitors from the api
function showAll() {
	showAllUrl(baseUrl + '/monitor/findAll');
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
			<tr>
				<td>${monitor.id}</td>
				<td>${monitor.name}</td>
				<td>£${monitor.price}</td>
			</tr>
			`;
		})
		.join("");
		document.querySelector('#list').innerHTML = '';
		document.querySelector('#list').insertAdjacentHTML('afterbegin', tableTop + html + tableBottom);
	}).catch(error => {
		console.log(error);
	});
}

//----------------------------------------------
//find monitor by name
function findMonitor(monitorName) {
	showAllUrl(baseUrl + '/monitor/findByName/' + monitorName);
}	

//----------------------------------------------
//add a new monitor then display it
function addMonitor(monitorName, monitorPrice) {
	fetch(baseUrl + '/monitor/create', {
		method: "POST",
		headers: { "Content-Type": "application/json"},
		body: JSON.stringify({
			name: monitorName,
			price: monitorPrice
		})
	}).then(response => {
		if(!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	}).then(newMonitor => {
		console.log(newMonitor);
		const html = 
			 `
			<tr>
				<td>${newMonitor.id}</td>
				<td>${newMonitor.name}</td>
				<td>£${newMonitor.price}</td>
			</tr>
			`;
		document.querySelector('#list').innerHTML = '';
		document.querySelector('#list').insertAdjacentHTML('afterbegin', tableTop + html + tableBottom);
	}).catch(error => {
		console.log(error);
	});	
}