document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("calligraphy-canvas");
  const ctx = canvas.getContext("2d");
  const textInput = document.getElementById("text-input");
  const buttons = document.querySelectorAll("button");

  let currentFont = "AMS Afrin";

  const resizeCanvas = () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    drawText();
  };

  const drawText = () => {
    const text = textInput.value || "ગુજરાતી અક્ષર કળા";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#333";
    ctx.font = `60px '${currentFont}'`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const style = btn.dataset.style;
      if (style === "ams-afrin") currentFont = "AMS Afrin";
      if (style === "ams-aakash") currentFont = "AMS Aakash";
      if (style === "ams-aakul") currentFont = "AMS Aakul";
      if (style === "ams-aaditya") currentFont = "AMS Aaditya";
      drawText();
    });
  });

  textInput.addEventListener("input", drawText);
  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
});
