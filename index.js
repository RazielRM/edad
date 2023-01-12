var  alumno  =  {
    nombre : nulo ,
    apellidos : nulo ,
    fecha_nacimiento : nulo ,
    fecha_actual: 2023,
    saludos ( ) {
        return  "Hola mi nombre es: " +  this . nombre  + " " +  this . apellidos  +  "mucho gusto, tu edad es de" + this.edad ;
    } ,
    edad ( ) {
        this.fecha_actual-this.fecha_nacimiento;
        
    },
}

function guardarEstudiante ( ) {
    alumno_nombre  =  documento . getElementById ( 'nombre' ) . valor ;
    alumno_apellidos  =  documento . getElementById ( 'apellido' ) . valor ;
}

function  saludar ( ) {
   alerta ( alumno . saluda ( ) ) ;
}
