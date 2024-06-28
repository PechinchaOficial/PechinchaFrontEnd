import arroz from '../img/Products/arroz/solito_01-removebg-preview.png'
import feijaoMs from '../img/Products/feijao/feijao_bom_01-removebg-preview.png'
import premium from '../img/Products/arroz/solito_02-removebg-preview.png'
import solito from '../img/Products/arroz/solito_03-removebg-preview.png'
import tipo from '../img/Products/arroz/solito_04-removebg-preview.png'
import tio from '../img/Products/arroz/tio_joao_01-removebg-preview.png'
import joao from '../img/Products/arroz/tio_joao_02-removebg-preview.png'
import tio_joao from '../img/Products/arroz/tio_joao_03-removebg-preview.png'
import prato from '../img/Products/arroz/prato_fino_01-removebg-preview.png'
import fino from '../img/Products/arroz/prato_fino_02-removebg-preview.png'
import prato_fino from '../img/Products/arroz/prato_fino_03-removebg-preview.png'
import feijao from '../img/Products/feijao/feijao_camil_01-removebg-preview.png'
import camil from '../img/Products/feijao/feijao_camil_02-removebg-preview.png'
import feijao_camil from '../img/Products/feijao/feijao_camil_03-removebg-preview.png'
import feijao_bom from '../img/Products/feijao/feijao_bom_01-removebg-preview.png'
import bom from '../img/Products/feijao/feijao_bom_02-removebg-preview.png'
import feijao_kicaldo from '../img/Products/feijao/feijao_kicaldo_01-removebg-preview.png'
import kicaldo from '../img/Products/feijao/feijao_kicaldo_02-removebg-preview.png'
import caldo from '../img/Products/feijao/feijao_kicaldo_03-removebg-preview.png'
import kicaldo_feijao from '../img/Products/feijao/feijao_kicaldo_04-removebg-preview.png'

const graos = [
    {
        id: 1,
        fotoproduto: feijaoMs,
        nome: 'Feijão Bom grão',
        datavalidade: '12/10/2024',
        preco: '1,90',
        desconto: '50%',
        qtdUnit: '20',
    },
    {
        id: 2,
        fotoproduto: premium,
        nome: 'Solito Premium',
        datavalidade: '29/09/2024',
        preco: '27,00',
        desconto: '45%',
        qtdUnit: '27',
    },
    {
        id: 3,
        fotoproduto: solito,
        nome: 'Solito Profissional',
        datavalidade: '21/10/2024',
        preco: '30,00',
        desconto: '35%',
        qtdUnit: '12',
    },
    {
        id: 4,
        fotoproduto: tipo,
        nome: 'Solito Tipo 2',
        datavalidade: '27/12/2024',
        preco: '29,00',
        desconto: '35%',
        qtdUnit: '27',
    },
    {
        id: 5,
        fotoproduto: tio,
        nome: 'Arroz Tio João',
        datavalidade: '12/09/2024',
        preco: '28,70',
        desconto: '40%',
        qtdUnit: '30',
    },
    {
        id: 6,
        fotoproduto: joao,
        nome: 'Tio João Integral',
        datavalidade: '11/11/2024',
        preco: '27,00',
        desconto: '50%',
        qtdUnit: '10',
    },
    {
        id: 7,
        fotoproduto: tio_joao,
        nome: 'Tio João Parbolizado',
        datavalidade: '12/10/2024',
        preco: '26,80',
        desconto: '10%',
        qtdUnit: '20',
    },
    {
        id: 8,
        fotoproduto: prato,
        nome: 'Prato Fino',
        datavalidade: '11/08/2024',
        preco: '25,20',
        desconto: '30%',
        qtdUnit: '17',
    },
    {
        id: 9,
        fotoproduto: fino,
        nome: 'Arroz Parbolizado',
        datavalidade: '08/10/2024',
        preco: '27,80',
        desconto: '20%',
        qtdUnit: '25',
    },
    {
        id: 10,
        fotoproduto: prato_fino,
        nome: 'Prato Fino Integral',
        datavalidade: '10/11/2024',
        preco: '29,90',
        desconto: '50%',
        qtdUnit: '29',
    },
    {
        id: 11,
        fotoproduto: feijao,
        nome: 'Feijão Camil Carioca',
        datavalidade: '10/11/2024',
        preco: '17,80',
        desconto: '50%',
        qtdUnit: '30',
    },
    {
        id: 12,
        fotoproduto: camil,
        nome: 'Feijão Camil Preto',
        datavalidade: '10/11/2024',
        preco: '20,90',
        desconto: '50%',
        qtdUnit: '27',
    },
    {
        id: 13,
        fotoproduto: feijao_camil,
        nome: 'Feijão Camil Rosinha',
        datavalidade: '10/11/2024',
        preco: '19,90',
        desconto: '50%',
        qtdUnit: '22',
    },
    {
        id: 14,
        fotoproduto: feijao_bom,
        nome: 'Feijão Bom Preto',
        datavalidade: '17/11/2024',
        preco: '15,80',
        desconto: '50%',
        qtdUnit: '21',
    },
    {
        id: 15,
        fotoproduto: bom,
        nome: 'Feijão Bom Carioca',
        datavalidade: '30/12/2024',
        preco: '19,90',
        desconto: '50%',
        qtdUnit: '17',
    },
    {
        id: 16,
        fotoproduto: feijao_kicaldo,
        nome: 'Kicaldo Carioca',
        datavalidade: '23/09/2024',
        preco: '21,00',
        desconto: '30%',
        qtdUnit: '30',
    },
    {
        id: 17,
        fotoproduto: kicaldo,
        nome: 'Kicaldo Preto',
        datavalidade: '27/10/2024',
        preco: '20,90',
        desconto: '40%',
        qtdUnit: '22',
    },
    {
        id: 18,
        fotoproduto: caldo,
        nome: 'Kicaldo Rajado',
        datavalidade: '07/11/2024',
        preco: '17,80',
        desconto: '50%',
        qtdUnit: '20',
    },
    {
        id: 19,
        fotoproduto: kicaldo_feijao,
        nome: 'Kicaldo Fradinho',
        datavalidade: '20/08/2024',
        preco: '19,80',
        desconto: '20%',
        qtdUnit: '17',
    },
];

export default graos;
