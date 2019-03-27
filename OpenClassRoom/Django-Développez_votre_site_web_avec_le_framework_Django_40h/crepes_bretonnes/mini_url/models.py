from django.db import models

import random
import string


#TODO
# Intégrer un style CSS et des images depuis des fichiers statiques via le tag{% static %};

# Donner davantage de statistiques sur les redirections ;

# Proposer la possibilité de rendre anonyme une redirection ;




# Infos : 
# https://openclassrooms.com/courses/developpez-votre-site-web-avec-le-framework-django/tp-un-raccourcisseur-d-url

# Create your models here.
class MiniURL(models.Model):
    # nom_domaine = models.CharField(max_length=100) # nom du site
    url = models.URLField(verbose_name="URL à réduire", unique=True)
    code = models.CharField(max_length=6, unique=True)
    date = models.DateTimeField(auto_now_add=True, verbose_name="Date d'enregistrement")
    pseudo = models.CharField(max_length=255, blank=True, null=True)
    nb_acces =  models.IntegerField(default=0, verbose_name="Nombre d'accès à l'URL")

    def __str__(self):
        # return self.nom_domaine
        return "[{0}] {1}".format(self.code, self.url)

# **kwargs allows you to handle named arguments that you have not defined in advance.

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.generer(6)
        super(MiniURL, self).save(*args, **kwargs)

    def generer(self, nb_caracteres):
        caracteres = string.ascii_letters + string.digits
        aleatoire = [random.choice(caracteres) for _ in range(nb_caracteres)]
        self.code = ''.join(aleatoire)
        # ^_
        # En théorie, il faudrait vérifier que le code n'est pas déjà utilisé 
        # ou alors faire une méthode nous assurant l'absence de doublon.
        # Dans un souci de simplicité et de pédagogie, nous allons sauter cette étape.

    class Meta:
        verbose_name = "Mini URL" # sert dans l'administration ! "selectionnez l'objet [article] à changer"; "4 [article]"
        verbose_name_plural = "Minis URL"
        ordering = ['date']