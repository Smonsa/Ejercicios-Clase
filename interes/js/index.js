
const simular = () => {

// valores
//años
const n =1;
//interes anual
const i = 0.15;
//capital final
let cn= 250 * 11;
//capital inicial
let co = cn / (1+(i * n));
//Interes a fin de año
let I = co *i * n;



    document.getElementById("a").value = I | 0;
    document.getElementById("b").value = co | 0;
    document.getElementById("c").value = cn | 0;
    document.getElementById("todosLosResultados").style = "display:block";

}    
