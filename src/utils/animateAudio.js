const animateAudio = (duration) => {
    document.getElementById('audioAnimation1').setAttribute('dur', duration + "ms")
    document.getElementById('audioAnimation2').setAttribute('dur', duration + "ms")
    document.getElementById('audioAnimation1').beginElement()
    document.getElementById('audioAnimation2').beginElement()
}

export default animateAudio