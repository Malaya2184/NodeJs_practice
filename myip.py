import urllib.request
import json


ips = ['106','206','36','239']


for ip in ips:
        with urllib.request.urlopen("https://geolocation-db.com/jsonp/"+ip) as url:
                data = url.read().decode()
                data = data.split("(")[1].strip(")")
                print(data)