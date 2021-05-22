// clave api 82ff780d827ce9ae2113228e7955b779
const ciudadUno=document.getElementById('ciudad1');
const horaUno=document.getElementById('hora1');
const zonaUno=document.getElementById('zona1');
const tempUno=document.getElementById('temperatura1');
// ---------------------------------------------------------------------------------------------
const ciudadDos=document.getElementById('ciudad2');
const horaDos=document.getElementById('hora2');
const zonaDos=document.getElementById('zona2');
const tempDos=document.getElementById('temperatura2');
// ---------------------------------------------------------------------------------------------
const ciudadTres=document.getElementById('ciudad3');
const horaTres=document.getElementById('hora3');
const zonaTres=document.getElementById('zona3');
const tempTres=document.getElementById('temperatura3');
// ---------------------------------------------------------------------------------------------
const ciudadCuatro=document.getElementById('ciudad4');
const horaCuatro=document.getElementById('hora4');
const zonaCuatro=document.getElementById('zona4');
const tempCuatro=document.getElementById('temperatura4');
// ---------------------------------------------------------------------------------------------
const btn=document.getElementById('btn');

const realizarPeticion = async (pais) => {
    const urlApi = `http://api.weatherstack.com/current?access_key=82ff780d827ce9ae2113228e7955b779&query=${pais}`;
    const resultado=await fetch(urlApi);
    const varJson= await resultado.json();
    return varJson;
};

btn.addEventListener('click', async()=>{
    let peticion= await realizarPeticion('BuenosAires');
    console.log(peticion);
    ciudadUno.textContent=peticion.location.name;
    horaUno.textContent=peticion.location.localtime;
    zonaUno.textContent=peticion.location.timezone_id;
    tempUno.textContent=peticion.current.temperature;
});

btn.addEventListener('click', async()=>{
    let peticionDos= await realizarPeticion('Spain');
    console.log(peticionDos);
    ciudadDos.textContent=peticionDos.location.name;
    horaDos.textContent=peticionDos.location.localtime;
    zonaDos.textContent=peticionDos.location.timezone_id;
    tempDos.textContent=peticionDos.current.temperature;
});
btn.addEventListener('click', async()=>{
    let peticionDos= await realizarPeticion('Spain');
    console.log(peticionDos);
    ciudadDos.textContent=peticionDos.location.name;
    horaDos.textContent=peticionDos.location.localtime;
    zonaDos.textContent=peticionDos.location.timezone_id;
    tempDos.textContent=peticionDos.current.temperature;
});
btn.addEventListener('click', async()=>{
    let peticionTres= await realizarPeticion('France');
    console.log(peticionTres);
    ciudadTres.textContent=peticionTres.location.name;
    horaTres.textContent=peticionTres.location.localtime;
    zonaTres.textContent=peticionTres.location.timezone_id;
    tempTres.textContent=peticionTres.current.temperature;
});
btn.addEventListener('click', async()=>{
    let peticionCuatro= await realizarPeticion('Mexico');
    console.log(peticionCuatro);
    ciudadCuatro.textContent=peticionCuatro.location.name;
    horaCuatro.textContent=peticionCuatro.location.localtime;
    zonaCuatro.textContent=peticionCuatro.location.timezone_id;
    tempCuatro.textContent=peticionCuatro.current.temperature;
});
