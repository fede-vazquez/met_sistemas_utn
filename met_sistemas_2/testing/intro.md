# Testing

## Verificar vs Validar

- **Verificar** consiste en comprobar que el sistema o módulo **funcione correctamente** según su diseño técnico.

  > Ejemplo: verificar que un botón guarde un registro en la base de datos.

- **Validar** implica comprobar que el sistema **cumpla con lo que el usuario espera** o con los requisitos del negocio.

  > Ejemplo: validar que el registro guardado contenga los datos correctos y siga las reglas del negocio.

## Tipos de Testing

- **Unitarias:**
  Prueban pequeñas partes del sistema (funciones, clases o métodos) de forma **aislada**.
  Deben ser rápidas, simples y no depender de otros tests.

- **Integración:**
  Evalúan la interacción entre **múltiples módulos o componentes**, verificando que trabajen correctamente en conjunto.

- **Sistema:**
  Se prueban **todas las funcionalidades del sistema completo**, asegurando que funcione como un todo coherente.

- **Smoke (Humo):**
  Son pruebas **rápidas y básicas** que confirman si el sistema “enciende” o si algo está roto antes de hacer pruebas más complejas.

  > “¿Arranca el sistema sin errores críticos?”

- **Regresión:**
  Aseguran que las nuevas funcionalidades **no rompan** las ya existentes.
  Son esenciales en procesos de **integración continua (CI)**.

- **Caja negra:**
  Se diseñan pruebas **sin mirar el código**, solo considerando entradas y salidas.
  Se centra en el comportamiento del sistema.

- **Caja blanca:**
  Evalúan el **interior del código**, verificando que todos los caminos y condiciones posibles se ejecuten al menos una vez.

## Plan de Testing

Cada tipo de test debe tener su **plan de pruebas**, que defina:

- Qué se va a probar.
- Qué datos de entrada se usarán.
- Qué resultados se esperan.
- Cómo se evaluará el éxito o el fallo.

### Tipos de valores

- **Normales y límites:**
  Se deben considerar tanto los valores **válidos** como los **extremos o inválidos**.

  > Ejemplo: si un campo acepta valores entre 0 y 100, se deben probar casos como -1, 0, 50, 100 y 101.

### Coverage (Cobertura)

La **cobertura** mide qué porcentaje del código o de los caminos posibles fue probado.
El objetivo ideal es alcanzar el **100% de cobertura**, aunque en la práctica se priorizan las partes **más críticas** del sistema.
