import pandas as pd

# 1 read CSV
df = pd.read_csv('../elempleo-crawl-counter/datasets/elempleo.csv')

# 2 remove dupes
df = df.drop_duplicates(subset=['ID'])

# 3 remove blank space
df.columns = df.columns.str.strip()

#4 set ID as index
df = df.set_index('ID')

# remove irrelevants

relevants = (pd.read_csv('../elempleo-crawl-counter/datasets/relevant_IDs.csv')).to_numpy().ravel()

df = df.loc[relevants]

# DATE PUBLISHED CLEANSE

df['Date'] = df['Date'].str.replace("Publicado ","")

splitCols = df['Date'].str.split(expand=True)

monthCol = splitCols[1]

monthCol = monthCol.replace("Ene","01")
monthCol = monthCol.replace("Feb","02")
monthCol = monthCol.replace("Mar","03")
monthCol = monthCol.replace("Abr","04")
monthCol = monthCol.replace("May","05")
monthCol = monthCol.replace("Jun","06")
monthCol = monthCol.replace("Jul","07")
monthCol = monthCol.replace("Ago","08")
monthCol = monthCol.replace("Sep","09")
monthCol = monthCol.replace("Oct","10")
monthCol = monthCol.replace("Nov","11")
monthCol = monthCol.replace("Dic","12")

splitCols[1] = monthCol

df['Date'] = splitCols[0] + "/" + splitCols[1] + "/" + splitCols[2]

df['Date'] = pd.to_datetime(df['Date'],format='%d/%m/%Y')

print(df['Date'].head(15))

#print cleaned version
df.to_csv(r'../elempleo-crawl-counter/datasets/elempleo_clean.csv', index=True, mode='w', header=True)
