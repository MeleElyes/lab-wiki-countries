import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}} >
            <div className="list-group">
            {props.Countries.map((element,index)=>
                <div key={index}>
                <Link to={element.alpha3Code} className="list-group-item list-group-item-action">{element.alpha3Code} {element.name.common}</Link>
                </div>
                
            )}
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default CountriesList


            