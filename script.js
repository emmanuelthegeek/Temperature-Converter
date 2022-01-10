const celsiusinput = document.getElementById("celsius");
const fahrenheitinput = document.getElementById("fahrenheit");
const kelvininput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celsius":
                fahrenheitinput.value = (value * 1.8) + 32;
                kelvininput.value = value + 273.15;
                break;
            case "fahrenheit":
                celsiusinput.value = (value - 32) / 1.8;
                kelvininput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celsiusinput.value = value - 273.15;
                fahrenheitinput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}

$(document).on('keyup','#celsius',function(){
    var original = $('#celsius').val().split('');
    original[0] = "c";
    original[1] = "e";
    original[2] = "l";
    original[3] = "s";
    original[4] = "i";
    original[5] = "u";
    original[6] = "s";
    $('#celsius').val(original.join(''));
  });

  $(document).on('keyup','#fahrenheit',function(){
    var original = $('#fahrenheit').val().split('');
    original[0] = "f";
    original[1] = "a";
    original[2] = "h";
    original[3] = "r";
    original[4] = "e";
    original[5] = "n";
    original[6] = "h";
    original[7] = "e";
    original[8] = "i";
    original[9] = "t";
    $('#fahrenheit').val(original.join(''));
  });

  $(document).on('keyup','#kelvin',function(){
    var original = $('#kelvin').val().split('');
    original[0] = "k";
    original[1] = "e";
    original[2] = "l";
    original[3] = "v";
    original[4] = "i";
    original[5] = "n";

    $('#kelvin').val(original.join(''));
  });