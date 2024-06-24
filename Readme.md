# Voy a hacer tutorial de las clases desde la 15 en adelante:
## Clase 15:
### Subir un proyecto de 0 a Github
* Crear el repositorio New en Github 
* darle un nombre diciente
* y hacer clck en el boton de Crear
* Inicializar Git en la consola de VisualStudioCode: 
* > git init
* Crear un archivo super completo de .gitignore en [GitIgnore](https://www.gitignore.io) donde se incluya Window, MacOs, VisualStudioCode, Node, Linux ... adicionando todo lo que queramos ignorar en la subida (sobretodo archivos grandes)
* > git add .gitignore para que lo tenga en cuenta en la subida de archivos
* Se verifica que se va a subir con el estado de git:
* > git status
* > git add -A
* > git commit -m "1eros archivos del proyecto"
* Se debe de conectar el repositorio remoto con el paquete (proyecto) a subir
* Como git usa main y github usa master. Primero lo cambiamos:
* > git branch -M main
* Inidcar cual es el repositorio remoto asociado al proyecto local
* >git remote add origin https://github.com/GemmaClaverodelMoral/ejemplo-manipulacion-DOM-basica.git
* Se hace push de los archivos deseados del origen (local) al main de github
* >git push -u origin main
Para empezar un proyecto desde cero desde Github ir al repositorio: practica-desde-cero-desde-github