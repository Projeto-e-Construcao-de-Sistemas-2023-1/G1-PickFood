'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { 
    center,
    title,
    checkbox,
    checkboxes,
    arrow,
    logo
} from "./styles.module.scss"

export default function Cadastro4() {

    const authenticate = () => {
        // request
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro3"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>
            
            <Logo className={ logo }/>
            
            <h2 className={ title }>Risco de Contaminação Cruzada</h2>

                <div className={ checkboxes }>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="a"/>
                        <label for="a">Restrição #1</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="b"/>
                        <label for="b">Restrição #2</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="c"/>
                        <label for="c">Restrição #3</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="d"/>
                        <label for="d">Restrição #4</label>
                    </div>
                    <div className={checkbox}>
                         <input type= "checkbox" name ="e"/>
                        <label for="e">Restrição #5</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="f"/>
                        <label for="f">Restrição #6</label>
                        </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="g"/>
                        <label for="g">Restrição #7</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="h"/>
                        <label for="h">Restrição #8</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="i"/>
                        <label for="i">Restrição #9</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="j"/>
                        <label for="j">Restrição #10</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="k"/>
                        <label for="k">Restrição #11</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="h"/>
                        <label for="h">Restrição #12</label>
                    </div>
                    
                </div>
                <Link href={"restaurante/home"}>
                     <div className={ center }><Form.Button onClick={ () => authenticate() }>Continuar</Form.Button></div>
                </Link>
               
           

        </Container>
    )
}