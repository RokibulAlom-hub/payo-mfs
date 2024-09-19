/********
 * In this js file we have work throguh several steps
 * step 1. connect the button with eventlistener and collect the input value
 */

//step 1
document.getElementById('add-btn').addEventListener('click',function(event){
    event.preventDefault();
    // add money value and pin value
    const moneyvalue = document.getElementById('add-money').value;
    const pinvalue = document.getElementById('pinadd').value;
    console.log(moneyvalue,pinvalue);
})