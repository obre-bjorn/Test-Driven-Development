function capitalize (word){

    if(typeof word === 'number'){
        return null
    }
    let wordArr = word.split("")
    wordArr[0] =  wordArr[0].toUpperCase()
    word = wordArr.join("")
    return word
}




export default capitalize;