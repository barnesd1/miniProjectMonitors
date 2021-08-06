function showAll() {
	fetch('http://localhost:9002/monitor/findAll').then(function(response) {
	  return response.json();
	}).then(function(data) {
	  document.getElementById('result').value = data.data;
	}).catch(function() {
	  document.getElementById('result').value ='No data found';
	});

}