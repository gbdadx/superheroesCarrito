
fetch("./heroes.json")
    .then(response => response.json())
    .then(json => {
        let objetos = json.results;
        console.log(objetos);

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const heroe = objetos.find(e => e.id === id);
        const e = heroe;
        if (heroe) {
            const detalle = document.querySelector('.contenedor');
            const unknown = 'unknown';
            let precio = 1000 - e.id;
            let aux = `
                <div class="card">
                <div class="block">
                <h3>Biography</h3>
                <p>full-name:  ${e.biography['full-name'] ?? unknown}</p>
                <p>alter-ego:   ${e.biography['alter-egos'] ?? unknown}</p>
                </div>

                <div class="block">
                <h3>Connections</h3> 
                <p>group-affiliation: ${e.connections['group-affiliation'] ?? unknown}</p>
                <p>relatives: ${e.connections.relatives}</p>
                </div>

                <div class="block">
                <h3>Powerstats</h3>
                <table>
                <tr>
                    <th>combat:</th>
                    <td>${e.powerstats.combat ?? unknown}</td>
                </tr>

                <tr>
                    <th>durability:</th>
                    <td>${e.powerstats.durability ?? unknown}</td>
                
                </tr>
                <tr>
                    <th>strength:</th>
                    <td>${e.powerstats.strength ?? unknown}</td>
                </tr>
                <tr>
                    <th>intelligence:</th>
                    <td>${e.powerstats.intelligence ?? unknown}</td>
                </tr>
                <tr>
                    <th>speed:</th>
                    <td>${e.powerstats.speed ?? unknown}</td>
                </tr>
                <tr>
                    <th>power:</th>
                    <td>${e.powerstats.power ?? unknown}</td>
                </tr>

            </table>
            </div>

            <div class="block">
            <h3>Work:</h3>
            <p>Occupation: ${e.work.occupation}</p>
            <p>Base: ${e.work.base}</p>
            </div>

            <div class="block">
            <h2>
            <i class="fa-regular fa-star fa-sm star "></i>
            <i class="fa-regular fa-star fa-sm star"></i>
            <i class="fa-regular fa-star fa-sm star"></i>
            <i class="fa-regular fa-star fa-sm star"></i>
            <i class="fa-regular fa-star fa-sm "></i></h2> </div>
            <div class="block">
            <h3 style="font-family:'Montserrat', sans-serif;">Price  $ ${precio}</h3>
            </div>
            <div class="block">
                <select class="form-control" name="seleccion" id="seleccion">
                    <option value="0" default>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <!-- Otros elementos option -->
                </select>
                <button type="button" class="btn btn_card" id="comprar">Comprar</button>
            </div>
            <div class="block regreso">
                <button type="button" class="btn btn-card retornoHome"><a href="./index.html">Pagina de inicio</a></button>
            </div>
            </div>`;

            detalle.innerHTML = aux;
            console.log(heroe);
            const selectElement = document.getElementById('seleccion');
            const comprarButton = document.getElementById('comprar');
            const numeroArriba = document.querySelector('.numeroArriba');
            comprarButton.addEventListener('click', function () {
                let cantidadSeleccionada = parseInt(selectElement.value, 10);
                numeroArriba.textContent = `${cantidadSeleccionada}`;
                let importe = cantidadSeleccionada * precio;
                const precioArriba = document.querySelector('.precioArriba');
                precioArriba.innerHTML = importe;
                const cantidad = cantidadSeleccionada;
                /**guardo en local storage el valor, la cantidad y el importe */
                localStorage.setItem('precio', precio);
                localStorage.setItem('cantidad', cantidad);
                localStorage.setItem('importe', importe);
                localStorage.setItem('id', e.id)
            });


            const contendorImagen = document.querySelector('.contendorImagen');
            contendorImagen.innerHTML = `

            <img src="${heroe.image.url}" alt="${heroe.name}" class="imagenDetalle">`;

            const tituloDetalle = document.querySelector('.tituloDetalle');
            tituloDetalle.innerHTML = `<div class="block">
                <h1 style="text-align:right;">${e.name}</h1>
                </div>`

            const btn_carrito = document.querySelector('.btn_carrito');
            btn_carrito.addEventListener('click', () => {

            })

        } else {
            console.log('Héroe no encontrado');
        }

    })
    .catch(error => {
        console.error('Hubo un problema con la operación Fetch:', error);
    });
