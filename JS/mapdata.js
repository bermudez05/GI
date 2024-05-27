var simplemaps_countrymap_mapdata = {
  main_settings: {
    // General settings
    width: "responsive", // Define el ancho del mapa como 'responsive' para adaptarse al contenedor
    background_color: "white", // Color de fondo del mapa
    background_transparent: "no", // Si el fondo debe ser transparente
    border_color: "#ffffff", // Color del borde de los estados
    state_description: "", // Descripción predeterminada de los estados (vacía por defecto)
    state_color: "#95aa61", // Color predeterminado de los estados
    state_hover_color: "#d6e68a", // Color de los estados al pasar el ratón por encima
    state_url: "", // URL predeterminada de los estados (vacía por defecto)
    border_size: 1.5, // Tamaño del borde de los estados
    all_states_inactive: "no", // Si todos los estados deben ser inactivos por defecto
    all_states_zoomable: "yes", // Si todos los estados deben ser ampliables por defecto

    // Location settings
    location_description: "", // Descripción predeterminada de las ubicaciones (vacía por defecto)
    location_url: "", // URL predeterminada de las ubicaciones (vacía por defecto)
    location_color: "#9b0000", // Color predeterminado de las ubicaciones
    location_opacity: 0.8, // Opacidad de las ubicaciones
    location_hover_opacity: 1, // Opacidad de las ubicaciones al pasar el ratón por encima
    location_size: 25, // Tamaño predeterminado de las ubicaciones
    location_type: "circle", // Tipo de marcador de las ubicaciones (círculo)
    location_image_source: "frog.png", // Fuente de la imagen de las ubicaciones
    location_border_color: "#FFFFFF", // Color del borde de las ubicaciones
    location_border: 2, // Tamaño del borde de las ubicaciones
    location_hover_border: 2.5, // Tamaño del borde de las ubicaciones al pasar el ratón por encima
    all_locations_inactive: "no", // Si todas las ubicaciones deben ser inactivas por defecto
    all_locations_hidden: "no", // Si todas las ubicaciones deben estar ocultas por defecto

    // Label defaults
    label_color: "#ffffff", // Color predeterminado de las etiquetas
    label_hover_color: "#ffffff", // Color de las etiquetas al pasar el ratón por encima
    label_size: 16, // Tamaño de la fuente de las etiquetas
    label_font: "Arial", // Fuente de las etiquetas
    label_display: "auto", // Cómo se muestran las etiquetas
    label_scale: "yes", // Si las etiquetas deben escalarse con el zoom
    hide_labels: "no", // Si se deben ocultar las etiquetas
    hide_eastern_labels: "no", // Si se deben ocultar las etiquetas del este

    // Zoom settings
    zoom: "yes", // Si el zoom está habilitado
    manual_zoom: "yes", // Si el zoom manual está habilitado
    back_image: "no", // Si se debe usar una imagen de fondo
    initial_back: "no", // Si el fondo inicial debe ser visible
    initial_zoom: "-10", // Nivel de zoom inicial
    initial_zoom_solo: "yes", // Si solo se debe mostrar el nivel de zoom inicial
    region_opacity: 1, // Opacidad de las regiones
    region_hover_opacity: 0.6, // Opacidad de las regiones al pasar el ratón por encima
    zoom_out_incrementally: "yes", // Si se debe hacer zoom out incrementalmente
    zoom_percentage: 0.99, // Porcentaje de zoom
    zoom_time: 0.5, // Duración del zoom

    // Popup settings
    popup_color: "white", // Color de fondo de los popups
    popup_opacity: 0.9, // Opacidad de los popups
    popup_shadow: 1, // Sombra de los popups
    popup_corners: 5, // Radio de las esquinas de los popups
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif", // Fuente de los popups
    popup_nocss: "no", // Si no se debe usar CSS en los popups

    // Advanced settings
    div: "map", // Div contenedor del mapa
    auto_load: "yes", // Si el mapa debe cargarse automáticamente
    url_new_tab: "no", // Si las URLs deben abrirse en una nueva pestaña
    images_directory: "default", // Directorio de imágenes
    fade_time: 0.1, // Tiempo de desvanecimiento
    link_text: "View Website", // Texto del enlace
    popups: "detect", // Cómo se deben mostrar los popups (detecta automáticamente)
    state_image_url: "", // URL de la imagen de los estados
    state_image_position: "", // Posición de la imagen de los estados
    location_image_url: "" // URL de la imagen de las ubicaciones
  },
  // Aquí puedes añadir la configuración específica de estados y ubicaciones


  // Especificamos las caracterizticas que queremos resaltar de cada estado de China, le damos un color a cada región donde 
  // donde se resalta alguna ubicación de templo o lugar sagrado.
  state_specific: {
    CNAH: {
      name: "Anhui Province"
    },
    CNBJ: {
      name: "Beijing Municipality",
      color: "#8c873e"
    },
    CNCQ: {
      name: "Chongqing Municipality"
    },
    CNFJ: {
      name: "Fujian Province"
    },
    CNGD: {
      name: "Guangdong Province"
    },
    CNGS: {
      name: "Gansu province"
    },
    CNGX: {
      name: "Guangxi Zhuang Autonomous Region"
    },
    CNGZ: {
      name: "Guizhou Province"
    },
    CNHA: {
      name: "Henan Province"
    },
    CNHB: {
      name: "Hubei Province",
      color: "#8c873e"
    },
    CNHE: {
      name: "Hebei Province"
    },
    CNHI: {
      name: "Hainan Province"
    },
    CNHK: {
      name: "Hong Kong Special Administrative Region"
    },
    CNHL: {
      name: "Heilongjiang Province"
    },
    CNHN: {
      name: "Hunan Province",
      color: "#8c873e"
    },
    CNJL: {
      name: "Jilin Province"
    },
    CNJS: {
      name: "Jiangsu Province",
      color: "#8c873e"
    },
    CNJX: {
      name: "Jiangxi Province"
    },
    CNLN: {
      name: "Liaoning Province"
    },
    CNMO: {
      name: "Macao Special Administrative Region"
    },
    CNNM: {
      name: "Inner Mongolia Autonomous Region"
    },
    CNNX: {
      name: "Ningxia Hui Autonomous Region"
    },
    CNQH: {
      name: "Qinghai Province"
    },
    CNSC: {
      name: "Sichuan Province",
      color: "#8c873e"
    },
    CNSD: {
      name: "Shandong Province"
    },
    CNSH: {
      name: "Shanghai Municipality"
    },
    CNSN: {
      name: "Shaanxi Province"
    },
    CNSX: {
      name: "Shanxi Province"
    },
    CNTJ: {
      name: "Tianjin Municipality"
    },
    CNTW: {
      name: "Taiwan Province"
    },
    CNXJ: {
      name: "Xinjiang Uygur Autonomous Region"
    },
    CNXZ: {
      name: "Tibet Autonomous Region"
    },
    CNYN: {
      name: "Yunnan Province"
    },
    CNZJ: {
      name: "Zhejiang Province"
    }
  },

  // Ademas de las ubicaciones por región, hacemos uso de ubicaciones especificas ubicadas con coordenadas
  locations: {

    // El formato de cada pop up es sencillo ya que consiste del nombre, una imagen del lugar y una breve descripción de su relevancia
    "0": {
      name: "Monte Wudang",
      lat: "32.398563",
      lng: "111.009890",
      description: "<img src=\"https://image.jimcdn.com/app/cms/image/transf/none/path/sda0477424a35f21c/image/ic61569c9ba3a6759/version/1607197603/image.jpg\" /> Uno de los lugares más sagrados del taoísmo, conocido por sus templos antiguos y su asociación con la alquimia taoísta y las artes marciales."
    },
    "1": {
      lat: "30.966760",
      lng: "103.516640",
      name: "Monte Qingcheng",
      description: "<img src=\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/44/20/a0/entry-to-the-front-mountain.jpg?w=1200&h=-1&s=1\" /> Uno de los lugares de nacimiento del taoísmo, asociado con Lao-Tsé. Cuenta con templos antiguos y paisajes naturales impresionantes."
    },
    "2": {
      lat: "39.88212934124961",
      lng: "116.40664005378359",
      name: "Templo del Cielo ",
      description: "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tO_zkvsE7UTQMH8AeVXuYI0OClTylGZ5ujKe2YPzWQ&s\" /> Construido durante la dinastía Ming, este complejo de templos es un importante sitio para los rituales taoístas de adoración al Cielo."
    },
    "3": {
      lat: "27.292330204105316",
      lng: "112.69059604994219",
      name: "Monte Heng ",
      description: "<img src=\"https://lh6.googleusercontent.com/proxy/Glf_SCVjgzN5stt_cJj60YRPYKpIpIsEgKpszxtpZR-9POAlCe5Nj6zVS7uQk1BDiCJ5PjoOjRh7YKzDEDBnqVvHIHepdCvyI9N0A9FgdOVrY1R61IMP4knsMjrPRNEZFw\" /> Uno de los cinco montes sagrados del taoísmo en China, conocido por su rica historia religiosa y su importancia como lugar de peregrinación."
    },
    "4": {
      lat: "29.046879909932827",
      lng: "110.48173316148794",
      description: "<img src=\"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/af/a4.jpg\" /> Situado en la montaña Tianmen, es conocido por su escalera celestial y sus vistas panorámicas, siendo un lugar sagrado para los practicantes taoístas.",
      name: "Tianmenshan"
    },
    "5": {
      lat: "32.2152073046644",
      lng: "119.41608157513879",
      name: "Jinshan Si",
      description: "<img src=\"https://www.visitourchina.com/FileUpload/FileUpload/110420163921531.jpg\" /> Situado en la montaña Jinshan, este templo taoísta es un importante lugar de culto y peregrinación en la provincia de Jiangsu. Es conocido por su arquitectura tradicional y su impresionante entorno natural."
    }
  },

  // Etiquetas dadas a cada región 
  labels: {
    CNAH: {
      name: "Anhui Province",
      parent_id: "CNAH"
    },
    CNBJ: {
      name: "Beijing Municipality",
      parent_id: "CNBJ"
    },
    CNCQ: {
      name: "Chongqing Municipality",
      parent_id: "CNCQ"
    },
    CNFJ: {
      name: "Fujian Province",
      parent_id: "CNFJ"
    },
    CNGD: {
      name: "Guangdong Province",
      parent_id: "CNGD"
    },
    CNGS: {
      name: "Gansu province",
      parent_id: "CNGS"
    },
    CNGX: {
      name: "Guangxi Zhuang Autonomous Region",
      parent_id: "CNGX"
    },
    CNGZ: {
      name: "Guizhou Province",
      parent_id: "CNGZ"
    },
    CNHA: {
      name: "Henan Province",
      parent_id: "CNHA"
    },
    CNHB: {
      name: "Hubei Province",
      parent_id: "CNHB"
    },
    CNHE: {
      name: "Hebei Province",
      parent_id: "CNHE"
    },
    CNHI: {
      name: "Hainan Province",
      parent_id: "CNHI"
    },
    CNHK: {
      name: "Hong Kong Special Administrative Region",
      parent_id: "CNHK"
    },
    CNHL: {
      name: "Heilongjiang Province",
      parent_id: "CNHL"
    },
    CNHN: {
      name: "Hunan Province",
      parent_id: "CNHN"
    },
    CNJL: {
      name: "Jilin Province",
      parent_id: "CNJL"
    },
    CNJS: {
      name: "Jiangsu Province",
      parent_id: "CNJS"
    },
    CNJX: {
      name: "Jiangxi Province",
      parent_id: "CNJX"
    },
    CNLN: {
      name: "Liaoning Province",
      parent_id: "CNLN"
    },
    CNMO: {
      name: "Macao Special Administrative Region",
      parent_id: "CNMO"
    },
    CNNM: {
      name: "Inner Mongolia Autonomous Region",
      parent_id: "CNNM"
    },
    CNNX: {
      name: "Ningxia Hui Autonomous Region",
      parent_id: "CNNX"
    },
    CNQH: {
      name: "Qinghai Province",
      parent_id: "CNQH"
    },
    CNSC: {
      name: "Sichuan Province",
      parent_id: "CNSC"
    },
    CNSD: {
      name: "Shandong Province",
      parent_id: "CNSD"
    },
    CNSH: {
      name: "Shanghai Municipality",
      parent_id: "CNSH"
    },
    CNSN: {
      name: "Shaanxi Province",
      parent_id: "CNSN"
    },
    CNSX: {
      name: "Shanxi Province",
      parent_id: "CNSX"
    },
    CNTJ: {
      name: "Tianjin Municipality",
      parent_id: "CNTJ"
    },
    CNTW: {
      name: "Taiwan Province",
      parent_id: "CNTW"
    },
    CNXJ: {
      name: "Xinjiang Uygur Autonomous Region",
      parent_id: "CNXJ"
    },
    CNXZ: {
      name: "Tibet Autonomous Region",
      parent_id: "CNXZ"
    },
    CNYN: {
      name: "Yunnan Province",
      parent_id: "CNYN"
    },
    CNZJ: {
      name: "Zhejiang Province",
      parent_id: "CNZJ"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};