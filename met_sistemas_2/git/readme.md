# GIT – Sistema de control de versiones

Git es un **sistema de control de versiones distribuido (DVCS)** que permite llevar un historial completo de un proyecto, trabajar en equipo y mantener la integridad del código.

## Características principales

-   Controla los cambios en el código de manera eficiente.
-   Permite trabajar en equipo sin conflictos.
-   Facilita el trabajo en remoto (repositorios distribuidos).
-   Permite recuperar versiones anteriores del proyecto.
-   Almacena todo el código y su historial de forma segura.
-   Garantiza la integridad de los archivos mediante hashes.
-   Soporta flujos de trabajo distribuidos y ramas livianas.

# Sistemas de control de versiones (SVC)

Los SVC se clasifican en:

1. **Centralizados (CVCS):**

    - El repositorio está en un servidor central.
    - Problema: punto único de fallo y dependencia de la red.

2. **Distribuidos (DVCS):**

    - Cada usuario tiene una copia completa del repositorio y su historial.
    - Uso común en **software libre** y proyectos con muchos colaboradores.

# Áreas de Git

Git organiza el flujo de trabajo en tres áreas principales:

1. **Working Directory (directorio de trabajo):**

    - Donde modificas, creas o eliminas archivos.
    - Ejemplo: editas `index.html` en tu computadora.

2. **Staging Area (índice o área de preparación):**

    - Donde seleccionas los cambios que quieres guardar en el próximo commit.
    - Comando: `git add archivo.txt`.

3. **Repository (repositorio):**

    - Carpeta `.git/` donde Git guarda las “fotografías” del proyecto (commits, árboles y blobs).

# Cómo funciona Git internamente

-   Cada archivo que agregas a Git recibe un **hash SHA-1** único basado en su contenido.
-   Git almacena **objetos inmutables** que representan archivos, carpetas y commits completos del proyecto.

# Tipos de objetos en Git

Perfecto, Fede. Te agrego cómo se **ven internamente** estos objetos en Git y cómo se relacionan entre sí:

---

# Tipos de objetos en Git y su estructura

## 1️⃣ Blob

-   **Qué representa:** un archivo individual (cualquier extensión).
-   **Contenido:** solo guarda los datos del archivo, **no el nombre ni la ruta**.
-   **Hash:** SHA-1 basado en el contenido del archivo.
-   **Ejemplo visual:**

```
hash: f30ab...
```

---

## 2️⃣ Tree

-   **Qué representa:** un directorio.
-   **Contenido:** referencias a blobs (archivos) y a otros trees (subdirectorios).
-   **Incluye:** permisos, nombres de archivos y hashes de los objetos que contiene.
-   **Ejemplo visual:**

```
Tree hash: a1b2c3...
├─ 100644 blob f30abf3c3a5f2d7e9b9d0b8f8c0a123456789abc index.html
├─ 100644 blob f30abf3c3a5f2d7e9b9d0b8f8c0a123456789abc index.html
├─ 100644 tree f30abf3c3a5f2d7e9b9d0b8f8c0a123456789abc src
```

## Commit

-   **Qué representa:** una “fotografía” del proyecto en un momento dado.
-   **Contenido:**

    -   Referencia al tree raíz del proyecto.
    -   Referencias a commits padres.
    -   Autor, fecha, mensaje.

-   **Hash:** SHA-1 calculado sobre todo el contenido del commit.
-   **Ejemplo visual:**

```
Commit 123abc...
tree a1b2c3d4e5f6g7h8i9j0
author Fede <fede@mail.com> 1695532800 +0000
committer Fede <fede@mail.com> 1695532800 +0000
```

Primer commit

## Tag

-   **Qué representa:** un puntero inmutable a un commit específico.
-   **Contenido:**

    -   Referencia al commit.
    -   Opcional: nombre del creador, fecha y mensaje de versión.

-   **Ejemplo visual:**

Tag: v1.0
Apunta a commit: 123abc...
Mensaje: "Primera versión estable"

-   Cada commit puede tener **uno o más padres** (merge).
-   Las ramas son **punteros a commits**.
-   Tags son **punteros inmutables a commits**.

# Comandos internos de Git (avanzados)

-   `git hash-object -w archivo` → genera un hash de tipo BLOB.
-   `git update-index --add --cacheinfo 001000 hash nombreArchivo` → agrega un archivo al índice (staging).

    -   Si el archivo está en una ruta como `src/archivo.txt`, Git crea automáticamente los trees necesarios.

-   `git write-tree` → genera el hash del índice actual.
-   `git cat-file -p hash` → inspecciona el contenido de un objeto por su hash.

# Referencias y punteros

-   **Ramas (branches):**

    -   Son punteros a commits.
    -   Permiten trabajar en paralelo sin afectar la rama principal.

-   **HEAD:**

    -   Puntero especial que indica la rama en la que estás trabajando actualmente.

-   **Tags:**

    -   Punteros inmutables que señalan commits específicos, normalmente para marcar versiones (`v1.0`, `v2.1`).
