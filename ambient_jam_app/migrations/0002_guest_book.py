# Generated by Django 2.2.7 on 2019-12-03 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ambient_jam_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Guest_Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]
