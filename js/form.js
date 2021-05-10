// let price = document.getElementById("price");
// function setPrice() {
//   id1 = document.getElementById("select");
//   if (id1.value == "1") {
//     price.value = "₹ Price per KM";
//   } else if (id1.value == "BMW 730 LD") {
//     price.value = "₹ 150 per km";
//   } else if (id1.value == "JAGUAR XJ L") {
//     price.value = "₹ 175 per km";
//   } else if (id1.value == "MERCEDES BENZ S 320") {
//     price.value = "₹ 125 per km";
//   } else if (id1.value == "BMW 520 D") {
//     price.value = "₹ 90 per km";
//   } else if (id1.value == "AUDI A4") {
//     price.value = "₹ 75 per km";
//   } else if (id1.value == "VOLVO S60") {
//     price.value = "₹ 75 per km";
//   } else if (id1.value == "JAGUAR XF") {
//     price.value = "₹ 125 per km";
//   } else if (id1.value == "AUDI A6") {
//     price.value = "₹ 90 per km";
//   } else if (id1.value == "MERCEDES BENZ E 250 / 220 CDI") {
//     price.value = "₹ 90 per km";
//   } else if (id1.value == "MERCEDES A 180") {
//     price.value = "₹ 75 per km";
//   } else if (id1.value == "TEMPO TRAVELLER DLX 12 STR NON AC") {
//     price.value = "₹ 14 per km";
//   } else if (id1.value == "TEMPO TRAVELLER DLX 12 STR A/C") {
//     price.value = "₹ 22 per km";
//   } else if (id1.value == "12 STR DLX SWARAJ MAZDA A/C") {
//     price.value = "₹ 25 per km";
//   } else if (id1.value == "18/22/24 SEATER MINI-BUS Non-AC") {
//     price.value = "₹ 18 per km";
//   } else if (id1.value == "18/22/24 SEATER MINI-BUS A/C") {
//     price.value = "₹ 30 per km";
//   } else if (id1.value == "28 SEATER MINI-BUS A/C") {
//     price.value = "₹ 35 per km";
//   } else if (id1.value == "28 SEATER MINI-BUS NON-A/C") {
//     price.value = "₹ 60 per km";
//   } else if (id1.value == "36/40 SEATER TATA / EICHER BUS NON-A/C") {
//     price.value = "₹ 37 per km";
//   } else if (id1.value == "CERITA 38 STR DX A/C") {
//     price.value = "₹ 60 per km";
//   } else if (id1.value == "ISUZU FR 1318 40 STR A/C") {
//     price.value = "₹ 60 per km";
//   } else if (id1.value == "ISUZU 40 SEATER DLX A/C") {
//     price.value = "₹ 65 per km";
//   } else if (id1.value == "ISUZU 44 SEATER DLX A/C") {
//     price.value = "₹ 75 per km";
//   } else if (id1.value == "VOLVO 41/42/45 SEATER DX A/C") {
//     price.value = "₹ 75 per km";
//   } else if (id1.value == "TOYOTA COMMUTER") {
//     price.value = "₹ 70 per km";
//   } else if (id1.value == "Mercedes Benz Viano") {
//     price.value = "₹ 70 per km";
//   } else if (id1.value == "RENAULT DUSTER") {
//     price.value = "₹ 25 per km";
//   } else if (id1.value == "NISSAN EVALIA") {
//     price.value = "₹ 22 per km";
//   } else if (id1.value == "SKODA OCTAVIA") {
//     price.value = "₹ 50 per km";
//   } else if (id1.value == "TOYOTA COROLLA ALTIS") {
//     price.value = "₹ 50 per km";
//   } else if (id1.value == "NISSAN SUNNY") {
//     price.value = "₹ 30 per km";
//   } else if (id1.value == "MARUTI SUZUKI CIAZ") {
//     price.value = "₹ 27 per km";
//   } else if (id1.value == "SKODA RAPID") {
//     price.value = "₹ 27 per km";
//   } else if (id1.value == "TOYOTA ETIOS") {
//     price.value = "₹ 27 per km";
//   } else if (id1.value == "HONDA CITY") {
//     price.value = "₹ 27 per km";
//   } else if (id1.value == "AUDI Q7") {
//     price.value = "₹ 125 per km";
//   } else if (id1.value == "MERCEDES BENZ R CLASS") {
//     price.value = "₹ 125 per km";
//   } else if (id1.value == "BMW X5") {
//     price.value = "₹ 125 per km";
//   } else if (id1.value == "VOLVO XC90") {
//     price.value = "₹ 125 per km";
//   } else if (id1.value == "VOLVO XC 60") {
//     price.value = "₹ 100 per km";
//   } else if (id1.value == "TOYOTA FORTUNER") {
//     price.value = "₹ 60 per km";
//   } else if (id1.value == "FORD ENDEAVOR") {
//     price.value = "₹ 60 per km";
//   } else if (id1.value == "ISUZU MU 7") {
//     price.value = "₹ 60 per km";
//   } else if (id1.value == "FORD ECOSPORT") {
//     price.value = "₹ 25 per km";
//   } else if (id1.value == "MAHINDRA XUV 500") {
//     price.value = "₹ 25 per km";
//   } else if (id1.value == "TOYOTA INNOVA") {
//     price.value = "₹ 22 per km";
//   } else if (id1.value == "TATA ARIA") {
//     price.value = "₹ 22 per km";
//   } else if (id1.value == "MARUTI SUZUKI ERTIGA") {
//     price.value = "₹ 20 per km";
//   } else if (id1.value == "MAHINDRA VERITO") {
//     price.value = "₹ 22 per km";
//   } else if (id1.value == "TOYOTA ETIOS LIVA") {
//     price.value = "₹ 18 per km";
//   } else if (id1.value == "FIAT PUNTO EVO") {
//     price.value = "₹ 18 per km";
//   } else if (id1.value == "FIAT PUNTO") {
//     price.value = "₹ 18 per km";
//   } 
// }

      
