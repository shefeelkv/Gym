from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('trainer', 'Trainer'),
        ('member', 'Member'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='member')
    phone = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.role}"

class Program(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.CharField(max_length=50) # e.g. "60 Min", "4 Weeks"
    difficulty = models.CharField(max_length=50) # e.g. "Beginner", "Intermediate", "Advanced"
    image_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.title

class Trainer(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100) # e.g. "Yoga Specialist", "Head Strength Coach"
    experience = models.CharField(max_length=50) # e.g. "8+ Years"
    specialization = models.CharField(max_length=200) # e.g. "Strength, Mobility"
    certification = models.CharField(max_length=200) # e.g. "NASM-CPT"
    photo_url = models.URLField(max_length=500, blank=True, null=True)
    social_facebook = models.URLField(max_length=200, blank=True, null=True)
    social_instagram = models.URLField(max_length=200, blank=True, null=True)
    social_twitter = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name

class MembershipPlan(models.Model):
    TIER_CHOICES = (
        ('basic', 'Basic'),
        ('premium', 'Premium'),
        ('elite', 'Elite'),
    )
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=50) # e.g. "$99/mo"
    tier = models.CharField(max_length=20, choices=TIER_CHOICES, default='basic')
    features = models.JSONField() # List of string features, e.g., ["Gym Access", "Cardio Zone"]
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100) # e.g. "Entrepreneur", "Athlete"
    rating = models.IntegerField(default=5) # 1-5 rating
    review = models.TextField()
    success_story = models.TextField(blank=True, null=True)
    photo_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.role}"

class GalleryItem(models.Model):
    CATEGORY_CHOICES = (
        ('interior', 'Gym Interior'),
        ('equipment', 'Equipment'),
        ('classes', 'Group Classes'),
        ('members', 'Members'),
        ('transformation', 'Transformation'),
        ('events', 'Events'),
    )
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    image_url = models.URLField(max_length=500)
    title = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.title} ({self.category})"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    program = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"

class TrainerBooking(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE, related_name='bookings')
    member_name = models.CharField(max_length=100)
    member_email = models.EmailField()
    booking_date = models.DateField()
    booking_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking with {self.trainer.name} by {self.member_name}"
