const fadeMessages = () => {
    document.querySelectorAll(`.toaster-container > div:nth-child(1) > div > div`)
        .forEach((node) => node.style.backgroundColor = 'rgba(21, 25, 36, .3)')
}

export default fadeMessages