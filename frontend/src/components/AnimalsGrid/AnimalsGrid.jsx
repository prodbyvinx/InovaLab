import React, { useState, useEffect } from 'react';
import api from '../../services/api'; // Importação do arquivo de API
import CardAnimals from '../CardAnimals/CardAnimals'; // Importação do componente CardAnimals
import './AnimalsGrid.module.css'; // Importação dos estilos CSS

// Importação das imagens
import lolaImg from '../../assets/lola.jpg'; // Corrija o caminho se necessário
import bobImg from '../../assets/bob.jpg';   // Corrija o caminho se necessário
import miaImg from '../../assets/mia.jpg';   // Corrija o caminho se necessário

function AnimalsGrid() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // Fazendo a requisição para a API Flask
    api.get('/students')  // Substitua pela URL correta da sua API Flask
      .then(response => {
        setAnimals(response.data); // Atualiza o estado com os dados recebidos da API
      })
      .catch(error => {
        console.error("Erro ao buscar os animais:", error);
      });
  }, []); // O array vazio faz a requisição apenas uma vez, quando o componente é montado

  return (
    <div className="grid-container">
      {animals.map((animal) => (
        <CardAnimals
          key={animal.id} // Utilize um valor único, como o id, para a key
          image={
            animal.species === 'Cobra' ? lolaImg :
            animal.species === 'Camaleão' ? bobImg :
            miaImg
          }  // Seleciona a imagem com base na espécie do animal
          name={animal.name}
          species={animal.species}
          age={animal.age}
          careDuration={animal.enrollment_duration} // Ajuste o nome da propriedade conforme necessário
        />
      ))}
    </div>
  );
}

export default AnimalsGrid;
