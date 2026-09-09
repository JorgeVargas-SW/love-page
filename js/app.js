// =====================
// FECHA DE ACCESO ❤️
// =====================


const unlockBtn = document.getElementById("unlockBtn");

const dateInput = document.getElementById("dateInput");

const lockScreen = document.getElementById("lockScreen");

const errorMessage = document.getElementById("errorMessage");



unlockBtn.addEventListener("click",()=>{


    if(dateInput.value === "2026-02-02"){


        lockScreen.style.opacity="0";


        setTimeout(()=>{


            lockScreen.style.display="none";


        },500);



    }else{


        errorMessage.innerHTML=
        "Esa no es nuestra fecha especial ❤️";


    }


});











// =====================
// MUSICA ❤️
// =====================


const music=document.getElementById("music");

const playBtn=document.getElementById("playBtn");


// SEGUNDA MUSICA

const music2=document.getElementById("music2");

const playBtn2=document.getElementById("playBtn2");


const emergencyBtn=document.getElementById("emergencyBtn");

const emergencyAudio=document.getElementById("emergencyAudio");


let playing=false;

let playing2=false;








function detenerTodos(audioActual){


    [music,music2,emergencyAudio].forEach(audio=>{


        if(audio !== audioActual){


            audio.pause();

            audio.currentTime=0;


        }


    });


}









// =====================
// PRIMERA CANCION
// =====================


playBtn.addEventListener("click",()=>{


    if(!playing){


        detenerTodos(music);


        music.play();


        playBtn.innerHTML="⏸ Pausar canción";


        playing=true;


        // Reiniciar estado de la segunda canción

        playing2=false;

        playBtn2.innerHTML="▶ Reproducir otra canción";



    }else{


        music.pause();

        music.currentTime=0;


        playBtn.innerHTML="▶ Reproducir canción";


        playing=false;


    }


});









// =====================
// SEGUNDA CANCION
// =====================


playBtn2.addEventListener("click",()=>{


    if(!playing2){


        detenerTodos(music2);


        music2.play();


        playBtn2.innerHTML="⏸ Pausar canción";


        playing2=true;


        // Reiniciar estado de la primera canción

        playing=false;

        playBtn.innerHTML="▶ Reproducir canción";



    }else{


        music2.pause();

        music2.currentTime=0;


        playBtn2.innerHTML="▶ Reproducir otra canción";


        playing2=false;


    }


});





// Cuando termina la segunda canción

music2.addEventListener("ended",()=>{


    playBtn2.innerHTML="▶ Reproducir otra canción";


    playing2=false;


});









// =====================
// BOTON DE EMERGENCIA ❤️
// =====================


emergencyBtn.addEventListener("click",()=>{


    detenerTodos(emergencyAudio);


    emergencyAudio.play();


    emergencyBtn.innerHTML=
    "❤️ Escuchando mensaje";


    // Reiniciar estados de las canciones

    playing=false;

    playing2=false;


    playBtn.innerHTML="▶ Reproducir canción";

    playBtn2.innerHTML="▶ Reproducir otra canción";


});









emergencyAudio.addEventListener("ended",()=>{


    emergencyBtn.innerHTML=
    "🥺 Necesito un abrazo ❤️";


});









// =====================
// CORAZONES FLOTANDO ❤️
// =====================


function crearCorazon(){


    const heart=document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";


    heart.style.bottom="-30px";


    heart.style.left=Math.random()*100+"%";


    heart.style.fontSize=
    Math.random()*25+20+"px";


    heart.style.opacity=
    Math.random()*0.5+0.5;


    heart.style.pointerEvents="none";


    heart.style.zIndex="10000";


    heart.style.animation=
    "subir 10s linear forwards";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },10000);


}









setInterval(crearCorazon,600);









// =====================
// ANIMACION CORAZONES
// =====================


const style=document.createElement("style");


style.innerHTML=`

@keyframes subir{


from{


transform:translateY(0) rotate(0deg);


opacity:1;


}



to{


transform:translateY(-110vh) rotate(360deg);


opacity:0;


}



}

`;



document.head.appendChild(style);
