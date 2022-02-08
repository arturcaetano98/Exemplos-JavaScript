// Function que funciona como uma classe.
const Livro = function(nome, editora, paginas){
	// Para evitar erros use o "const" com ";" nas linhas.
	const gNome = nome;
	const gEditora = editora;
	const gPaginas = paginas;

	this.getNome = function(){
		return gNome;
	}

	this.getEditora = function(){
		return gEditora;
	}

	this.getPaginas = function(){
		return gPaginas;
	}
}

const OpenGL = new Livro("OpenGL Super Bible", "Addison-Wesley", 880)

// Não esqueça os parenteses...
console.log(OpenGL.getNome());
console.log(OpenGL.getEditora());
console.log(OpenGL.getPaginas());


