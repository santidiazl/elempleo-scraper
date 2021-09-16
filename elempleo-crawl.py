import pandas as pd
import requests
import re

from bs4 import BeautifulSoup

import urllib.parse as urlparse
from urllib.parse import parse_qs

# list to string function
def listToString(list):
    str1 = ""
    return (str1.join(list))

#open SERP html file
# el empleo allows 100 results max per page - I manually saved each page and ran script
html =  open('15.html', 'r')

#parse it
soup = BeautifulSoup(html, 'html.parser')
#get all a tags from results page
jobLinks = soup.find_all('a', class_='text-ellipsis js-offer-title')
#job URL list
jobURLs = []

#loop through each a tag and get URL, append to list
for a in jobLinks:
    URL = a.get('href')
    jobURLs.append(URL)


#declare lists to hold column values
jobTitleList = []
descriptionList = []
employerList = []
pubDateList = []
salaryList = []
cityList = []
codeList = []
expList = []

#loop index
index = 0
#loop through URLs and get data
for url in jobURLs:
    #request page
    page = requests.get(url)
    #parse
    soup = BeautifulSoup(page.content, 'html.parser')

    #get BeautifulSoup objects and corresponding values, append to lists

    #job title
    jobTitleHtml = soup.find('span', class_='js-jobOffer-title')
    jobTitleList.append(jobTitleHtml.get_text())

    # salary
    salaryHtml = soup.find('span', class_='js-joboffer-salary')
    salaryList.append(salaryHtml.get_text())

    #city
    cityHtml = soup.find('span', class_='js-joboffer-city')
    cityList.append(cityHtml.get_text())

    # employer
    employerHtml = soup.select("span strong")
    employerList.append(list(employerHtml)[1].get_text().strip())

    # experience
    expHtml = soup.find('i', class_='fa fa-calendar fa-fw')
    #in case no experience set
    if expHtml!=None:    
        expList.append(expHtml.find_next_sibling("span").get_text())
    else:
        expList.append("")
    

    # date published
    pubDateHtml = soup.find('span', class_='js-publish-date')
    #in case no published date
    if pubDateHtml!=None:
        pubDateList.append(pubDateHtml.get_text())
    else:
        pubDateList.append("")

    # get span containing all elements of description block
    descHtml = soup.find('div', class_='description-block')
    descFirstP = list(descHtml.children)[3]
    span = list(descFirstP.children)[1]
    #job description - loop through span and get all children, convert to string
    description = []
    for string in span.stripped_strings:
        description.append(string)
    descriptionList.append(listToString(description))

    # job code
    jobIdSpan = soup.find('span', class_='js-offer-id')
    codeList.append(jobIdSpan.get_text())

# add lists to data frame object
jobPostings = pd.DataFrame({
'Position': jobTitleList,
'Description': descriptionList,
'Experience': expList,
'Company': employerList,
'Date Pub': pubDateList,
'Salary': salaryList,
'City': cityList,
'code': codeList
})
    
#print(jobPostings)

# export DataFrame object to csv
jobPostings.to_csv(r'../python-crawl/datasets/elempleo.csv', index=False, mode='a', header=True)

