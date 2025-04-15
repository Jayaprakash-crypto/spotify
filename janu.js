
function validate() {
    if(document.myForm.name.value =="" ){
    alert("Enter a name");
    document.myForm.name.focus();
    return false;
    }