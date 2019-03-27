from django.contrib import admin

from django.utils.text import Truncator
# Register your models here.
from .models import Categorie, Article



class ArticleAdmin(admin.ModelAdmin):
    list_display   = ('titre', 'auteur', 'date', 'apercu_contenu') #sommaire admin
    list_filter    = ('auteur','categorie',)
    date_hierarchy = 'date'
    ordering       = ('date', )
    search_fields  = ('titre', 'contenu')
    #  ^- Noté de la meme façon que leur verbose_name respectif
    prepopulated_fields = {'slug': ('titre', ), }

# ------    //
    # fields = ('titre', 'auteur', 'categorie', 'contenu') # dans le panneau de modification des articles
        # ^- ordre souhaité des catégorie dans admin. Permet egalement de cacher des champs
# ------ On désactive fields car ici on le remplace par fieldsets

    # Configuration du formulaire d'édition
    fieldsets = (
        # Fieldset 1 : meta-info (titre, auteur…)
        ('Général', {
            'classes': ['collapse', ], # <- MENU COLLAPE CACHé !!!!
            'fields': ('titre', 'auteur', 'categorie')
        }),
        # Fieldset 2 : contenu de l'article
        ('Contenu de l\'article', {
            'description': 'Le formulaire accepte les balises HTML. Utilisez-les à bon escient !',
            'fields': ('contenu', )
        }),
    )





    def apercu_contenu(self, article):
        """ 
        Retourne les 40 premiers caractères du contenu de l'article, 
        suivi de points de suspension si le texte est plus long. 
        
        On pourrait le coder nous même, mais Django fournit déjà la 
        fonction qui le fait pour nous !
        """
        # ------    //
        # return Truncator(article.contenu).chars(40, truncate='...')
        # ------ truncator fonctionnait avec FIELD. on le remplace dans FIELDSET par ce qui suit : 
        text = article.contenu[0:40]
        if len(article.contenu) > 40:
            return '%s…' % text
        else:
            return text


    # En-tête de notre colonne
    apercu_contenu.short_description = 'Aperçu du contenu'

admin.site.register(Categorie)
admin.site.register(Article, ArticleAdmin) # il faut spécifier à Django de prendre en compte ces données pour le modèle Article.
                                        # Pour ce faire, modifions la ligne admin.site.register(Article), en ajoutant le deuxième paramètre ArticleAdmin

