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
//----------------------------------------------
//find monitor by name
function findMonitor(monitorName) {
	showAllUrl(baseUrl + '/monitor/findByName/' + monitorName);
}	

// works for showAll and search by name passing api url
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
//create a new monitor
function createMonitor(monitorName, monitorPrice) {
	changeMonitorUrl("POST", baseUrl + '/monitor/create',monitorName, monitorPrice);
}

//----------------------------------------------
//update monitor
function updateMonitor(monitorId, monitorName, monitorPrice) {
	changeMonitorUrl("PUT", baseUrl + '/monitor/update/' + monitorId,monitorName, monitorPrice);
}

//----------------------------------------------
//function does insert and update monitor operation by passing POST/PUT and url
function changeMonitorUrl(method, url, monitorName, monitorPrice) {
	fetch(url, {
		method: method,
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
//----------------------------------------------
//delete a monitor
function deleteMonitor(monitorId) {
	fetch(baseUrl + '/monitor/delete/' + monitorId, {
		method: 'DELETE'
	}).then(response => {
		if(!response.ok) {
			throw Error("ERROR");
		}
		alert(`Monitor ID: ${monitorId} was successfully deleted`);
		document.querySelector('#list').innerHTML = '';
	}).catch(error => {
		alert(`Error for Monitor ID: ${monitorId}, no delete occurred`);
	});	
}

