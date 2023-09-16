const container = document.querySelector(".container");


container.addEventListener("", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  const deltaX = event.deltaX;

  var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0

  
  container.scrollBy({
    left: deltaX,
    top: delta,
    behavior: "smooth",
  });
});
