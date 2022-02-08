function a(){
	return "Universidade Federal do Rio Grande do Sul (UFRGS)";
}

// Uso de Tagged Template = Executa uma função dentro da exibição.
console.log(`Estudo na ${a()}`); // Apóstrofe


// Replace substitui um REGEX por outro.
const frase = a();
console.log(`Estudo no ${frase.replace("Universidade Federal do Rio Grande do Sul (UFRGS)", "Colegio Energia")}`);