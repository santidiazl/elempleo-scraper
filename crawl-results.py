import pandas as pd
import requests
from bs4 import BeautifulSoup



#page = requests.get("https://www.elempleo.com/co/ofertas-empleo/?trabajo=desarrollador")

#open HTML file
html =  open('1.html', 'r')

#parse it
soup = BeautifulSoup(html, 'html.parser')
soup.prettify()

resultContainer = soup.find('div', class_='result-list js-result-list js-results-container')

resultDivs = soup.find_all('div', class_='result-item')

jobURLs = []

#loop through job divs and get URLs, append to list
for div in resultDivs:
    firstResult = list(div.children)[1]
    URL = firstResult.get('data-url')
    jobURLs.append(URL)
    print(URL)

#print(jobURLs)
