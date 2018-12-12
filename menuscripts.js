function hidePreviousLists(){ //Goes through each div in 'menu-item-lists' and sets their display to none. By doing this when a menu item is displayed, only that menu item is shown.
  var nodes = document.getElementById('menu-item-lists').getElementsByTagName("div");
for(var i=0; i<nodes.length; i++) {
    nodes[i].style.display = 'none';
}
}

function showMenuItems(category){  
       document.getElementById(category).style.display = "block";
}
var x = window.matchMedia("(max-width: 768px)")
function showMobileNavbar() {
  if (x.matches){
    document.getElementById('nav-list').getElementsByTagName('li').style.display = 'block';
  }
}
