#!/bin/bash

# Mensaje inicial
echo "Iniciando la configuración del proyecto..."

# Comprobar si el script tiene permisos de ejecución
if [ ! -x "$0" ]; then
    echo "El script no tiene permisos de ejecución."
    read -p "¿Deseas asignarle permisos automáticamente? (y/n): " respuesta
    if [[ "$respuesta" == "y" || "$respuesta" == "Y" ]]; then
        chmod +x "$0"
        echo "Permisos asignados. Por favor, ejecuta nuevamente el script."
        exit 0
    else
        echo "No se asignaron permisos. Abortando."
        exit 1
    fi
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null
then
    echo "npm no está instalado. Por favor, instálalo y vuelve a intentar."
    exit 1
fi

# Instalar dependencias
echo "Instalando dependencias..."
if npm install; then
    echo "Dependencias instaladas con éxito."
else
    echo "Error al instalar las dependencias."
    exit 1
fi

# Ejecutar el servidor
echo "Iniciando el servidor de desarrollo..."
if npm run dev; then
    echo "Servidor iniciado correctamente."
else
    echo "Error al iniciar el servidor."
    exit 1
fi
