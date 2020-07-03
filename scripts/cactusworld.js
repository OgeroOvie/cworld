function fnCalculateTotalPrice(){
    var fTotal = parseFloat(0.00);
    var oTBody = document.getElementById("tbCart"); //.children[1];
    if(oTBody.rows.length > 0){
        for(iRow = 0; iRow < oTBody.rows.length; ++iRow){
            var oRow = oTBody.rows[iRow];
            if(oRow.cells[4] !== undefined){
                fTotal += parseFloat(oRow.children[4].children[0].value);
            }
        }
        document.getElementById("txtTotal").value = parseFloat(fTotal).toFixed(2);
    }else{
        document.getElementById("txtTotal").value = 0.00;
    }

}

function fnRemove() {
    try {
        var oSource = event.srcElement;
        var oRow = oSource.parentElement.parentElement;
        document.getElementById("tblCart").children[1].removeChild(oRow);
        fnCalculateTotalPrice();
    }catch(ex){
        alert(ex.message);
    }
}

function fnUpdateNet() {
    try {
        var oQuantity = event.srcElement;
        var oTBody = document.getElementById("tblCart").children[1];
        var oPrice = oTBody.children[oQuantity.parentElement.parentElement.sectionRowIndex].children[2].children[0];
        var oPriceNet = oTBody.children[oQuantity.parentElement.parentElement.sectionRowIndex].children[4].children[0];

        oPriceNet.value = parseFloat(oQuantity.value * oPrice.value).toFixed(2);
        fnCalculateTotalPrice();
    }catch(ex){
        alert(ex.message);
    }
}