import pandas as pd
import numpy as np
import re
import datetime
import functions

# 1 read CSV
df = pd.read_csv('../elempleo-crawl-counter/datasets/elempleo_clean.csv')

# 2 make ID index
df = df.set_index('ID')

functions.get_dateswithIDs(df)