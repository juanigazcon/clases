class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        let fullName = `${this.nombre} ${this.apellido}`
        console.log(fullName)
        return fullName
    }

    addMascotas(animal){
       this.mascotas.push(animal);
       console.log(this);
    }

    countMascotas(){
      console.log(this.mascotas.length)
    }

    addBook(book){
        this.libros.push(book);
        console.log(this);
    }

    getBookNames(){
       const libritos= this.libros.map(u=>u.title);
       console.log(libritos)
    }


}


let user1 = new Usuario("Juana", "Gazcón", [{title: "Lala", author: "Juan"}, {title: "Juju", author: "Pepe"}], [{name: "Fido", tipo: "perro"}])

console.log(user1)

user1.getFullName();

user1.addMascotas({name:"Carlos", tipo: "lo"})

user1.countMascotas();

user1.addBook({title:"La casa de los espíritus", author:"Isabel Allende"})

user1.getBookNames();