let turns = 0;
const selectedCards = [];
const turnCards = (e) => {
    //Con el id de la carta seleccionada, mostramos nuestra imagen de la base de datos
    const currentCardIndex = e.target;
    const imageUrl = pokemon.items.find(
        (items) => items.id === currentCardIndex.id
    ).image;
    e.target.setAttribute("src", `${imageUrl}`);
    e.target.setAttribute("class", "turned-card");
    /*Creamos un array de largo 2, para comparar estas dos cartas
      De esta manera nos aseguramos que no se eligan mas de dos cartas
      Luego ingresamos el array en a funcion compare()*/
    selectedCards.push(currentCardIndex);
    if (selectedCards.length % 2 === 0) {
        compare(selectedCards);
        turns = selectedCards.length / 2;
        console.log("turnos" + turns);
    }
};

/*export default;*/