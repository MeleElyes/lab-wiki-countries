
import { useParams,Link } from "react-router-dom"
import {useState,useEffect} from 'react'

const CountryDetails = (props) => {

const {id} = useParams()
const [arrayDetails,setArrayDetails] = useState([])

useEffect(()=>{
    setArrayDetails(props.Countries.filter((element) => element.alpha3Code === id))
},[id,props.Countries])

const returnNameFromAlpha3Code = (code) => {
 const arrayName = props.Countries.filter((element) => element.alpha3Code === code)
    return arrayName[0].name.common
}
    
   
    console.log(arrayDetails[0])
    return (
            <div className="col-7">
           {arrayDetails.map((element,index)=> 
           <div key={index}>
           <img src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`} alt="flag"/>
            <h1>{element.name.common}</h1>
           <table className="table"> 
            <thead></thead>
              <tbody>
                <tr>
                  <td style={{width : "30%"}}>Capital</td>
                  <td>{element.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {element.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {element.borders.map((el,index)=>
                    <div key={index}>
                        <li><Link to={element.alpha3Code}>  
                        {returnNameFromAlpha3Code(el)}
                        </Link></li>
                    </div>
                    
                    )}                  
                    </ul>
                  </td>
                </tr>
              </tbody>
</table>
</div>
)}
            </div>
           
   
    )
}

export default CountryDetails