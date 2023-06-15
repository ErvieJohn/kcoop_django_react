
from django.contrib import admin
from django.urls import path, include

from . import views

from .views import index

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),


    path('', views.index, name='index'),
    path('history/', views.index, name='history'),
    path('vmg/', views.index, name='vmg'),
    path('kso_guiding_principles/', views.index, name='kso_guiding_principles'),
    path('cooperative_principles/', views.index, name='cooperative_principles'),
    path('organizational_structure/', views.index, name='organizational_structure'),
    path('livelihood_and_enterprise_development/', views.index, name='livelihood_and_enterprise_development'),
    path('education_training_and_formation/', views.index, name='education_training_and_formation'),
    path('health_and_wellness/', views.index, name='health_and_wellness'),
    path('security_shelter_and_safety/', views.index, name='security_shelter_and_safety'),
    path('social_protection/', views.index, name='social_protection'),
    path('ncr/', views.index, name='ncr'),
    path('region3/', views.index, name='region3'),
    path('region4a/', views.index, name='region4a'),
    path('annual_reports/', views.index, name='annual_reports'),
    path('audited_financial_statements/', views.index, name='audited_financial_statements'),
    path('announcements/', views.index, name='announcements'),
    
    
    path('announcements_readmore/', views.index, name='announcements_readmore'),
    path('by_the_numbers/', views.index, name='by_the_numbers'),
    path('videos/', views.index, name='videos'),
    path('k_ganap/', views.index, name='k_ganap'),
    path('k_ganap_readmore/', views.index, name='k_ganap_readmore'),
    path('kwentong_k/', views.index, name='kwentong_k'),
    path('kwentong_k_readmore/', views.index, name='kwentong_k_readmore'),
    path('k_bahagi/', views.index, name='k_bahagi'),
    path('k_bahagi_readmore/', views.index, name='k_bahagi_readmore'),
    path('careers/', views.index, name='careers'),

    path('go_bring_me/', views.index, name='go_bring_me'),


    path('',include('api.urls')),

    path('*', views.index, name='Error404'),
]

#urlpatterns += staticfiles_urlpatterns()


