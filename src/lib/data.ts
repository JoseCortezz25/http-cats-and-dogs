export const status = [
  {
    id: 1,
    status: 100,
    name: "Continue",
    description:
      "The server has received the request headers, and the client should proceed to send the request body",
    images: {
      cat: "/images/cats/100.png",
      dog: "/images/dogs/100.png",
    },
  },
  {
    id: 2,
    status: 101,
    name: "Switching Protocols",
    description:
      "The requester has asked the server to switch protocols and the server has agreed to do so",
    images: {
      cat: "/images/cats/101.png",
      dog: "/images/dogs/102.png",
    },
  },
  {
    id: 3,
    status: 102,
    name: "Processing",
    description:
      "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request",
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
      "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response",
    images: {
      cat: "/images/cats/103.png",
      dog: "/images/dogs/103.png",
    },
  },
  {
    id: 5,
    status: 200,
    name: "OK",
    description: "The request has succeeded",
    images: {
      cat: "/images/cats/200.png",
      dog: "/images/dogs/200.jpeg",
    },
  },
  {
    id: 6,
    status: 201,
    name: "Created",
    description:
      "The request has been fulfilled, resulting in the creation of a new resource",
    images: {
      cat: "/images/cats/201.png",
      dog: "/images/dogs/201.png",
    },
  },
  {
    id: 7,
    status: 202,
    name: "Accepted",
    description:
      "The request has been accepted for processing, but the processing has not been completed",
    images: {
      cat: "/images/cats/202.png",
      dog: "images/dogs/202.png",
    },
  },
  {
    id: 8,
    status: 203,
    name: "Non-Authoritative Information",
    description:
      "The server successfully processed the request, but is returning information that may be from another source",
    images: {
      cat: "/images/cats/203.png",
      dog: "/images/dogs/203.png",
    },
  },
  {
    id: 9,
    status: 204,
    name: "No Content",
    description:
      "The server successfully processed the request, but is not returning any content",
    images: {
      cat: "/images/cats/204.png",
      dog: "/images/dogs/204.png",
    },
  },
  {
    id: 10,
    status: 205,
    name: "Reset Content",
    description:
      "The server successfully processed the request, but is not returning any content",
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
      "The server is delivering only part of the resource due to a range header sent by the client",
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
      "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made",
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
      "The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again",
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
      "The server has fulfilled a request for the resource, and the response is a representation of the result of one",
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
      "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance",
    images: {
      cat: "/images/cats/226.png",
      dog: "/images/dogs/226.png",
    },
  },
  {
    id: 15,
    status: 300,
    name: "Multiple Choices",
    description: "The request has more than one possible response",
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
      "The URL of the requested resource has been changed permanently",
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
      "The URL of the requested resource has been changed temporarily",
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
      "The server sent this response to direct the client to get the requested resource at another URI with a GET request",
    images: {
      cat: "/images/cats/303.png",
      dog: "/images/dogs/303.png",
    },
  },
  {
    id: 19,
    status: 304,
    name: "Not Modified",
    description: "This is used for caching purposes",
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
      "Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy",
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
      "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request",
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
      "This means that the resource is now permanently located at another URI",
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
      "The server could not understand the request due to invalid syntax",
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
      'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated"',
    images: {
      cat: "/images/cats/401.png",
      dog: "/images/dogs/401.png",
    },
  },
  {
    id: 26,
    status: 402,
    name: "Payment Required",
    description: "This response code is reserved for future use",
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
      "The client does not have access rights to the content, i.e. they are unauthorized",
    images: {
      cat: "/images/cats/403.png",
      dog: "/images/dogs/403.png",
    },
  },
  {
    id: 28,
    status: 404,
    name: "Not Found",
    description: "The server can not find the requested resource",
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
      "The request method is known by the server but has been disabled and cannot be used",
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
      "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent",
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
      "This is similar to 401 but authentication is needed to be done by a proxy",
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
      "This response is sent on an idle connection by some servers, even without any previous request by the client",
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
      "This response is sent when a request conflicts with the current state of the server",
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
      "This response is sent when the requested content has been permanently deleted from server, with no forwarding address",
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
      "Server rejected the request because the Content-Length header field is not defined and the server requires it",
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
      "The client has indicated preconditions in its headers which the server does not meet",
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
      "Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field",
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
      "The URI requested by the client is longer than the server is willing to interpret",
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
      "The media format of the requested data is not supported by the server, so the server is rejecting the request",
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
      "The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data",
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
      "This response code means the expectation indicated by the Expect request header field can't be met by the server",
    images: {
      cat: "/images/cats/417.png",
      dog: "/images/dogs/417.png",
    },
  },
  {
    id: 42,
    status: 418,
    name: "I'm a teapot",
    description: "The server refuses the attempt to brew coffee with a teapot",
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
      "The request was directed at a server that is not able to produce a response",
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
      "The request was well-formed but was unable to be followed due to semantic errors",
    images: {
      cat: "/images/cats/422.png",
      dog: "/images/dogs/422.png",
    },
  },
  {
    id: 45,
    status: 423,
    name: "Locked",
    description: "The resource that is being accessed is locked",
    images: {
      cat: "/images/cats/423.png",
      dog: "/images/dogs/423.png",
    },
  },
  {
    id: 46,
    status: 424,
    name: "Failed Dependency",
    description: "The request failed due to failure of a previous request",
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
      "Indicates that the server is unwilling to risk processing a request that might be replayed",
    images: {
      cat: "/images/cats/425.png",
      dog: "/images/dogs/425.png",
    },
  },
  {
    id: 48,
    status: 426,
    name: "Upgrade Required",
    description: "The client should switch to a different protocol",
    images: {
      cat: "/images/cats/426.png",
      dog: "/images/dogs/426.png",
    },
  },
  {
    id: 49,
    status: 428,
    name: "Precondition Required",
    description: "The origin server requires the request to be conditional",
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
      "The user has sent too many requests in a given amount of time",
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
      "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large",
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
      "The user requests an illegal resource, such as a web page censored by a government",
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
      "The server has encountered a situation it doesn't know how to handle",
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
      "The request method is not supported by the server and cannot be handled",
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
      "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response",
    images: {
      cat: "/images/cats/502.png",
      dog: "/images/dogs/502.png",
    },
  },
  {
    id: 56,
    status: 503,
    name: "Service Unavailable",
    description: "The server is not ready to handle the request",
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
      "This error response is given when the server is acting as a gateway and cannot get a response in time",
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
      "The server has an internal configuration error: transparent content negotiation for the request results in a circular reference",
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
      "The server is unable to store the representation needed to complete the request",
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
      "The server detected an infinite loop while processing the request",
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
      "Further extensions to the request are required for the server to fulfill it",
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
      "The 511 status code indicates that the client needs to authenticate to gain network access",
    images: {
      cat: "/images/cats/511.png",
      dog: "/images/dogs/511.png",
    },
  },
  {
    id: 64,
    status: 521,
    name: "Web Server Is Down",
    description: "The origin server has refused the connection from Cloudflare",
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
      "Cloudflare could not negotiate a TCP handshake with the origin server",
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
      "Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect",
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
      "Cloudflare could not negotiate a SSL/TLS handshake with the origin server",
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
      "Error 530 indicates that the requests timeout or fail to connect to the origin web server",
    image: "",
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
      "This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy",
    images: {
      cat: "/images/cats/599.png",
      dog: "/images/dogs/599.png",
    },
  },
];
