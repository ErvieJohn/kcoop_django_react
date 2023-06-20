from django.shortcuts import render

def k_ganapan(request,id):
    return render(request, 'index.html', {})

def index(request):
    return render(request, 'index.html')