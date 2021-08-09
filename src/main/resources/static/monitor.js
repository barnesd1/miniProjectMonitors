const tableTop = `<div class="monitor">
				<table style="width:80%">
			    <tr>
				<th>ID</th>
				<th>Monitor Name</th>
				<th>Price</th>
				<tr>`;
const tableBottom = `</table>
				</div>`;
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
	showAllUrl('http://localhost:9002/monitor/findByName/' + monitorName);
}	
