const unidades = [
  { codigo_unidad_medida: "kg", nombre_unidad: "kilogramo" },
  { codigo_unidad_medida: "gr", nombre_unidad: "gramo" },
  { codigo_unidad_medida: "mg", nombre_unidad: "miligramo" },
  { codigo_unidad_medida: "lb", nombre_unidad: "libra" },
  { codigo_unidad_medida: "un", nombre_unidad: "unidad" },
  { codigo_unidad_medida: "pq", nombre_unidad: "paquete" },
  { codigo_unidad_medida: "lt", nombre_unidad: "litro" },
  { codigo_unidad_medida: "ml", nombre_unidad: "mililitro" },
  { codigo_unidad_medida: "oz", nombre_unidad: "onza" },
];

const tipo_usuarios = [
  { tipo_usuario: "hunter (cazador)" },
  { tipo_usuario: "challenger (cliente)" },
  { tipo_usuario: "admin (administrador)" },
  { tipo_usuario: "retailer (tienda / distribuidor)" },
];

const familias = [
    {nombre_familia: "Almacen", descripcion: 'productos secos'},
    {nombre_familia: "Frescos", descripcion: 'productos refrigerados y congelados'},
    {nombre_familia: "Bebidas", descripcion: 'refrescos, agua y licores'},
]

const categorias = [
  { nombre_categoria: "Aceites_y_Aderezos", familiumId: 1 },
  { nombre_categoria: "Aceitunas_y_Encurtidos", familiumId: 1 },
  { nombre_categoria: "Conservas", familiumId: 1 },
  { nombre_categoria: "Desayuno_y_Golosinas", familiumId: 1 },
  { nombre_categoria: "Panificados", familiumId: 1 },
  { nombre_categoria: "Arroz_y_Legumbres", familiumId: 1 },
  { nombre_categoria: "Snacks", familiumId: 1 },
  { nombre_categoria: "Sopas,_Caldos_y_Puré", familiumId: 1 },
  { nombre_categoria: "Pastas_y_Harinas", familiumId: 1 },
  { nombre_categoria: "Lácteos", familiumId: 2 },
  { nombre_categoria: "Pastas y Tapas", familiumId: 2 },
  { nombre_categoria: "Carnicería y Pescadería", familiumId: 2 },
  { nombre_categoria: "Verdulería", familiumId: 2 },
  { nombre_categoria: "Fiambrería", familiumId: 2 },
  { nombre_categoria: "Congelados", familiumId: 2 },
  { nombre_categoria: "Panadería y Repostería", familiumId: 2 },
  { nombre_categoria: "Aperitivos", familiumId: 3 },
  { nombre_categoria: "Cerveza", familiumId: 3 },
  { nombre_categoria: "Vinos y Espumantes", familiumId: 3 },
  { nombre_categoria: "Bebidas blancas y Licores", familiumId: 3 },
  { nombre_categoria: "A Base de Hierbas", familiumId: 3 },
  { nombre_categoria: "Aguas", familiumId: 3 },
  { nombre_categoria: "Gaseosas", familiumId: 3 },
  { nombre_categoria: "Jugos", familiumId: 3 },
  { nombre_categoria: "Isotónicas y Energizantes", familiumId: 3 },
];

