function sumSprints(array,iterations,sumRow = []){

    let arrayLenght = array.length;

        if(arrayLenght >= iterations){

            let steps = arrayLenght - iterations + 1;

                for(let i = 0; i < steps; i++){

                        sumRow = 0

                        document.write('[ ')
                    
                    for(let j = 0; j < iterations; j++){
                        
                        sumRow = sumRow + array[i+j];
                        
                        document.write(' ')
                        document.write(array[i+j]);  
                       
                    } 
                        document.write(' ]')
                        document.write(' sum: ' + sumRow);
                        document.write('<br>')
                }
        }else{
            throw "Array is low than 3 numbers"; 
        }
}

let arr = [2,76,34,20,30,60,5];
sumSprints(arr,3);