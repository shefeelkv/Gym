from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from fitnex_api.models import Program, Trainer, MembershipPlan, ContactMessage

class FitnexAPITests(APITestCase):

    def setUp(self):
        # Create some testing items
        self.program = Program.objects.create(
            title="Strength Test",
            description="Testing description",
            duration="60 mins",
            difficulty="Intermediate"
        )
        self.trainer = Trainer.objects.create(
            name="Alexander Test",
            role="Test Coach",
            experience="5 Years",
            specialization="Testing",
            certification="Test Certified"
        )
        self.membership = MembershipPlan.objects.create(
            name="Basic Test",
            price="$50",
            tier="basic",
            features=["Feature A", "Feature B"]
        )

    def test_registration(self):
        url = reverse('register')
        data = {
            'username': 'newuser',
            'email': 'newuser@test.com',
            'password': 'password123',
            'phone': '12345678'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertEqual(response.data['user']['username'], 'newuser')

    def test_login(self):
        # Setup user
        user = User.objects.create_user(username='testuser', password='password123', email='test@test.com')
        
        url = reverse('token_obtain_pair')
        data = {
            'username': 'testuser',
            'password': 'password123'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_get_programs(self):
        url = reverse('program-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'Strength Test')

    def test_get_trainers(self):
        url = reverse('trainer-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Alexander Test')

    def test_create_contact_message(self):
        url = reverse('contact_create')
        data = {
            'name': 'John Doe',
            'phone': '555-1234',
            'email': 'john@doe.com',
            'program': 'Strength Training',
            'message': 'Hello, I want to join!'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.first().name, 'John Doe')
