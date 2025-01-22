document.addEventListener("DOMContentLoaded", () => {
  // Gomb és rétegek referenciáinak megszerzése
  const resizeOriginalButton = document.getElementById("resize_original");
  const resizefullscreenButton = document.getElementById("resize_full");

  const layer2 = document.getElementById("layer_2");
  const layer3 = document.getElementById("layer_3");

  // Gomb eseménykezelő
  resizeOriginalButton.addEventListener("click", () => {
    layer3.style.display = "none";
    layer2.style.display = "block";
  });

  resizefullscreenButton.addEventListener("click", () => {
    layer2.style.display = "none";
    layer3.style.display = "block";
  });

  /*ShowListButton -> ScriptLogic.js*/
});
