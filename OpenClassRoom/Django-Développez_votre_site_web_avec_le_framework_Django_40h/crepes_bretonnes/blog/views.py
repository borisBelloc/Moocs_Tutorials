from django.http import HttpResponse, Http404
from django.shortcuts import redirect, render, get_object_or_404

from datetime import datetime
from .forms import ArticleForm, ContactForm, NouveauContactForm
from blog.models import Article, Contact


# Create your views here.

def home(request):
    """ Exemple de page non valide au niveau HTML pour que l'exemple soit concis """
    return HttpResponse("""
        <html>
        <body>
        <h1>Bienvenue sur mon blog !</h1>
        <p> ceci est l'EX-ACCUEIL</p>
        <p>Code dans VIEWS.PY</p>
        <p>Les crêpes bretonnes ça tue des mouettes en plein vol !</p>
        <p><a href="http://localhost:8000/blog/accueil">Visit HOME !</a></p>
        </body>
        </html>
    """)

def list_articles(request, month, year):
    """ Liste des articles d'un mois précis. """
    return HttpResponse(
        "Vous avez demandé les articles de {0} / {1}.".format(month, year)
    )

def view_article(request, id_article):
    """ 
    Vue qui affiche un article selon son identifiant (ou ID, ici un numéro)
    Son ID est le second paramètre de la fonction (pour rappel, le premier
    paramètre est TOUJOURS la requête de l'utilisateur)
    """
        # Si l'ID est supérieur à 100, nous considérons que l'article n'existe pas
    # if int(id_article) > 200:
    #     raise Http404
    return HttpResponse(
        "Vous avez demandé l'article #{0} !".format(id_article)
    )
    
def view_redirection(request):
    return HttpResponse(
        "Vous avez été redirigé; article entre 100 et 200"
        )

def date_actuelle(request):
    return render(request, 'blog/date.html', {'date': datetime.now()})

def addition(request, nombre1, nombre2):    
    total = nombre1 + nombre2

    # Retourne nombre1, nombre2 et la somme des deux au tpl
    return render(request, 'blog/addition.html', locals())

# ----------------------------------------------------------
def macrepe(request):
    return render(request, 'blog/macrepe.html' ) # chemin explorateur
# on utilise render lorsque l'on apl un template
# ----------------------------------------------------------
# ACCUEUIL show all article + SLUG
# utilise -> import Article

def accueil(request):
    """ Afficher tous les articles de notre blog """
    articles = Article.objects.all() # Nous sélectionnons tous nos articles
    return render(request, 'blog/accueil.html', {'derniers_articles': articles})
    # on utilise render lorsque l'on apl un template

def lire(request, id, slug):
    article = get_object_or_404(Article, id=id, slug=slug)
    return render(request, 'blog/lire.html', {'article':article})

# FORMULAIRE --------------
# requier ->  from .forms import ContactForm

def contact(request):
    # Construire le formulaire, soit avec les données postées,
    # soit vide si l'utilisateur accède pour la première fois
    # à la page.
    form = ContactForm(request.POST or None)
    # Nous vérifions que les données envoyées sont valides
    # Cette méthode renvoie False s'il n'y a pas de données 
    # dans le formulaire ou qu'il contient des erreurs.
    if form.is_valid(): 
        # Ici nous pouvons traiter les données du formulaire
        sujet = form.cleaned_data['sujet']
        message = form.cleaned_data['message']
        envoyeur = form.cleaned_data['envoyeur']
        renvoi = form.cleaned_data['renvoi']

        # Nous pourrions ici envoyer l'e-mail grâce aux données 
        # que nous venons de récupérer
        envoi = True
    
    # Quoiqu'il arrive, on affiche la page du formulaire.
    return render(request, 'blog/contact.html', locals())

def sendarticle(request):
    form = ArticleForm(request.POST or None)
    if form.is_valid(): 
        # Ici nous pouvons traiter les données du formulaire
        titre = form.cleaned_data['titre']
        slug = form.cleaned_data['slug']
        auteur = form.cleaned_data['auteur']
        contenu = form.cleaned_data['contenu']
        # date = form.cleaned_data['date']
        categorie = form.cleaned_data['categorie']
        envoi = True
        form.save()
    return render(request, 'blog/sendarticle.html', locals())

#  ---------------------- CONTACT ------------------------

def nouveau_contact(request):
    sauvegarde = False
    form = NouveauContactForm(request.POST or None, request.FILES)
    if form.is_valid():
        contact = Contact()
        contact.nom = form.cleaned_data["nom"]
        contact.adresse = form.cleaned_data["adresse"]
        contact.photo = form.cleaned_data["photo"]
        contact.save()
        sauvegarde = True

    return render(request, 'blog/nouveau_contact.html', {
        'form': form, 
        'sauvegarde': sauvegarde
    })

def voir_contacts(request):
    return render(request, 'blog/voir_contacts.html', {
        'contacts': Contact.objects.all()
        })