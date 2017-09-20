# msje

sudo pip install pyzillow
sudo pip install xmltodict

cat street_addresses.txt | xargs -I{} ./get_zillow_data.py {} > zillow_data.csv
