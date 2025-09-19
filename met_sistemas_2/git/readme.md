# GIT - Sistema de control de versiones

-   Controlador de cambios en el código
-   Trabajar en equipo
-   Trabajar en remoto
-   Recuperar versiones anteriores
-   Almacenar código
-   Comprobar si es seguro
-   Distribuir versiones

# Sistemas de control de versiones (SVC)

Están los que son centralizados (el sistema está en un servidor) y el distribuido (el sistema se copia en cada terminal que se utiliza)

El SVC distribuido se utiliza en los sistemas de **software libre**.

# Areas de GIT

## Working directory

Donde trabajas, eliminas, creas, cambias archivos, etc.

## Staging

Donde preparas los archivos para persistir.

## Repository

Es la carpeta .git, donde se guardan las "fotos" del repo.

# Como funciona GIT

Cuando tenemos un archivo, lo que hace es implementar un hash al mismo.

# Tipos de objetos en GIT

Cuando GIT hace el hash del archivo, le pone un tipo.

BLOB: Son archivos en general, sin importar la extensión.
TREE: Son las carpetas, es un tipo que tiene otros tipos adentro, ya sean blobs o trees.
COMMIT: Son las "fotos" del árbol global del repositorio.

# Comandos

-   git hash-object -w archivo: Genera un hash de tipo BLOB.
-   git update-index --add --cacheinfo 001000 hash nombreArchivo: Actualiza el index (es el staging)
    En caso de poner un archivo dentro de una ruta, por ejemplo: src/archivo, GIT va a crear el TREE automáticamente.
-   git write-tree: Genera hash del index actual.
-   git cat-file -p hash: Inspecciona el hash.

# Referencias

Una rama es una referencia a un commit, la referencia en lugar de ser un hash se usa lenguaje naturales.

HEAD: Un puntero que apunta al puntero que estas actualmente. Contiene el nombre de la rama actual

TAGS: Son punteros que apuntan a un commit, y no es cambiable.
