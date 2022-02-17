
$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");

});

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
