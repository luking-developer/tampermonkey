# Tampermonkey

# Uso

Se debe instalar la extensión Tampermonkey ([Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)/[Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)).

Ingresar a la web a instalar el script. 

Para Google Chrome, dirigirse al icono:

_`Extensiones > Tampermonkey > Administrar esta extensión`_.

Activar los botones:
- _Modo desarrollador_.
- _Permitir secuencias de comandos del usuario_.

Finalmente, para instalar un script, dirigirse a la página en cuestión, y acceder al icono _`Extensiones > Tampermonkey > Agregar nuevo script...`_.

Pegar el código del archivo javascript, y dar click en el menú _`Guardar`_ (<kbd>Ctrl</kbd> + <kbd>S</kbd>).

## Resumen de funcionalidades

| Archivo                  | Descripción                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `normalizer_redirect.js` | Comprueba si se inició sesión y redirige al usuario a la URL de clientes |
