
 // =====================
 // FECHA DE ACCESO ❤️
 // =====================

const unlockBtn = document.getElementById("unlockBtn");
const dateInput = document.getElementById("dateInput");
const lockScreen = document.getElementById("lockScreen");
const errorMessage = document.getElementById("errorMessage");

unlockBtn.addEventListener("click", () => {

    if (dateInput.value === "2026-02-02") {

        lockScreen.style.opacity = "0";

        setTimeout(() => {
            lockScreen.style.display = "none";
        }, 500);

    } else {

        errorMessage.innerHTML =
            "Esa no es nuestra fecha especial ❤️";

    }

});


// =====================
// MUSICA ❤️
// =====================

// Primera canción
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

// Segunda canción
const music2 = document.getElementById("music2");
const playBtn2 = document.getElementById("playBtn2");

// Tercera canción
const music3 = document.getElementById("music3");
const playBtn3 = document.getElementById("playBtn3");

// Botón de emergencia
const emergencyBtn = document.getElementById("emergencyBtn");
const emergencyAudio = document.getElementById("emergencyAudio");

// Estados de reproducción
let playing = false;
let playing2 = false;
let playing3 = false;


// =====================
// DETENER OTROS AUDIOS
// =====================

function detenerTodos(audioActual) {

    [music, music2, music3, emergencyAudio].forEach(audio => {

        if (audio && audio !== audioActual) {

            audio.pause();
            audio.currentTime = 0;

        }

    });

}


// =====================
// REINICIAR ESTADOS
// =====================

function reiniciarEstados(excepto = null) {

    if (excepto !== music) {
        playing = false;
        playBtn.innerHTML = "▶ Reproducir canción";
    }

    if (excepto !== music2) {
        playing2 = false;
        playBtn2.innerHTML = "▶ Reproducir otra canción";
    }

    if (excepto !== music3) {
        playing3 = false;
        playBtn3.innerHTML = "▶ Reproducir canción";
    }

}


// =====================
// PRIMERA CANCIÓN ❤️
// =====================

playBtn.addEventListener("click", () => {

    if (!playing) {

        detenerTodos(music);
        reiniciarEstados(music);

        music.play()
            .then(() => {

                playing = true;
                playBtn.innerHTML = "⏸ Pausar canción";

            })
            .catch(error => {

                console.error("No se pudo reproducir la primera canción:", error);

            });

    } else {

        music.pause();
        music.currentTime = 0;

        playing = false;
        playBtn.innerHTML = "▶ Reproducir canción";

    }

});


// Cuando termina la primera canción
music.addEventListener("ended", () => {

    playing = false;
    playBtn.innerHTML = "▶ Reproducir canción";

});


// =====================
// SEGUNDA CANCIÓN ❤️
// =====================

playBtn2.addEventListener("click", () => {

    if (!playing2) {

        detenerTodos(music2);
        reiniciarEstados(music2);

        music2.play()
            .then(() => {

                playing2 = true;
                playBtn2.innerHTML = "⏸ Pausar canción";

            })
            .catch(error => {

                console.error("No se pudo reproducir la segunda canción:", error);

            });

    } else {

        music2.pause();
        music2.currentTime = 0;

        playing2 = false;
        playBtn2.innerHTML = "▶ Reproducir otra canción";

    }

});


// Cuando termina la segunda canción
music2.addEventListener("ended", () => {

    playing2 = false;
    playBtn2.innerHTML = "▶ Reproducir otra canción";

});


// =====================
// TERCERA CANCIÓN ❤️
// =====================

playBtn3.addEventListener("click", () => {

    if (!playing3) {

        detenerTodos(music3);
        reiniciarEstados(music3);

        music3.play()
            .then(() => {

                playing3 = true;
                playBtn3.innerHTML = "⏸ Pausar canción";

            })
            .catch(error => {

                console.error("No se pudo reproducir la tercera canción:", error);

            });

    } else {

        music3.pause();
        music3.currentTime = 0;

        playing3 = false;
        playBtn3.innerHTML = "▶ Reproducir canción";

    }

});


// Cuando termina la tercera canción
music3.addEventListener("ended", () => {

    playing3 = false;
    playBtn3.innerHTML = "▶ Reproducir canción";

});


// =====================
// BOTÓN DE EMERGENCIA ❤️
// =====================

emergencyBtn.addEventListener("click", () => {

    detenerTodos(emergencyAudio);
    reiniciarEstados();

    emergencyAudio.play()
        .then(() => {

            emergencyBtn.innerHTML = "❤️ Escuchando mensaje";

        })
        .catch(error => {

            console.error("No se pudo reproducir el audio de emergencia:", error);

        });

});


// Cuando termina el audio de emergencia
emergencyAudio.addEventListener("ended", () => {

    emergencyBtn.innerHTML = "🥺 Necesito un abrazo ❤️";

});


// =====================
// CORAZONES FLOTANDO ❤️
// =====================

function crearCorazon() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.bottom = "-30px";
    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 25 + 20 + "px";

    heart.style.opacity =
        Math.random() * 0.5 + 0.5;

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10000";

    heart.style.animation =
        "subir 10s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(crearCorazon, 600);


// =====================
// ANIMACIÓN DE CORAZONES ❤️
// =====================

const style = document.createElement("style");

style.innerHTML = `

@keyframes subir {

    from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    to {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);
