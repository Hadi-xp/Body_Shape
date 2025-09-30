// btn selector
const btn = document.querySelector('.Calculate');




// calculate body shape

function bodyShapeCalculate(e){
    e.preventDefault();
    const bust = document.querySelector('#Bust').value
    const waist = document.querySelector('#Waist').value
    const hip = document.querySelector('#Hip').value
    const highHip = document.querySelector('#HighHip').value
    const unitSelector = document.querySelector('.unitSelector').value

    // validation
    if (!bust || !waist || !hip || !highHip) {
        window.alert('Please enter all values');
        return; // stop function here
    }
    //  Negative number check
    if (bust < 0 || waist < 0 || hip < 0 || highHip < 0) {
       window.alert("inputs cannot be negative");
        return;
    }
    // radio
    //  Convert inches to cm if needed (1 inch = 2.54 cm)
    if (unitSelector === "inch") {
        bust *= 2.54;
        waist *= 2.54;
        hip *= 2.54;
        highHip *= 2.54;
    }
    const BHR = bust / hip;       // Bust-to-Hip ratio
    const WHR = waist / hip;      // Waist-to-Hip ratio
    const WBR = waist / bust;     // Waist-to-Bust ratio
    const HHR = highHip / hip;    // HighHip-to-Hip ratio
    // Classification rules with highHip influence
    if (BHR < 0.95 && WHR < 0.8 && HHR < 0.95) {
        const data = document.querySelector('.data');
        const Do = document.querySelector('.do');
        const avoid = document.querySelector('.avoid');
        const shape = document.querySelector('.shape');
        data.textContent = 'Your body shape is pear In this body shape, the hips are wider than the shoulders and chest. Most of the weight is in the lower body (hips, thighs, and bottom). The upper body looks smaller and slimmer compared to the lower body'
        Do.textContent = 'Do: Use bright colors and details on top (wide necklines, puff sleeves)'
        avoid.textContent = 'Avoid: Very tight pants or skirts that make hips look bigger'
        shape.setAttribute('src','Assest/BodyShapes/Pear.JPG')
    } else if (BHR > 1.05 && HHR > 0.95) {
        const data = document.querySelector('.data');
        const Do = document.querySelector('.do');
        const avoid = document.querySelector('.avoid');
        const shape = document.querySelector('.shape');
        data.textContent = 'Your body shape is Inverted Triangle In this body shape, the shoulders are wider than the hips, and the top part of the body looks bigger than the bottom. The bust and arms may look stronger or fuller, while the hips look narrower'
        Do.textContent = 'Do: Wear wide-leg pants, A-line skirts, and soft fabrics on the bottom'
        avoid.textContent = 'Avoid: Big shoulders, puff sleeves, or heavy tops'
        shape.setAttribute('src','Assest/BodyShapes/Inverted Triangle.JPG')
    } else if (WHR > 0.85 && BHR <= 1.05 && HHR >= 0.95) {
        const data = document.querySelector('.data');
        const Do = document.querySelector('.do');
        const avoid = document.querySelector('.avoid');
        const shape = document.querySelector('.shape');
        data.textContent = 'Your body shape is Oval ( Apple ) In this body shape, most of the weight is in the middle of the body (stomach and waist). The chest may also look fuller, while the arms and legs often look slimmer. The body looks rounder at the center'
        Do.textContent = 'Do: Choose V-necks, long tops, and clothes with vertical lines'
        avoid.textContent = 'Avoid: Thick belts or tight tops on the belly'
        shape.setAttribute('src','Assest/BodyShapes/Apple.JPG')
    } else if(Math.abs(bust - hip) / hip <= 0.05 && WHR < 0.75) {
        const data = document.querySelector('.data');
        const Do = document.querySelector('.do');
        const avoid = document.querySelector('.avoid');
        const shape = document.querySelector('.shape');
        data.textContent = 'Your body shape is Hourglass In this body shape, the shoulders and hips are almost the same size, and the waist is narrow and clearly seen. The body looks balanced and has natural curves, often called the “8 shape”'
        Do.textContent = 'Do: Wear clothes that show the waist (belts, wrap dresses, fitted tops)'
        avoid.textContent = 'Avoid: Very loose clothes that hide the waist'
        shape.setAttribute('src','Assest/BodyShapes/Hourglass.JPG')
    } else{
        const data = document.querySelector('.data');
        const Do = document.querySelector('.do');
        const avoid = document.querySelector('.avoid');
        const shape = document.querySelector('.shape');
        data.textContent = 'Your body shape is Rectangle In this body shape, the shoulders, waist, and hips are almost the same size. The waist is not very narrow, and there are fewer natural curves. The body often looks straight, flat, and athletic'
        Do.textContent = 'Do: Add shape with belts, flared skirts, and peplum tops'
        avoid.textContent = 'Avoid: Boxy clothes that make the body look flat'
        shape.setAttribute('src','Assest/BodyShapes/Rectangle.JPG')
    }
}



// event
btn.addEventListener('click',bodyShapeCalculate);