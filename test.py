import pandas as pd
import requests
import re
from bs4 import BeautifulSoup
import urllib.parse as urlparse
from urllib.parse import parse_qs


#open HTML file
html =  open('indeed-results.html', 'r')
#parse
soup = BeautifulSoup(html, 'html.parser')

#get all job card divs
resultCards = soup.find_all('div', class_='jobsearch-SerpJobCard')
#list for URLS
jobURLs = []

for card in resultCards:
    cardH2 = card.find('h2', class_='title')
    aTag = cardH2.a
    URL = aTag.get('href')
    jobURLs.append(URL)
    break

