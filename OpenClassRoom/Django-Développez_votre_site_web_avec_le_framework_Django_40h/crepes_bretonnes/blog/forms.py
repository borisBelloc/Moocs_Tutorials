from django import forms

from .models import Article


class ContactForm(forms.Form):
    sujet = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)
    envoyeur = forms.EmailField(label="Votre adresse e-mail")
    renvoi = forms.BooleanField(help_text="Cochez si vous souhaitez obtenir une copie du mail envoyé.", required=False)
    # DOC : DIFFERENT INPUT OF TEXT : https://docs.djangoproject.com/en/2.0/ref/forms/widgets/#built-in-widgets

# -------------------- lire : https://openclassrooms.com/courses/developpez-votre-site-web-avec-le-framework-django/les-formulaires-6    #     # CENSURE DU MOT PIZZA *seulement* dans le formulaire !
    # def clean_message(self):
    #     message = self.cleaned_data['message']
    #     if "pizza" in message:
    #         raise forms.ValidationError("On ne veut pas entendre parler de pizza !") # il est important d'utiliser l'exceptionforms.ValidationError!
    #     return message  # Ne pas oublier de renvoyer le contenu du champ traité

# -------------------- 
        # CENSURE DU MOT PIZZA dans le formulaire *et* dans le titre du message !
    def clean(self):
        cleaned_data = super(ContactForm, self).clean()
        sujet = cleaned_data.get('sujet')
        message = cleaned_data.get('message')

        if sujet and message:  # Est-ce que sujet et message sont valides ?
            if "pizza" in sujet and "pizza" in message:
                # raise forms.ValidationError(  # <- le message d'erreur apparait en haut du formulaire !
                #     "Vous parlez de pizzas dans le sujet ET le message ? Non mais ho !"
                # )
                self.add_error("message", # <- on indique ou afficher le message d'erreur
                    "Vous parlez déjà de pizzas dans le sujet, "
                    "n'en parlez plus dans le message !"
                )
        return cleaned_data  # N'oublions pas de renvoyer les données si tout est OK


class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ('titre', 'slug', 'auteur', 'contenu', 'date', 'categorie')


# ------------------------------------------------
class NouveauContactForm(forms.Form):
    nom = forms.CharField()
    adresse = forms.CharField(widget=forms.Textarea)
    photo = forms.ImageField()