Requisitos de entrega

Aprovechando el anterior proyecto API REST AUTH, añadiremos nuestro middleware y util de subida y borrado de ficheros.

Vamos a reutilizar el mismo proyecto para explicarlo en los modelos videojuego y consola. Estos son opcionales, ya que se puede utilizar la temática libremente.

IMPORTANTE: tiene que ser una nueva API REST, no se puede reutilizar la del anterior proyecto.

Modelos

Los 3 modelos tienen que tener un campo de imagen, ya sea un avatar para el usuario, el logo de la consola o la carátula del videojuego. Aquí un ejemplo de uno de los modelos:

    titulo: { type: String, trim: true, required: true },
    desarrolladora: { type: String, trim: true, required: true },
    precio: { type: Number, trim: true, required: true },
    año: { type: Number, trim: true, required: true },
    descripcion: { type: String, trim: true, required: true },

-> caratula: { type: String, trim: true, required: true },
categoria: { type: String, trim: true, required: true }

    Middleware

Tras la instalación de multer, cloudinary y las dependencias conectoras de ambas, tendremos que implementar nuestro middleware de subida de fichero.

Util

Adicionalmente, habrá un util que se encargue del borrado de las imagenes en Cloudinary una vez borremos un elemento de una de las colecciones en nuestra base de datos.

CRUD

Los tres modelos deberán tener el CRUD e implementar tanto la subida de ficheros como el borrado de los mismos cuando corresponda en los controladores y las rutas.
