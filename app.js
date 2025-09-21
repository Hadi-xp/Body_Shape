// btn selector
const btn = document.querySelector('.submit');




// calculate body shape

function bodyShapeCalculate(){
    const bust = document.querySelector('#Bust').value
    const waist = document.querySelector('#Waist').value
    const hip = document.querySelector('#Hip').value
    const highHip = document.querySelector('#Highhip').value
    // radio
    const BHR = bust / hip;       // Bust-to-Hip ratio
    const WHR = waist / hip;      // Waist-to-Hip ratio
    const WBR = waist / bust;     // Waist-to-Bust ratio
    const HHR = highHip / hip;    // HighHip-to-Hip ratio
    // Classification rules with highHip influence
    if (BHR < 0.95 && WHR < 0.8 && HHR < 0.95) {
        console.log("Pear");;
    } else if (BHR > 1.05 && HHR > 0.95) {
        console.log("Inverted Triangle");;
    } else if (WHR > 0.85 && BHR <= 1.05 && HHR >= 0.95) {
        console.log("Apple");;
    } else if(Math.abs(bust - hip) / hip <= 0.05 && WHR < 0.75) {
        console.log("Hourglass");;
    } else{
        console.log("Rectangle");
    }
}



// event
btn.addEventListener('click',bodyShapeCalculate);