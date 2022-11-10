from django.urls import path
from . import views

urlpatterns = [
    path('', views.top, name="top"),
    path('<str:str1>/', views.level1, name="level1"),
    path('<str:str1>/<str:str2>/', views.level2, name="level2"),
    path('*', views.nopage, name="404"),
]
