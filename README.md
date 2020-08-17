# Personel Blog/Portfolio
### Blog/Portfolio app using Django
---------------------------------------------------
**About**

This repository is a very simple Django blog that I use for my own website.

This blog works within an existing Django project. I built this with Django 3.0.1, on a ArchLinux distribution, and with Python 3.8.0. I'm sure it will be really easy to get it working with other systems and Django versions.

---------------------------------------------------
**Prerequisites**

- Django-Python development environment already set up.
- virtualenv/conda installed.

----------------------------------------------------

**Installation**

1- Clone this repository.

2- Open the command line/prompt, navigate to the my_blog-portfolio app folder and execute:
- virtualenv env (requires virtualenv) 
- activate the virtualenv : 
  Linux: source env/bin/activate
  Windows: call env/Scripts/activate.bat
  Mac source env/bin/activate
 or using conda create a new env with python3.6
- execute pip install -r requirements.txt
- set DEBUG = True in settings.py
- Run python manage.py migrate
- Run python manage.py runserver
- Open http://127.0.0.1:8000/ in web browser.

--------------------------------------------------------
