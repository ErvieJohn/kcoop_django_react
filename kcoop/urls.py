
from django.contrib import admin
from django.urls import path, include

from . import views

from .views import index

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

## FOR JWT AUTHENTICATION
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    ## FOR JWT AUTHENTICATION
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    
    
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
    #path('announcements/', views.index, name='announcements_read'),
    
    
    path('announcements/<str:id>', views.announcements, name='announcements_read_more'),
    path('by_the_numbers/', views.index, name='by_the_numbers'),
    path('videos/', views.index, name='videos'),
    path('k_ganap/', views.index, name='k_ganap'),
    path('k_ganap/<str:id>', views.k_ganapan, name='k_ganap_read_more'),
    path('kwentong_k/', views.index, name='kwentong_k'),
    path('kwentong_k/<str:id>', views.kwentong_k, name='kwentong_k_readmore'),
    path('k_bahagi/', views.index, name='k_bahagi'),
    path('k_bahagi/<str:id>', views.k_bahagi, name='k_bahagi_readmore'),
    path('careers/', views.index, name='careers'),

    path('go_bring_me/', views.index, name='go_bring_me'),


    path('',include('api.urls')),

    path('*/', views.index, name='Error404'),
    
    # ADMIN
    path('cms/login', views.index, name='login'),
    
    path('cms/', views.index, name='cms'),
    path('cms/announcements/edit/<str:id>', views.cms_announcements, name='cms_announcements'),
    
    path('cms/k_ganapan/edit/<str:id>', views.cms_k_ganapan, name='cms_k_ganapan'),
    path('cms/kwentong_k/edit/<str:id>', views.cms_kwentong_k, name='cms_kwentong_k'),
    path('cms/k_bahagi/edit/<str:id>', views.cms_k_bahagi, name='cms_k_bahagi'),
    
    
    # Registration
    path('register/', views.index, name='register'),
    
    # APP dashboard
    path('app/dashboard/', views.index, name='dashboard'),
    
    # App Admin
    path('app/admin/member/<str:username>', views.admin_member, name='admin_member'),

]

handler404 = views.page_not_found_view

#urlpatterns += staticfiles_urlpatterns()


