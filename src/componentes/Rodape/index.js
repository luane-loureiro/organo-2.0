import { FaGithubAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaBehance } from "react-icons/fa";
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://github.com/luane-loureiro" target="_blank">
                  <FaGithubAlt className="redes-sociais" />
                </a>
            </li>
            <li>
                <a href="behttps://www.behance.net/luane-loureiro" target="_blank">
                    <FaBehance className="redes-sociais"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/luane-loureiro/" target="_blank">
                    <ImLinkedin className="redes-sociais"/>
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Luane Loureiro.
        </p>
       </section>
    </footer>)
}

export default Rodape