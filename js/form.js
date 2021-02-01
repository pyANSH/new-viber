let price = document.getElementById("price");
function setPrice() {
  id1 = document.getElementById("select");
  if (id1.value == "1") {
    price.value = "Price per KM";
  } else if (id1.value == "2") {
    price.value = "222";
  } else if (id1.value == "3") { 
      price.value = "238";
  }
}
