const resetAudioAnimation = () => {
    if (document.getElementById('audioAnimation1')) {
        document.getElementById('audioAnimation1').endElement()
    }
    if (document.getElementById('audioAnimation2')) {
        document.getElementById('audioAnimation2').endElement()
    }
}

export default resetAudioAnimation