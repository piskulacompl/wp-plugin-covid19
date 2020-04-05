function CovidStatus() {

	$.ajax({
		type: "GET",
		url: "https://apifier-key-value-store-prod.s3.amazonaws.com/3Po6TV7wTht4vIEid/LATEST?AWSAccessKeyId=AKIAJTQHBVH6QKNNBOIQ&Expires=1586310767&Signature=FhcS8FGF6%2BFzHgOrz3HgVDS8XXc%3D",
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
