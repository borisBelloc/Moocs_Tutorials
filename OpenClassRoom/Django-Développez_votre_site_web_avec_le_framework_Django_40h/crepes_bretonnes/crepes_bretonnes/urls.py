"""crepes_bretonnes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from django.conf.urls import url



# from blog import views

# tuto :
# https://openclassrooms.com/courses/developpez-votre-site-web-avec-le-framework-django/votre-premiere-page-grace-aux-vues



urlpatterns = [
    path('admin/', admin.site.urls),
    
    # on a défini le préfixe d'URL blog/. Cette portion va précéder toutes les URL incluses. 
    path('blog/', include('blog.urls')), # a personaliser; on peut choisir le patch "blog" par ce qu'on veut    
    url('mini_url', include('mini_url.urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


