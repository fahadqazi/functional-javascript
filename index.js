(function(){
  function capify(str){
    return [str.charAt(0).toUpperCase(), str.substr(1)].join('');
  };
  function processWords(fn, str){
    return str.split(' ').map(fn).join(' ');
  };
  function getValue(e){
    var something = prompt('Give me something to capitalize');
    alert(processWords(capify, something));
  };

  document.getElementById('main_button').addEventListener('click', getValue);
}());