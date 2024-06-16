import cafeMelita from '../img/Products/cafe/cafe_melitta-2.webp'
import cafe_melitta from '../img/Products/cafe/cafe_melitta.jpg'
import leite_ninho_2 from '../img/Products/leite/leite_ninho-2.jpg'
import leite_piracanjuba from '../img/Products/leite/leite_piracanjuba.jpg'
import suco_ades from '../img/Products/suco/suco_ades_01-removebg-preview.png'
import suco_laranja from '../img/Products/suco/suco_Ades_03-removebg-preview.png'
import suco_uva from '../img/Products/suco/suco_mupy_03-removebg-preview.png'
import leite_piracanjuba_2 from '../img/Products/leite/leite_piracanjuba-2.webp'
import cafe_pilao_2 from '../img/Products/cafe/cafe_pilao-2.webp'



const bebidas = [
    {
        id: 1,
        img: `${cafe_melitta}`,
        name: 'Café Melitta',
        price: '12,90',
        dateVenc: '12/10/2024',
        qtdUnit: '15',
        discount: '30%'
    },

    {
        id: 2,
        img: `${leite_ninho_2}`,
        name: 'Leite Ninho',
        price: '7,50',
        dateVenc: '2/9/2024',
        qtdUnit: '27',
        discount: '50%'
    },

    {
        id: 3,
        img: `${leite_piracanjuba}`,
        name: 'Leite Piracanjuba',
        price: '9,90',
        dateVenc: '1/1/2025',
        qtdUnit: '25',
        discount: '80%'
    },

    {
        id: 4,
        img: `${suco_ades}`,
        name: 'Suco de maça Ades',
        price: '9,90',
        dateVenc: '24/12/2024',
        qtdUnit: '25',
        discount: '50%'
    },

    {
        id: 5,
        img: `${cafeMelita}`,
        name: 'Café Melita',
        price: '9,90',
        dateVenc: '17/11/2024',
        qtdUnit: '25',
        discount: '50%'
    },

    {
        id: 6,
        img: `${suco_laranja}`,
        name: 'Suco de laranja Ades',
        price: '12,90',
        dateVenc: '06/07/2024',
        qtdUnit: '8',
        discount: '30%'
    },

    {
        id: 7,
        img: `${leite_piracanjuba_2}`,
        name: 'Leite Piracanjuba',
        price: '9,90',
        dateVenc: '17/11/2024',
        qtdUnit: '25',
        discount: '50%'
    },

    {
        id: 8,
        img: `${suco_uva}`,
        name: 'Suco de uva Ades',
        price: '10,47',
        dateVenc: '05/3/2024',
        qtdUnit: '25',
        discount: '33%'
    },

    {
        id: 9,
        img: `${cafe_pilao_2}`,
        name: 'Café Pilão',
        price: '11,25',
        dateVenc: '07/07/2024',
        qtdUnit: '25',
        discount: '50%'
    },

   

    
]


export default bebidas;