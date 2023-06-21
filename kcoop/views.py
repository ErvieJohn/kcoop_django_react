from django.shortcuts import render

def announcements(request,id):
    return render(request, 'index.html', {})

def k_ganapan(request,id):
    return render(request, 'index.html', {})

def kwentong_k(request,id):
    return render(request, 'index.html', {})

def k_bahagi(request,id):
    return render(request, 'index.html', {})

def index(request):
    return render(request, 'index.html')