const subcategoria = [
  { nombre_subcategoria: "Aceites", categoriumId: 1 },
  { nombre_subcategoria: "Mayonesa", categoriumId: 1 },
  { nombre_subcategoria: "Ketchup", categoriumId: 1 },
  { nombre_subcategoria: "Salsa_Golf", categoriumId: 1 },
  { nombre_subcategoria: "Mostaza", categoriumId: 1 },
  { nombre_subcategoria: "Vinagre", categoriumId: 1 },
  { nombre_subcategoria: "Aceto", categoriumId: 1 },
  { nombre_subcategoria: "Jugo_de_Limón", categoriumId: 1 },
  { nombre_subcategoria: "Aderezos_Salsas", categoriumId: 1 },
  { nombre_subcategoria: "Sal_y_Pimienta", categoriumId: 1 },
  { nombre_subcategoria: "Saborizadores", categoriumId: 1 },
  { nombre_subcategoria: "Otros_Condimentos", categoriumId: 1 },
  { nombre_subcategoria: "Aceitunas_Verdes", categoriumId: 2 },
  { nombre_subcategoria: "Aceitunas_Negras", categoriumId: 2 },
  { nombre_subcategoria: "Aceitunas_Rellenas", categoriumId: 2 },
  { nombre_subcategoria: "Encurtidos", categoriumId: 2 },
  { nombre_subcategoria: "Conservas_de_Verdura_y_Legumbres", categoriumId: 3 },
  { nombre_subcategoria: "Conservas_de_Pescado", categoriumId: 3 },
  { nombre_subcategoria: "Conservas_de_Frutas", categoriumId: 3 },
  { nombre_subcategoria: "Tomates_y_Salsas", categoriumId: 3 },
  { nombre_subcategoria: "Azúcar_y_Edulcorante", categoriumId: 4 },
  { nombre_subcategoria: "Cacao", categoriumId: 4 },
  { nombre_subcategoria: "Leche_en_Polvo", categoriumId: 4 },
  { nombre_subcategoria: "Mermeladas_y_Dulces", categoriumId: 4 },
  { nombre_subcategoria: "Café", categoriumId: 4 },
  { nombre_subcategoria: "Té", categoriumId: 4 },
  { nombre_subcategoria: "Yerbas", categoriumId: 4 },
  { nombre_subcategoria: "Repostería", categoriumId: 4 },
  { nombre_subcategoria: "Golosinas", categoriumId: 4 },
  { nombre_subcategoria: "Cereales", categoriumId: 4 },
  { nombre_subcategoria: "Galletitas_Dulces", categoriumId: 4 },
  { nombre_subcategoria: "Galletitas_Saladas", categoriumId: 4 },
  { nombre_subcategoria: "Galletitas_de_Arroz", categoriumId: 4 },
  { nombre_subcategoria: "Pan_Árabe_y_Otros", categoriumId: 5 },
  { nombre_subcategoria: "Pan_de_Molde", categoriumId: 5 },
  { nombre_subcategoria: "Pan_de_Hamburguesas_y_Panchos", categoriumId: 5 },
  { nombre_subcategoria: "Pan_Rallado_y_Rebozadores", categoriumId: 5 },
  { nombre_subcategoria: "Tostadas", categoriumId: 5 },
  { nombre_subcategoria: "Budines_y_Otros", categoriumId: 5 },
  { nombre_subcategoria: "Prepizzas", categoriumId: 5 },
  { nombre_subcategoria: "Madalenas", categoriumId: 5 },
  { nombre_subcategoria: "Arroz_Largo", categoriumId: 6 },
  { nombre_subcategoria: "Arroz_Parboil", categoriumId: 6 },
  { nombre_subcategoria: "Arroz_Doble", categoriumId: 6 },
  { nombre_subcategoria: "Arroz_Integral", categoriumId: 6 },
  { nombre_subcategoria: "Arroz_Especial", categoriumId: 6 },
  { nombre_subcategoria: "Arroz_Preparado", categoriumId: 6 },
  { nombre_subcategoria: "Legumbres", categoriumId: 6 },
  { nombre_subcategoria: "Papas_Fritas", categoriumId: 7 },
  { nombre_subcategoria: "Chizitos", categoriumId: 7 },
  { nombre_subcategoria: "Maní", categoriumId: 7 },
  { nombre_subcategoria: "Palitos", categoriumId: 7 },
  { nombre_subcategoria: "Tortillas", categoriumId: 7 },
  { nombre_subcategoria: "Pochoclos", categoriumId: 7 },
  { nombre_subcategoria: "Conos", categoriumId: 7 },
  { nombre_subcategoria: "Snacks_Mix", categoriumId: 7 },
  { nombre_subcategoria: "Frutas_Secas", categoriumId: 7 },
  { nombre_subcategoria: "Sopas", categoriumId: 8 },
  { nombre_subcategoria: "Caldos", categoriumId: 8 },
  { nombre_subcategoria: "Puré", categoriumId: 8 },
  { nombre_subcategoria: "Pastas", categoriumId: 9 },
  { nombre_subcategoria: "Harinas", categoriumId: 9 },
  { nombre_subcategoria: "Leches", categoriumId: 10 },
  { nombre_subcategoria: "Leches infantiles", categoriumId: 10 },
  { nombre_subcategoria: "Yogures", categoriumId: 10 },
  { nombre_subcategoria: "Cremas de Leche", categoriumId: 10 },
  { nombre_subcategoria: "Dulce de Leche", categoriumId: 10 },
  { nombre_subcategoria: "Levaduras y Grasas", categoriumId: 10 },
  { nombre_subcategoria: "Mantecas y Margarinas", categoriumId: 10 },
  { nombre_subcategoria: "Postres y Flanes", categoriumId: 10 },
  { nombre_subcategoria: "Ricota", categoriumId: 10 },
  { nombre_subcategoria: "Quesos Untables", categoriumId: 10 },
  { nombre_subcategoria: "Fideos", categoriumId: 11 },
  { nombre_subcategoria: "Ñoquis", categoriumId: 11 },
  { nombre_subcategoria: "Pastas Rellenas", categoriumId: 11 },
  { nombre_subcategoria: "Tapas de Tarta", categoriumId: 11 },
  { nombre_subcategoria: "Tapas de Empanadas", categoriumId: 11 },
  { nombre_subcategoria: "Otras Tapas", categoriumId: 11 },
  { nombre_subcategoria: "Carne de cerdo", categoriumId: 12 },
  { nombre_subcategoria: "Carne Vacuna", categoriumId: 12 },
  { nombre_subcategoria: "Carnes Preparadas", categoriumId: 12 },
  { nombre_subcategoria: "Embutidos", categoriumId: 12 },
  { nombre_subcategoria: "Pollo", categoriumId: 12 },
  { nombre_subcategoria: "Huevos", categoriumId: 12 },
  { nombre_subcategoria: "Pescados y Mariscos", categoriumId: 12 },
  { nombre_subcategoria: "Carbón, Leña y Encendido", categoriumId: 12 },
  { nombre_subcategoria: "Granja", categoriumId: 12 },
  { nombre_subcategoria: "Frutas", categoriumId: 13 },
  { nombre_subcategoria: "Frutas Secas y Desecadas", categoriumId: 13 },
  { nombre_subcategoria: "Verduras", categoriumId: 13 },
  { nombre_subcategoria: "Fiambres", categoriumId: 14 },
  { nombre_subcategoria: "Salchichas", categoriumId: 14 },
  { nombre_subcategoria: "Quesos Blandos", categoriumId: 14 },
  { nombre_subcategoria: "Quesos Semiduros", categoriumId: 14 },
  { nombre_subcategoria: "Quesos Duros", categoriumId: 14 },
  { nombre_subcategoria: "Quesos Rallados", categoriumId: 14 },
  { nombre_subcategoria: "Dulces", categoriumId: 14 },
  { nombre_subcategoria: "Quesos Especiales", categoriumId: 14 },
  { nombre_subcategoria: "Hamburguesas", categoriumId: 15 },
  { nombre_subcategoria: "Papas", categoriumId: 15 },
  { nombre_subcategoria: "Milanesas de Soja", categoriumId: 15 },
  { nombre_subcategoria: "Prefritos", categoriumId: 15 },
  { nombre_subcategoria: "Vegetales", categoriumId: 15 },
  { nombre_subcategoria: "Comidas Preparadas", categoriumId: 15 },
  { nombre_subcategoria: "Pizzas", categoriumId: 15 },
  { nombre_subcategoria: "Helados", categoriumId: 15 },
  { nombre_subcategoria: "Frutas", categoriumId: 15 },
  { nombre_subcategoria: "Donuts", categoriumId: 16 },
  { nombre_subcategoria: "Facturería", categoriumId: 16 },
  { nombre_subcategoria: "Galletitas, alfajores y panes dulces", categoriumId: 16,},
  { nombre_subcategoria: "Panificados", categoriumId: 16 },
  { nombre_subcategoria: "Piononos, budines y madalenas", categoriumId: 16 },
  { nombre_subcategoria: "Sandwichería", categoriumId: 16 },
  { nombre_subcategoria: "Tortas y tartas", categoriumId: 16 },
  { nombre_subcategoria: "Americano", categoriumId: 17 },
  { nombre_subcategoria: "Fernet", categoriumId: 17 },
  { nombre_subcategoria: "Otros Aperitivos", categoriumId: 17 },
  { nombre_subcategoria: "Negras y Rojas", categoriumId: 18 },
  { nombre_subcategoria: "Rubias", categoriumId: 18 },
  { nombre_subcategoria: "Sin Alcohol", categoriumId: 18 },
  { nombre_subcategoria: "Espumantes", categoriumId: 19 },
  { nombre_subcategoria: "Vino Blanco", categoriumId: 19 },
  { nombre_subcategoria: "Vino Rosado", categoriumId: 19 },
  { nombre_subcategoria: "Vino Tinto", categoriumId: 19 },
  { nombre_subcategoria: "Bebidas Blancas", categoriumId: 20 },
  { nombre_subcategoria: "Licores", categoriumId: 20 },
  { nombre_subcategoria: "Whiskys", categoriumId: 20 },
  { nombre_subcategoria: "Amargos", categoriumId: 21 },
  { nombre_subcategoria: "Agua Con Gas", categoriumId: 22 },
  { nombre_subcategoria: "Agua Saborizada", categoriumId: 22 },
  { nombre_subcategoria: "Agua Sin Gas", categoriumId: 22 },
  { nombre_subcategoria: "Cola", categoriumId: 23 },
  { nombre_subcategoria: "Gaseosa de Naranja", categoriumId: 23 },
  { nombre_subcategoria: "Gaseosa Sabor Pomelo", categoriumId: 23 },
  { nombre_subcategoria: "Lima Limón", categoriumId: 23 },
  { nombre_subcategoria: "Otras Gaseosas", categoriumId: 23 },
  { nombre_subcategoria: "Tónica", categoriumId: 23 },
  { nombre_subcategoria: "Jugos Concentrados", categoriumId: 24 },
  { nombre_subcategoria: "Jugos en Polvo", categoriumId: 24 },
  { nombre_subcategoria: "Jugos Listos", categoriumId: 24 },
  { nombre_subcategoria: "Jugos Refrigerados", categoriumId: 24 },
  { nombre_subcategoria: "Energizantes", categoriumId: 25 },
  { nombre_subcategoria: "Isotónicas", categoriumId: 25 },
];

