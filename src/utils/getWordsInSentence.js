const getWordsInSentence = (text) => {
    return text.trim().split(/\s+/).length;
}

export default getWordsInSentence