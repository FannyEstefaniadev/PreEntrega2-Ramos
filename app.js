const precio1 = 3950;
const precio2 = 30999;
const precio3 = 41999;
const precio4 = 4875;
const precio5 = 3999;
const precio6 = 5999;
const precio7 = 12218;
const precio8 = 37800;
const precio9 = 9100;
const precio10 = 17999;
const precio11 = 11025;
const precio12 = 26455;

let precioTotal = 0;

let precioElemento = document.getElementById("precio");

function boton1() {
    precioTotal += precio1;
    mostrarPrecio();
}

function boton2() {
    precioTotal += precio2;
    mostrarPrecio();
}

function boton3() {
    precioTotal += precio3;
    mostrarPrecio();
}

function boton4() {
    precioTotal += precio4;
    mostrarPrecio();
}

function boton5() {
    precioTotal += precio5;
    mostrarPrecio();
}

function boton6() {
    precioTotal += precio6;
    mostrarPrecio();
}

function boton7() {
    precioTotal += precio7;
    mostrarPrecio();
}

function boton8() {
    precioTotal += precio8;
    mostrarPrecio();
}

function boton9() {
    precioTotal += precio9;
    mostrarPrecio();
}

function boton10() {
    precioTotal += precio10;
    mostrarPrecio();
}

function boton11() {
    precioTotal += precio11;
    mostrarPrecio();
}

function boton12() {
    precioTotal += precio12;
    mostrarPrecio();
}

function mostrarPrecio() {
    precioElemento.textContent = "Precio total: $" + precioTotal;
}

var listaElemento = document.getElementById("lista");

function agregarPedido() {
    let confirmar = false;
    while (!confirmar) {
        let pedidos = prompt("Por favor confirme su pedido:");
        if (pedidos != null && pedidos != "") {
            let pedidosArray = pedidos.split(",");
            for (let i = 0; i < pedidosArray.length; i++) {
                let pedido = pedidosArray[i].trim();
                if (pedido != "") {
                    let li = document.createElement("li");
                    li.textContent = pedido;
                    listaElemento.appendChild(li);
                }
            }
        } else {
            alert("Por favor confirme su pedido.");
            continue;
        }
        confirmar = confirm("¿Está seguro de su compra?");
    }
}



const book = ["Kotion Each G9000", "Logitech G Series G435", "Auriculares Xbox",
    "Kotion G2000", "CAT STN-28", "Soul S600 AUR-BT881", "Nisuta NSAUG300", "Logitech G Series G435",
    "Trust Carus GXT 322", "Redragon Chroma Lamia", "Trust Carus GXT 322", "Zeus X H510-RGB"];

book.forEach((elemento) => {
    console.log(elemento);
});


const theBook = [
    {
        articulo: "Kotion Each Auriculares Gamer Kotion Each G9000 PC PS4",
        precio: "$3.950",
    },
    {
        articulo:"Logitech G Series G435",
        precio:"$30.999",
    },
    {
        articulo:"Auriculares Xbox",
        precio:"$41.999",
    }, 
    {
        articulo:"Kotion G2000",
        precio:"$4.875",
    },
    {
        articulo:"CAT STN-28",
        precio:"$3.999",
    },
    {
        articulo:"Soul S600 AUR-BT881",
        precio:"$5.999",
    },
    {
        articulo:"Nisuta NSAUG300",
        precio:"$12.218",
    },
    {
        articulo:"Logitech G Series G435",
        precio:"$37.800",
    },
    {
        articulo:"Trust Carus GXT 322",
        precio:"$9.100",
    },
    {
        articulo:"Redragon Chroma Lamia",
        precio:"$17.999",
    },
    {
        articulo:"Trust Carus GXT 322",
        precio:"$11.025",
    },
    {
        articulo:"Zeus X H510-RGB",
        precio:"$26.455",
    },
   
];

for (let i = 0; i < theBook.length; i++) {
    console.log("==================");
    console.log("Articulo:" + theBook[i].articulo);
    console.log("Descripción:" + theBook[i].descripción);
    console.log("Precio:" + theBook[i].precio);
};

