AFRAME.registerComponent('play-on-click', {
    init: function () {
        this.el.addEventListener('click', () => {
            const start = document.querySelector('#start');
            const startText = document.querySelector('#startText');
            start.setAttribute('visible', 'false');
            startText.setAttribute('visible', 'false');
            var context = new AudioContext();
            context.resume().then(() => {
                console.log('playing')
                const sun1 = document.querySelector('#sunSound1');
                const sun2 = document.querySelector('#sunSound2');
                const sun3 = document.querySelector('#sunSound3');
                const merc = document.querySelector('#mercSound');
                const venus = document.querySelector('#venusSound');
                const earth = document.querySelector('#earthSound');
                const earth2 = document.querySelector('#earthSound2');
                const earth3 = document.querySelector('#earthSound3');
                const earth4 = document.querySelector('#earthSound4');
                const mars = document.querySelector('#marsSound');
                const mars2 = document.querySelector('#marsSound2');
                const jupiter = document.querySelector('#jupiterSound');
                const saturn = document.querySelector('#saturnSound');
                const saturn2 = document.querySelector('#saturnSound2');
                const uranus = document.querySelector('#uranusSound');
                const neptune = document.querySelector('#neptuneSound');
                sun1.components.sound.playSound();
                sun2.components.sound.playSound();
                sun3.components.sound.playSound();
                merc.components.sound.playSound();
                venus.components.sound.playSound();
                earth.components.sound.playSound();
                earth2.components.sound.playSound();
                earth3.components.sound.playSound();
                earth4.components.sound.playSound();
                mars.components.sound.playSound();
                mars2.components.sound.playSound();
                jupiter.components.sound.playSound();
                saturn.components.sound.playSound();
                saturn2.components.sound.playSound();
                uranus.components.sound.playSound();
                neptune.components.sound.playSound();
            })
        })
    }
});