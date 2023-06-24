from django.db import models


class Doctor(models.Model):
    docnegid = models.CharField(max_length=50)
    nationalid = models.CharField(max_length=50)
    docfullname = models.CharField(max_length=50)
    docusername = models.CharField(max_length=50)
    passwrd = models.CharField(max_length=50)
    datofbirth = models.DateField()
    Email = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    contactnumber = models.CharField(max_length=12)


class PrivateUser(models.Model):
    nationalid = models.CharField(max_length=50)
    pfullname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    passwrd = models.CharField(max_length=50)
    datofbirth = models.CharField(max_length=50)
    currentmedicalsituatio = models.CharField(max_length=50)
    Email = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    contactnumber = models.IntegerField()
