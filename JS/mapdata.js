

var simplemaps_countrymap_mapdata = {
  main_settings: {

    // General settings (Configuraciones generales)
    width: "responsive", // Ancho del mapa ('700' para píxeles específicos o 'responsive' para un ancho ajustable)
    background_color: "#0d0f36", // Color de fondo del mapa
    background_transparent: "no", // Si el fondo es transparente o no
    border_color: " ", // Color del borde del mapa (vacío por defecto)

    // State defaults (Valores predeterminados de los estados)
    state_description: "State description", // Descripción predeterminada de los estados
    state_color: "#88A4BC", // Color predeterminado de los estados
    state_hover_color: "#3B729F", // Color de los estados al pasar el ratón
    state_url: "", // URL asociada a los estados
    border_size: "1", // Tamaño del borde de los estados
    all_states_inactive: "no", // Si todos los estados están inactivos
    all_states_zoomable: "yes", // Si se puede hacer zoom en todos los estados
    
    // Location defaults (Valores predeterminados de las ubicaciones)
    location_description: "Location description", // Descripción predeterminada de las ubicaciones
    location_url: "", // URL asociada a las ubicaciones
    location_color: "#FF0067", // Color predeterminado de las ubicaciones
    location_opacity: 0.8, // Opacidad de las ubicaciones
    location_hover_opacity: 1, // Opacidad de las ubicaciones al pasar el ratón
    location_size: 25, // Tamaño de las ubicaciones
    location_type: "square", // Tipo de forma de las ubicaciones (cuadrado)
    location_image_source: "frog.png", // Fuente de la imagen para las ubicaciones
    location_border_color: "#FFFFFF", // Color del borde de las ubicaciones
    location_border: 2, // Tamaño del borde de las ubicaciones
    location_hover_border: 2.5, // Tamaño del borde de las ubicaciones al pasar el ratón
    all_locations_inactive: "no", // Si todas las ubicaciones están inactivas
    all_locations_hidden: "no", // Si todas las ubicaciones están ocultas
    
    // Label defaults (Valores predeterminados de las etiquetas)
    label_color: "#ffffff", // Color de las etiquetas
    label_hover_color: "#ffffff", // Color de las etiquetas al pasar el ratón
    label_size: 16, // Tamaño de las etiquetas
    label_font: "Arial", // Fuente de las etiquetas
    label_display: "auto", // Modo de visualización de las etiquetas
    label_scale: "yes", // Si las etiquetas se escalan con el mapa
    hide_labels: "no", // Si se ocultan las etiquetas
    hide_eastern_labels: "no", // Si se ocultan las etiquetas del este
    
    // Zoom settings (Configuraciones de zoom)
    zoom: "yes", // Si el zoom está habilitado
    manual_zoom: "yes", // Si el zoom manual está habilitado
    back_image: "no", // Si se muestra una imagen de fondo al hacer zoom hacia atrás
    initial_back: "no", // Si hay un estado inicial de zoom hacia atrás
    initial_zoom: "-1", // Nivel inicial de zoom (-1 para el nivel predeterminado)
    initial_zoom_solo: "no", // Si solo el estado inicial tiene zoom
    region_opacity: 1, // Opacidad de las regiones
    region_hover_opacity: 0.6, // Opacidad de las regiones al pasar el ratón
    zoom_out_incrementally: "yes", // Si el zoom se reduce de manera incremental
    zoom_percentage: 0.99, // Porcentaje de zoom
    zoom_time: 0.5, // Tiempo de animación del zoom
    
    // Popup settings (Configuraciones de las ventanas emergentes)
    popup_color: "white", // Color de fondo de las ventanas emergentes
    popup_opacity: 0.9, // Opacidad de las ventanas emergentes
    popup_shadow: 1, // Tamaño de la sombra de las ventanas emergentes
    popup_corners: 5, // Radio de las esquinas redondeadas de las ventanas emergentes
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif", // Fuente de las ventanas emergentes
    popup_nocss: "no", // Si se deshabilitan los estilos CSS de las ventanas emergentes
    
    // Advanced settings (Configuraciones avanzadas)
    div: "map", // ID del div donde se insertará el mapa
    auto_load: "yes", // Si el mapa se carga automáticamente
    url_new_tab: "no", // Si las URLs se abren en una nueva pestaña
    images_directory: "default", // Directorio de las imágenes
    fade_time: 0.1, // Tiempo de desvanecimiento de las transiciones
    link_text: "View Website", // Texto del enlace
    popups: "detect", // Método de detección de ventanas emergentes
    state_image_url: "", // URL de la imagen del estado
    state_image_position: "", // Posición de la imagen del estado
    location_image_url: "", // URL de la imagen de la ubicación
    border_hover_color: "#070706" // Color del borde al pasar el ratón
},


// Asociamos a cada región una informacion que se desplegara cuando esta seccion del mapa sea seleccionado
  state_specific: {
    "0": {},

    // Algunas zonas activas
    COAMA: {
      name: "Amazonas",
      inactive: "yes"
    },
    COANT: {
      name: "Antioquia",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "Antioquia, ubicada en el noroeste de Colombia, no tiene costa en el mar Caribe. Sin embargo, su diversidad geográfica incluye ríos, lagos y embalses que eventualmente desembocan en el Caribe, como el río Cauca. Aunque no se encuentra directamente en la costa, Antioquia contribuye al flujo de agua dulce hacia el mar Caribe, lo que también tiene implicaciones para la biodiversidad y la conservación marina en la región."
    },
    COARA: {
      name: "Arauca",
      inactive: "yes"
    },
    COATL: {
      name: "Atlántico",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "La región del Atlántico, en Colombia, colinda con el Mar Caribe, destacándose por su importancia económica, cultural y turística. Con playas tropicales, aguas cálidas y una rica biodiversidad marina, es un destino popular para el turismo y la pesca comercial.",
      inactive: "no"
    },
    COBOL: {
      name: "Bolívar",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "La región de Bolívar en Colombia se encuentra ubicada en la costa norte del país, limitando con el Mar Caribe. Es conocida por su rica historia colonial, su diversidad cultural y su importante puerto en la ciudad de Cartagena. La región cuenta con hermosas playas, como las de Barú e Islas del Rosario, que atraen a turistas nacionales e internacionales. Además, el Mar Caribe proporciona recursos pesqueros vitales para la economía local."
    },
    COBOY: {
      name: "Boyacá",
      inactive: "yes"
    },
    COCAL: {
      name: "Caldas",
      inactive: "yes"
    },
    COCAQ: {
      name: "Caquetá",
      inactive: "yes"
    },
    COCAS: {
      name: "Casanare",
      inactive: "yes"
    },
    COCAU: {
      name: "Cauca",
      inactive: "no",
      hover_color: "#f1f6ce",
      color: "#294380",
      description: "El departamento del Cauca se encuentra en el suroeste de Colombia y limita con el océano Pacífico. Aunque no tiene costa directa con el mar, su proximidad a esta masa de agua influye en su clima y en la economía regional. El río Cauca, que da nombre al departamento, es uno de los principales cursos de agua de la región y desemboca en el Pacífico."
    },
    COCES: {
      name: "Cesar",
      inactive: "yes"
    },
    COCHO: {
      name: "Chocó",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "El departamento del Chocó, situado en la costa del Pacífico colombiano, alberga una de las regiones más biodiversas del país. Con una vasta extensión de selva tropical y una línea costera que se extiende a lo largo del océano Pacífico, el Chocó es hogar de una rica diversidad marina y terrestre. Sus aguas albergan una gran variedad de especies marinas, incluyendo ballenas jorobadas que migran a la región durante ciertas épocas del año para reproducirse y dar a luz en las cálidas aguas del Pacífico. Además, el Chocó es conocido por sus extensos manglares, que actúan como importantes hábitats para numerosas especies marinas y terrestres, contribuyendo así a la salud del ecosistema marino en la región del Pacífico colombiano."
    },
    COCOR: {
      name: "Córdoba",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "Córdoba, un departamento en la región Caribe de Colombia, se destaca por sus paisajes costeros y su riqueza cultural. Su capital, Montería, es un centro económico y cultural importante. Las playas de San Antero y Puerto Escondido son destinos turísticos populares en la costa del Caribe colombiano, conocidos por sus hermosas playas de arena blanca y aguas cristalinas."
    },
    COCUN: {
      name: "Cundinamarca",
      inactive: "yes"
    },
    COGUA: {
      name: "Guainía",
      inactive: "yes"
    },
    COGUV: {
      name: "Guaviare",
      inactive: "yes"
    },
    COHUI: {
      name: "Huila",
      inactive: "yes"
    },
    COLAG: {
      name: "La Guajira",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "La Guajira limita con el Mar Caribe, ofreciendo una costa extensa de playas de arena blanca y aguas cristalinas. Es hogar de lugares turísticos como Cabo de la Vela y Punta Gallinas, donde los visitantes pueden disfrutar de hermosos paisajes costeros, practicar deportes acuáticos y explorar la rica cultura y tradiciones de las comunidades indígenas que habitan la región."
    },
    COMAG: {
      name: "Magdalena",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "El departamento de Magdalena, en la costa del Caribe colombiano, es conocido por su capital, Santa Marta, una ciudad histórica con playas y parques nacionales. El río Magdalena, que lo atraviesa, ha sido crucial en su historia y economía."
    },
    COMET: {
      name: "Meta",
      inactive: "yes"
    },
    CONAR: {
      name: "Nariño",
      inactive: "no",
      description: "Nariño es un departamento ubicado en el suroeste de Colombia, limitando con el océano Pacífico. Su geografía montañosa desciende abruptamente hacia la costa, lo que genera una región de gran biodiversidad y belleza escénica. Aunque no tiene una extensa línea costera, la influencia del Pacífico se refleja en su clima y economía, especialmente en actividades pesqueras y turísticas. La costa de Nariño alberga ecosistemas marinos importantes y comunidades que dependen de ellos para su sustento.",
      color: "#294380",
      hover_color: "#f1f6ce"
    },
    CONSA: {
      name: "Norte de Santander",
      inactive: "yes"
    },
    COPUT: {
      name: "Putumayo",
      inactive: "yes"
    },
    COQUI: {
      name: "Quindío",
      inactive: "yes"
    },
    CORIS: {
      name: "Risaralda",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce"
    },
    COSAN: {
      name: "Santander",
      inactive: "yes"
    },
    COSAP: {
      name: "San Andrés y Providencia",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce"
    },
    COSUC: {
      name: "Sucre",
      inactive: "no",
      color: "#294380",
      hover_color: "#f1f6ce",
      description: "Sucre, ubicado en la región Caribe de Colombia, es un departamento costero con una rica historia cultural y una diversidad de ecosistemas. Su capital, Sincelejo, es un centro económico y cultural importante en la región. Las playas de Coveñas y Tolú son destinos turísticos populares en la costa del Caribe colombiano, atrayendo a visitantes con sus aguas cálidas y sus hermosos paisajes."
    },
    COTOL: {
      name: "Tolima",
      inactive: "yes"
    },
    COVAC: {
      name: "Valle del Cauca",
      inactive: "no",
      description: "El Valle del Cauca es una región ubicada en el suroeste de Colombia, conocida por su diversidad geográfica y cultural. Aunque no tiene costa directa con el mar Caribe, su proximidad a este océano influye en su clima y en la economía regional. La región cuenta con importantes ríos, como el Cauca y el Dagua, que desembocan en el océano Pacífico. Su ubicación estratégica la convierte en un centro logístico y comercial importante para el país.",
      hover_color: "#f1f6ce",
      color: "#294380"
    },
    COVAU: {
      name: "Vaupés",
      inactive: "yes"
    },
    COVID: {
      name: "Vichada",
      inactive: "yes"
    }
  },

  // Ubicaciones añadidas como el mar caribe y el oceano pacifico
  locations: {
    "0": {
      lat: "12.40",
      lng: "-74.35",
      name: "Mar caribe",
      color: "#294380",
      description: "El Mar Caribe baña las costas septentrionales de Colombia, ofreciendo una amplia diversidad de ecosistemas marinos. Desde las playas de arena blanca en San Andrés y Providencia hasta los arrecifes coralinos del Parque Nacional Tayrona, el Caribe colombiano es hogar de una rica vida marina y una importante fuente de recursos naturales.",
      size: "50",
      type: "circle",
      image_url: "https://images.app.goo.gl/unED8EW9QK9nB8fr8",
      opacity: "1"
    },
    "1": {
      lat: "7.40",
      lng: "-79.30",
      name: "Océano Pacífico",
      color: "#294380",
      description: "El Océano Pacífico bordea la costa occidental de Colombia, brindando un paisaje marino diverso y único. Desde las aguas cálidas del Golfo de Tribugá hasta las profundidades del Pacífico colombiano, este océano alberga una abundante biodiversidad marina y es escenario de importantes actividades pesqueras y comerciales.",
      size: "50",
      type: "circle",
      image_url: "https://images.app.goo.gl/hktVZ7K4TXSaCcyn7",
      opacity: "1"
    }
  },


  // Etiquetas en el mapa que no tienen ningun cuadro de texto, tecnicamente inactivas
  labels: {
    COAMA: {
      name: "Amazonas",
      parent_id: "COAMA"
    },
    COANT: {
      name: "Antioquia",
      parent_id: "COANT"
    },
    COARA: {
      name: "Arauca",
      parent_id: "COARA"
    },
    COATL: {
      name: "Atlántico",
      parent_id: "COATL"
    },
    COBOL: {
      name: "Bolívar",
      parent_id: "COBOL"
    },
    COBOY: {
      name: "Boyacá",
      parent_id: "COBOY"
    },
    COCAL: {
      name: "Caldas",
      parent_id: "COCAL"
    },
    COCAQ: {
      name: "Caquetá",
      parent_id: "COCAQ"
    },
    COCAS: {
      name: "Casanare",
      parent_id: "COCAS"
    },
    COCAU: {
      name: "Cauca",
      parent_id: "COCAU"
    },
    COCES: {
      name: "Cesar",
      parent_id: "COCES"
    },
    COCHO: {
      name: "Chocó",
      parent_id: "COCHO"
    },
    COCOR: {
      name: "Córdoba",
      parent_id: "COCOR"
    },
    COCUN: {
      name: "Cundinamarca",
      parent_id: "COCUN"
    },
    COGUA: {
      name: "Guainía",
      parent_id: "COGUA"
    },
    COGUV: {
      name: "Guaviare",
      parent_id: "COGUV"
    },
    COHUI: {
      name: "Huila",
      parent_id: "COHUI"
    },
    COLAG: {
      name: "La Guajira",
      parent_id: "COLAG"
    },
    COMAG: {
      name: "Magdalena",
      parent_id: "COMAG"
    },
    COMET: {
      name: "Meta",
      parent_id: "COMET"
    },
    CONAR: {
      name: "Nariño",
      parent_id: "CONAR"
    },
    CONSA: {
      name: "Norte de Santander",
      parent_id: "CONSA"
    },
    COPUT: {
      name: "Putumayo",
      parent_id: "COPUT"
    },
    COQUI: {
      name: "Quindío",
      parent_id: "COQUI"
    },
    CORIS: {
      name: "Risaralda",
      parent_id: "CORIS"
    },
    COSAN: {
      name: "Santander",
      parent_id: "COSAN"
    },
    COSAP: {
      name: "San Andrés y Providencia",
      parent_id: "COSAP"
    },
    COSUC: {
      name: "Sucre",
      parent_id: "COSUC"
    },
    COTOL: {
      name: "Tolima",
      parent_id: "COTOL"
    },
    COVAC: {
      name: "Valle del Cauca",
      parent_id: "COVAC"
    },
    COVAU: {
      name: "Vaupés",
      parent_id: "COVAU"
    },
    COVID: {
      name: "Vichada",
      parent_id: "COVID"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};