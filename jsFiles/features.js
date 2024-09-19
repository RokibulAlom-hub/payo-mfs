// now we had to change thhe add money and cashout form
// first cashout change form
document.getElementById('cashout-button').addEventListener('click',function(){

        // show the cashout form
        document.getElementById('cashout-form').classList.remove('hidden');

        // hide the add money form
        document.getElementById('add-money-form').classList.add('hidden');
})

// second change the cashout form to add money form by clicking

document.getElementById('add-money-button').addEventListener('click',function(){
    
    // hide the cashout form
    document.getElementById('cashout-form').classList.add('hidden');
    
    // show the add money form
    document.getElementById('add-money-form').classList.remove('hidden');
})