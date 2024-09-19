/********
 * In this js file we have work throguh several steps
 * step 1. connect the button with eventlistener and collect the input value
 * 2. set the pin conditon correct or not
 * 3.get the current balnce and new balance into integar
 * 4.lastly sum them and update the current balance
 */

//step 1
document.getElementById('add-btn').addEventListener('click',function(event){
    event.preventDefault();
    // add money value and pin value
    const moneyvalue = document.getElementById('add-money').value;
    // convert string input to  number
    const inputbalnce = parseFloat(moneyvalue);

    const pinvalue = document.getElementById('pinadd').value;
    
    if(pinvalue === '1234'){
        //add the money
        //    convert the balance string to number
       const currentblance = document.getElementById('currentblance').innerText;
       const newcurrentbalance = parseFloat(currentblance);
    /**
     * important note that if we want to collect element data then we should use innertext method 
     * and for input field we have to use .value method
     */
        // sum  new input money with current balance
        const newbalance = newcurrentbalance + inputbalnce;
        // here we will updated the currentbalance
        document.getElementById('currentblance').innerText = newbalance;
    }
    else(alert ('incorrect pin failed to add money'))
})