from django.http import FileResponse, Http404
from django.shortcuts import render
from .models import Post
from django.views.generic import DetailView
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


def home(request):
    posts_list = Post.objects.all()
    page = request.GET.get('page', 1)
    paginator = Paginator(posts_list, 5)
    try:
        posts_list = paginator.page(page)
    except PageNotAnInteger:
        posts_list = paginator.page(1)
    except EmptyPage:
        posts_list = paginator.page(paginator.num_pages)
    context = {'posts': posts_list}
    return render(request, 'portfolio/home.html', context)


class PostDetailView(DetailView):
    model = Post


def portfolio(request):
    try:
        return FileResponse(open('mahrezbh.pdf', 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404('not found')


def detail(request, slug):
    details = "portfolio/post_detail.html"
    context = {
        "post": get_object_or_404(Post, slug=slug)  # pass slug
    }
    return render(request, details, context)
