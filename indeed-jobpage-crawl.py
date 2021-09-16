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
    
#declare lists to hold column values
jobTitleList = []
descriptionList = []
employerList = []
pubDateList = []
salaryList = []
cityList = []

#SERP scraper
def serpScraper (query, pageStart, pageCount):
    #loop through SERP pages
    urlStem = 'https://co.indeed.com/jobs?q='
    for x in range(pageStart,pageCount):
        # if first page use following URL
        if x==1:
            serpURL = urlStem + query
        # other wise use this URL    
        else:
            pageNum = (x*10)-10
            serpURL = urlStem + query + '&start=' + str(pageNum)

        #request serp page
        html = requests.get(serpURL)
        #parse it
        soup = BeautifulSoup(html.content, 'html.parser')
        # get job card divs
        resultCards = soup.find_all('div', class_='jobsearch-SerpJobCard')
        #loop through result cards and scrape each page
        for card in resultCards:
            cardH2 = card.find('h2', class_='title')
            aTag = cardH2.a
            #get href target
            href = aTag.get('href')
            URL = 'https://co.indeed.com' + href
            #job page URL                    
            pageScaper(URL)



#job page scraper
def pageScaper (URL):
    """
    this makes request to each URL, grabs html, and scrapes away
    """
    #request page
    html = requests.get(URL)
    #parse
    soup = BeautifulSoup(html.content, 'html.parser')
    #get BeautifulSoup objects
    #position
    jobTitleH1 = soup.find('h1', class_='jobsearch-JobInfoHeader-title')
    jobTitleList.append(jobTitleH1.get_text())
    #description
    descDiv = soup.find('div', class_='jobsearch-jobDescriptionText')
    description = []
    for string in descDiv.stripped_strings:
        description.append(string)
    descriptionList.append(listToString(description))
    #company and city
    companyInfoDiv = soup.find('div', class_='jobsearch-InlineCompanyRating')
    infoList = list(companyInfoDiv.children)
    company = infoList[0].get_text()
    lastIndex = len(infoList)-1
    city = infoList[lastIndex].get_text()
    employerList.append(company)
    cityList.append(city)
    #date published 
    jobFooterDiv = soup.find('div', class_='jobsearch-JobMetadataFooter')
    publishedSpan = jobFooterDiv.find('span', class_='')
    pubDateList.append(publishedSpan.get_text())
    #salary
    jobMetaDiv = soup.find('div', class_='jobsearch-JobMetadataHeader-item')
    if jobMetaDiv!=None:
        salarySpan = jobMetaDiv.find('span', class_='icl-u-xs-mr--xs')
        if salarySpan!=None:
            salaryList.append(salarySpan.get_text())
        else:
            salaryList.append("")
    else:
        salaryList.append("")


serpScraper('desarrollador',25,28)
    
#pandas DataFrame object
jobPostings = pd.DataFrame({
'Position': jobTitleList,
'Description': descriptionList,
'Company': employerList,
'Date Pub': pubDateList,
'Salary': salaryList,
'City': cityList,
})

#export jobPostings to csv
jobPostings.to_csv(r'/Users/sdiaz/Desktop/indeed.csv', index=False, mode='a', header=True)
