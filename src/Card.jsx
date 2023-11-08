/* eslint-disable react/prop-types */
export default function Card(props) {
    return (
        <div className="card">
            <h1 className="card--title">{props.info.name}</h1>
            <img src={props.url} className="card--img"/>
            <p className="card--type">electric</p>
        </div>
    )
}