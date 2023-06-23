# Generated by Django 4.2.2 on 2023-06-22 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cardiomate', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('docnegid', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('nationalid', models.CharField(max_length=50)),
                ('docfullname', models.CharField(max_length=50)),
                ('docusername', models.CharField(max_length=50)),
                ('passwrd', models.CharField(max_length=50)),
                ('datofbirth', models.DateField()),
                ('Email', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('contactnumber', models.CharField(max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name='PrivateUser',
            fields=[
                ('nationalid', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('pfullname', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50)),
                ('passwrd', models.CharField(max_length=50)),
                ('datofbirth', models.CharField(max_length=50)),
                ('currentmedicalsituatio', models.CharField(max_length=50)),
                ('Email', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('contactnumber', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]