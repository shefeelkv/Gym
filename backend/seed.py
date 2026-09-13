import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fitnex_backend.settings')
django.setup()

from django.contrib.auth.models import User
from fitnex_api.models import Program, Trainer, MembershipPlan, Testimonial, GalleryItem, UserProfile

def seed_database():
    print("Seeding database...")

    # 1. Clear existing data
    Program.objects.all().delete()
    Trainer.objects.all().delete()
    MembershipPlan.objects.all().delete()
    Testimonial.objects.all().delete()
    GalleryItem.objects.all().delete()
    
    # 2. Seed Programs
    programs_data = [
        {
            "title": "Strength Training",
            "description": "Develop raw power and lean muscle mass with our barbell-focused structural strength routines designed for maximum efficiency.",
            "duration": "60 Mins",
            "difficulty": "Intermediate",
            "image_url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Weight Loss",
            "description": "High-intensity fat cremation circuits combined with customized nutritional planning for rapid, sustainable body transformation.",
            "duration": "45 Mins",
            "difficulty": "Beginner",
            "image_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Weight Gain & Hypertrophy",
            "description": "Targeted mechanical tension and volume-based training regimes specifically tailored to pack on clean, quality muscle mass.",
            "duration": "75 Mins",
            "difficulty": "Advanced",
            "image_url": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "CrossFit",
            "description": "Constantly varied functional movements executed at high intensity. Prepare yourself for any physical challenge life throws your way.",
            "duration": "60 Mins",
            "difficulty": "Advanced",
            "image_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "HIIT (High Intensity Interval)",
            "description": "Maximize caloric afterburn with explosive athletic training blocks. Excellent for cardiovascular endurance and rapid conditioning.",
            "duration": "30 Mins",
            "difficulty": "Intermediate",
            "image_url": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Restorative & Power Yoga",
            "description": "Synchronize movement and breath to increase flexibility, core stability, mental clarity, and athletic joint longevity.",
            "duration": "60 Mins",
            "difficulty": "Beginner",
            "image_url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Functional Fitness",
            "description": "Multi-planar resistance training focused on improving movements you perform daily. Build a body that performs as good as it looks.",
            "duration": "50 Mins",
            "difficulty": "Intermediate",
            "image_url": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Cardio & Endurance",
            "description": "Zone-based aerobic training utilizing cutting-edge Technogym treadmills and rower units to optimize energy system efficiency.",
            "duration": "45 Mins",
            "difficulty": "Beginner",
            "image_url": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Personal Training",
            "description": "One-on-one coaching with our elite instructors. Fully custom programming, posture screening, and dedicated performance analysis.",
            "duration": "60 Mins",
            "difficulty": "All Levels",
            "image_url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
        },
        {
            "title": "Mobility & Recovery",
            "description": "Fascial release, joint flossing, and active stretching classes dedicated to preventing injuries and speeding up athletic recovery.",
            "duration": "45 Mins",
            "difficulty": "Beginner",
            "image_url": "https://images.unsplash.com/photo-1607962837359-5e7e89f866ad?auto=format&fit=crop&q=80&w=600"
        }
    ]

    for prog in programs_data:
        Program.objects.create(**prog)
    print(f"Created {len(programs_data)} Programs.")

    # 3. Seed Trainers
    trainers_data = [
        {
            "name": "Alexander Sterling",
            "role": "Head Strength & Conditioning Coach",
            "experience": "10+ Years",
            "specialization": "Olympic Weightlifting, Powerlifting, Sports Performance",
            "certification": "CSCS (NSCA), USAW Level 2, NASM-PES",
            "photo_url": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400",
            "social_facebook": "https://facebook.com",
            "social_instagram": "https://instagram.com",
            "social_twitter": "https://twitter.com"
        },
        {
            "name": "Seraphina Vance",
            "role": "Director of Yoga & Mindfulness",
            "experience": "8+ Years",
            "specialization": "Vinyasa Flow, Asthanga, Athletic Joint Mobility, Breathwork",
            "certification": "E-RYT 500 Yoga Alliance, FRCms (Functional Range Conditioning)",
            "photo_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
            "social_facebook": "https://facebook.com",
            "social_instagram": "https://instagram.com",
            "social_twitter": "https://twitter.com"
        },
        {
            "name": "Marcus Thorne",
            "role": "HIIT & Cardio Performance Coordinator",
            "experience": "7+ Years",
            "specialization": "Metabolic Conditioning, Kettlebell Athletics, Functional Performance",
            "certification": "B.S. Exercise Science, ACE-CPT, RKC Kettlebell Coach",
            "photo_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            "social_facebook": "https://facebook.com",
            "social_instagram": "https://instagram.com",
            "social_twitter": "https://twitter.com"
        },
        {
            "name": "Elena Rostova",
            "role": "Calisthenics & Injury Prevention Specialist",
            "experience": "9+ Years",
            "specialization": "Bodyweight Strength, Posture Correction, Injury Rehabilitation",
            "certification": "NASM-CES (Corrective Exercise), FMS Level 1, CrossFit L2",
            "photo_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
            "social_facebook": "https://facebook.com",
            "social_instagram": "https://instagram.com",
            "social_twitter": "https://twitter.com"
        }
    ]

    for tr in trainers_data:
        Trainer.objects.create(**tr)
    print(f"Created {len(trainers_data)} Trainers.")

    # 4. Seed Membership Plans
    memberships_data = [
        {
            "name": "Basic",
            "price": "$99",
            "tier": "basic",
            "features": [
                "Full Gym Floor Access",
                "Advanced Cardio & Weight Zones",
                "Luxury Locker Rooms & Showers",
                "Complimentary Towel Service",
                "Free High-speed Wi-Fi"
            ],
            "is_featured": False
        },
        {
            "name": "Premium",
            "price": "$199",
            "tier": "premium",
            "features": [
                "Everything in Basic Access",
                "Unlimited Signature Group Classes",
                "Monthly 1-on-1 Diet Consultation",
                "Monthly Bio-impedance Progress Tracking",
                "Access to Luxury Steam & Sauna Room",
                "1 Complimentary PT Taster Session"
            ],
            "is_featured": True
        },
        {
            "name": "Elite",
            "price": "$399",
            "tier": "elite",
            "features": [
                "Unlimited Club & Spa Access",
                "Dedicated Personal Trainer (2x/week)",
                "Fully Custom Macro/Micro Meal Plan",
                "Priority Class & Event Bookings",
                "Private VIP Keyed Locker",
                "Unlimited Guest Passes (1/day)",
                "24/7 Digital Concierge Support"
            ],
            "is_featured": False
        }
    ]

    for mb in memberships_data:
        MembershipPlan.objects.create(**mb)
    print(f"Created {len(memberships_data)} Membership Plans.")

    # 5. Seed Testimonials
    testimonials_data = [
        {
            "name": "Brandon C.",
            "role": "Corporate Executive",
            "rating": 5,
            "review": "FITNEX ELITE redefined how I view fitness. The environment is premium, and the trainers possess athletic depth rather than just counting reps. It's the highlight of my stressful day.",
            "success_story": "Lost 18 lbs of body fat while building significant muscle mass over 6 months.",
            "photo_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
            "name": "Diana K.",
            "role": "Professional Dancer",
            "rating": 5,
            "review": "The recovery facilities and mobility-focused classes here saved my career. It's not just a gym; it's a sanctuary for high-performance athletic restoration.",
            "success_story": "Rehabilitated chronic hip tightness, improving active flexibility by 25%.",
            "photo_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            "name": "Julian R.",
            "role": "Tech Founder",
            "rating": 5,
            "review": "The Elite membership is worth every single dollar. Having my trainer collaborate directly with the nutrition team takes away all the guesswork. Highly professional.",
            "success_story": "Gained 12 lbs of clean muscle mass and improved deadlift to 2x bodyweight.",
            "photo_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        }
    ]

    for ts in testimonials_data:
        Testimonial.objects.create(**ts)
    print(f"Created {len(testimonials_data)} Testimonials.")

    # 6. Seed Gallery Items
    gallery_data = [
        {
            "category": "interior",
            "image_url": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
            "title": "Luxury Weight Room Layout"
        },
        {
            "category": "equipment",
            "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800",
            "title": "Premium Matte Barbells"
        },
        {
            "category": "classes",
            "image_url": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
            "title": "High Intensity Athletic Conditioning"
        },
        {
            "category": "members",
            "image_url": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
            "title": "Focused Strength Athletes"
        },
        {
            "category": "transformation",
            "image_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
            "title": "Athletic Body Composition Transformation"
        },
        {
            "category": "events",
            "image_url": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
            "title": "Elite Annual Fitness Summit"
        },
        {
            "category": "interior",
            "image_url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            "title": "Mind-Body Restoration Studio"
        },
        {
            "category": "equipment",
            "image_url": "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800",
            "title": "State of the Art Cardio Deck"
        }
    ]

    for gi in gallery_data:
        GalleryItem.objects.create(**gi)
    print(f"Created {len(gallery_data)} Gallery Items.")

    # 7. Create a default admin user and test user
    if not User.objects.filter(username="admin").exists():
        admin_user = User.objects.create_superuser("admin", "admin@fitnex.com", "admin123")
        UserProfile.objects.get_or_create(user=admin_user, role="admin", phone="+123456789")
        print("Admin user created (admin / admin123)")

    if not User.objects.filter(username="member").exists():
        member_user = User.objects.create_user("member", "member@fitnex.com", "member123")
        UserProfile.objects.get_or_create(user=member_user, role="member", phone="+987654321")
        print("Standard member user created (member / member123)")

    print("Database seeding completed successfully!")

if __name__ == "__main__":
    seed_database()
