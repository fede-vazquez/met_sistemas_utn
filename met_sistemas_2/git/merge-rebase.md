# Merge en Git

La idea de un **merge** es combinar el trabajo de dos ramas en un mismo historial. Dependiendo del caso, Git puede hacerlo de diferentes maneras.

## 1. Tipos de merge

### **Fast-forward merge**

-   Se da cuando la rama actual (`ours`) no tiene commits adicionales desde que se creó la otra rama (`theirs`).
-   Git simplemente **mueve el puntero** de la rama al último commit de `theirs`.
-   No se crea un commit nuevo.
-   El historial queda **lineal**.

Ejemplo visual:

```
A-B (ours)
   \
    C-D (theirs)
```

Después del merge:

```
A-B-C-D (ours, theirs)
```

### **Three-way merge**

-   Se da cuando ambas ramas **divergieron** desde un **ancestro común (base)**.

-   Git utiliza tres commits para resolver el merge:

    -   **Base** → el ancestro común.
    -   **Ours** → la rama en la que estamos parados (ej: `main`).
    -   **Theirs** → la rama que queremos integrar (ej: `feature`).

-   Git hace lo siguiente:

    1. Calcula el **diff entre base y ours**.
    2. Calcula el **diff entre base y theirs**.
    3. Combina ambos resultados.

-   Si los cambios afectan a **líneas distintas**, Git los aplica automáticamente.

-   Si hay cambios en las **mismas líneas**, aparece un **conflicto** que debe resolverse manualmente.

El resultado es un **commit de merge** con **dos padres** (`ours` y `theirs`).

Ejemplo visual:

```
       A (base)
       | \
       B  C
       |  |
       D  E
       | /
       M (merge commit)
```

## 2. Flujo de trabajo en un merge

1. Git busca el **ancestro común** (base).
2. Por cada archivo, compara los blobs:

    - `diff(base, ours)`
    - `diff(base, theirs)`

3. Integra los cambios.
4. Si todo se puede resolver automáticamente:

    - Hace un commit de merge (three-way) o mueve el puntero (fast-forward).

5. Si no, detiene el merge y pide resolución manual.

## 3. Detalles importantes

-   **Conflictos de merge:** aparecen cuando `ours` y `theirs` modifican la misma línea del archivo o uno lo borra y el otro lo modifica.
-   **Commit de merge:** solo existe en el caso de un **three-way merge**. Tiene dos _parents_ en lugar de uno.
-   **Forzar merge con commit:** incluso en un fast-forward, se puede pedir explícitamente un commit de merge:

    ```bash
    git merge --no-ff rama
    ```

Esto se usa en equipos porque deja un historial más claro de que existió una rama `feature`.
