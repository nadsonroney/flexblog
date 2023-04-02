function outsideClick() {
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);
  function handleOutsideClick(event) {
    console.log(event);
  }
}

outsideClick();

/* Eu iniciei a parte do menu mobile, fiz uma parte do css já, e comecei a fazer um pouco do javascript*/
