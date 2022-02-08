// Exemplo de classe com construtor (valores passados como paramentro).
class Livro{
	constructor(nome, editora, paginas){
		this.nome = nome;
		this.editora = editora;
		this.paginas = paginas;
	}

	// Metodo
	anunciarTitulo(){
		console.log(`Titulo ${this.nome}`); // Apóstrofe
	}

	// Metodo
	descreverTitulo(){
		console.log(`${this.nome} é um livro da editora ${this.editora} e possui ${this.paginas} paginas.`); // Apóstrofe
	}
}

const NodeJS = new Livro("OpenGL Super Bible", "Addison-Wesley", 880);

NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();