/* eslint-disable react/prop-types */
export default function Header(props) {
    return (
        <header className="header">
            <img src={props.url} className="header--logo"/>
            <h2 className="header--title">PokeReact</h2>
            <img src={props.url2} className="header--logo2"/>
        </header>
    )
} 