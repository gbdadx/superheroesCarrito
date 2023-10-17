const contenedor = document.querySelector('.tarjetero');


fetch("./heroes.json")
    .then(response => response.json())
    .then(json => {
        let objetos = json.results;
        console.log(objetos);
        let tarjetas = '';
        for (let e of objetos) {
            console.log(e);
            let tarjeta = ` <div class="card">
        <div class="cardH">
            <img src="${e.image.url} " alt="${e.id} ">
        </div>
        <div class="cardB">
            <h3>${e.name}</h3>
            <p>${e.biography.alignment}</p>
        </div>
        <div class="cardF">
        <span class="precioCard">$ ${1000-e.id}</span>
            <button type="button" class="btn_${e.id} btn_card">Detalle</button>
        </div>
        </div>`;
            tarjetas += tarjeta;
        }
        contenedor.innerHTML = tarjetas;
    // Agregar eventos clic a los botones
    objetos.forEach(e => {
        const btn = document.querySelector(`.btn_${e.id}`);
        btn.addEventListener('click', () => {
          
          window.location.href = `detalle.html?id=${e.id}`; // Puedes incluir información adicional en la URL si es necesario
        });
      });



    })
    .catch(error => {
        console.error('Hubo un problema con la operación Fetch:', error);
    });


/**CARRITO */
    const cantidad=localStorage.getItem('cantidad');
    const importe=localStorage.getItem('importe');
    const numeroArriba=document.querySelector('.numeroArriba');
    const precioArriba=document.querySelector('.precioArriba');
    numeroArriba.textContent=cantidad;
    precioArriba.textContent=importe;