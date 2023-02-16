let Alumnos = [];
let CIS = [];
let mate = [];
let fisic = [];
let progra = [];

//para evitar ingresar numeros con teclado
document.getElementById("mate").addEventListener("keydown", e => e.preventDefault());
document.getElementById("fi").addEventListener("keydown", e => e.preventDefault());
document.getElementById("pro").addEventListener("keydown", e => e.preventDefault());


const agregar= () => {
    CIS.push(parseInt(document.getElementById("CI").value) );
    Alumnos.push(document.getElementById("nam").value) ;
    mate.push(parseInt(document.getElementById("mate").value) );
    fisic.push(parseInt(document.getElementById("fi").value) );
    progra.push(parseInt(document.getElementById("pro").value) );

    document.getElementById("CI").value = 0;
    document.getElementById("nam").value = "Nombre";
    

}


const simular = () => {
    //numero de aplazados de cada materia
    let AM = 0;
    let AF = 0;
    let AP = 0;

    //numero de aprobados de cada materia
    let AAM = 0;
    let AAF = 0;
    let AAP = 0;

    //los que aprobaron todas
    let Todas = 0;
    //los que aprobaron dos
    let solodos =0;
    //los que aprobaron una sola
    let solouna =0;
    //nota maxima de cada materia
    let highest1 = 0;
    let highest2 = 0;
    let highest3 = 0;

    Alumnos.forEach(function dale(item, index) {
        if (mate[index]  > 9 && fisic[index]  > 9  && progra[index]  > 9 ) {
            Todas++;
        } else if ( mate[index]  > 9 && fisic[index]  > 9  && progra[index]  < 10 || mate[index]  > 9 && fisic[index]  < 10  && progra[index]  > 9 || 
        mate[index]  < 10 && fisic[index]  > 9  && progra[index]  > 9   ) {
            solodos++;
        } else if ( mate[index]  > 9 && fisic[index]  < 10  && progra[index]  < 10 || mate[index]  < 10 && fisic[index]  < 10  && progra[index]  > 9 || 
        mate[index]  < 10 && fisic[index]  > 9  && progra[index]  < 10  ) {
            solouna++;
        }
    })


   //Nombres
    let tabla1 = "";
    Alumnos.forEach(function dale(item) {
        tabla1 += item + " | "; 
    })

     //Promedios de cada materia
    let promM = 0;
    mate.forEach(function dale(item) {
        promM += item; 

        if (item < 10) {
            AM++;
        } else {
            AAM++;
        }
            if (highest1 < item) {
              highest1 = item;
            }


    })

    let prom2M = promM/mate.length;

     let promF = 0;
    fisic.forEach(function dale(item) {
        promF += item; 

        if (item < 10) {
            AF++;
        } else {
            AAF++;
        }

        if (highest2 < item) {
              highest2 = item;
            }
    })

    let prom2F = promF/fisic.length;

     let promP = 0;
    progra.forEach(function dale(item) {
        promP += item; 

        if (item < 10) {
            AP++;
        } else {
            AAP++;
        }

        if (highest3 < item) {
              highest3 = item;
            }
    })

    let prom2P = promP/progra.length;


    document.getElementById("TA").value = tabla1;
    document.getElementById("MATE").value = prom2M;
    document.getElementById("FISI").value = prom2F;
    document.getElementById("PRO").value = prom2P;
    document.getElementById("am").value = AM;
    document.getElementById("af").value = AF;
    document.getElementById("ap").value = AP;
    document.getElementById("aam").value = AAM;
    document.getElementById("aaf").value = AAF;
    document.getElementById("aap").value = AAP;
    document.getElementById("todas").value = Todas;
    document.getElementById("Solodos").value = solodos;
    document.getElementById("Solouna").value = solouna;
    document.getElementById("maxima").value = "Matematicas: " + highest1 + " Fisica: " + highest2 + " Programacion: " + highest3;

    document.getElementById("todosLosResultados").style = "display:block";
    //style="display:none ;"

}    
