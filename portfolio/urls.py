from django.urls import path
from . import views
from django.conf.urls import include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url

urlpatterns = [
    path('', views.home, name='home'),
    path('resume/', views.portfolio, name='resume'),
    path('ckeditor/', include("ckeditor_uploader.urls")),
    url(r'^(?P<slug>[\w-]+)/$', views.detail, name='post-detail'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