const productos = [
  {
    nombre: "arroz",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "kg",
    subcategoriumId: 42,
  },
  {
    nombre: "papa",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "kg",
    subcategoriumId: 90,
  },
  {
    nombre: "leche_normal",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "lt",
    subcategoriumId: 63,
  },
  {
    nombre: "huevos",
    contenido_neto: 30,
    unidadMedidaCodigoUnidadMedida: "un",
    subcategoriumId: 84,
  },
  {
    nombre: "harina_trigo",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "kg",
    subcategoriumId: 62,
  },
  {
    nombre: "café",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "kg",
    subcategoriumId: 25,
  },
  {
    nombre: "pan_tajado",
    contenido_neto: 400,
    unidadMedidaCodigoUnidadMedida: "gr",
    subcategoriumId: 35,
  },
  {
    nombre: "azucar",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "kg",
    subcategoriumId: 21,
  },
  {
    nombre: "sal",
    contenido_neto: 1,
    unidadMedidaCodigoUnidadMedida: "kg",
    subcategoriumId: 10,
  },
];

const desafios = [
  {
    nombre_desafio: "canasta familiar arroz" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 1 , 
    clienteId: 1 , 
    url_image: "https://www.clikisalud.net/wp-content/uploads/2021/01/vida-util-arroz-seco-crudo.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
    // fecha_final:  "21-06-24"

  },
  {
    nombre_desafio: "canasta familiar papa" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 2 , 
    clienteId: 1 , 
    url_image: "https://www.ecured.cu/images/thumb/1/14/1603480088968.jpg/260px-1603480088968.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  {
    nombre_desafio: "canasta familiar leche_normal" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 3 , 
    clienteId: 1 , 
    url_image: "https://static2.abc.es/media/bienestar/2020/07/09/leche-fucha-khMC--620x349@abc.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  {
    nombre_desafio: "canasta familiar huevos" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 4 , 
    clienteId: 1 , 
    url_image: "https://imgmedia.buenazo.pe/640x345/buenazo/original/2020/09/24/5f6d16de332f3648fb38e85a.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  {
    nombre_desafio: "canasta familiar harina_trigo" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 5 , 
    clienteId: 1 , 
    url_image: "https://www.lavanguardia.com/uploads/2018/06/22/5e9977f7b0a30.jpeg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  {
    nombre_desafio: "canasta familiar café" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 6 , 
    clienteId: 1 , 
    url_image: "https://www.javeriana.edu.co/pesquisa/wp-content/uploads/2020/10/Banner.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  {
    nombre_desafio: "canasta familiar pan_tajado" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 7 , 
    clienteId: 1 , 
    url_image: "https://laalacenadelchef.co/wp-content/uploads/2019/07/descarga.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  {
    nombre_desafio: "canasta familiar azucar" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 8 , 
    clienteId: 1 , 
    url_image: "https://storage.googleapis.com/statics-pro-uriach-web/images/azucar.height-310.png" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-12-31"
  },
  // {
  //   nombre_desafio: "canasta familiar sal" , 
  //   descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
  //   productoId: 9 , 
  //   clienteId: 1 , 
  //   url_image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg" , 
  //   fecha_inicial: "21-06-10" ,
  //   fecha_final:  "21-12-31"
  // },
  // {
  //   nombre_desafio: "finalizado 1" , 
  //   descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
  //   productoId: 9 , 
  //   clienteId: 1 , 
  //   url_image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg" , 
  //   fecha_inicial: "21-06-10" ,
  //   fecha_final:  "21-06-12"
  // },
  {
    nombre_desafio: "finalizado 2" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 9 , 
    clienteId: 1 , 
    url_image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-06-29"
  },
  {
    nombre_desafio: "finalizado 3" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 9 , 
    clienteId: 1 , 
    url_image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg" , 
    fecha_inicial: "21-06-10" ,
    fecha_final:  "21-06-29"
  },
  {
    nombre_desafio: "programado 1" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 9 , 
    clienteId: 1 , 
    url_image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg" , 
    fecha_inicial: "21-07-10" ,
    fecha_final:  "21-08-30"
  },
  {
    nombre_desafio: "programado 2" , 
    descripcion_desafio: "comparte los precios con tu comunidad  para beneficio de todos" ,
    productoId: 9 , 
    clienteId: 1 , 
    url_image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C894/production/_115784315_gettyimages-827818618.jpg" , 
    fecha_inicial: "21-08-10" ,
    fecha_final:  "21-10-01"
  },

];

