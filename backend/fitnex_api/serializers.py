from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Program, Trainer, MembershipPlan, Testimonial, GalleryItem, ContactMessage, TrainerBooking

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('role', 'phone')

class UserSerializer(serializers.ModelSerializer):
    role = serializers.CharField(write_only=True, required=False, default='member')
    phone = serializers.CharField(write_only=True, required=False, allow_blank=True, default='')
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'role', 'phone', 'profile')
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True}
        }

    def create(self, validated_data):
        role = validated_data.pop('role', 'member')
        phone = validated_data.pop('phone', '')
        password = validated_data.pop('password')
        
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        
        # Create or update profile
        UserProfile.objects.get_or_create(user=user, role=role, phone=phone)
        return user

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class MembershipPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembershipPlan
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class TrainerBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainerBooking
        fields = '__all__'
