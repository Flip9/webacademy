import './index.scss';

function glows(rootElementsLight) {
    const rootElements = document.querySelector(rootElementsLight);
    const lamps = rootElements.querySelectorAll('.traffic-light__item');
    const globalBtn = rootElements.querySelector('.traffic-light__global-btn');

    let isEnabled = false;
    globalBtn.onclick = onOffAll;

    function onOffAll() {
        if (!isEnabled) {
            isEnabled = true;
            glowsItem(isEnabled);
            globalBtn.classList.add('on');
            return isEnabled;
        } else {
            isEnabled = false;
            glowsItem(isEnabled);
            globalBtn.classList.remove('on');
            lamps.forEach((lamp) => {
                lamp.classList.remove('glows');
            });
            return isEnabled;
        }
    }

    function glowsItem(isGlows) {
        lamps.forEach((lamp) => {
            const btnGlows = lamp.querySelector('.traffic-light__item-btn');
            btnGlows.onclick = switchElements;

            function switchElements() {
                if (isGlows) {
                    let glows = rootElements.querySelectorAll('.glows');
                    glows.forEach((lamps1) => {
                        lamps1.classList.toggle('glows');
                        console.log(lamps1);
                    });
                    lamp.classList.toggle('glows');
                }

            }
        });
    }
}

glows('.traffic-light');