window.addEventListener('load', function(){
let lista = document.querySelector('#lista');
let motociclistas = 8;
let horarios = ['8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','1:00','1:30','2:00','2:30','3:00','3:30', '4:00', '4:30', '5:00','5:30','6:00', '6:30','7:00','7:30','8:00'];
let len = horarios.length;
let h1moto = document.querySelector('#motociclistas');


function asignarHorarios(horario, id){
    let caja = {
        'id': id,
        'horario': horario,
        'estado': false
    }

    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'elemento';
    let hora = document.createTextNode(caja['horario']);
    nuevoDiv.appendChild(hora);

   pointer(nuevoDiv);
   nuevoDiv.addEventListener('click', function(){
    if(motociclistas == 0){
        this.style.backgroundColor = 'red';
        if(caja['estado'] == true){
            caja['estado'] = false;
            motociclistas += 1;
            cambiar(motociclistas);
            this.style.backgroundColor = '#fbf8cc';

        }
    }else if(caja['estado'] === false){
        caja['estado'] = true;
        this.style.backgroundColor = 'green';
        motociclistas -= 1;
        cambiar(motociclistas);
    }else{
        caja['estado'] = false;
        this.style.backgroundColor = '#fbf8cc';
        motociclistas += 1;
        cambiar(motociclistas);
    }
});   

    lista.appendChild( nuevoDiv);
    
}



function pointer(nuevoDiv){
    nuevoDiv.addEventListener('mouseover', function(){
        this.style.cursor = 'pointer';
    });
}

function cambiar(motociclistas){
    h1moto.innerHTML = "Motociclistas " + motociclistas;
}



cambiar(motociclistas);
for(let i = 0; i <= len-1; i++){
    asignarHorarios(horarios[i], i);
}

});