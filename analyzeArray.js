function analyzeArray(array){

    let result = {}

    let sum = array.reduce((prev,currNum)=>{
       return prev+ currNum
    },0)
    
    result.length = array.length
    result.average = sum/array.length
    result.min = Math.min(...array)

    result.max = Math.max(...array)


  return result
}



export default analyzeArray