import pandas as pd
import numpy as np
import re
import datetime

# 1 read CSV
df = pd.read_csv('../python-crawl/datasets/elempleo.csv')

#check for Java
roles = df['Role'].str.lower()
descs = df['Description'].str.lower()

java_desc = descs.str.contains(" java | java.| java,")
print(len(java_desc[java_desc==True]))

java_role_desc = roles.str.contains(" java | java.| java,") | descs.str.contains(" java | java.| java,")
print(len(java_role_desc[java_role_desc==True]))


df['Java'] = java_role_desc

java_column = df[['Role','Description','Java']]

#print(java_column.head())

java_column.to_csv(r'../python-crawl/datasets/java.csv', index=False, mode='a', header=True)