# Merge

La idea es que combina ambas ramas en un mismo commit

Lo primero que hace git es buscar el ancestro común entre las 2 ramas
El commit que es ancestro en común entre las dos ramas se llama **base**
El commit/rama que queremos implementar será llamado **theres**
La rama donde estamos parados se llama **Ours**

Por cada archivo git hace un **diff**, lo que hace es calcular los cambios entre cada blob.
Esto lo hace primero entre base y ours, y luego entre base y theres.

Git calcula primero el diff entre base y ours, y luego ese resultado con el de theres

Si los cambios son en diferentes lineas, git adopta los cambios de forma automática.

Lo que hace git es hacer un nuevo commit, el cual sería el resultado del merge.
Este commit tendrá a 2 parents, que serán el **ours** y el **theres**

En caso de que en la rama **base** no tenga diferencia con el **ours** lo que hace es mover la ref de la rama al último commit de la rama.
