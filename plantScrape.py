#This program is for scrapping plant images and saving it into a database.

from bs4 import BeautifulSoup as bs
import requests


r  = requests.get('http://www.starrenvironmental.com/images/')

data = r.text


soup = bs(data)

for link in soup.find_all('a'):
    print(link.get('href'))

