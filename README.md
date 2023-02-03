Repositorio backend para el proyecto final del bootcamp de Keepcoding

## Flits

Lista de todos los flits: se accede a partir del endpoint `/feed/flits`.

Petición:

```
[GET] http://localhost:3000/feed/flits
```

Respuesta:

```
{
    "successMessage": "Lista de flits obtenida",
    "flits": [
        {
            "_id": "63dd6d29ed381c00cd6bfb0f",
            "id_user": 1,
            "message": "Content of the post by user 1",
            "createdAt": "2023-02-03T20:23:05.905Z",
            "updatedAt": "2023-02-03T20:23:05.905Z",
            "__v": 0
        },
    // ...
    ]
}
```

Se puede crear un flit enviando un objeto a la misma ruta. Ahora mismo admite dos parámetros, id_user y message.

Petición:

```
[POST] http://localhost:3000/feed/flits
# Body
{
    "id_user": "1",
    "message": "Content of the post"
}
```

Respuesta:

```
{
    "successMessage": "Fleet creado",
    "flit": {
        "result": {
            "id_user": 1,
            "message": "Content of the post",
            "_id": "63dd766c4e3b03c03d1f1d4d",
            "createdAt": "2023-02-03T21:02:36.666Z",
            "updatedAt": "2023-02-03T21:02:36.666Z",
            "__v": 0
        }
    }
}
```
