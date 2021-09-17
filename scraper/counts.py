import pandas as pd
import helpers as helpers

#read CSV with flags
df = pd.read_csv('../elempleo-crawl-counter/datasets/elempleo-flags.csv')

# loop through above and set counts
lan_counts = helpers.get_lan_counts(df)
framework_counts = helpers.get_framework_counts(df)
db_counts = helpers.get_db_counts(df)
role_counts = helpers.get_roles_counts(df)
salary_counts = helpers.get_salary_counts(df)
xp_counts = helpers.get_xp_counts(df)
city_counts = helpers.get_city_counts(df)

# create CSVs
lan_counts.to_csv(r'../elempleo-crawl-counter/datasets/language_counts.csv', index=False, mode='w', header=True)
framework_counts.to_csv(r'../elempleo-crawl-counter/datasets/framework_counts.csv', index=False, mode='w', header=True)
db_counts.to_csv(r'../elempleo-crawl-counter/datasets/db_counts.csv', index=False, mode='w', header=True)
role_counts.to_csv(r'../elempleo-crawl-counter/datasets/role_counts.csv', index=False, mode='w', header=True)
salary_counts.to_csv(r'../elempleo-crawl-counter/datasets/salary_counts.csv', index=False, mode='w', header=True) 
city_counts.to_csv(r'../elempleo-crawl-counter/datasets/city_counts.csv', index=False, mode='w', header=True) 
xp_counts.to_csv(r'../elempleo-crawl-counter/datasets/exp_counts.csv', index=False, mode='w', header=True) 