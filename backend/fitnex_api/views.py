from rest_framework import viewsets, generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Program, Trainer, MembershipPlan, Testimonial, GalleryItem, ContactMessage, TrainerBooking
from .serializers import (
    UserSerializer, ProgramSerializer, TrainerSerializer, 
    MembershipPlanSerializer, TestimonialSerializer, 
    GalleryItemSerializer, ContactMessageSerializer, TrainerBookingSerializer
)

class RegistrationView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = (permissions.AllowAny,)

class TrainerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
    permission_classes = (permissions.AllowAny,)

class MembershipPlanViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MembershipPlan.objects.all().order_by('id')
    serializer_class = MembershipPlanSerializer
    permission_classes = (permissions.AllowAny,)

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
    permission_classes = (permissions.AllowAny,)

class GalleryItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer
    permission_classes = (permissions.AllowAny,)

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = (permissions.AllowAny,)

class TrainerBookingCreateView(generics.CreateAPIView):
    queryset = TrainerBooking.objects.all()
    serializer_class = TrainerBookingSerializer
    permission_classes = (permissions.IsAuthenticated,)
