from django.contrib import admin
from .models import UserProfile, Program, Trainer, MembershipPlan, Testimonial, GalleryItem, ContactMessage, TrainerBooking

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'phone', 'created_at')
    list_filter = ('role',)

@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('title', 'duration', 'difficulty')
    list_filter = ('difficulty',)

@admin.register(Trainer)
class TrainerAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'experience')

@admin.register(MembershipPlan)
class MembershipPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'tier', 'is_featured')
    list_filter = ('tier', 'is_featured')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'rating')
    list_filter = ('rating',)

@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')
    list_filter = ('category',)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'program', 'created_at')
    readonly_fields = ('created_at',)

@admin.register(TrainerBooking)
class TrainerBookingAdmin(admin.ModelAdmin):
    list_display = ('trainer', 'member_name', 'booking_date', 'booking_time', 'created_at')
    readonly_fields = ('created_at',)

