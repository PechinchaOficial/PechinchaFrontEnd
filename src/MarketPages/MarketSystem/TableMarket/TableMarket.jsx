import Styles from './TableMarket.module.css'
import Btn from '../BtnMarket/BtnMarket'
import Cancel from '../../../assets/img/Cancel.png'
import Create from '../../../assets/img/Create.png'

function TableMarket({classe}){
    return(
        <div className={Styles.container}>
    <table className={classe}>
        <thead className={Styles.cabeçalho}>
            <tr>
                <th className={Styles.coluna}>ID</th>
                <th className={Styles.coluna}>Nome</th>
                <th className={Styles.coluna}>Descrição</th>
                <th className={Styles.coluna}>Validade</th>
                <th className={Styles.coluna}>Categoria</th>
                <th className={Styles.coluna}>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={Styles.atributo}>#000</td>
                <td className={Styles.atributo}>Arroz Camil</td>
                <td className={Styles.atributo}>Arroz Especial para Risoto Camil 1Kg</td>
                <td className={Styles.atributo}>04/07/2024</td>
				<td className={Styles.atributo}>Snack</td>
				<td className={Styles.atributo}> <div className={Styles.container_bts}>
                    <Btn imagem={Create} texto="Editar" classe={Styles.edite}container={Styles.container_img_1} /> <Btn imagem={Cancel} texto="Excluir" classe={Styles.delete}container={Styles.container_img_2}/>
                </div></td>
            </tr>
            <tr>
                <td className={Styles.atributo}>#000</td>
                <td className={Styles.atributo}>Feijão Camil</td>
                <td className={Styles.atributo}>Feijão Carioca Tipo 1 Camil 1kg</td>
                <td className={Styles.atributo}>04/07/2024</td>
				<td className={Styles.atributo}>Snack</td>
				<td className={Styles.atributo}><div className={Styles.container_bts}>
                    <Btn imagem={Create} texto="Editar" classe={Styles.edite}container={Styles.container_img_1} /> <Btn imagem={Cancel} texto="Excluir" classe={Styles.delete}container={Styles.container_img_2}/>
                </div></td>
            </tr>
            <tr>
                <td className={Styles.atributo}>#000</td>
                <td className={Styles.atributo}>Salgadinho Cheetos</td>
                <td className={Styles.atributo}>Salgadinho de Milho Onda Requeijão Elma Chips 	Cheetos  75g</td>
                <td className={Styles.atributo}>04/07/2024</td>
				<td className={Styles.atributo}>Snack</td>
				<td className={Styles.atributo}><div className={Styles.container_bts}>
                    <Btn imagem={Create} texto="Editar" classe={Styles.edite}container={Styles.container_img_1} /> <Btn imagem={Cancel} texto="Excluir" classe={Styles.delete}container={Styles.container_img_2}/>
                </div></td>
            </tr>
            <tr>
                <td className={Styles.atributo}>#000</td>
                <td className={Styles.atributo}>Torrada Bauducco</td>
                <td className={Styles.atributo}>Torrada Tradicional Bauducco 142g</td>
                <td className={Styles.atributo}>04/07/2024</td>
				<td className={Styles.atributo}>Snack</td>
				<td className={Styles.atributo}><div className={Styles.container_bts}>
                    <Btn imagem={Create} texto="Editar" classe={Styles.edite}container={Styles.container_img_1} /> <Btn imagem={Cancel} texto="Excluir" classe={Styles.delete}container={Styles.container_img_2}/>
                </div></td>
            </tr>
        </tbody>
    </table>
</div>

    )
}

export default TableMarket