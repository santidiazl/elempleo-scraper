import pandas as pd
import numpy as np
import re
import datetime

def get_notechs(df):
    return df.loc[(df["JavaScript"]==False) & 
                    (df["HTML"]==False) & 
                    (df["SQL"]==False) &
                    (df["Python"]==False) &
                    (df["Java"]==False) &
                    (df["C#"]==False) &
                    (df["PHP"]==False) &
                    (df["TypeScript"]==False) &
                    (df["C++"]==False) &
                    (df["Kotlin"]==False) &
                    (df["Ruby"]==False) &
                    (df["VBA"]==False) &
                    (df["Swift"]==False) &
                    (df["jQuery"]==False) &
                    (df["React"]==False) &
                    (df["Angular"]==False) &
                    (df[".NET"]==False) &
                    (df["Express"]==False) &
                    (df["Vue"]==False) &
                    (df["Spring"]==False) &
                    (df["Django"]==False) &
                    (df["Drupal"]==False) &
                    (df["Node.js"]==False) &
                    (df["Laravel"]==False) &
                    (df["mySQL"]==False) &
                    (df["PostgreSQL"]==False) &
                    (df["SQLite"]==False) &
                    (df["MongoDB"]==False) &
                    (df["Oracle"]==False) &
                    (df["Microsoft SQL"]==False) &
                    (df["Redis"]==False) &
                    (df["MariaDB"]==False) &
                    (df["Firebase"]==False) &
                    (df["Cassandra"]==False), ["Role","Description"]]   

language_counts = [['JavaScript',0],
           ['HTML',0],
           ['SQL',0],
           ['Python',0],
           ['Java',0],
           ['C#',0],
           ['PHP',0],
           ['TypeScript',0],
           ['C++',0],
           ['Kotlin',0],
           ['Ruby',0],
           ['VBA',0],
           ['Swift',0]]

framework_counts = [['jQuery',0],
           ['React',0],
           ['Angular',0],
           ['.NET',0],
           ['Express',0],
           ['Vue',0],
           ['Spring',0],
           ['Django',0],
           ['Drupal',0],
           ['Node.js',0],
           ['Laravel',0]]

db_counts = [['mySQL',0],
           ['PostgreSQL',0],
           ['SQLite',0],
           ['MongoDB',0],
           ['Oracle',0],
           ['Microsoft SQL',0],
           ['Redis',0],
           ['MariaDB',0],
           ['Firebase',0],
           ['Cassandra',0]]

role_counts = [['Back-end',0],
             ['Full-stack',0],
             ['Front-end',0],
             ['Mobile',0],
             ['Devops',0],
             ['Database Admin.',0],
             ['Data Scientist',0],
             ['QA or Test',0]]

def get_lan_counts(df):
    i = 0
    while i<len(language_counts):
        row = language_counts[i]
        row[0]
        tech = df[row[0]]
        count = len(tech[tech==True].index)
        row[1] = count
        print("Total ",row[0],": ",row[1])
        i = i + 1
    return pd.DataFrame(language_counts,columns=['Languages','Counts'])

def get_framework_counts(df):
    i = 0
    while i<len(framework_counts):
        row = framework_counts[i]
        row[0]
        tech = df[row[0]]
        count = len(tech[tech==True].index)
        row[1] = count
        print("Total ",row[0],": ",row[1])
        i = i + 1
    return pd.DataFrame(framework_counts,columns=['Frameworks','Counts'])

def get_db_counts(df):
    i = 0
    while i<len(db_counts):
        row = db_counts[i]
        row[0]
        tech = df[row[0]]
        count = len(tech[tech==True].index)
        row[1] = count
        print("Total ",row[0],": ",row[1])
        i = i + 1
    return pd.DataFrame(db_counts,columns=['Databases','Counts'])

def get_roles_counts(df):
    i = 0
    while i<len(role_counts):
        row = role_counts[i]
        role_col = df[row[0]]
        count = len(role_col[role_col==True].index)
        row[1] = count
        print("Total ",row[0],": ",row[1])
        i = i + 1
    return pd.DataFrame(role_counts,columns=['Roles','Counts'])

def get_salary_counts(df):
    i = 0
    salary_column = df['Salary'].str.strip()
    salary_column = salary_column.str.lower()    
    salary_ranges = salary_column.unique().tolist()
    salary_counts = pd.DataFrame(salary_ranges,columns=['Salary Range'])
    count_list = []
    while i<len(salary_ranges):
        salary = salary_ranges[i]
        count = len(df[salary_column==salary].index)
        count_list.append(count)
        print("Total ", salary,": ",count)
        i = i + 1
    
    salary_counts['Counts'] = count_list
    return salary_counts

def get_xp_counts(df):
    i = 0
    xp_column = df['Experience'].str.strip()
    xp_column = xp_column.str.lower()    
    xp_ranges = xp_column.unique().tolist()
    xp_counts = pd.DataFrame(xp_ranges,columns=['Experience'])
    count_list = []
    while i<len(xp_ranges):
        xp = xp_ranges[i]
        count = len(df[xp_column==xp].index)
        count_list.append(count)
        print("Total ", xp,": ",count)
        i = i + 1
    
    xp_counts['Counts'] = count_list
    return xp_counts

def get_city_counts(df):
    i = 0
    city_column = df['City'].str.strip()
    city_column = city_column.str.lower()    
    cities = city_column.unique().tolist()
    city_counts = pd.DataFrame(cities,columns=['City'])
    count_list = []
    while i<len(cities):
        city = cities[i]
        count = len(df[city_column==city].index)
        count_list.append(count)
        print("Total ", city,": ",count)
        i = i + 1
    
    city_counts['Counts'] = count_list
    return city_counts

def get_dateswithIDs(df):
    df['Date'] = pd.to_datetime(df['Date'])
    df = df.sort_values(by='Date',ascending=False)
    print("Jobs were from ",df['Date'].iloc[0]," to ",df['Date'].iloc[len(df.index)-1])
    df['Date'].to_csv(r'../elempleo-crawl-counter/datasets/date-range.csv', index=True, mode='w', header=True)
    return