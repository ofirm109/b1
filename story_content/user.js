window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var myParam = location.search.split('p=')[1];
var myParam1 =decodeURIComponent(myParam);

var myParam2 = myParam1.split('|')[0];
var myParam3 = myParam1.split('|')[1];

var player = GetPlayer();

player.SetVar("p1",myParam2);  

player.SetVar("p2",myParam3);  

}

window.Script2 = function()
{
  var myParam = location.search.split('p=')[1];
var myParam1 =decodeURIComponent(myParam);

var myParam2 = myParam1.split('|')[0];
var myParam3 = myParam1.split('|')[1];

var player = GetPlayer();

player.SetVar("p1",myParam2);  

player.SetVar("p2",myParam3);  

}

window.Script3 = function()
{
  if( window.cssPatchWebObject !== "done") {

  style = document.createElement('style');

  style.textContent = `

    .webobject {

      width:  100% !important;

      height: 100% !important;

      transform: none !important;

     };`

 

  document.body.appendChild(style);

  window.cssPatchWebObject = "done";

}
}

};
