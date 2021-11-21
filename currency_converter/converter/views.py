from django.shortcuts import render
from .currencies import Currency

# Create your views here.
def index(request):
    template = 'index.html'

    context = dict()
    context['currencies'] = Currency.get_currencies()

    return render(request, template, context)
