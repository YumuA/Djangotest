from django.shortcuts import render

# Create your views here.
import requests
from django.http import JsonResponse

def obtener_datos_de_api(request):
    # Hacer una solicitud a la API de Node.js
    response = requests.get("http://localhost:3000/test")  # Asegúrate de usar la URL correcta

    if response.status_code == 200:
        data = response.json()
        return JsonResponse(data, safe=False)
    
    return JsonResponse({"error": "Error al obtener datos"}, status=500)
