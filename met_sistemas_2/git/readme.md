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

Cuando tenemos un archivo, lo que hace es implementarle un hash al mismo.

# Tipos de objetos en GIT

Cuando GIT hace el hash del archivo, le pone un tipo.

BLOB: Son archivos en general, sin importar la extensión.
TREE: Son las carpetas, es un tipo que tiene otros tipos adentro, ya sean blobs o trees.
