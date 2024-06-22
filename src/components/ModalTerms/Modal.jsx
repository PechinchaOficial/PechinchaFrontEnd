import Styles from "./Modal.module.css"

function Modal({isOpen, setModalOpen}) {
        if (isOpen) {
    return(

        <article className={Styles.Modal}>
        <header className={Styles.Headermodal}>
            <h1>Termos e condições de uso</h1>
        </header>
        <div className={Styles.bodytextmodal}>
            1. Aceitação dos Termos
            Ao acessar ou utilizar o Serviço, você concorda em ficar vinculado a estes Termos. Se você
            não concorda com qualquer parte dos Termos, por favor, não utilize o Serviço.
            <br />
            2. Política de Privacidade
            Ao utilizar o Serviço, você concorda com nossa Política de Privacidade
            que descreve como tratamos as informações dos usuários e nossas políticas.
            <br />
            3. Uso Responsável
            Você concorda em utilizar o Serviço de forma responsável e em conformidade com todas as
            leis e regulamentos aplicáveis.
            <br />
            4. Links para Outros Sites
            OServiço pode conter links para sites de terceiros que não são controlados ou operados por
            nós. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de qualquer
            site de terceiros. O uso de sites de terceiros é por sua própria conta e risco.
            <br />
            5. Alterações nos Termos
            Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma
            revisão for significativa, faremos esforços razoáveis para fornecer aviso prévio antes que os
            novos termos entrem em vigor. O seu uso contínuo do Serviço após tais alterações constitui
            aceitação dos novos Termos.
            <br />
            6. Contate-Nos
            Se você tiver alguma dúvida sobre estes Termos ou sobre o Serviço, entre em contato conosco:
            pechincha@gmail.com
            <br />
            7. Conta de Usuário

            Para utilizar certos serviços do Site, você pode ser solicitado a criar uma conta. Você é responsável por manter a confidencialidade das informações da sua conta e senha e por restringir o acesso ao seu computador. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram sob sua conta ou senha.
            <br />
            8. Propriedade Intelectual

            Todo o conteúdo do Site, incluindo, mas não se limitando a, textos, gráficos, logotipos, imagens e software, é propriedade de [Nosso Site] ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais. É proibido o uso não autorizado desse conteúdo.
            <br />
            9. Indenização

            Você concorda em indenizar e isentar [Nosso Site], seus diretores, funcionários e agentes, de qualquer reivindicação, perda, responsabilidade, demanda ou despesa (incluindo honorários advocatícios) decorrente do seu uso do Site ou violação destes Termos.
            <br />
            
            10. Rescisão

            Podemos, a nosso critério exclusivo, encerrar ou suspender seu acesso ao Site sem aviso prévio por conduta que considerarmos violadora destes Termos ou prejudicial a outros usuários do Site ou a nossos interesses.
        </div>
        <div className={Styles.input}>
            <input type="checkbox" className={Styles.Concordo} /> <p>li e concordo com os termos de uso.</p>
        </div>
        <button className={Styles.btnmodal} onClick={setModalOpen}> <a href="#"> Aceito </a></button>
    </article>
    ) 

}
return null

}

export default Modal;