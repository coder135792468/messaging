var $ = function(e){
    return document.querySelector(e);
}
var clas= function(k){
    return document.getElementsByClassName(k);
}
function items(e){
var items = document.getElementsByClassName("item");    
    for(var i = 0; i<items.length; i++){      
      items[i].id = ""
    } 
    e.id = "active";            
document.getElementById("indicator").style.width = 100/items.length + "%";        
    for(var i = 0; i<items.length; i++){     
      if(items[i].id == "active"){            
document.getElementById("indicator").style.left = 100/items.length*i + "%" ;
      }
    }
          
}

function rgb(op){
   return 'rgba(' + Math.floor(Math.random() * 250) + ',' + Math.floor(Math.random() * 250) + ',' + Math.floor(Math.random() * 250) + ',' + op + ')';   
}

function chatsU(e){
clas("u-chat")[0].style.display="block";
clas("users")[0].style.display="none";
clas("g")[0].innerText="Conversation";
    items(e);
}
function peoples(e){
clas("u-chat")[0].style.display="none";
clas("users")[0].style.display="block";
clas("g")[0].innerText="People";
    items(e);
}
let name = ["Coder","Anonymous","DarkCode","BlackJack","Burey","Mitali","Supriya","Satnam","Subham","Calvin","Gordon","RK"];
let userid = ["1","11159966","6804430","197327","4103074"]
window.onload = ()=>{

  showUChat(name);

for(var i = 0;i<12;i++){
  clas("ac-u")[0].innerHTML+=`
  <div class="ac-user"><img src="https://api.sololearn.com/Uploads/Avatars/${userid[Math.floor(Math.random()*userid.length)]}.jpg"/></div> 
  `;  
};
showPeople(name)

clas("menu")[0].onclick=function(){
    show_menu()
};
clas("back-nav")[0].onclick=function(){
    hide_menu()
};      
clas("g-theme")[0].onclick=function(){
    document.documentElement.style.setProperty('--theme-color', rgb(100));
}
}
function showPeople(name , bio){
  for(var i = 0;i<10;i++){
 clas("users")[0].innerHTML += `
 <div class="msg-box" >
 <div class="msg_box_c" onclick="show_msg_info()">
<div class="user-avatar"><img src="https://api.sololearn.com/Uploads/Avatars/${userid[Math.floor(Math.random()*userid.length)]}.jpg"/></div>
<div class="user-name line">${name[Math.floor(Math.random()*name.length)] ||"Coder"}</div>   
<div class="user-bio line">${bio||"Everything is Possible"}</div>
</div>
<span class="fa fa-ellipsis-v"></span>
</div> 
        `;
    }  
}

function showUChat(name,bio){
    for(var i = 0;i<10;i++){
 clas("u-chat")[0].innerHTML += `
 
 <div class="msg-box" >
 <div class="msg_box_c" onclick="show_msg_info()">
<div class="user-avatar"><img src="https://api.sololearn.com/Uploads/Avatars/${userid[Math.floor(Math.random()*userid.length)]}.jpg"/></div>
<div class="user-name line">${name[Math.floor(Math.random()*name.length)] || "Coder"}</div>   
<div class="user-bio line">${bio||"Everything is Possible with hard work"}</div>
</div>
<span class="fa fa-ellipsis-v"></span>
</div> 
        `;      
    }
}

function show_menu(){
    clas("nav-items")[0].style.left="0%";
}
function hide_menu(){
    clas("nav-items")[0].style.left="-100%";
}


function show_msg_info(){
   clas("c-m")[0].style.left="0%";
   clas("messages-con")[0].scrollTop= clas("messages-con")[0].scrollHeight;
}

function close_msg_info(){
clas("c-m")[0].style.left="-100%";
}


function show_login_page(){
clas("page_type")[0].innerHTML ="Login"
$("#db-box").style.visibility="visible"; 
 $("#db-box").style.left="50%";
$("#db-create").style.visibility="hidden";
$("#db-login").style.visibility="visible";
}

function hide_registrlogin_page(){
  $("#db-box").style.left="-50%"; 
  $("#db-box").style.visibility="hidden";
}

function show_registr_page(){
clas("page_type")[0].innerHTML ="Register";
$("#db-box").style.visibility="visible"; 
 $("#db-box").style.left="50%";
$("#db-create").style.visibility="visible";
$("#db-login").style.visibility="hidden";
}

