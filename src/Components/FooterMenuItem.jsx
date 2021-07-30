function FooterMenuItem({ props }){
    switch(props[0]){
        case 'link':
            return <a className='footer__link text__small' href="">{props[1]}</a>;
        case 'button':
            return <button className={'footer__button ' + props[1]}>{props[2].toUpperCase()}<span className={props[3]}></span></button>;
        case 'select':
            const options = [];
            props[1].forEach(element => {options.push(<option className='text__small text__bold'>{element.toUpperCase()}</option>)});
            return <select className='language__select text__small text__bold'>
                {options}
            </select>
    }
}

export default FooterMenuItem;