from django.shortcuts import render
from django.template import RequestContext

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

def page_not_found_view(request, exception):
    return render(request, 'index.html', status=404)

# ADMIN
def cms_announcements(request,id):
    return render(request, 'index.html', {})

def cms_k_ganapan(request,id):
    return render(request, 'index.html', {})

def cms_kwentong_k(request,id):
    return render(request, 'index.html', {})

def cms_k_bahagi(request,id):
    return render(request, 'index.html', {})