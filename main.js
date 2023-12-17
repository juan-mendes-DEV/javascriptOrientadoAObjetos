//* obejeto literal
const carroDaMaria ={
    modelo:'ka',
    fabricante:'ford',
    anoModelo:2021,
    anofabricante:2020,
    acelerar:function(){
        console.log('vrum')
    }
}

//console.log(carroDaMaria.acelerar())

//*objeto construtor
// function Carro(modelo,fabricante,anoModelo,anofabricante){
//     this.modelo=modelo;
//     this.fabricante=fabricante;
//     this.anoModelo=anoModelo;
//     this.anofabricante= anofabricante;
//     this.acelerar=function(){
//         console.log('acelerar')
//     }
// }
//*construção
// const carroDoJoao = new Carro('fiesta','ford',2020,2021)
//* console.log(carroDoJoao)
//* console.log(carroDoJoao instanceof Carro)


//!HERANÇA

// !function Pessoa(nome){
//     this.nome=nome;
//     this.dizOi=function(){
//         console.log(this.nome + " diz ola!")
//     }

// }
// !function Funcionario(nome,cargo,salario){
//     this.cargo=cargo;
//     this.salario=salario

//     Pessoa.call(this,nome);
// }
// !function Gerente(nome,cargo,salario){
//     this.cargo='cargo',
//     this.salario='salario'
//     Funcionario.call(this,nome,cargo,salario)
// }


// *const pessoa = new Pessoa("juan")
// *const funcionario1=new Funcionario("juan","dev front-end",5000);
// *const funcionario2= new Gerente("pablo", "gerente", 10000)
// !chamadas
// console.log(pessoa)
// console.log(funcionario1)
// *PARA CHAMAR FUNÇÃO dentro de funcionario 
//console.log(funcionario1.dizOi())
// console.log(funcionario2)

//!Heranças && Encapsulamento && Polimorfismo

function Pessoa(nome){
    this.nome=nome;
    this.dizOi=function(){
        console.log(this.nome + " diz ola!")
    }
}
function Funcionario(nome,cargo,salario){
    let _salario = salario//*salario privado
    this.cargo=cargo;
    this.getSalario = function(){//*para acessar salario
        return _salario;
    }
    this.setSalario = function(valor){//*para atribuir outro valor a salario
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }
    this.aumento = function(){
        const novoSalario = _salario * 1.1;
        console.log(novoSalario)
    }
    Pessoa.call(this,nome);//*herdando dados de Pessoa
}
function Estagiario(nome,salario){
    let _salario = salario
    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }
    this.aumento = function(){
        const novoSalario = _salario * 1.07;
        console.log(novoSalario)
    } 
    Funcionario.call(this,nome,"estagiario",2000)//*herdando dados de Funcionario
}
function Gerente(nome,cargo,salario){
    let _salario = salario
    this.cargo=cargo,
    
    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }
    this.aumento = function(){
        const novoSalario = _salario * 1.15;
        console.log(novoSalario)
    }
    Funcionario.call(this,nome,"gerente",10000)//*herdando dados de funcionario
}


const pessoa = new Pessoa("juan")
const funcionario1=new Funcionario("juan","dev front-end",5000);
const gerente= new Gerente("pablo", "gerente", 10000)
const estagiario1= new Estagiario("juan")
// console.log(funcionario1)
// funcionario1.setSalario(7000)
// console.log(funcionario1)
// funcionario1.aumento()
// console.log(estagiario1)
funcionario1.aumento()
estagiario1.aumento()
gerente.aumento()