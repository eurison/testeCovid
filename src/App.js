import React, { useEffect, useState } from 'react';
import './App.css';
import api from "../src/service/api";



function App() {
  const [countries, setCountries,] = useState([]);
  // console.log("TESTE", countries)

  useEffect(() => {
    covid();
  }, [])

  function covid() {
    api.get("countries").then(response => {
      setCountries(response.data)
    })
  }


  return (
    countries.map(item => (
        <div className="App">
        <div className="row">
        <div className="card">
          <h1 className="world">{item.country}</h1>
          <div className="results">
            <div className="container">
              <p className="ativo"> <span>Cases Ative </span> {item.active}</p>
              <br />
              <p className="Caso"> <span>Cases </span> {item.cases}</p>
              <br />
              <p className="Caso_por_um_milhão"> <span>Cases Per One Million</span> {item.casesPerOneMillion}</p>
              <br />
              <p className="world_one"> <span>Country</span> {item.country}</p>
              <br />
              <p className="Critico"> <span>Critical</span> {item.critical}</p>
              <br />
              <p className="mortes"><span>deaths</span> {item.deaths}</p>
              <br />
              <p className="mortes_por_um_milhão"> <span>Deaths Per One Million</span> {item.deathsPerOneMillion}</p>
              <br />
              <p className="recorde"> <span>Recovered</span> {item.recovered}</p>
              <br />
              <p className="teste_por_um_milhão"> <span>Tests Per One Million</span> {item.testsPerOneMillion}</p>
              <br />
              <p className="Casos_diários"> <span>Today Cases</span> {item.todayCases}</p>
              <br />
              <p className="Mortes_diárias"> <span> Today Deaths</span> {item.todayDeaths}</p>
              <br />
              <p className="Total_de_testes"> <span> Total Tests</span> {item.totalTests}</p>
              <br />
            </div>
          </div>
        </div>
     
        </div>

      </div>
    ))
  );
}

export default App;

