class Person{

    constructor(altura,peso){
        this.altura = altura
        this.Peso = peso
        this.colorPelo
        this.hobbies 
        this.edad
        this.yearOfBirth 
    }
  calcularImc()
  {
    return (this.Peso / (this.altura * 2))
  }
  
  calEdad(año){
    return año - this.yearOfBirth
  }

  printAll(){
    console.log("soy juan mido "+this.altura+ " y peso es "+ this.peso+ " mi color de pelo es "+ this.colorPelo+" mi hobbie favorito es "+this.hobbies+
    " pero ya tengo "+this.edad+" para nadar tanto, mi año de nacimiento es "+this.yearOfBirth);
  }

  leerHobbie(){
    for(let i =0;i < this.hobbies.length;i++){
        console.log(this.hobbies[i]);
    }
  }
}
