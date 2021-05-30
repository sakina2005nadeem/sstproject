    // LOADER
    
   var myVar;
   function myFunction() {
      myVar = setTimeout(showPage, 3000);
   }
    
   function showPage() {
      document.getElementById("load").style.display = "none";
      document.getElementById("mainBod").style.display = "block";
   } 
  
    // SIDENAV 
	function openNav(){
		document.getElementById("sidenav").style.width="50%";
	}
	function closeNav () {
		document.getElementById("sidenav").style.width="0";
	}
	

	// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//for the 2nd image
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

