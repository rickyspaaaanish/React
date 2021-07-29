function FooterMenuItem({ props }){
    switch(props[0]){
        case 'link':
            return <a className='footer__link text__small' href="">{props[1]}</a>;
        case 'button':
            return <button className={'footer__button ' + props[1]}>{props[2].toUpperCase()}<span className={props[3]}></span></button>;
        case 'select':
            return <select>
                { props[1].forEach(element => {<option>{element.toUpperCase()}</option>}) }
            </select>
    }
}

export default FooterMenuItem;