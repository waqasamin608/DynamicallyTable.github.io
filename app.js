var list = document.getElementById("list");




function AddRows(){
  


    // Li Tag Created 

    var li = document.createElement("li");
   list.appendChild(li)
   li.setAttribute("class","ForFlex")

//    Two input Tag Create into Li tag 

   var input1 = document.createElement("input")
   input1.placeholder = "First Name"
   li.appendChild(input1)

   var input2 = document.createElement("input");
   li.appendChild(input2)
   input2.placeholder = "Second Name"
//    Create a Remove Button 

   var removeBtn = document.createElement("button")
   var removeTxt = document.createTextNode("Remove")
   removeBtn.appendChild(removeTxt)
   li.appendChild(removeBtn)
  removeBtn.setAttribute("class","RemoveBtn1")
   removeBtn.setAttribute("onclick","removeFullList(this)")


}
// Remove Button Function

function removeFullList(e){
    e.parentNode.remove()
    console.log();
}