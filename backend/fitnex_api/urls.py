from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    RegistrationView, UserProfileView, ProgramViewSet, TrainerViewSet,
    MembershipPlanViewSet, TestimonialViewSet, GalleryItemViewSet,
    ContactMessageCreateView, TrainerBookingCreateView
)

router = DefaultRouter()
router.register(r'programs', ProgramViewSet, basename='program')
router.register(r'trainers', TrainerViewSet, basename='trainer')
router.register(r'memberships', MembershipPlanViewSet, basename='membership')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'gallery', GalleryItemViewSet, basename='gallery')

urlpatterns = [
    # Router endpoints
    path('', include(router.urls)),
    
    # Auth endpoints
    path('auth/register/', RegistrationView.as_view(), name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/profile/', UserProfileView.as_view(), name='profile'),
    
    # Custom post endpoints
    path('contact/', ContactMessageCreateView.as_view(), name='contact_create'),
    path('bookings/', TrainerBookingCreateView.as_view(), name='booking_create'),
]
