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

#open HTML file
html =  open('indeed-results.html', 'r')
#parse
soup = BeautifulSoup(html, 'html.parser')

#get all job card divs
resultCards = soup.find_all('div', class_='jobsearch-SerpJobCard')
#list for URLS
jobURLs = [
    "https://co.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0BuRgGQ-DkIPN8yc4mHUaDmseFmoDkJ7JFOSnMeK51Sda9xHWe1n8fjbNfMvGXOjL1H3M6PysheJVqDy7wqdToedeBw9faGytYVLqZYSVKnRaal-9qwIDkp9eyb1N-FY4-o7yk80DYwcAU2KFZCdBtH1D88db18sWncFrOb1_6Jshk3CPya_xuZ_cY8nHCiQ8EPSnx3aAfpRgRe5HVDDhm7YZjH-hZrkjCz7fymyAgyx9q-pbHArfYMNVLJJ1in3fxnbi-YALUfX9oIafhtQQdC30ctFh8CtoyNUOXe_FZ7KJSB_Jg1e-t3S5HopFuqKZaPUv-DdYiD3aGYACq3AVslPyd4SJzt4CeykL1Fk-HwBhv7nbsvRQoQaNkhHDqFzSJedvyTdyg2YIYTw1XlYDKbdIDhEzeeuwy-KXMGhsGcnM0YczGF4MHOLv5Vr-9QShmXLo_LMfKR8w==&p=0&fvj=1&vjs=3&tk=1eq61cgncu3si800&jsa=7868",
    "https://co.indeed.com/company/Viajes-Tour-Colombia-SAS/jobs/Desarrollador-software-26ae953cfc78f9e3?fccid=cac7d061f3991503&vjs=3",
    "https://co.indeed.com/company/MDS-EU/jobs/Desarrollador-fullstack-2973189824da5311?fccid=72913e3cf55d8711&vjs=3",
    "https://co.indeed.com/rc/clk?jk=b9db306643edbfc4&fccid=dd616958bd9ddc12&vjs=3",
    "https://co.indeed.com/company/E-GROUP-COLOMBIA-SAS/jobs/Desarrollador-software-1e84ea555541fd7a?fccid=b4c6960e1f93c9fb&vjs=3",
    "https://co.indeed.com/rc/clk?jk=bd2a83d919941bec&fccid=dd616958bd9ddc12&vjs=3",
    "https://co.indeed.com/rc/clk?jk=22544e3c314b81aa&fccid=f707e1ce40abc217&vjs=3",
    "https://co.indeed.com/rc/clk?jk=3f61a00785830bdc&fccid=1e5972185ff4e070&vjs=3",
    "https://co.indeed.com/company/SAC-Consulting-SAS/jobs/Desarrollador-software-9ab0a0943d08c76a?fccid=a288b520a54da0e7&vjs=3",
    "https://co.indeed.com/rc/clk?jk=a64ca5b13cf1a150&fccid=7f25d1d1d564f968&vjs=3",
    "https://co.indeed.com/rc/clk?jk=0c2468ea3aa03be9&fccid=dd616958bd9ddc12&vjs=3",
    "https://co.indeed.com/rc/clk?jk=7f29d7f700317823&fccid=dd616958bd9ddc12&vjs=3"

]

# loop through card divs and add URLs
for card in resultCards:
    cardH2 = card.find('h2', class_='title')
    aTag = cardH2.a
    URL = aTag.get('href')
    jobURLs.append(URL)
    

#declare lists to hold column values
jobTitleList = []
descriptionList = []
employerList = []
pubDateList = []
salaryList = []
cityList = []

#loop through each individual job post and get data
for url in jobURLs:
    #request page
    page = requests.get(url)
    #parse
    soup = BeautifulSoup(page.content, 'html.parser')
    #get BeautifulSoup objects
    jobTitleHtml = soup.find('h1', class_='jobsearch-JobInfoHeader-title')
    descHtml = soup.find('div', class_='jobsearch-jobDescriptionText')
    employerCityHtml = soup.find('div', class_='jobsearch-InlineCompanyRating')
    #employer may be missing so get len of list
    employerCityList = list(employerCityHtml.children)
    listLength = len(employerCityList)
    pubDateHtml = soup.find('div', class_='jobsearch-JobMetadataFooter')
    salaryHtml = soup.find('div', class_='jobsearch-JobMetadataHeader-item')
    #add column values to lists    
    #job title
    jobTitleList.append(jobTitleHtml.get_text())
    #description, loop through div's children and make one string
    description = []
    for string in descHtml.stripped_strings:
        description.append(string)
    descriptionList.append(listToString(description))
    #employer and city
    if listLength == 3:
        employerList.append(employerCityList[0].get_text().strip())
        cityList.append(employerCityList[2].get_text().strip())
    elif listLength == 4:
        employerList.append(employerCityList[0].get_text().strip())
        cityList.append(employerCityList[3].get_text().strip())
    else:
        employerList.append("")
        cityList.append(employerCityList[1].get_text().strip())
    #date published
    pubDateList.append(list(pubDateHtml)[0].get_text().strip())
    
    #salary
    if salaryHtml!=None:
            for child in list(salaryHtml.children):
                if child.get_text().isdigit():
                    salaryList.append(string.getText().strip())
                    break
    else:
        salaryList.append("")
    

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
jobPostings.to_csv(r'/Users/sdiaz/Desktop/export.csv', index=False, header=True)
