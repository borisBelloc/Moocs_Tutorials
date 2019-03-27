from django.db import models

# Create your models here.
from django.utils import timezone

class Article(models.Model):
    titre = models.CharField(max_length=100) # champ de caractères
    slug = models.SlugField(max_length=100) # SLUG string url!
    auteur = models.CharField(max_length=42)
    contenu = models.TextField(null=True) # comme CharField mais sans limite de taille
    date = models.DateTimeField(default=timezone.now, # prend com valeur une instance de date du module Pythondatetime
                                verbose_name="Date de parution")
    categorie = models.ForeignKey('Categorie', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "article" # sert dans l'administration ! "selectionnez l'objet [article] à changer"; "4 [article]"
        ordering = ['date']
    
    def __str__(self):
        """ 
        Cette méthode que nous définirons dans tous les modèles
        nous permettra de reconnaître facilement les différents objets que 
        nous traiterons plus tard dans l'administration
        """
        return self.titre

# ------------------------------
# AJOUTS DES CATEGORIES
class Categorie(models.Model):
    nom = models.CharField(max_length=30)

    def __str__(self):
        return self.nom

# ------------------------------
# COMPARATEUR DE PRIX INGREDIENTS

class Produit(models.Model):
    nom = models.CharField(max_length=30)

    def __str__(self):
        return self.nom

class Vendeur(models.Model):
    nom = models.CharField(max_length=30)
    produits = models.ManyToManyField(Produit, through='Offre', 
                                        related_name='+')
    produits_sans_prix = models.ManyToManyField(Produit, related_name="vendeurs")

    def __str__(self):
        return self.nom

class Offre(models.Model):
    prix = models.IntegerField()
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    vendeur = models.ForeignKey(Vendeur, on_delete=models.CASCADE)

    def __str__(self):
        return "{0} vendu par {1} à {2} €".format(self.produit, self.vendeur, self.prix)
# ------------------------------

# CONTACT
class Contact(models.Model):
    nom = models.CharField(max_length=255)
    adresse = models.TextField()
    photo = models.ImageField(upload_to="photos/")
    
    def __str__(self):
        return self.nom

class Document(models.Model):

    def renommage(self, instance, nom_fichier):
        return "{}-{}".format(instance.id, nom_fichier)

    nom = models.CharField(max_length=100)
    doc = models.FileField(upload_to=renommage, verbose_name="Document")


