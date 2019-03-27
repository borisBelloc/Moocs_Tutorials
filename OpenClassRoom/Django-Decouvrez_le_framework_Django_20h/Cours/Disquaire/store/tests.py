from django.test import TestCase
from .models import Album, Artist, Contact, Booking

from django.urls import reverse
# Create your tests here.



# Index page
    # test that index page returns a 200

# -- test : verif si le system est ok --
class IndexPageTestCase(TestCase):
    def test_index_page(self):
        self.assertEqual('a', 'a')


# -- test : verif si le nom de la page est index --

class IndexPageTestCase(TestCase):
    def test_index_page(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)





# Detail Page
    # test that detail page returns a 200 if the item exists
    # test that detail page returns a 404 if the item does not exist

#--  vérifie que la page detail renvoie un code de statut 200 si l'album est bien trouvé ou 404. --

class DetailPageTestCase(TestCase):
    # test that detail page returns a 200 if the item exists.
    def test_detail_page_returns_200(self):
        impossible = Album.objects.create(title="Transmission Impossible")
        album_id = Album.objects.get(title='Transmission Impossible').id
        response = self.client.get(reverse('store:detail', args=(album_id,)))
        self.assertEqual(response.status_code, 200)
    #-- test that detail page returns a 404 if the item does not exist.
    def test_detail_page_returns_404(self):
        impossible = Album.objects.create(title="Transmission Impossible")
        album_id = Album.objects.get(title='Transmission Impossible').id + 1
        response = self.client.get(reverse('store:detail', args=(album_id,)))
        self.assertEqual(response.status_code, 404)





# Booking Page
    # test that a new booking is made
    # test that a booking belongs to a contact
    # test that a booking belongs to an album
    # test that an album is not available after a booking is made


class BookingPageTestCase(TestCase):

    def setUp(self):
        Contact.objects.create(name="Freddie", email="fred@queens.forever")
        impossible = Album.objects.create(title="Transmission Impossible")
        journey = Artist.objects.create(name="Journey")
        impossible.artists.add(journey)
        self.album = Album.objects.get(title='Transmission Impossible')
        self.contact = Contact.objects.get(name='Freddie')

    # test that a new booking is made
    def test_new_booking_is_registered(self):
        old_bookings = Booking.objects.count()
        album_id = self.album.id
        name = self.contact.name
        email =  self.contact.email
        response = self.client.post(reverse('store:detail', args=(album_id,)), {
            'name': name,
            'email': email
        })
        new_bookings = Booking.objects.count()
        self.assertEqual(new_bookings, old_bookings + 1)

    # test that a booking belongs to a contact
    def test_new_booking_belongs_to_a_contact(self):
        album_id = self.album.id
        name = self.contact.name
        email =  self.contact.email
        response = self.client.post(reverse('store:detail', args=(album_id,)), {
            'name': name,
            'email': email
        })
        booking = Booking.objects.first()
        self.assertEqual(self.contact, booking.contact)

    # test that a booking belong to an album
    def test_new_booking_belongs_to_an_album(self):
        album_id = self.album.id
        name = self.contact.name
        email =  self.contact.email
        response = self.client.post(reverse('store:detail', args=(album_id,)), {
            'name': name,
            'email': email
        })
        booking = Booking.objects.first()
        self.assertEqual(self.album, booking.album)

    # test that an album is not available after a booking is made
    def test_album_not_available_if_booked(self):
        album_id = self.album.id
        name = self.contact.name
        email =  self.contact.email
        response = self.client.post(reverse('store:detail', args=(album_id,)), {
            'name': name,
            'email': email
        })
        # Make the query again, otherwise `available` will still be set at `True`
        self.album.refresh_from_db()
        self.assertFalse(self.album.available)