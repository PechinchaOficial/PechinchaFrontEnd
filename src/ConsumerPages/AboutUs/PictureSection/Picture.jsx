import Styles from './Picture.module.css'

function Picture() {
    return (
        <section className={Styles.block} id='conteudo'>
            <div className={Styles.container_picture}>
                <div className={Styles.pic}></div>
                <div className={Styles.pic1}></div>
                <div className={Styles.pic2}></div>
                <div className={Styles.pic3}></div>
                <div className={Styles.pic4}></div>
                <div className={Styles.pic5}></div>
            </div>
           
        </section>
    )
};

export default Picture;