(function(){
  "user strict";
  var SomeText = function(text){
    this.text = text;
  };

  SomeText.prototype.capify = function(str){
    var firstLetter = str.charAt(0);
    var remainder = str.substr(1);
    return [firstLetter.toUpperCase(), remainder].join('');
  };

  SomeText.prototype.capifyWords = function(){
    var result = [];
    var textArray = this.text.split(' ');
    for (var counter = 0; counter < textArray.length; counter++){
      result.push(this.capify(textArray[counter]));
    }
    return result.join(' ');
  };

  document.getElementById('main_button').addEventListener('click', function(e){
    var something = prompt('Give me a string to capitalize');
    var newText = new SomeText(something);
    alert(newText.capifyWords());
  })
}());