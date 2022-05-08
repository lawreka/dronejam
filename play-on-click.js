AFRAME.registerComponent('play-on-click', {
    init: function () {
        this.el.addEventListener('click', () => {
            const start = document.querySelector('#start');
            start.setAttribute('visible', 'false');
            // var context = new AudioContext();
            // context.resume().then(() => {
            //     console.log('playing')
            //     const sun = document.querySelector('#sunSound');
            //     const merc = document.querySelector('#mercSound');
            //     sun.components.sound.playSound();
            //     merc.components.sound.playSound();
            // })
        })
    }
});