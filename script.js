let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
//---------------------Reading and setting paragraph text---------------------//
function expandMe(){
   var  expandedParagraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloremque quaerat provident quibusdam odit eius a ipsum autem totam fuga.Dolorum voluptatem ducimus corrupti magnam itaque perspiciatis omnis possimus voluptatibus.<a href="javascript:void(0);" onclick="reduceMe()"><em>Click for less</em></a>'
   document.getElementById('paragraph').innerHTML = expandedParagraph;
}  
 function reduceMe(){
   var  Paragraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloremque quaerat provident quibusdam odit eius a ipsum autem totam fuga.<br><a href="javascript:void(0);" onclick="expandMe()"><em>Click for more</em></a>'
   document.getElementById('paragraph').innerHTML = Paragraph;
 }
//  function showInConsole(){
//    var  Paragraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloremque quaerat provident quibusdam odit eius a ipsum autem totam fuga.'
//    var whatsThere = document.getElementById('paragraph').innerHTML = Paragraph;
//    console.log(whatsThere)
//  }

//show output
function result(name){
   return document.getElementById('output').innerHTML += name + "<br>"
}
//Clear output
function clearOutputButton(){
   document.getElementById('output').innerHTML = ""
}