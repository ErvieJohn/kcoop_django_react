from django.urls import path
from . import views
from . import member_api
from . import product_api

urlpatterns = [
    path('getTBL_Header/', views.getTBL_Header), # for Header

    path('getWhoWeAreType/', views.getWhoWeAreType), # for Who We Are Header
    path('getWhoWeAre/', views.getWhoWeAre), # for Who We Are

    path('getProgramsAndServicesType/', views.getProgramsAndServicesType), # for Programs And Services Header
    path('getProgramsAndServices/', views.getProgramsAndServices), # for Programs And Services
    path('getProgramsAndServicesLOGO/', views.getProgramsAndServicesLOGO), # for Programs And Services Logo
    path('getProgramsAndServicesTitleLOGO/', views.getProgramsAndServicesTitleLOGO), # for Programs And Services Logo
    
    
    path('getTBL_SatalliteOfficesType/', views.getTBL_SatalliteOfficesType), # for Satallite Offices Header
    path('getTBL_SatalliteOffices/', views.getTBL_SatalliteOffices), # for Satallite Offices Contents
    
    path('getTBL_PublicationsType/', views.getTBL_PublicationsType), # for PublicationsType Header
    path('getTBL_Publications/', views.getTBL_Publications), # for Publications Content
    path('getTBL_PublicationsID/', views.getTBL_PublicationsID), # for Publications ID
    
    
    
    path('getTBL_StoriesType/', views.getTBL_StoriesType), # for Stories Header
    path('getTBL_Stories/', views.getTBL_Stories), # for Stories Content
    path('getTBL_StoriesID/', views.getTBL_StoriesID), # for Stories ID
    
    
    path('getCareersData/', views.getCareersData), # for Careers Content
    
    path('getHomeData/', views.getHomeData), # for Careers Content
    
    
    # FOR CMS 
    path('cmsLogout/', views.cmsLogout),
    path('getCmsStaff/', views.getCmsStaff),
    
    
    ##### JWT 
    path('api/login/', member_api.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    ### Home
    path('getHomeSlide/', views.getHomeSlide),
    path('updateHomeSlide/', views.updateHomeSlide),
    path('uploadImage/', views.uploadImage),
    path('deleteImage/', views.deleteImage),
    
    ### History
    path('updateWhoweare/', views.updateWhoweare),
    
    ### WhoWeAre
    path('updateWhoWeAreImage/', views.updateWhoWeAreImage),
    path('uploadWhoWeAreImage/', views.uploadWhoWeAreImage),
    path('deleteWhoWeAreImage/', views.deleteWhoWeAreImage),
    
    ### Programs And Services
    path('updatePnSImage/', views.updatePnSImage),
    path('deletePnSImage/', views.deletePnSImage),
    path('uploadPnSImage/', views.uploadPnSImage),

    ### Satallite Offices
    path('deleteSOImage/', views.deleteSOImage),
    path('uploadSOImage/', views.uploadSOImage),
    path('updateSOImage/', views.updateSOImage),
 
    ### Publications
    path('deletePubContent/', views.deletePubContent),
    path('uploadPubContent/', views.uploadPubContent),
    path('updatePubContent/', views.updatePubContent),
  
    ### Stories
    path('updateStoriesContent/', views.updateStoriesContent),
    path('updateStoriesStatus/', views.updateStoriesStatus),
    path('uploadStoriesContent/', views.uploadStoriesContent),
    path('deleteStoriesContent/', views.deleteStoriesContent),
    
    ### Careers
    path('updateCareersImage/', views.updateCareersImage),
    path('deleteCareersImage/', views.deleteCareersImage),
    path('uploadCareersImage/', views.uploadCareersImage),
    
    ### Audit Trail
    path('getAuditTrail/', views.getAuditTrail),
    
    ### Member WITH JWT
    path('api/member/login/', member_api.memberMyTokenObtainPairView.as_view(), name='member_token_obtain_pair'), #;ogin the user
    path('api/member/register/', product_api.registerMember, name="register_member"), # create a user
    
    ### MEMBER PRODUCT
    path('api/member/insertProduct/', product_api.insertProduct, name="insert_member's_product"), # create a product
    
]