const detalle_desafios = [
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 25 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 1 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 2 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 9 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 19 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 38 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 39 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 40 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 26 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 128 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 41 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 42 ,desafioId: 9},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 1},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 2},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 3},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 4},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 5},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 6},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 7},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 8},
  {puntos_ganar: 200 ,cantidad_precios: 100 , ciudadId: 43 ,desafioId: 9},

];

const precios=[
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 1 ,nombre_negocio: "mercadito 1", direccion_negocio: "calle principal esquina 12 -35", precio: 30 , desafioId: 1, ciudadId: 1},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 2 ,nombre_negocio: "mercadito 2", direccion_negocio: "calle principal esquina 12 -36", precio: 25 , desafioId: 1, ciudadId: 2},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 3 ,nombre_negocio: "mercadito 3", direccion_negocio: "calle principal esquina 12 -37", precio: 27 , desafioId: 1, ciudadId: 9},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 4 ,nombre_negocio: "mercadito 4", direccion_negocio: "calle principal esquina 12 -38", precio: 10 , desafioId: 1, ciudadId: 19},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 5 ,nombre_negocio: "mercadito 5", direccion_negocio: "calle principal esquina 12 -39", precio: 33 , desafioId: 1, ciudadId: 25},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 1 ,nombre_negocio: "mercadito 6", direccion_negocio: "calle principal esquina 12 -40", precio: 25 , desafioId: 2, ciudadId: 1},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 2 ,nombre_negocio: "mercadito 7", direccion_negocio: "calle principal esquina 12 -41", precio: 23 , desafioId: 2, ciudadId: 2},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 3 ,nombre_negocio: "mercadito 8", direccion_negocio: "calle principal esquina 12 -42", precio: 27 , desafioId: 2, ciudadId: 9},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 4 ,nombre_negocio: "mercadito 9", direccion_negocio: "calle principal esquina 12 -43", precio: 24 , desafioId: 2, ciudadId: 19},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 5 ,nombre_negocio: "mercadito 10", direccion_negocio: "calle principal esquina 12 -44", precio: 26 , desafioId: 2, ciudadId: 25},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 1 ,nombre_negocio: "mercadito 11", direccion_negocio: "calle principal esquina 12 -45", precio: 80 , desafioId: 3, ciudadId: 1},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 2 ,nombre_negocio: "mercadito 12", direccion_negocio: "calle principal esquina 12 -46", precio: 75 , desafioId: 3, ciudadId: 2},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 3 ,nombre_negocio: "mercadito 13", direccion_negocio: "calle principal esquina 12 -47", precio: 81 , desafioId: 3, ciudadId: 9},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 4 ,nombre_negocio: "mercadito 14", direccion_negocio: "calle principal esquina 12 -48", precio: 90 , desafioId: 3, ciudadId: 19},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 5 ,nombre_negocio: "mercadito 15", direccion_negocio: "calle principal esquina 12 -49", precio: 88 , desafioId: 3, ciudadId: 25},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 1 ,nombre_negocio: "mercadito 16", direccion_negocio: "calle principal esquina 12 -50", precio: 30 , desafioId: 4, ciudadId: 1},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 2 ,nombre_negocio: "mercadito 17", direccion_negocio: "calle principal esquina 12 -51", precio: 25 , desafioId: 4, ciudadId: 2},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 3 ,nombre_negocio: "mercadito 18", direccion_negocio: "calle principal esquina 12 -52", precio: 27 , desafioId: 4, ciudadId: 9},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 4 ,nombre_negocio: "mercadito 19", direccion_negocio: "calle principal esquina 12 -53", precio: 10 , desafioId: 4, ciudadId: 19},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 5 ,nombre_negocio: "mercadito 20", direccion_negocio: "calle principal esquina 12 -54", precio: 33 , desafioId: 4, ciudadId: 25},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 1 ,nombre_negocio: "mercadito 21", direccion_negocio: "calle principal esquina 12 -55", precio: 25 , desafioId: 5, ciudadId: 1},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 2 ,nombre_negocio: "mercadito 22", direccion_negocio: "calle principal esquina 12 -56", precio: 23 , desafioId: 5, ciudadId: 2},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 3 ,nombre_negocio: "mercadito 23", direccion_negocio: "calle principal esquina 12 -57", precio: 27 , desafioId: 5, ciudadId: 9},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 4 ,nombre_negocio: "mercadito 24", direccion_negocio: "calle principal esquina 12 -58", precio: 24 , desafioId: 5, ciudadId: 19},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 5 ,nombre_negocio: "mercadito 25", direccion_negocio: "calle principal esquina 12 -59", precio: 26 , desafioId: 5, ciudadId: 25},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 1 ,nombre_negocio: "mercadito 26", direccion_negocio: "calle principal esquina 12 -60", precio: 80 , desafioId: 6, ciudadId: 1},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 2 ,nombre_negocio: "mercadito 27", direccion_negocio: "calle principal esquina 12 -61", precio: 75 , desafioId: 6, ciudadId: 2},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 3 ,nombre_negocio: "mercadito 28", direccion_negocio: "calle principal esquina 12 -62", precio: 81 , desafioId: 6, ciudadId: 9},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 4 ,nombre_negocio: "mercadito 29", direccion_negocio: "calle principal esquina 12 -63", precio: 90 , desafioId: 6, ciudadId: 19},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 5 ,nombre_negocio: "mercadito 30", direccion_negocio: "calle principal esquina 12 -64", precio: 88 , desafioId: 6, ciudadId: 25},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 1 ,nombre_negocio: "mercadito 31", direccion_negocio: "calle principal esquina 12 -65", precio: 30 , desafioId: 7, ciudadId: 1},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 2 ,nombre_negocio: "mercadito 32", direccion_negocio: "calle principal esquina 12 -66", precio: 25 , desafioId: 7, ciudadId: 2},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 3 ,nombre_negocio: "mercadito 33", direccion_negocio: "calle principal esquina 12 -67", precio: 27 , desafioId: 7, ciudadId: 9},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 4 ,nombre_negocio: "mercadito 34", direccion_negocio: "calle principal esquina 12 -68", precio: 10 , desafioId: 7, ciudadId: 19},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 5 ,nombre_negocio: "mercadito 35", direccion_negocio: "calle principal esquina 12 -69", precio: 33 , desafioId: 7, ciudadId: 25},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 1 ,nombre_negocio: "mercadito 36", direccion_negocio: "calle principal esquina 12 -70", precio: 25 , desafioId: 8, ciudadId: 1},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 2 ,nombre_negocio: "mercadito 37", direccion_negocio: "calle principal esquina 12 -71", precio: 23 , desafioId: 8, ciudadId: 2},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 3 ,nombre_negocio: "mercadito 38", direccion_negocio: "calle principal esquina 12 -72", precio: 27 , desafioId: 8, ciudadId: 9},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 4 ,nombre_negocio: "mercadito 39", direccion_negocio: "calle principal esquina 12 -73", precio: 24 , desafioId: 8, ciudadId: 19},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 5 ,nombre_negocio: "mercadito 40", direccion_negocio: "calle principal esquina 12 -74", precio: 26 , desafioId: 8, ciudadId: 25},
  {latitud: "-34.920345" ,longitud: "-57.969559" , usuarioId: 1 ,nombre_negocio: "mercadito 41", direccion_negocio: "calle principal esquina 12 -75", precio: 80 , desafioId: 9, ciudadId: 1},
  {latitud: "-34.796581" ,longitud: "-58.276012" , usuarioId: 2 ,nombre_negocio: "mercadito 42", direccion_negocio: "calle principal esquina 12 -76", precio: 75 , desafioId: 9, ciudadId: 2},
  {latitud: "-31.416668" ,longitud: "-64.183334" , usuarioId: 3 ,nombre_negocio: "mercadito 43", direccion_negocio: "calle principal esquina 12 -77", precio: 81 , desafioId: 9, ciudadId: 9},
  {latitud: "-38.7195900" ,longitud: "-62.2724300" , usuarioId: 4 ,nombre_negocio: "mercadito 44", direccion_negocio: "calle principal esquina 12 -78", precio: 90 , desafioId: 9, ciudadId: 19},
  {latitud: "-31.73197" ,longitud: "-60.5238" , usuarioId: 5 ,nombre_negocio: "mercadito 45", direccion_negocio: "calle principal esquina 12 -79", precio: 88 , desafioId: 9, ciudadId: 25},
  {latitud: "4.568745647" ,longitud: "-74.23782559" , usuarioId: 6 ,nombre_negocio: "probando mercado", direccion_negocio: "cerca a mi casa", precio: 37 , desafioId: 1, ciudadId: 38},
  {latitud: "-36.91525563057015" ,longitud: "-60.30955530815266" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 1", direccion_negocio: "Calle 15 - 21", precio: 33 , desafioId: 1, ciudadId: 41},
  {latitud: "-36.915488750473024" ,longitud: "-60.31194722945527" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 2", direccion_negocio: "Calle 15 - 22", precio: 25 , desafioId: 2, ciudadId: 41},
  {latitud: "-36.91682660212205" ,longitud: "-60.308158217811275" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 3", direccion_negocio: "Calle 15 - 23", precio: 23 , desafioId: 3, ciudadId: 41},
  {latitud: "-36.91911937162247" ,longitud: "-60.31118856672406" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 4", direccion_negocio: "Calle 15 - 24", precio: 27 , desafioId: 4, ciudadId: 41},
  {latitud: "-36.90016942208402" ,longitud: "-60.308964108347254" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 5", direccion_negocio: "Calle 15 - 25", precio: 24 , desafioId: 5, ciudadId: 41},
  {latitud: "-36.89298606353374" ,longitud: "-60.30677921565554" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 6", direccion_negocio: "Calle 15 - 26", precio: 26 , desafioId: 6, ciudadId: 41},
  {latitud: "-36.909293253952356" ,longitud: "-60.316732615695564" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 7", direccion_negocio: "Calle 15 - 27", precio: 80 , desafioId: 7, ciudadId: 41},
  {latitud: "-36.78849046262901" ,longitud: "-59.85993881333804" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 8", direccion_negocio: "Calle 15 - 28", precio: 75 , desafioId: 8, ciudadId: 42},
  {latitud: "-36.78640958960065" ,longitud: "-59.85041175024488" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 9", direccion_negocio: "Calle 15 - 29", precio: 33 , desafioId: 9, ciudadId: 42},
  {latitud: "-36.791958458762664" ,longitud: "-59.870909370839286" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 10", direccion_negocio: "Calle 15 - 30", precio: 28 , desafioId: 1, ciudadId: 42},
  {latitud: "-36.41591181111605" ,longitud: "-60.67308564618819" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 11", direccion_negocio: "Calle 15 - 31", precio: 24 , desafioId: 7, ciudadId: 43},
  {latitud: "-36.41515203256171" ,longitud: "-60.67574639761001" , usuarioId: 13 ,nombre_negocio: "Mercados Lisandro 12", direccion_negocio: "Calle 15 - 32", precio: 55 , desafioId: 9, ciudadId: 43},
  
]
  
  const usuarios = [
    {
      nombre: "Pedro" ,
      apellido: "Perez" ,
      email:'pedroperez@correo.com', 
      fecha_de_nacimiento: [2000, 12, 05] ,
      ciudadId: 1, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "CITY-BANK" , 
      numero_de_cuenta: "123456789" , 
      tipoUsuarioId: 1, 
      password: "abc1234"
    },
    {
      nombre: "Juana" ,
      apellido: "Gomez" , 
      email:'juanagomez@correo.com', 
      fecha_de_nacimiento: [1998, 06, 13] ,
      ciudadId: 2, 
      generoId: 1, 
      metodo_de_cobro: "PSE" , 
      banco: "DAVIVIENDA" , 
      numero_de_cuenta: "654878911" , 
      tipoUsuarioId: 1, 
      password: "xyz6543"
    },
    {
      nombre: "Mario" ,
      apellido: "Gonzalez" , 
      email:'mariogonzalez@correo.com', 
      fecha_de_nacimiento: [1996, 03, 26] ,
      ciudadId: 9, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "258963147" , 
      tipoUsuarioId: 1, 
      password: "ASD658"
    },
    {
      nombre: "Ana" ,
      apellido: "Vargas" , 
      email:'analvargas@correo.com', 
      fecha_de_nacimiento: [2001, 04, 02] ,
      ciudadId: 19, 
      generoId: 1, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "654321987" , 
      tipoUsuarioId: 1, 
      password: "OIU457"
    },
    {
      nombre: "Nina" ,
      apellido: "Otalora" , 
      email:'ninaotalora@correo.com', 
      fecha_de_nacimiento: [2005, 04, 02] ,
      ciudadId: 25, 
      generoId: 1, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "951236478" , 
      tipoUsuarioId: 1, 
      password: "PÑL965"
    },
    {
      nombre: "Pablo" ,
      apellido: "Molina" , 
      email: "pmolina9876@gmail.com" , 
      fecha_de_nacimiento: [2001, 04, 15] ,
      ciudadId: 38, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "24681012140" , 
      tipoUsuarioId: 1, 
      password: "Pablo20010415"
    },
    {
      nombre: "German" ,
      apellido: "Derbes" , 
      email: "derbes.g@hotmail.com.ar" , 
      fecha_de_nacimiento: [1994, 10, 13] ,
      ciudadId: 1, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "13579111315" , 
      tipoUsuarioId: 1, 
      password: "German19941013"
    },
    {
      nombre: "Tomas" ,
      apellido: "Torales" , 
      email: "toralestomas1@gmail.com" , 
      fecha_de_nacimiento: [1997, 08, 18] ,
      ciudadId: 39, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "49362024280" , 
      tipoUsuarioId: 1, 
      password: "Tomas19970818"
    },
    {
      nombre: "Marco" ,
      apellido: "Demaio" , 
      email: "marcopablodemaio@gmail.com" , 
      fecha_de_nacimiento: [1995, 04, 19] ,
      ciudadId: 40, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "27158222630" , 
      tipoUsuarioId: 1, 
      password: "Marco19950419"
    },
    {
      nombre: "Nicolas" ,
      apellido: "Arguello" , 
      email: "nicoarguello36@gmail.com" , 
      fecha_de_nacimiento: [1985, 08, 08] ,
      ciudadId: 2, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "40737333945" , 
      tipoUsuarioId: 1, 
      password: "Nicolas19850808"
    },
    {
      nombre: "Cristian" ,
      apellido: "Fernandez" 
      , email: "cfernandezpando@gmail.com" , 
      fecha_de_nacimiento: [1998, 11, 10] ,
      ciudadId: 26, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "54316445260" , 
      tipoUsuarioId: 1, 
      password: "Cristian19981110"
    },
    {
      nombre: "Carlos" ,
      apellido: "Lozano" , 
      email: "excelsus.cl@gmail.com" , 
      fecha_de_nacimiento: [1978, 03, 26] ,
      ciudadId: 128, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "DAVIPLATA" , 
      numero_de_cuenta: "12340506070" , 
      tipoUsuarioId: 1, 
      password: "Carlos19780326"
    },
    {
      nombre: "Lisandro" ,
      apellido: "Salvareschi" , 
      email: "salvareschilisandro0@gmail.com" , 
      fecha_de_nacimiento: [1998, 03, 19] ,
      ciudadId: 41, 
      generoId: 2, 
      metodo_de_cobro: "PSE" , 
      banco: "MERCADO PAGO" , 
      numero_de_cuenta: "37021518210" , 
      tipoUsuarioId: 1, 
      password: "Lisandro19980319"
    },

  ]
  
  const generos = [
    {genero: "femenino"},
    {genero: "masculino"},
    {genero: "no binario"},
  ]
  
  const clientes =[
    {razon_social: "Price Hunter Asociados ARG / COL" , nombre_cial_fantasia: "Price Hunter" ,cuit_nit_rut: "800123456" , email: 'pricehunter@correo.com', telefono: "3112546025" ,direccion_fiscal: "cra 5 este 47 - 49", ciudadId: 1, metodo_pago: "PSE" , banco: "MERCADO PAGO" , numero_cuenta: "954786321" , tipoUsuarioId: 2, password: "phunter98756"},
    {razon_social: "Soy Henry" , nombre_cial_fantasia: "Soy Henry" ,cuit_nit_rut: "800123654" , email: 'soyhenry@correo.com',telefono: "121465488" ,direccion_fiscal: "calle p no 85 - 12", ciudadId: 1, metodo_pago: "PSE" , banco: "MERCADO PAGO" , numero_cuenta: "987412545" , tipoUsuarioId: 2, password: "soyhenry123"},
  ]

  const administradores =[
    {email: "admin1@correo.com" , nombre: "adminhunter1" , tipoUsuarioId: 3, password: "admin1abc"},
    {email: "admin2@correo.com" , nombre: "adminhunter2" , tipoUsuarioId: 3, password: "admin2xyz"},
  ]
  
const regiones = [
  { nombre_region: "America del Sur" },
  { nombre_region: "Antillas/Caribe" },
  { nombre_region: "Pacifico" },
];

const monedas = [
  { codigo_moneda: "ARS", nombre_moneda: "peso argentino", simbolo: "$" },
  { codigo_moneda: "BOB", nombre_moneda: "boliviano", simbolo: "Bs." },
  { codigo_moneda: "BRL", nombre_moneda: "real brasileño", simbolo: "R$" },
  { codigo_moneda: "CLP", nombre_moneda: "peso chileno", simbolo: "$" },
  { codigo_moneda: "COP", nombre_moneda: "peso colombiano", simbolo: "$" },
  { codigo_moneda: "CRC", nombre_moneda: "colón costarricense", simbolo: "$" },
  {
    codigo_moneda: "CUC",
    nombre_moneda: "peso cubano convertible",
    simbolo: "$",
  },
  { codigo_moneda: "USD", nombre_moneda: "dólar estadounidense", simbolo: "$" },
  { codigo_moneda: "GTQ", nombre_moneda: "quetzal guatemalteco", simbolo: "Q" },
  { codigo_moneda: "HTG", nombre_moneda: "gourde haitiano", simbolo: "G" },
  { codigo_moneda: "HNL", nombre_moneda: "lempira hondureño", simbolo: "L" },
  { codigo_moneda: "MXN", nombre_moneda: "peso mexicano", simbolo: "$" },
  {
    codigo_moneda: "NIO",
    nombre_moneda: "córdoba nicaragüense",
    simbolo: "C$",
  },
  { codigo_moneda: "PAB", nombre_moneda: "balboa panameña", simbolo: "B/." },
  { codigo_moneda: "PYG", nombre_moneda: "guaraní", simbolo: "$" },

  { codigo_moneda: "PEN", nombre_moneda: "nuevo sol peruano", simbolo: "S /." },
  { codigo_moneda: "DOP", nombre_moneda: "peso dominicano", simbolo: "$" },
  { codigo_moneda: "UYU", nombre_moneda: "peso uruguayo", simbolo: "$" },
  { codigo_moneda: "VES", nombre_moneda: "bolívar soberano", simbolo: "B $" },
];
const paises = [
  {
    codigo_alfa: "ARG",
    nombre_pais: "Argentina",
    monedaCodigoMoneda: "ARS",
    regioneId: 1,
  },
  {
    codigo_alfa: "BOL",
    nombre_pais: "Bolivia",
    monedaCodigoMoneda: "BOB",
    regioneId: 1,
  },
  {
    codigo_alfa: "BRA",
    nombre_pais: "Brasil",
    monedaCodigoMoneda: "BRL",
    regioneId: 1,
  },
  {
    codigo_alfa: "CHL",
    nombre_pais: "Chile",
    monedaCodigoMoneda: "CLP",
    regioneId: 1,
  },
  {
    codigo_alfa: "COL",
    nombre_pais: "Colombia",
    monedaCodigoMoneda: "COP",
    regioneId: 1,
  },
  {
    codigo_alfa: "CRC",
    nombre_pais: "Costa Rica",
    monedaCodigoMoneda: "CRC",
    regioneId: 1,
  },
  {
    codigo_alfa: "CUB",
    nombre_pais: "Cuba",
    monedaCodigoMoneda: "CUC",
    regioneId: 2,
  },
  {
    codigo_alfa: "ECU",
    nombre_pais: "Ecuador",
    monedaCodigoMoneda: "USD",
    regioneId: 1,
  },
  {
    codigo_alfa: "GTM",
    nombre_pais: "Guatemala",
    monedaCodigoMoneda: "GTQ",
    regioneId: 1,
  },
  {
    codigo_alfa: "HTI",
    nombre_pais: "Haití",
    monedaCodigoMoneda: "HTG",
    regioneId: 2,
  },
  {
    codigo_alfa: "HND",
    nombre_pais: "Honduras",
    monedaCodigoMoneda: "HNL",
    regioneId: 1,
  },
  {
    codigo_alfa: "MEX",
    nombre_pais: "México",
    monedaCodigoMoneda: "MXN",
    regioneId: 1,
  },
  {
    codigo_alfa: "NIC",
    nombre_pais: "Nicaragua",
    monedaCodigoMoneda: "NIO",
    regioneId: 1,
  },
  {
    codigo_alfa: "PAN",
    nombre_pais: "Panamá",
    monedaCodigoMoneda: "PAB",
    regioneId: 3,
  },
  {
    codigo_alfa: "PRY",
    nombre_pais: "Paraguay",
    monedaCodigoMoneda: "PYG",
    regioneId: 1,
  },
  {
    codigo_alfa: "PER",
    nombre_pais: "Perú",
    monedaCodigoMoneda: "PEN",
    regioneId: 1,
  },
  {
    codigo_alfa: "DOM",
    nombre_pais: "República Dominicana",
    monedaCodigoMoneda: "DOP",
    regioneId: 2,
  },
  {
    codigo_alfa: "URY",
    nombre_pais: "Uruguay",
    monedaCodigoMoneda: "UYU",
    regioneId: 1,
  },
  {
    codigo_alfa: "VEN",
    nombre_pais: "Venezuela",
    monedaCodigoMoneda: "VES",
    regioneId: 1,
  },
];

const tipo_transaccion =[
  {tipo_transaccion: "Puntos Ganados"},
  {tipo_transaccion: "Puntos Retirados"},
]

const transacciones_puntos =[
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar arroz- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar arroz- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar arroz- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar arroz- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar arroz- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar papa- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar papa- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar papa- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar papa- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar papa- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar leche_normal- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar leche_normal- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar leche_normal- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar leche_normal- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar leche_normal- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar huevos- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar huevos- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar huevos- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar huevos- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar huevos- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar harina_trigo- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar harina_trigo- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar harina_trigo- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar harina_trigo- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar harina_trigo- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar café- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar café- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar café- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar café- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar café- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar pan_tajado- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar pan_tajado- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar pan_tajado- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar pan_tajado- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar pan_tajado- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar azucar- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar azucar- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar azucar- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar azucar- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar azucar- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar sal- Buenos Aires" , 
    usuarioId: 1 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar sal- Córdoba" , 
    usuarioId: 2 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar sal- Bahía Blanca" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar sal- Paraná" , 
    usuarioId: 4 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "Price Hunter Asociados ARG / COL - canasta familiar sal- La Plata" , 
    usuarioId: 5 , 
    puntos: 2 , 
    tipoTransaccionId: 1
  },
  {
    observacion: "PSE - CITY-BANK Cta: ****6789" , 
    usuarioId: 1 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - DAVIVIENDA Cta: ****8911" , 
    usuarioId: 2 , 
    puntos: 3 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****3147" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****1987" , 
    usuarioId: 4 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****6478" , 
    usuarioId: 5 , 
    puntos: 4 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - CITY-BANK Cta: ****6789" , 
    usuarioId: 1 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - DAVIVIENDA Cta: ****8911" , 
    usuarioId: 2 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****3147" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****1987" , 
    usuarioId: 4 , 
    puntos: 3 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****6478" , 
    usuarioId: 5 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - CITY-BANK Cta: ****6789" , 
    usuarioId: 1 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - DAVIVIENDA Cta: ****8911" , 
    usuarioId: 2 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****3147" , 
    usuarioId: 3 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****1987" , 
    usuarioId: 4 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****6478" , 
    usuarioId: 5 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - CITY-BANK Cta: ****6789" , 
    usuarioId: 1 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - DAVIVIENDA Cta: ****8911" , 
    usuarioId: 2 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****3147" , 
    usuarioId: 3 , 
    puntos: 2 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****1987" , 
    usuarioId: 4 , 
    puntos: 1 , 
    tipoTransaccionId: 2
  },
  {
    observacion: "PSE - MERCADO PAGO Cta: ****6478" , 
    usuarioId: 5 , 
    puntos: 3 , 
    tipoTransaccionId: 2
  },
]


const miscelaneas=[
  {campo: "Metros Tolerancia" , dato: "100"},
]


///Esto no es una tabla para postgres
//Hace parte de una función 
const cambiaLetras =[
  {quitar: 'á' , poner : 'a'},
{quitar: 'é' , poner : 'e'},
{quitar: 'í' , poner : 'i'},
{quitar: 'ó' , poner : 'o'},
{quitar: 'ú' , poner : 'u'},
{quitar: 'Á' , poner : 'a'},
{quitar: 'É' , poner : 'e'},
{quitar: 'Í' , poner : 'i'},
{quitar: 'Ó' , poner : 'o'},
{quitar: 'Ú' , poner : 'u'},
{quitar: 'à' , poner : 'a'},
{quitar: 'À' , poner : 'a'},
{quitar: 'â' , poner : 'a'},
{quitar: 'Â' , poner : 'a'},
{quitar: 'ä' , poner : 'a'},
{quitar: 'Ä' , poner : 'a'},
{quitar: 'ã' , poner : 'a'},
{quitar: 'Ã' , poner : 'a'},
{quitar: 'å' , poner : 'a'},
{quitar: 'Å' , poner : 'a'},
{quitar: 'æ' , poner : 'ae'},
{quitar: 'Æ' , poner : 'ae'},
{quitar: 'ß' , poner : 'b'},
{quitar: 'ß' , poner : 'b'},
{quitar: 'ç' , poner : 'c'},
{quitar: 'Ç' , poner : 'c'},
{quitar: 'è' , poner : 'e'},
{quitar: 'È' , poner : 'e'},
{quitar: 'ê' , poner : 'e'},
{quitar: 'Ê' , poner : 'e'},
{quitar: 'ë' , poner : 'e'},
{quitar: 'Ë' , poner : 'e'},
{quitar: 'ì' , poner : 'i'},
{quitar: 'Ì' , poner : 'i'},
{quitar: 'î' , poner : 'i'},
{quitar: 'Î' , poner : 'i'},
{quitar: 'ï' , poner : 'i'},
{quitar: 'Ï' , poner : 'i'},
{quitar: 'ð' , poner : 'o'},
{quitar: 'Ð' , poner : 'o'},
{quitar: 'ò' , poner : 'o'},
{quitar: 'Ò' , poner : 'o'},
{quitar: 'ô' , poner : 'o'},
{quitar: 'Ô' , poner : 'o'},
{quitar: 'ö' , poner : 'o'},
{quitar: 'Ö' , poner : 'o'},
{quitar: 'õ' , poner : 'o'},
{quitar: 'Õ' , poner : 'o'},
{quitar: 'ø' , poner : 'o'},
{quitar: 'Ø' , poner : 'o'},
{quitar: 'ù' , poner : 'u'},
{quitar: 'Ù' , poner : 'u'},
{quitar: 'û' , poner : 'u'},
{quitar: 'Û' , poner : 'u'},
{quitar: 'ü' , poner : 'u'},
{quitar: 'Ü' , poner : 'u'},
{quitar: 'Þ' , poner : 'y'},
{quitar: 'þ' , poner : 'y'},
{quitar: 'Þ' , poner : 'y'},
{quitar: 'Þ' , poner : 'y'},
{quitar: 'ý' , poner : 'y'},
{quitar: 'Ý' , poner : 'y'},
{quitar: 'ÿ' , poner : 'y'},
{quitar: 'Ÿ' , poner : 'y'},
{quitar: '_' , poner : ' '},


]

module.exports = {
  transacciones_puntos,
  tipo_transaccion,
  paises,
  monedas,
  regiones,
  clientes,
  generos,
  usuarios,
  precios,
  detalle_desafios,
  desafios,
  unidades,
  tipo_usuarios,
  familias,
  categorias,
  subcategoria,
  productos,
  miscelaneas,
  administradores,
  cambiaLetras,
};
