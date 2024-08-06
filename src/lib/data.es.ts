import type { Status } from "./types";

export const esData: Status[] = [
  {
    id: 1,
    status: 100,
    name: "Continue",
    description: "El servidor ha recibido las cabeceras de la petición, y el cliente debe proceder a enviar el cuerpo de la petición",
    images: {
      cat: "/images/cats/100.png",
      dog: "/images/dogs/100.png",
    },
  },
  {
    id: 2,
    status: 101,
    name: "Switching Protocols",
    description: "El solicitante ha pedido al servidor cambiar protocolos y el servidor ha aceptado",
    // "The requester has asked the server to switch protocols and the server has agreed to do so",
    images: {
      cat: "/images/cats/101.png",
      dog: "/images/dogs/102.png",
    },
  },
  {
    id: 3,
    status: 102,
    name: "Processing",
    description: "Una solicitud WebDAV puede contener muchas sub-solicitudes que impliquen operaciones con archivos, lo que requiere mucho tiempo para completar la solicitud.",
    images: {
      cat: "/images/cats/102.png",
      dog: "/images/dogs/102.png",
    },
  },
  {
    id: 4,
    status: 103,
    name: "Early Hints",
    description:
      "Este código de estado está destinado principalmente a ser utilizado con el encabezado Link, permitiendo al agente de usuario iniciar la precarga de recursos mientras el servidor prepara una respuesta",
    images: {
      cat: "/images/cats/103.png",
      dog: "/images/dogs/103.png",
    },
  },
  {
    id: 5,
    status: 200,
    name: "OK",
    description: "La solicitud ha tenido éxito",
    images: {
      cat: "/images/cats/200.png",
      dog: "/images/dogs/200.jpeg",
    },
  },
  {
    id: 6,
    status: 201,
    name: "Created",
    description: "La solicitud se ha cumplido y ha resultado en la creación de un nuevo recurso",
    images: {
      cat: "/images/cats/201.png",
      dog: "/images/dogs/201.png",
    },
  },
  {
    id: 7,
    status: 202,
    name: "Accepted",
    description: "La solicitud ha sido aceptada para procesamiento, pero este no ha sido completado",
    images: {
      cat: "/images/cats/202.png",
      dog: "images/dogs/202.png",
    },
  },
  {
    id: 8,
    status: 203,
    name: "Non-Authoritative Information",
    description: "El servidor ha procesado con éxito la solicitud, pero está devolviendo información que puede ser de otra fuente",
    images: {
      cat: "/images/cats/203.png",
      dog: "/images/dogs/203.png",
    },
  },
  {
    id: 9,
    status: 204,
    name: "No Content",
    description: "El servidor ha procesado con éxito la solicitud, pero no está devolviendo ningún contenido",
    images: {
      cat: "/images/cats/204.png",
      dog: "/images/dogs/204.png",
    },
  },
  {
    id: 10,
    status: 205,
    name: "Reset Content",
    description: "El servidor ha procesado con éxito la solicitud, pero no está devolviendo ningún contenido",
    images: {
      cat: "/images/cats/205.png",
      dog: "/images/dogs/205.png",
    },
  },
  {
    id: 11,
    status: 206,
    name: "Partial Content",
    description:
      "El servidor está entregando solo una parte del recurso debido a un encabezado de rango enviado por el cliente",
    images: {
      cat: "/images/cats/206.png",
      dog: "/images/dogs/206.png",
    },
  },
  {
    id: 12,
    status: 207,
    name: "Multi-Status",
    description:
      "El cuerpo del mensaje que sigue es por defecto un mensaje XML y puede contener una serie de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hicieron",
    images: {
      cat: "/images/cats/207.png",
      dog: "/images/dogs/207.png",
    },
  },
  {
    id: 13,
    status: 208,
    name: "Already Reported",
    description:
      "Los miembros de un enlace DAV ya han sido enumerados en una respuesta previa a esta solicitud, y no se están incluyendo nuevamente",
    images: {
      cat: "/images/cats/208.png",
      dog: "/images/dogs/208.png",
    },
  },
  {
    id: 14,
    status: 214,
    name: "Transformation Applied",
    description:
      "El servidor ha cumplido una solicitud para el recurso, y la respuesta es una representación del resultado de una",
    images: {
      cat: "/images/cats/214.png",
      dog: "/images/dogs/214.png",
    },
  },
  {
    id: 14,
    status: 226,
    name: "IM Used",
    description:
      "El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual",
    images: {
      cat: "/images/cats/226.png",
      dog: "/images/dogs/226.png",
    },
  },
  {
    id: 15,
    status: 300,
    name: "Multiple Choices",
    description: "La solicitud tiene más de una posible respuesta",
    images: {
      cat: "/images/cats/300.png",
      dog: "/images/dogs/300.png",
    },
  },
  {
    id: 16,
    status: 301,
    name: "Moved Permanently",
    description:
      "La URL del recurso solicitado ha sido cambiada permanentemente",
    images: {
      cat: "/images/cats/301.png",
      dog: "/images/dogs/301.png",
    },
  },
  {
    id: 17,
    status: 302,
    name: "Found",
    description:
      "La URL del recurso solicitado ha sido cambiada temporalmente",
    images: {
      cat: "/images/cats/302.png",
      dog: "/images/dogs/302.png",
    },
  },
  {
    id: 18,
    status: 303,
    name: "See Other",
    description:
      "El servidor envió esta respuesta para dirigir al cliente a obtener el recurso solicitado en otra URI con una solicitud GET",
    images: {
      cat: "/images/cats/303.png",
      dog: "/images/dogs/303.png",
    },
  },
  {
    id: 19,
    status: 304,
    name: "Not Modified",
    description: "Esto se utiliza para propósitos de caché",
    images: {
      cat: "/images/cats/304.png",
      dog: "/images/dogs/304.png",
    },
  },
  {
    id: 20,
    status: 305,
    name: "Use Proxy",
    description:
      "Se definió en una versión anterior de la especificación HTTP para indicar que una respuesta solicitada debe ser accedida a través de un proxy",
    images: {
      cat: "/images/cats/305-deprecated.png",
      dog: "/images/dogs/305-deprecated.png",
    },
  },
  {
    id: 22,
    status: 307,
    name: "Temporary Redirect",
    description:
      "El servidor envía esta respuesta para dirigir al cliente a obtener el recurso solicitado en otra URI con el mismo método que se utilizó en la solicitud anterior",
    images: {
      cat: "/images/cats/307.png",
      dog: "/images/dogs/307.png",
    },
  },
  {
    id: 23,
    status: 308,
    name: "Permanent Redirect",
    description:
      "Esto significa que el recurso ahora está ubicado permanentemente en otra URI",
    images: {
      cat: "/images/cats/308.png",
      dog: "/images/dogs/308.png",
    },
  },
  {
    id: 24,
    status: 400,
    name: "Bad Request",
    description:
      "El servidor no pudo entender la solicitud debido a una sintaxis inválida",
    images: {
      cat: "/images/cats/400.png",
      dog: "/images/dogs/400.png",
    },
  },
  {
    id: 25,
    status: 401,
    name: "Unauthorized",
    description:
      'Aunque el estándar HTTP especifica "no autorizado", semánticamente esta respuesta significa "no autenticado"',
    images: {
      cat: "/images/cats/401.png",
      dog: "/images/dogs/401.png",
    },
  },
  {
    id: 26,
    status: 402,
    name: "Payment Required",
    description: "Este código de respuesta está reservado para uso futuro",
    images: {
      cat: "/images/cats/402.png",
      dog: "/images/dogs/402.png",
    },
  },
  {
    id: 27,
    status: 403,
    name: "Forbidden",
    description:
      "El cliente no tiene derechos de acceso al contenido, es decir, no está autorizado",
    images: {
      cat: "/images/cats/403.png",
      dog: "/images/dogs/403.png",
    },
  },
  {
    id: 28,
    status: 404,
    name: "Not Found",
    description: "El servidor no puede encontrar el recurso solicitado",
    images: {
      cat: "/images/cats/404.png",
      dog: "/images/dogs/404.jpeg",
    },
  },
  {
    id: 29,
    status: 405,
    name: "Method Not Allowed",
    description:
      "El método de solicitud es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado",
    images: {
      cat: "/images/cats/405.png",
      dog: "/images/dogs/405.png",
    },
  },
  {
    id: 30,
    status: 406,
    name: "Not Acceptable",
    description:
      "Esta respuesta se envía cuando el servidor web, después de realizar la negociación de contenido dirigida por el servidor, no encuentra ningún contenido que se ajuste a los criterios dados por el agente de usuario",
    images: {
      cat: "/images/cats/406.png",
      dog: "/images/dogs/406.png",
    },
  },
  {
    id: 31,
    status: 407,
    name: "Proxy Authentication Required",
    description:
      "Esto es similar al 401, pero la autenticación debe ser realizada por un proxy",
    images: {
      cat: "/images/cats/407.png",
      dog: "/images/dogs/407.png",
    },
  },
  {
    id: 32,
    status: 408,
    name: "Request Timeout",
    description:
      "Esta respuesta es enviada en una conexión inactiva por algunos servidores, incluso sin ninguna solicitud previa del cliente",
    images: {
      cat: "/images/cats/408.png",
      dog: "/images/dogs/408.png",
    },
  },
  {
    id: 33,
    status: 409,
    name: "Conflict",
    description:
      "Esta respuesta se envía cuando una solicitud entra en conflicto con el estado actual del servidor",
    images: {
      cat: "/images/cats/409.png",
      dog: "/images/dogs/409.png",
    },
  },
  {
    id: 34,
    status: 410,
    name: "Gone",
    description:
      "Esta respuesta se envía cuando el contenido solicitado ha sido eliminado permanentemente del servidor, sin dirección de reenvío",
    images: {
      cat: "/images/cats/410.png",
      dog: "/images/dogs/410.png",
    },
  },
  {
    id: 35,
    status: 411,
    name: "Length Required",
    description:
      "El servidor rechazó la solicitud porque el campo de encabezado Content-Length no está definido y el servidor lo requiere",
    images: {
      cat: "/images/cats/411.png",
      dog: "/images/dogs/411.png",
    },
  },
  {
    id: 36,
    status: 412,
    name: "Precondition Failed",
    description:
      "El cliente ha indicado precondiciones en sus encabezados que el servidor no cumple",
    images: {
      cat: "/images/cats/412.png",
      dog: "/images/dogs/412.png",
    },
  },
  {
    id: 37,
    status: 413,
    name: "Payload Too Large",
    description:
      "La entidad de solicitud es más grande que los límites definidos por el servidor; el servidor podría cerrar la conexión o devolver un campo de encabezado Retry-After",
    images: {
      cat: "/images/cats/413.png",
      dog: "/images/dogs/413.png",
    },
  },
  {
    id: 38,
    status: 414,
    name: "Request URI Too Long",
    description:
      "El URI solicitado por el cliente es más largo de lo que el servidor está dispuesto a interpretar",
    images: {
      cat: "/images/cats/414.png",
      dog: "/images/dogs/414.png",
    },
  },
  {
    id: 39,
    status: 415,
    name: "Unsupported Media Type",
    description:
      "El formato de los datos solicitados no es compatible con el servidor, por lo que el servidor está rechazando la solicitud",
    images: {
      cat: "/images/cats/415.png",
      dog: "/images/dogs/415.png",
    },
  },
  {
    id: 40,
    status: 416,
    name: "Range Not Satisfiable",
    description:
      "El rango especificado por el campo de encabezado Range en la solicitud no se puede satisfacer; es posible que el rango esté fuera del tamaño de los datos del URI objetivo",
    images: {
      cat: "/images/cats/416.png",
      dog: "/images/dogs/416.png",
    },
  },
  {
    id: 41,
    status: 417,
    name: "Expectation Failed",
    description:
      "Este código de respuesta significa que la expectativa indicada por el campo de encabezado Expect de la solicitud no puede ser cumplida por el servidor",
    images: {
      cat: "/images/cats/417.png",
      dog: "/images/dogs/417.png",
    },
  },
  {
    id: 42,
    status: 418,
    name: "I'm a teapot",
    description: "El servidor rechaza el intento de preparar café con una tetera",
    images: {
      cat: "/images/cats/418.png",
      dog: "/images/dogs/418.png",
    },
  },
  {
    id: 43,
    status: 421,
    name: "Misdirected Request",
    description:
      "La solicitud fue dirigida a un servidor que no es capaz de producir una respuesta",
    images: {
      cat: "/images/cats/421.png",
      dog: "/images/dogs/421.png",
    },
  },
  {
    id: 44,
    status: 422,
    name: "Unprocessable Entity",
    description:
      "La solicitud estaba bien formada pero no se pudo procesar debido a errores semánticos",
    images: {
      cat: "/images/cats/422.png",
      dog: "/images/dogs/422.png",
    },
  },
  {
    id: 45,
    status: 423,
    name: "Locked",
    description: "El recurso al que se está accediendo está bloqueado",
    images: {
      cat: "/images/cats/423.png",
      dog: "/images/dogs/423.png",
    },
  },
  {
    id: 46,
    status: 424,
    name: "Failed Dependency",
    description: "La solicitud falló debido al fallo de una solicitud previa",
    images: {
      cat: "/images/cats/424.png",
      dog: "/images/dogs/424.png",
    },
  },
  {
    id: 47,
    status: 425,
    name: "Too Early",
    description:
      "Indica que el servidor no está dispuesto a arriesgarse a procesar una solicitud que podría repetirse",
    images: {
      cat: "/images/cats/425.png",
      dog: "/images/dogs/425.png",
    },
  },
  {
    id: 48,
    status: 426,
    name: "Upgrade Required",
    description: "El cliente debe cambiar a un protocolo diferente",
    images: {
      cat: "/images/cats/426.png",
      dog: "/images/dogs/426.png",
    },
  },
  {
    id: 49,
    status: 428,
    name: "Precondition Required",
    description: "El servidor de origen requiere que la solicitud sea condicional",
    images: {
      cat: "/images/cats/428.png",
      dog: "/images/dogs/428.png",
    },
  },
  {
    id: 50,
    status: 429,
    name: "Too Many Requests",
    description:
      "El usuario ha enviado demasiadas solicitudes en un período de tiempo determinado",
    images: {
      cat: "/images/cats/429.png",
      dog: "/images/dogs/429.png",
    },
  },
  {
    id: 51,
    status: 431,
    name: "Request Header Fields Too Large",
    description:
      "El servidor no está dispuesto a procesar la solicitud porque uno o todos los campos de encabezado son demasiado grandes",
    images: {
      cat: "/images/cats/431.png",
      dog: "/images/dogs/431.png",
    },
  },
  {
    id: 52,
    status: 451,
    name: "Unavailable For Legal Reasons",
    description:
      "El usuario solicita un recurso ilegal, como una página web censurada por un gobierno",
    images: {
      cat: "/images/cats/451.png",
      dog: "/images/dogs/451.png",
    },
  },
  {
    id: 53,
    status: 500,
    name: "Internal Server Error",
    description:
      "El servidor ha encontrado una situación que no sabe cómo manejar",
    images: {
      cat: "/images/cats/500.png",
      dog: "/images/dogs/500.png",
    },
  },
  {
    id: 54,
    status: 501,
    name: "Not Implemented",
    description:
      "El método de solicitud no está soportado por el servidor y no puede ser manejado",
    images: {
      cat: "/images/cats/501.png",
      dog: "/images/dogs/501.png",
    },
  },
  {
    id: 55,
    status: 502,
    name: "Bad Gateway",
    description:
      "Esta respuesta de error significa que el servidor, mientras actuaba como puerta de enlace para obtener una respuesta necesaria para manejar la solicitud, recibió una respuesta inválida",
    images: {
      cat: "/images/cats/502.png",
      dog: "/images/dogs/502.png",
    },
  },
  {
    id: 56,
    status: 503,
    name: "Service Unavailable",
    description: "El servidor no está listo para manejar la solicitud",
    images: {
      cat: "/images/cats/503.png",
      dog: "/images/dogs/503.png",
    },
  },
  {
    id: 57,
    status: 504,
    name: "Gateway Timeout",
    description:
      "Esta respuesta de error se da cuando el servidor está actuando como puerta de enlace y no puede obtener una respuesta a tiempo",
    images: {
      cat: "/images/cats/504.png",
      dog: "/images/dogs/504.png",
    },
  },
  {
    id: 59,
    status: 506,
    name: "Variant Also Negotiates",
    description:
      "El servidor tiene un error de configuración interno: la negociación de contenido transparente para la solicitud resulta en una referencia circular",
    images: {
      cat: "/images/cats/506.png",
      dog: "/images/dogs/506.png",
    },
  },
  {
    id: 60,
    status: 507,
    name: "Insufficient Storage",
    description:
      "El servidor no puede almacenar la representación necesaria para completar la solicitud",
    images: {
      cat: "/images/cats/507.png",
      dog: "/images/dogs/507.png",
    },
  },
  {
    id: 61,
    status: 508,
    name: "Loop Detected",
    description:
      "El servidor detectó un bucle infinito mientras procesaba la solicitud",
    images: {
      cat: "/images/cats/508.png",
      dog: "/images/dogs/508.png",
    },
  },
  {
    id: 62,
    status: 510,
    name: "Not Extended",
    description:
      "Se requieren más extensiones a la solicitud para que el servidor pueda cumplirla",
    images: {
      cat: "/images/cats/510.png",
      dog: "/images/dogs/510.png",
    },
  },
  {
    id: 63,
    status: 511,
    name: "Network Authentication Required",
    description:
      "El código de estado 511 indica que el cliente necesita autenticarse para obtener acceso a la red",
    images: {
      cat: "/images/cats/511.png",
      dog: "/images/dogs/511.png",
    },
  },
  {
    id: 64,
    status: 521,
    name: "Web Server Is Down",
    description: "El servidor de origen ha rechazado la conexión de Cloudflare",
    images: {
      cat: "/images/cats/521.png",
      dog: "/images/dogs/521.png",
    },
  },
  {
    id: 65,
    status: 522,
    name: "Connection Timed Out",
    description:
      "Cloudflare no pudo negociar un handshake TCP con el servidor de origen",
    images: {
      cat: "/images/cats/522.png",
      dog: "/images/dogs/522.png",
    },
  },
  {
    id: 66,
    status: 523,
    name: "Origin Is Unreachable",
    description:
      "Cloudflare no pudo alcanzar el servidor de origen; por ejemplo, si los registros DNS para el servidor de origen son incorrectos",
    images: {
      cat: "/images/cats/523.png",
      dog: "/images/dogs/523.png",
    },
  },
  {
    id: 67,
    status: 525,
    name: "SSL Handshake Failed",
    description:
      "Cloudflare no pudo negociar un handshake SSL/TLS con el servidor de origen",
    images: {
      cat: "/images/cats/525.png",
      dog: "/images/dogs/525.png",
    },
  },
  {
    id: 68,
    status: 530,
    name: "Site Frozen",
    description:
      "El error 530 indica que las solicitudes se agotan o fallan al conectarse al servidor web de origen",
    images: {
      cat: "/images/cats/530.png",
      dog: "/images/dogs/530.png",
    },
  },
  {
    id: 69,
    status: 599,
    name: "Network Connect Timeout Error",
    description:
      "Este código de estado no está especificado en ningún RFC, pero es utilizado por algunos proxies HTTP para señalar un tiempo de espera de conexión de red detrás del proxy a un cliente frente al proxy",
    images: {
      cat: "/images/cats/599.png",
      dog: "/images/dogs/599.png",
    },
  },
];
