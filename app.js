console.log("Me piace parlare italiano")


const followMouse = document.getElementsByClassName("followMouse");

document.onmousemove = () =>{
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";

  for(let i=0;i<2;i++){
    followMouse[i].style.left = x;
    followMouse[i].style.top = y;
    followMouse[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}