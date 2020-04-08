function CovidStatus() {

	$.ajax({
		type: "GET",
		url: "https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true",
		dataType: "text",
		crossOrigin: true,
		success: function (data) {
			var json = JSON.parse(data);
			var div = document.getElementById("covid");
			var infect = json.infected;
			var dead = json.deceased;

			div.innerHTML = "COVID-19 W POLSCE - Zarażonych: <span style='color:red;'>"+infect+"</span> Śmierci: <span style='color:red;'>"+dead+"</span>";
      	}
  });
}; 
    
$(document).ready(function(){
  setTimeout(function(){CovidStatus();}, 2000);
  setInterval(function(){CovidStatus();}, 15000);
});
