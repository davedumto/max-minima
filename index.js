function findMinMax() {
    var input = document.getElementById("numbers").value;
    var numbers = input.split(" ").map(function(num) {
      return parseFloat(num.trim());
    });
    
    var resultElement = document.getElementById("result");
    
    if (numbers.some(isNaN)) {
      resultElement.innerText = "Please enter valid numbers.";
      return;
    }
    
    var analysisResult = analyzeNumbers(numbers);
    
    var output = {
      minima: analysisResult.minima,
      maxima: analysisResult.maxima
    };
    
    resultElement.innerText = JSON.stringify(output, null, 2);
  }
  
  function analyzeNumbers(numbers) {
    var minima = numbers[0];
    var maxima = numbers[0];
    
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] < minima) {
        minima = numbers[i];
      }
      
      if (numbers[i] > maxima) {
        maxima = numbers[i];
      }
    }
    
    return {
      minima: minima,
      maxima: maxima
    };
  }