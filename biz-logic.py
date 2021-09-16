import pandas as pd
import numpy as np
import re
import datetime
import functions

# 1 read CSV
df = pd.read_csv('../elempleo-crawl-counter/datasets/elempleo_clean.csv')

# 2 make ID index
df = df.set_index('ID')

# KEYWORD and REGEX pair
keywords = [['JavaScript','javascript|jquery|react|angular|express|vue|node|java script'],
           ['HTML','html'],
           ['SQL','sql | sql.| sql,|sql/|/sql'],
           ['Python','python|phyton'],
           ['Java',' java | java.| java,'],
           ['C#','c#|c #'],
           ['PHP',"php"],
           ['TypeScript',"typescript"],
           ['C++','c\+\+|c \+\+'],
           ['Kotlin','kotlin'],
           ['Ruby','ruby'],
           ['VBA','vb'],
           ['Swift','swift'],
           ['jQuery','jquery'],
           ['React','react'],
           ['Angular','angular'],
           ['.NET','.net'],
           ['Express','express'],
           ['Vue','vue'],
           ['Spring','spring'],
           ['Django','django'],
           ['Drupal','drupal'],
           ['Node.js','node'],
           ['Laravel','laravel'],
           ['mySQL','mysql'],
           ['PostgreSQL','postgre'],
           ['SQLite','sqlite'],
           ['MongoDB','mongo'],
           ['Oracle','oracle'],
           ['Microsoft SQL','ms sql|microsoft sql|sql server'],
           ['Redis','redis'],
           ['MariaDB','mariadb'],
           ['Firebase','firebase'],
           ['Cassandra','cassandra']]

role_types = [['Back-end','backend|back end|back'],
             ['Full-stack','fullstack|full stack'],
             ['Front-end','frontend|front end|front'],
             ['Mobile','Mob|mov|ios{3}|android'],
             ['Devops','devops|dev ops'],
             ['Database Admin.','bases de|base de'],
             ['Data Scientist','cient|scien'],
             ['QA or Test','test|qa{2}|prueba']
]
           
descs = df['Description'].str.lower()
roles = df['Role'].str.lower()
salaries = df['Salary'].str.lower()

# loop through descriptions and set flag columns
i = 0
while i<len(keywords):
    keyword = keywords[i]
    flag = descs.str.contains(keyword[1], regex=True)
    df[keyword[0]] = flag
    print(keyword[0],': ',len(flag[flag==True].index))
    i = i + 1

# loop through roles and set flags
i = 0
while i<len(role_types):
    role = role_types[i]
    flag = roles.str.contains(role[1], regex=True)
    df[role[0]] = flag
    print(role[0],': ',len(flag[flag==True].index))
    i = i + 1

#print(len(nosql[nosql==True]))

# Get rows with no technologies mentioned in description
no_technology_desc = functions.get_notechs(df)

#### ROLES ########
#check Roles for keyword
#roles = no_technology_desc['Role'].str.lower()

i = 0
while i<len(keywords):
    keyword = keywords[i][0]
    regex = keywords[i][1]
    flag_col = roles.str.contains(regex, regex=True)
    indexes = flag_col[flag_col==True].index.tolist()
    df.at[indexes,keyword]=True
    main_col = df[keyword]
    new_counts = len(main_col[main_col==True].index)
    print(keyword,': ',new_counts)
    i = i + 1



# Get rows with no technologies mentioned
no_technology_desc = functions.get_notechs(df)
# print no keyword results to CSV
print(len(no_technology_desc.index)," no technology results.")
no_technology_desc.to_csv(r'../elempleo-crawl-counter/datasets/no-technologies.csv', index=True, mode='w', header=True)

# Print keyword results
print(len(df.index),"total results.")
df.to_csv(r'../elempleo-crawl-counter/datasets/elempleo-flags.csv', index=True, mode='w', header=True)

# print test
#print(len(no_technology))

#no_technology_desc.to_csv(r'../python-crawl/datasets/no-technologies.csv', index=False, mode='w', header=True)



