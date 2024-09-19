/**cashout money settings */
document.getElementById('cashout-form-btn').addEventListener('click',function(event){
        event.preventDefault();
        // has to collect data from input fieled
        const cashoutMoney = document.getElementById('cashout-money').value;
        // this is converting string to number
        const cashoutNum = parseFloat(cashoutMoney);

        const cashoutPin  = document.getElementById('cashoutpin').value;
        // now set the pin and amount 
        if(cashoutPin === "1234"){
                const currentblance = document.getElementById('currentblance').innerText;
                // this is converting string to number
                const newcurentbalance = parseFloat(currentblance);

                const newBalance = newcurentbalance - cashoutNum;

                document.getElementById('currentblance').innerText = newBalance;
        }
        else(alert('incorrect pin'));
})      