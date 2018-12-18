
const openNavBar = () =>{
    $('#mySidenav').css("width","250px");
}

const closeNavBar = () =>{
    $('#mySidenav').css("width","0px");
}

$("#openNav").on("click",openNavBar);
$(".closebtn").on("click",closeNavBar);

