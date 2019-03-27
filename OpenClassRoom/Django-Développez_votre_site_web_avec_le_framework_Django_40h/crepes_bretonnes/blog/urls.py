from django.urls import path
from . import views # a personnaliser selon le projet


urlpatterns = [
    path('EXaccueil', views.home), # -> 
# --- Modifie accueuil pour afficher tous les articles :
    path('', views.accueil, name='accueil'),
    path('article/<int:id>-<slug:slug>', views.lire, name='lire'),


    path('article/<int:id_article>', views.view_article, name='afficher_article'), #on peut definir un name afin rappeller l'url plus facilement dans view
    path('articles/<int:year>/<int:month>', views.list_articles),
    path('redirection', views.view_redirection),

    path('date', views.date_actuelle),
    path('addition/<int:nombre1>/<int:nombre2>/', views.addition),

    path('macrepe', views.macrepe),

    path('contact/', views.contact, name='contact'),

    path('sendarticle/', views.sendarticle, name='sendarticle'),

    path('nouveau_contact/', views.nouveau_contact, name='nouveau_contact'),

    path('voir_contacts/', views.voir_contacts, name='voir_contacts'),

]
