// Import do Arroz //
import arroz from '../img/Products/arroz/solito_01-removebg-preview.png'
import premium from '../img/Products/arroz/solito_02-removebg-preview.png'
import solito from '../img/Products/arroz/solito_03-removebg-preview.png'
import tipo from '../img/Products/arroz/solito_04-removebg-preview.png'
import tio from '../img/Products/arroz/tio_joao_01-removebg-preview.png'
import joao from '../img/Products/arroz/tio_joao_02-removebg-preview.png'
import tio_joao from '../img/Products/arroz/tio_joao_03-removebg-preview.png'
import prato from '../img/Products/arroz/prato_fino_01-removebg-preview.png'
import fino from '../img/Products/arroz/prato_fino_02-removebg-preview.png'
import prato_fino from '../img/Products/arroz/prato_fino_03-removebg-preview.png'

// Import do Feijão //
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

        // Cartaz de Arroz //
        {
            id: 1,
            img: `${arroz}`,
            name: 'Solito Tradicional',
            price: '25,90',
            dateVenc: '12/10/2024',
            qtdUnit: '20',
            discount: '50%'
        },

        {
            id: 1,
            img: `${premium}`,
            name: 'Solito Premium',
            price: '27,00',
            dateVenc: '29/09/2024',
            qtdUnit: '27',
            discount: '45%'
        },

        {
            id: 1,
            img: `${solito}`,
            name: 'Solito Food Service',
            price: '30,00',
            dateVenc: '21/10/2024',
            qtdUnit: '12',
            discount: '35%'
        },

        
        {
            id: 1,
            img: `${tipo}`,
            name: 'Solito Integral',
            price: '29,00',
            dateVenc: '27/12/2024',
            qtdUnit: '27',
            discount: '35%'
        },

        
        {
            id: 1,
            img: `${tio}`,
            name: 'Arroz Tio João',
            price: '28,70',
            dateVenc: '12/09/2024',
            qtdUnit: '30',
            discount: '40%'
        },

        {
            id: 1,
            img: `${joao}`,
            name: 'Tio João Integral',
            price: '27,00',
            dateVenc: '11/11/2024',
            qtdUnit: '10',
            discount: '50%'
        },

        {
            id: 1,
            img: `${tio_joao}`,
            name: 'Tio João Parbolizado',
            price: '26,80',
            dateVenc: '12/10/2024',
            qtdUnit: '20',
            discount: '10%'
        },

        {
            id: 1,
            img: `${prato}`,
            name: 'Prato Fino',
            price: '25,20',
            dateVenc: '11/08/2024',
            qtdUnit: '17',
            discount: '30%'
        },

        
        {
            id: 1,
            img: `${fino}`,
            name: 'Arroz Parbolizado',
            price: '27,80',
            dateVenc: '08/10/2024',
            qtdUnit: '25',
            discount: '20%'
        },

        
        {
            id: 1,
            img: `${prato_fino}`,
            name: 'Prato Fino Integral',
            price: '29,90',
            dateVenc: '10/11/2024',
            qtdUnit: '29',
            discount: '50%'
        },

        // Cartaz do Feijão // 

        {
            id: 1,
            img: `${feijao}`,
            name: 'Feijão Camil Carioca',
            price: '17,80',
            dateVenc: '10/11/2024',
            qtdUnit: '30',
            discount: '50%'
        },

        {
            id: 1,
            img: `${camil}`,
            name: 'Feijão Camil Preto',
            price: '20,90',
            dateVenc: '10/11/2024',
            qtdUnit: '27',
            discount: '50%'
        },

        {
            id: 1,
            img: `${feijao_camil}`,
            name: 'Feijão Camil Rosinha',
            price: '19,90',
            dateVenc: '10/11/2024',
            qtdUnit: '22',
            discount: '50%'
        },

        {
            id: 1,
            img: `${feijao_bom}`,
            name: 'Feijão Bom Preto',
            price: '15,80',
            dateVenc: '17/11/2024',
            qtdUnit: '21',
            discount: '50%'
        },

        {
            id: 1,
            img: `${bom}`,
            name: 'Feijão Bom Carioca',
            price: '19,90',
            dateVenc: '30/12/2024',
            qtdUnit: '17',
            discount: '50%'
        },

        {
            id: 1,
            img: `${feijao_kicaldo}`,
            name: 'Kicaldo Carioca',
            price: '21,00',
            dateVenc: '23/09/2024',
            qtdUnit: '30',
            discount: '30%'
        },

        {
            id: 1,
            img: `${kicaldo}`,
            name: 'Kicaldo Preto',
            price: '20,90',
            dateVenc: '27/10/2024',
            qtdUnit: '22',
            discount: '40%'
        },

        {
            id: 1,
            img: `${caldo}`,
            name: 'Kicaldo Rajado',
            price: '17,80',
            dateVenc: '07/11/2024',
            qtdUnit: '20',
            discount: '50%'
        },

        {
            id: 1,
            img: `${kicaldo_feijao}`,
            name: 'Kicaldo Fradinho',
            price: '19,80',
            dateVenc: '20/08/2024',
            qtdUnit: '17',
            discount: '20%'
        },

    ]


export default graos;