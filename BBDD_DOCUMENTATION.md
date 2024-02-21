DOCUMENTACIÓN MUSIC LABELS & BANDS & USERS BBDD (SPANISH)
+++++++++++++++++++++++++++++++++++++++++++++++

(Si quieres hacer pruebas con usuario Admin haz login con las siguientes credenciales:
{
"userName": "AaronSinergia",
"password": "AaronSinergia123"
}
)

API_URL
++++++
Endpoint sobre DISCOGRAFICAS (incluye info sobre BANDAS relacionadas):
http://localhost:3000/api/v1/labels

Endpoint sobre BANDAS:
http://localhost:3000/api/v1/bands

Endpoint sobre USUARIOS registrados con distintos tipos de derechos en modificación, creación y borrado de información sobre el endpoint de USUARIOS y BANDAS:
http://localhost:3000/api/v1/users

Como puedo gestionar distinto tipo de info con mi api:

1 - Consultar info: Usa la url básica proporcionada arriba (en el caso del endpoint de USUARIOS, debes estar registrado y disponer de permisos asociados a la visualización).

2 - Crear info/registrar usuario nuevo: Usa la url básica proporcionada arriba (en el caso del endpoint de USUARIOS, debes añadir a la url: "/register").

3 - Modificar info: Añade al final de la url el id de elemento a modificar. (Ej. "/3423523466")

4 - Logueate con tu usuario para obtener permisos especiales: Añadiendo al endpoint de USUARIOS: "/login".

5 - Borrar info/USUARIOS: Una vez logeado (sólo si eres administrador) Añade al final de la url el id de elemento a eliminar. (Ej. "/3423523466")

+++++++++++++++++++++++++++++++++++++++++++++++++
MUSIC LABELS & BANDS & USERS DATABASE DOCUMENTATION (ENGLISH)
+++++++++++++++++++++++++++++++++++++++++++++++++

(If you want to test with Admin user, log in with the following credentials:
{
"userName": "AaronSynergy",
"password": "AaronSynergy123"
}
)

API_URL
++++++
Endpoint about RECORD LABELS (includes information about related BANDS):
http://localhost:3000/api/v1/labels

Endpoint about BANDS:
http://localhost:3000/api/v1/bands

Endpoint about USERS registered with different types of rights in modification, creation, and deletion of information on the USERS and BANDS endpoint:
http://localhost:3000/api/v1/users

How to manage different types of information with my API:

1 - Consult information: Use the basic URL provided above (in the case of the USERS endpoint, you must be registered and have permissions associated with visualization).

2 - Create information/register new user: Use the basic URL provided above (in the case of the USERS endpoint, add to the URL: "/register").

3 - Modify information: Add the element's id to be modified at the end of the URL. (E.g., "/3423523466")

4 - Log in with your user to obtain special permissions: Adding to the USERS endpoint: "/login".

5 - Delete information/USERS: Once logged in (only if you are an administrator), add the element's id to be deleted at the end of the URL. (E.g., "/3423523466")
