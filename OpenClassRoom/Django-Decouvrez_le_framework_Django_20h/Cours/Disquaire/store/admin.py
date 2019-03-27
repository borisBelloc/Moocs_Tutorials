from django.contrib import admin

from django.utils.safestring import mark_safe
from django.urls import reverse
from django.contrib.contenttypes.models import ContentType


from .models import Album, Artist, Booking, Contact


#DOC ADMIN : https://docs.djangoproject.com/en/1.11/ref/contrib/admin/

class AdminURLMixin(object):
    def get_admin_url(self, obj):
        content_type = ContentType.objects.get_for_model(obj.__class__)
        return reverse("admin:store_%s_change" % (content_type.model), args=(obj.id,))

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin, AdminURLMixin):
    list_filter = ['created_at', 'contacted']
    fields = ["created_at", "contact_link", 'album_link', 'contacted']
    readonly_fields = ["created_at", "contact_link", "album_link", "contacted"]

    def has_add_permission(self, request):
        return False

    def contact_link(self, booking):
        url = self.get_admin_url(booking.contact)
        return mark_safe("<a href='{}'>{}</a>".format(url, booking.contact.name))

    def album_link(self, booking):
        url = self.get_admin_url(booking.album)
        return mark_safe("<a href='{}'>{}</a>".format(url, booking.album.title))

class BookingInline(admin.TabularInline, AdminURLMixin):
    model = Booking
    extra = 0
    readonly_fields = ["created_at", "album_link", "contacted"]
    fields = ["created_at", "album_link", "contacted"]
    verbose_name = "Réservation"
    verbose_name_plural = "Réservations"
    extra = 1 #ligne additionnelles. (3 par defaut si ligne non présentes)

    def has_add_permission(self, request): # empeche l'admin d'ajouter des Réservations/Bookings
        return False

    def album_link(self, booking):
        url = self.get_admin_url(booking.album)
        return mark_safe("<a href='{}'>{}</a>".format(url, booking.album.title))
        # La méthode mark_safe indique que le contenu est du HTML et qu'il doit être interprété comme tel.
        # Sans elle, la balise <a> sera considérée comme une chaîne de caractères.

    album_link.short_description = "Album"


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    inlines = [BookingInline,] # list of bookings made by a contact


class AlbumArtistInline(admin.TabularInline):
    verbose_name = "Disque"
    verbose_name_plural = "Disques"
    model = Album.artists.through # the query goes through an intermediate table.
    extra = 1


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    inlines = [AlbumArtistInline,]

@admin.register(Album) # Ajoute un champ de recherche dans l'administration !!
class AlbumAdmin(admin.ModelAdmin):
    search_fields = ['reference', 'title'] # les champs ou est éffectué la recherche ! 



