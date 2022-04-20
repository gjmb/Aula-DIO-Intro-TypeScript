import $ from 'jquery';

//Importando bibliotecas

$.fn.extend({
    novaFuncao(){
        console.log('Yep');
    }
});


interface Estudante{
    nome:string;
}
interface Estudante{
    idade:number;
}

const estudante: Estudante = {
    nome:'jon',
    idade:2
}

$('nobdy').novaFuncao();

export const n = 2;

/* em outro arquivo

    import (numero) from './index.ts'

*/



console.log("Hello There!");


function soma(a: number, b: number){
    return a + b;
}

soma(1,2);

//interfaces

interface Ianimal{
    nome:string;
    tipo:'terrestre'|'aquatico';
    falar(alturaDb:number):void
}

const animal: Ianimal = {
    nome:'cachorro',
    tipo:'terrestre',
    falar: (alturaDb) => {'${alturaDb}dB'}
}

interface Ifelino extends Ianimal{
    classificacao:'grande'|'pequeno'
}

console.log(animal.falar(34));

const felino: Ifelino = {
    nome:'Tigre',
    tipo:'terrestre',
    classificacao:'grande',
    falar: (alturaDb) => {'${alturaDb}dB'}
}

//types

type Tanimal = {
    nome:string;
    tipo:'terrestre'|'aquatico';
    falar(alturaDb:number):void
}

interface Icanino extends Ianimal{
    porte:'pequeno'|'medio'|'grande'
}

type Idomestico = Ifelino | Icanino;

const domestico: Idomestico={
    nome:'cachorro',
    tipo:'terrestre',
    porte:'medio',
    falar: (alturaDb) => {'${alturaDb}dB'}
} 

//tag input

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

//Generic types

function addApendiceLista<T>(vetor:any[], valor:T){
    return vetor.map(item => item + valor);
}

let v = [1,2,3];
v = addApendiceLista(v,4);
console.log(v);

//Condicionais a partir de parâmetros

interface IUser {
    id:string;
    email:string;
}

interface IAdmin extends IUser {
    cargo: 'gerente'|'coordenador'|'surpevisor';
}

function redirecione(usuario: IUser | IAdmin){
    if('cargo' in usuario){
        //redirecionar para area de adm
    }
        //redirecionar para area do usuario
}

//utilizando ? para variáveis opcionais

interface Iuser {
    id:string;
    email:string;
    cargo?: 'gerente'|'coordenador'|'surpevisor'|'funcionario';

}



function redirect(usuario: Iuser){
    if(usuario.cargo){
        //redirecionar para area de adm
    }
        //redirecionar para area do usuario
}


//variaveis com propriedades readonly e private

interface Cachorro {
    readnome:string;
    idade:number;
    raca?:string;
}

type CachorroReadOnly = {
    //+ adicionando readyonly e removendo -? opcionais
    +readonly [K in keyof Cachorro]-?: Cachorro [K];
}

// Omit

interface Pessoa {
    nome:string;
    idade:number;
    nacionalidade:string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{
    nome:'jon',
    idade:12
}
