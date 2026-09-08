/* marquee.js — comportamiento de la landing:
   1) Carruseles ".marquee": duplica las tarjetas para un bucle continuo.
   2) Vídeo ".video[data-yt]": miniatura + botón que carga el reproductor de YouTube al pulsar.

   No hay que tocar este archivo al añadir imágenes: basta con poner los
   <figure><img></figure> dentro de <div class="marquee-track"> una sola vez. */
(function () {
  "use strict";

  /* ---------- 1. carruseles con desplazamiento infinito ---------- */
  function activarMarquee(marquee) {
    var track = marquee.querySelector(".marquee-track");
    if (!track) return;

    var originales = track.querySelectorAll(":scope > figure");
    if (originales.length === 0) return; // carrusel todavía sin imágenes

    originales.forEach(function (fig) {
      var copia = fig.cloneNode(true);
      copia.setAttribute("data-clone", "");
      copia.setAttribute("aria-hidden", "true");
      copia.querySelectorAll("img").forEach(function (img) {
        img.setAttribute("alt", "");
      });
      track.appendChild(copia);
    });

    marquee.setAttribute("data-ready", ""); // dispara la animación (ver CSS)
  }

  /* ---------- 2. vídeo de YouTube (carga al pulsar) ---------- */
  function activarVideo(box) {
    var id = box.getAttribute("data-yt");
    if (!id) return;

    // miniatura de fondo
    box.style.backgroundImage =
      "url('https://i.ytimg.com/vi/" + id + "/hqdefault.jpg')";

    var boton = box.querySelector(".video-play");
    if (!boton) return;

    boton.addEventListener("click", function (e) {
      e.preventDefault();
      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        id +
        "?autoplay=1&playsinline=1&rel=0&modestbranding=1";
      iframe.title = "Vídeo — Toppers personalizados";
      iframe.setAttribute("allow",
        "autoplay; encrypted-media; picture-in-picture; fullscreen");
      iframe.setAttribute("allowfullscreen", "");
      box.innerHTML = "";
      box.style.backgroundImage = "none";
      box.appendChild(iframe);
    });
  }

  document.querySelectorAll(".marquee").forEach(activarMarquee);
  document.querySelectorAll(".video[data-yt]").forEach(activarVideo);
})();
