const card = document.querySelector('.tarot');

const tilt = () => {
     VanillaTilt.init(card, {
		max: 12,
		speed: 400,
        reverse: true,
        "mouse-event-element":  ".tarot-wrapper"
	});
}

const initTilt = () => {
    let tiltCheck =  document.querySelector("#movable");

    if (tiltCheck.checked) {
        tilt();
    }

    tiltCheck.addEventListener('change', function(e) {
        if (this.checked) {
            tilt();
        } else {
            card.vanillaTilt.destroy();
        }
    }); 
}

const init = () => {
    let selectedLi = document.querySelectorAll('.presentation li');

    selectedLi.forEach(el => {
        let selectedCheck =  el.querySelector("input[type=checkbox]"); 

        selectedCheck.addEventListener('change', function(e) {
            let valueId = this.getAttribute('id');

            if (this.checked) {
                card.classList.add(valueId);
            } else {
                card.classList.remove(valueId);
            }
        }); 
    });
}

// Init
window.addEventListener('DOMContentLoaded', (event) => {
    init();
    initTilt();
});