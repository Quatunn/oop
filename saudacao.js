function aluno(nomeCompleto, alturaPessoa, disciplinaFavorita, comidaFavorita, equipaFavorita, dataNascimento){
		this.nome = nomeCompleto;
		this.altura = alturaPessoa;
		this.disciplina = disciplinaFavorita;
		this.comida = comidaFavorita;
		this.equipa = equipaFavorita;
		this.data = dataNascimento;
		this.saudacao = function(){	
			console.log("Olá, meu nome é " + this.nome + ", tenho " + this.altura + " metros de altura, minha disciplina favorita é " + this.disciplina + ", minha comida favorita é " + this.comida + ", minha equipa favorita é o " + this.equipa + " e nasci no dia " +this.data)
		}
}

var andre = new aluno("André Costa", "1,79", "matemática", "lasanha", "Benfica", "01/01/2000")
	andre.saudacao();
	
var antonio = new aluno("António Lourenço", "1,82", "química", "nachos", "Benfica", "02/02/2000")
	antonio.saudacao();
	
var beatriz = new aluno("Beatriz Barreto", "1,65", "biologia", "sushi", "Sporting", "03/03/2000")
	beatriz.saudacao();
	
var franciscoE = new aluno("Francisco Esteves", "1,73", "alemão", "pizza", "Barcelona", "04/04/2000")
	franciscoE.saudacao();
	
var franciscoR = new aluno("Francisco Rodrigues", "1,76", "educação fisica", "bitoque", "Porto", "05/05/2000")
	franciscoR.saudacao();
	
var daniel = new aluno("Daniel Serrano", "1,78", "aplicações informáticas", "peixe cozido", "Manchester United", "06/06/2000")
	daniel.saudacao();
	
var fabio = new aluno("Fábio Franco", "1,79", "português", "picanha", "Benfica", "07/07/2000")
	fabio.saudacao();
	
var joaoN = new aluno("João Neves", "1,80", "educação fisica", "churrasco", "Benfica", "08/08/2000")
	joaoN.saudacao();
	
var joaoM = new aluno("João Madeira", "1,85", "educação fisica", "insetos", "Benfica", "09/09/2000")
	joaoM.saudacao();
	
var goncalo = new aluno("Gonçalo Simão", "1,74", "inglês", "esparguete", "Sporting", "10/10/2000")
	goncalo.saudacao();
	
var luis = new aluno("Luís Catarino", "1,86", "história", "bacalhau com natas", "Boavista", "11/11/2000")
	luis.saudacao();
	
var miguel = new aluno("Miguel Pinto", "1,80", "física", "frango assado", "Benfica", "12/12/2000")
	miguel.saudacao();
	
var maria = new aluno("Maria Inês", "1,70", "aplicações informáticas","sushi", "Guimarães", "02/01/2000")
	maria.saudacao();
	
var nuno = new aluno("Nuno Rodrigues", "1,76", "física", "cenoura cozidos", "Liverpool", "03/05/2000")
	nuno.saudacao();
	
var pedro = new aluno("Pedro Fonseca", "1,82", "matemática", "strogonoff", "Corinthians", "08/07/2000")
	pedro.saudacao();
	
var miguelD = new aluno("Miguel Dionísio", "1,81", "inglês", "douradinhos", "Arsenal", "06/03/2000")
	miguelD.saudacao();
	
var ricardoG = new aluno("Ricardo Gonçalves", "1,80", " espanhol", "nuggets", "Chelsea", "04/09/2000")
	ricardoG.saudacao();
	
var sandu = new aluno("Sandu Lungu", "1,78", "russo", "pizza", "Dynamo Kiev", "26/07/2000")
	sandu.saudacao();
	
var ricardoP = new aluno("Ricardo Pereira", "1,78", "matemática", "costelinha de porco", "Setúbal", "19/06/2000")
	ricardoP.saudacao();
	
var rodrigo = new aluno("Rodrigo Valério", "1,84", "aplicações informáticas", "feijoada", "CSKA", "25/04/2000")
	rodrigo.saudacao();
	
var samuel = new aluno("Samuel Vaz", "1,76", "sociologia", "carne assada", "Zenit", "16/11/2000")
	samuel.saudacao();
	
var tomas = new aluno("Tomás Feith", "1,79", "física", "salada de alface", "Dortmund", "27/10/2000")
	tomas.saudacao();
	
var tiago = new aluno(" Tiago Arriegas", "1,80", "português", "choco frito", "Villareal", "15/08/2000")
	tiago.saudacao();
	
var antonio = new aluno("António Campaniço", "1,83", "química", "frutos secos", "Milan", "08/11/2000")
	antonio.saudacao();
