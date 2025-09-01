let mobile_btn  = document.getElementById("mobile_btn");

let mobile_navi = document.getElementById("mobile_navi");

mobile_btn.addEventListener("click",function(){

    mobile_navi.style.display = "block";

});

let mobile_navi_img = document.getElementById("mobile_navi_img");

mobile_navi_img.addEventListener("click",function(){

    mobile_navi.style.display = "none";

});

 

// HTML

// ​

// <li class="d_li_f" id="mobile_btn">


//     <div class="head_thing" id="mobile_navi">
//   <li class="x_icon" id="mobile_navi_img"></li>