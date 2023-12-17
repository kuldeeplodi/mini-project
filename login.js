const container = document.querySelector(".container");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLogo = document.querySelector(".btnlogo");
const iconClose = document.querySelector(".iconclose");
registerLink.addEventListener("click", () => {
  container.classList.add("active");
});
loginLink.addEventListener("click", () => {
  container.classList.remove("active");
});
// btnLogo.addEventListener('click',()=>{
//     container.classList.add('active-popup');
// });
// iconClose.addEventListener("click", () => {
//   container.classList.remove("active-popup");
// });
