let precio= 200; 


let resultado = (precio,divisor)=>{
      return precio - precio*divisor/100;
}

let cantidad =()=>{
   let cantidad =  document.getElementById("cantidad").value;
   return cantidad;
}





let total =()=> {
    let categoria = document.getElementById("mySelect").value;
    let pagar =  document.getElementById("pagar");   
    
    switch(categoria) {
        
        case "Estudiante": {
            pagar.placeholder = "Total a Pagar: $"+(resultado(precio,80))*cantidad();
            break;
        }
        case "Trainee": {
            pagar.placeholder = "Total a Pagar: $"+resultado(precio,50)*cantidad();
            break;
        }
        case "Junior": {
            pagar.placeholder = "Total a Pagar: $"+resultado(precio,15)*cantidad();
            break;
        }

        default: {
            pagar.placeholder = "Total a Pagar: $"+200*cantidad();
            break;
        }
    } 
    
    
    
  }




let borrar=()=>{
    let pagar =  document.getElementById("pagar"); 
    pagar.placeholder= "Total a Pagar: $0";
    general.reset; 
    


}