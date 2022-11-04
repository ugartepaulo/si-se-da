let sound = new Audio('/assets/pollito.mp3')
let cancion = prompt(`Selecciona una canción 🎶🎵:
        1. SI SE DA REMIX
        2. SALIR`)

if (cancion === "1"){
    alert('Ponte creativa')
    alert('Activa tu curiosidad')
    alert('Dale espacio a que brille en ti toda esa vanidad')
    alert('Tú andas suelta')
    alert('Finísima')
    alert('Riquísima')
    alert('Soltera (eso no xd)')
    alert('Solicitada y pa colmo')
    alert('putísima 😈🔥')
    sound.play();
}
else if (cancion === "2"){
    alert('Antes de salir quiero decirte que')
    alert('TE AMO')
}
else {
    alert('Opción inválida')
}
