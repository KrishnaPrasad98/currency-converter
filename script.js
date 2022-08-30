function button(){
    let left = document.getElementById('left')
    let leftvalue = left.options[left.selectedIndex].value
    
    let right = document.getElementById('right')
    let rightvalue = right.options[right.selectedIndex].value

    if(leftvalue=='dollar' && rightvalue=='rupee'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 79.54
        document.getElementById('rightinput').value = converted
    }
    else if(leftvalue=='dollar' && rightvalue=='euro'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 0.09
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='dollar' && rightvalue=='yen'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 138.47
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    
    else if(leftvalue=='rupee' && rightvalue=='dollar'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 0.013
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='rupee' && rightvalue=='euro'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 0.013
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='rupee' && rightvalue=='yen'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 1.74
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    
    else if(leftvalue=='euro' && rightvalue=='dollar'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 1
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='euro' && rightvalue=='rupee'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 79.84
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='euro' && rightvalue=='yen'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 138.79
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    
    else if(leftvalue=='yen' && rightvalue=='dollar'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 0.0072
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='yen' && rightvalue=='rupee'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 0.58
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    else if(leftvalue=='yen' && rightvalue=='euro'){
        let leftinput = document.getElementById('leftinput').value
        let converted = leftinput * 0.0072
        document.getElementById('rightinput').value = converted.toFixed(4)
    }
    
    else
        alert('Invalid Selection')
}

function change(){
    let leftselect = document.getElementById('left')
    let leftvalue = leftselect.options[leftselect.selectedIndex].value
    let lefttext = leftselect.options[leftselect.selectedIndex].text
    
    let rightselect = document.getElementById('right')
    let rightvalue = rightselect.options[rightselect.selectedIndex].value
    let righttext = rightselect.options[rightselect.selectedIndex].text
  


    leftselect.options[leftselect.selectedIndex].value = rightvalue
    leftselect.options[leftselect.selectedIndex].text = righttext

    rightselect.options[rightselect.selectedIndex].value = leftvalue
    rightselect.options[rightselect.selectedIndex].text = lefttext

    let leftinput =  document.getElementById('leftinput').value
    let rightinput =  document.getElementById('rightinput').value

    document.getElementById('leftinput').value = rightinput
    document.getElementById('rightinput').value = leftinput

}