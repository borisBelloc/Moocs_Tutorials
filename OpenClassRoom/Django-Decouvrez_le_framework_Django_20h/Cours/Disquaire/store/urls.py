from django.conf.urls import url
from . import views # import views so we can use them in urls.

app_name="store" # <- gestion du namespace


urlpatterns = [
    # url(r'^$', views.index), # "/store" will call the methode "index" in "views.py"
        # ^on a mis ce lien dans le URLS global afin que l'index soit à la racine du site et non sur /store/""

    url(r'^$', views.listing, name="listing"),
        # ^on dirige les url vides "" sur cette page

    url(r'^(?P<album_id>[0-9]+)/$', views.detail, name="detail"),

    url(r'^search/$', views.search, name="search"),

        
]