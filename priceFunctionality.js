let priceOnListingPage;

function priceHideAndShow(){
    if(null != document.getElementById("tdo_8") ){

    priceOnListingPage = document.getElementById("tdo_8").textContent;
    document.getElementById("tdo_8").textContent = "Uzspied šeit, lai redzētu cenu.";
    document.getElementById("tdo_8").style.opacity = "100";

    document.getElementById("tdo_8").addEventListener("click", function(){
      console.log(priceOnListingPage);
      document.getElementById("tdo_8").style.opacity = "100";
      document.getElementById("tdo_8").textContent = priceOnListingPage;
    }); 
    }
}

function removeListingPageDetails(){

  const text = document.querySelectorAll('.amopt')
  for (const el of text) {
    el.remove();
  }

}

removeListingPageDetails();
priceHideAndShow();