Source code for Beer Locker tutorials

####beerlocker-1

Con una creciente colección de botellas de cerveza, estoy en una situación de necesidad extrema de la manera de almacenar y rastrear mi cerveza. ¿Qué mejor manera de hacerlo que para crear una aplicación donde puedo agregar, quitar, actualizar y ver mi colección de cervezas. Al igual que cualquier otro desarrollador motivado, quiero que mi amigos para poder crear sus propios armarios y controlar quién tiene acceso a la mía.

En esta serie hemos compuesto, hay que crear un nodo con API RESTful, Express, Mongoose para interactuar con MongoDB, el Pasaporte para la autenticación, OAuth OAuth2orize para apoyo, y explorar mejores prácticas y herramientas.

Cuando hayamos terminado, debemos tener una API que permite a los usuarios autenticarse, realizar operaciones CRUD, autorizar otras aplicaciones a través de OAuth acceso a la API, tener un sólido entendimiento de las prácticas óptimas y las herramientas, y lo más importante de todo, un lugar para almacenar la cerveza!

[Beer Locker: Building a RESTful API With Node](http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/)

####beerlocker-2

En nuestro artículo anterior dejamos en un nodo fundamental de aplicación capaz de aceptar las peticiones HTTP y responder con JSON estático.

En esta parte, profundizaremos un poco más y aprender a aplicar las operaciones CRUD en nuestra cerveza. Al final de este artículo, hemos aprendido cómo conectar a un MongoDB Mongoose, que se utiliza para el objeto modelado, y han implementado GET, PUT, POST, ELIMINAR los endpoints.

[Beer Locker: Building a RESTful API With Node - CRUD](http://scottksmith.com/blog/2014/05/05/beer-locker-building-a-restful-api-with-node-crud/)

####beerlocker-3.1

Punto de partida para el tercer artículo sobre la aplicación Pasaporte. Esto es para limpiar el código un poco de nuestros anteriores tutoriales.

####beerlocker-3.2

En nuestro artículo anterior hemos terminado con un API bastante funcional capaz de agregar, eliminar, actualizar y ver cerveza.

En esta parte nos adentraremos en crear cuentas de usuario y la autenticación mediante Passport. Al final de este artículo, hemos aprendido cómo agregar cuentas de usuario, implementar la autenticación y control de acceso a la cerveza taquillas.

[Beer Locker: Building a RESTful API With Node - Passport](http://scottksmith.com/blog/2014/05/29/beer-locker-building-a-restful-api-with-node-passport/)

###beerlocker-4

En nuestro artículo anterior hemos terminado con un API funcional capaz de crear cuentas de usuario, bloqueo de API los endpoints, y sólo permite el acceso a un usuario de su propio armario cerveza.

En esta parte nos adentraremos en crear un OAuth2 server y permitir el acceso a la API los extremos para el usuario autorizado o las aplicaciones autorizadas. Y esto lo haremos por integrar OAuth2orize en nuestra aplicación.

[Beer Locker: Building a RESTful API With Node - OAuth2 Server](http://scottksmith.com/blog/2014/07/02/beer-locker-building-a-restful-api-with-node-oauth2-server/)

###beerlocker-5

In our previous article we ended wtih a functional API capable of creating user accounts, locking down API endpoints, only allowing access to a user's own beer locker, and an OAuth2 server.

Many readers have asked questions about how to use different authentication strategies so I am going to continue this series and delve into many of those strategies.

This article will explore the use of Digest authentication instead of Basic.

[Beer Locker: Building a RESTful API with Node - Digest](http://scottksmith.com/blog/2014/09/14/beer-locker-building-a-restful-api-with-node-digest/)

####beerlocker-6.1

Starting point for the sixth article on using username and password for authentication. This is to clean up the code a bit from our previous tutorial.

####beerlocker-6.2

In our previous article we explored implementing Digest authentication in place of Basic. This article will now delve into implementing username and password authentication using the passport-local module.

[Beer Locker: Building a RESTful API With Node - Username & Password](http://scottksmith.com/blog/2014/09/18/beer-locker-building-a-restful-api-with-node-username-and-password/)