import { Materia } from './model/materia';

import { Turma } from './model/turma';

export const MATERIAS: Materia[] = [];
//     {
//         nome: 'Introdução à Sabedoria do Oriente',
//         temas: [
//             {
//                 numero: 1, nome: 'Tema I',
//                 capitulos: [
//                     { numero: 1, nome: 'Introdução' },
//                     { numero: 2, nome: 'O Enigma de Deus' },
//                     { numero: 3, nome: 'A Filosofia Natural ou Esotérica' },
//                     { numero: 4, nome: 'Os Três Princípios de uma Filosofia Natural ou Esotérica' },
//                     { numero: 5, nome: 'Constituição Septenária do Homem' },
//                     { numero: 6, nome: 'Corpos e Subcorpos' },

//                 ]
//             }, {
//                 numero: 2, nome: 'Tema II', capitulos: [
//                     { numero: 1, nome: 'Sistema Solar' },
//                     { numero: 2, nome: 'O Triplo Logos Solar' },
//                     { numero: 3, nome: 'Como estão Integrados Terra, Sistema, Cadeia, Ronda, Globo e Raça' },

//                 ]
//             }, {
//                 numero: 3, nome: 'Tema III', capitulos: [
//                     { numero: 1, nome: 'Antropogênese Oculta' },
//                     { numero: 2, nome: 'Primeira Raça' },
//                     { numero: 3, nome: 'Segunda Raça' },
//                     { numero: 4, nome: 'Terceira Raça' },
//                     { numero: 5, nome: 'Quarta Raça' },
//                     { numero: 6, nome: 'Quinta Raça' },
//                     { numero: 7, nome: 'Sexta Raça' },
//                     { numero: 8, nome: 'Sétima Raça' },
//                     { numero: 9, nome: 'Adendo' },
//                     { numero: 10, nome: 'Notas' },

//                 ]
//             }, {
//                 numero: 4, nome: 'Tema IV', capitulos: [
//                     { numero: 1, nome: 'Dharman - Dharma' },
//                     { numero: 2, nome: 'Kharman - Kharma' },
//                     { numero: 3, nome: 'Categoria de Kharma para os Homens' },
//                     { numero: 4, nome: 'Modalidades Kármicas' },
//                     { numero: 5, nome: 'Livre Arbítrio' },
//                     { numero: 6, nome: 'Reencarnação' },
//                     { numero: 7, nome: 'Nascimento' },
//                     { numero: 8, nome: 'Maturidade' },
//                     { numero: 9, nome: 'Velhice' },
//                     { numero: 10, nome: 'Morte' },

//                 ]
//             }, {
//                 numero: 5, nome: 'Tema V', capitulos: [
//                     { numero: 1, nome: 'Conceito Geral de Religião e Religiões' },
//                     { numero: 2, nome: 'Reuniões Naturais e Reveladas' },
//                     { numero: 3, nome: 'Alcance do Segundo Princípio da Filosofia Esotérica no Religioso' },

//                 ]
//             }, {
//                 numero: 6, nome: 'Tema VI', capitulos: [
//                     { numero: 1, nome: 'Conceito Esotérico de Religião' },
//                     { numero: 2, nome: 'Manifestação Sétupla do Triplo Logos' },
//                     { numero: 3, nome: 'Características dos Três Tipos de Avatares' },
//                     { numero: 4, nome: 'Métodos e Advertências' },
//                     { numero: 5, nome: 'Rondas de Avatares' },
//                     { numero: 6, nome: 'Última Ronda de Avatares Budhisátwicos para 4ª Ronda' },

//                 ]
//             }, {
//                 numero: 7, nome: 'Tema VII', capitulos: [
//                     { numero: 1, nome: 'Particularidades de cada Mestre' },
//                     { numero: 2, nome: 'Vyasa (III)' },
//                     { numero: 3, nome: 'Hermes Trimegisto (IV)' },
//                     { numero: 4, nome: 'Zoroastro (V)' },
//                     { numero: 5, nome: 'Orfeu (VI)' },
//                     { numero: 6, nome: 'Sidharta Gautama Budha (VII)' },
//                     { numero: 7, nome: 'Adendo' },
//                     { numero: 8, nome: 'Jesus Cristo' },
//                     { numero: 9, nome: 'Maomé' },

//                 ]
//             }, {
//                 numero: 8, nome: 'Tema VIII', capitulos: [
//                     { numero: 1, nome: 'A Filosofia Atemporal e as suas Expressões Limitadas' },
//                     { numero: 2, nome: 'Sociedades de Estudos Esotéricos' },
//                     { numero: 3, nome: 'A Grande Fraternidade Branca' },
//                     { numero: 4, nome: 'Reflexos da Grande Fraternidade Branca sobre a Humanidade' },

//                 ]
//             }, {
//                 numero: 9, nome: 'Tema IX', capitulos: [
//                     { numero: 1, nome: 'O Neoplatonismo - A Sociedade Eclética de Alexandria' },
//                     { numero: 2, nome: 'Giordano Bruno' },
//                     { numero: 3, nome: 'Rosacrucismo' },
//                     { numero: 4, nome: 'Maçonaria' },
//                     { numero: 5, nome: 'Espiritismo' },
//                     { numero: 6, nome: 'Sociedade Teosófica Mundial: Fundação e Desenvolvimento' },

