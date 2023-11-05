
function isUpperCase(char){

    if(char === char.toUpperCase() ){
        return true

    }

    return false

}

function checkPunctuation(char,alphabets){
    return !alphabets.includes(char)
}


function caesarCipher(word,shift){

    let encryptedWord = ""
    let alphabets = "abcdefghijklmnopqrstuvwxyz"

    for(let i = 0; i < word.length; i++){

        let letter  = word[i]
        console.log(word[i])

        let letterIndex = alphabets.indexOf(letter)
        
        let cipherIndex = letterIndex + shift

        if(cipherIndex > 25){
            cipherIndex = cipherIndex - 25
        }

        if(checkPunctuation(letter,alphabets)){
            encryptedWord += letter
        }else{

            if(isUpperCase(letter)){
                encryptedWord += alphabets[cipherIndex].toUpperCase()
    
            }else{
                encryptedWord += alphabets[cipherIndex]
            }
        }
        
    }
    
    
    return encryptedWord


}






export default caesarCipher