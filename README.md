## Setup

# The first thing to do is to clone the repository:

> git clone https://github.com/Junaid8901/datacollator.git

> cd <project_name>


# Create a virtual environment to install dependencies in and activate it:
```
python==3.7
pip install virtualenv
virtualenv <project_name>
source/path/to/venv/bin/activate

 Then install the dependencies:
(env)$ pip install -r requirements.txt
```

# Run Migrations
```
python manage.py makemigrations
python manage.py migrate
```


# Run the django project locally

```
python manage.py runserver 0.0.0.0:8000
```


# Check out your site!

Visit localhost:8000 on your browser to see your application running. Try adding `/admin/` to the end of the URL, and you'll be taken to the admin site.