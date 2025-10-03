# Testing

## Verificar vs validar

Verificar es ver que algo funcione, validar es ver que devuelva lo esperado.

## Tipos de testing

- Unitarias
  Tienen que ser rápidas y más simples posibles, probando la lógica de un modulo, sin depender de otros tests.
- Integración:
  Es probar una funcionalidad completa, que contiene varios pasos.
- Sistema:
  Prueba el sistema completo.
- Smoke:
  Son pruebas simples que se hacen para ver si funciona, verificando lo básico (lo básico depende de cada sistema)
- Regression:
  Corrobora si no se rompió algo viejo, sirve integración continua.
- Caja negra:
  Se diseñan pruebas sin mirar el código.
- Caja blanca:
  Testea que todo el código este correcto, mirando que se puedan recorrer todos los caminos del mismo.

## Plan de testing

Para cada tipo se tiene que planificar

### Tipos de valores

- Normales y limites
  Son los valores que son correctos y los que están fuera.
  Ejemplo: Si un valor va entre 0 a 100, el normal sería entre estos y los limites los que están fuera.

### coverage

Son los caminos posibles que tiene el sistema.
La idea es tener el 100% del mismo.
