const barcodes = [];

const genBarcode = document.getElementById("btnGenerate");
const textInput = document.getElementById("barcode1");

genBarcode.addEventListener("click", generateBarcodes);


function generateBarcodes(){
  const barcodeValue = document.getElementById("barcode1").value;
  const list = document.getElementById("list");
  const listItem = document.createElement("li"); // create li element.
  
   barcodes.push(barcodeValue);
        JsBarcode("#barcode", barcodeValue);
        localStorage.setItem("barcodes", JSON.stringify(barcodes));
  
    for (i = 0; i < barcodes.length; i++) {
        listItem.innerHTML = barcodes[i].toString();
        list.appendChild(listItem);
  }
}

 textInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        generateBarcodes()
      }
    });