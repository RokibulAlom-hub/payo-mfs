// step of this jsfile
/****
 * 1. set buttuon with eventlistener
 * 2.collect the data or value from input field
 * 3. to check the phone number and pin
 * 4.to go home page
 */

// step 1
document.getElementById('btn-click').addEventListener('click',function(event){
    event.preventDefault();
    //step one done

    // step two
    const collectnumber = document.getElementById('number-input').value;
    const collectpin = document.getElementById('pin-input').value;
    // step two done

    // step three
    if(collectnumber === '01' && collectpin === '1234'){
        window.location.href ='/homepage.html';
    }
    else(alert('number or pin is wrong'));
    
})