//                 ]
//             }, {
//                 numero: 10, nome: 'Tema X', capitulos: [
//                     { numero: 1, nome: 'O Uno sem Segundo, o Uno Ilusório' },
//                     { numero: 2, nome: 'Aritmética e Geometria' },
//                     { numero: 3, nome: 'Gênese das Formas' },

//                 ]
//             }, {
//                 numero: 11, nome: 'Tema XI', capitulos: [
//                     { numero: 1, nome: 'Fenômenos Físicos, Químicos e Alquímicos' },
//                     { numero: 2, nome: 'O que é Alquimia?' },
//                     { numero: 3, nome: 'Constituição do Átomo' },
//                     { numero: 4, nome: 'Constituição da Molécula' },
//                     { numero: 5, nome: 'O que é Valência?' },
//                     { numero: 6, nome: 'Elementos Químicos e Alquímicos' },
//                     { numero: 7, nome: 'O que é Astrologia?' },
//                     { numero: 8, nome: 'O que é Yoga?' },
//                     { numero: 9, nome: 'Karma-Yoga' },
//                     { numero: 10, nome: 'Bakti-Yoga' },
//                     { numero: 11, nome: 'Gnani-Yoga' },
//                     { numero: 12, nome: 'Raja-Yoga' },

//                 ]
//             }, {
//                 numero: 12, nome: 'Tema XII', capitulos: [
//                     { numero: 1, nome: 'Biologia e Anatomia Oculta' },
//                     { numero: 2, nome: 'Histologia' },
//                     { numero: 3, nome: 'Os Elétrons na sua Função Biológica' },
//                     { numero: 4, nome: 'Introdução à Anatomia Esotérica' },
//                     { numero: 5, nome: 'Sistema Ósseo' },
//                     { numero: 6, nome: 'Classificação Esotérica do Esqueleto' },
//                     { numero: 7, nome: 'Classificação Esotérica dos Sistemas Orgânicos' },
//                     { numero: 8, nome: 'Neuronal' },
//                     { numero: 9, nome: 'Respiratório' },
//                     { numero: 10, nome: 'Digestório' },
//                     { numero: 11, nome: 'Circulatório' },
//                     { numero: 12, nome: 'Glandular' },
//                     { numero: 13, nome: 'Renal' },
//                     { numero: 14, nome: 'Reprodutor' },
//                     { numero: 15, nome: 'Músculos' },
//                     { numero: 16, nome: 'Sistemas Sutis - Os Éteres' },
//                     { numero: 17, nome: 'Éter 4' },
//                     { numero: 18, nome: 'Éter 3' },
//                     { numero: 19, nome: 'Éter 2' },
//                     { numero: 20, nome: 'Éter 1' },

//                 ]
//             }, {
//                 numero: 13, nome: 'Tema XIII', capitulos: [
//                     { numero: 1, nome: 'Zoologia' },
//                     { numero: 2, nome: 'Linha Dévica' },
//                     { numero: 2.1, nome: 'Elementais do Fogo' },
//                     { numero: 2.1, nome: 'Elementais do Ar' },
//                     { numero: 2.1, nome: 'Elementais da Água' },
//                     { numero: 2.1, nome: 'Elementais da Terra' },
//                     { numero: 3, nome: 'Linha Humana' },
//                     { numero: 3.1, nome: 'Casos Especiais' },
//                     { numero: 3.2, nome: 'Alma Grupal' },

//                 ]
//             }, {
//                 numero: 14, nome: 'Tema XIV', capitulos: [
//                     { numero: 1, nome: 'Botânica' },
//                     { numero: 1.1, nome: 'Casos Especiais' },

//                 ]
//             }, {
//                 numero: 15, nome: 'Tema XV', capitulos: [
//                     { numero: 1, nome: 'O Futuro' },
//                 ]
//             },
//         ]
//     }, {
//         nome: 'Psicologia',
//         temas: [
//             {
//                 numero: 1,
//                 nome: 'Tema I',
//                 capitulos: [
//                     { numero: 1, nome: 'Introdução' },
//                     { numero: 2, nome: 'Capítulo2' }
//                 ]
//             }
//         ]
//     },
// ];

export const TURMAS: Turma[] = [];
//     {
//         id: 1,
//         nome: 'N2 - Quarta - Seneca',
//         professores: [
//             { nome: 'Levi' },
//             { nome: 'Plicia' },
//             { nome: 'Aline' },
//         ],
//         alunos: [
//             { nome: 'CARMEM DEBORA LOPES BARBOSA' },
//             { nome: 'CARMEM LUCIA DANTAS MOURA' },
//             { nome: 'GISELE LEAL DE PAULA' },
//             { nome: 'KALYNE MADEIRA FURTADO ' },
//             { nome: 'MARCIO AZEVEDO SILVA ' },
//             { nome: 'MARCOS ANTONIO LACERDA PEREIRA ' },
//             { nome: 'MARINA ROCHA ROLIM ' },
//             { nome: 'MICHEL PINHO DE ALCÂNTARA ' },
//             { nome: 'RAQUEL PINHEIRO SÁ MATOS ' },
//             { nome: 'RUTH CAMARA' },

//         ],
//     },
//     { id: 2, nome: 'N2 - QUinta' }];


