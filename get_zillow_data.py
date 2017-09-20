#!/usr/bin/env python

import zillow
import pprint
import sys

if __name__=="__main__":

    if len(sys.argv) < 2:
        print "Usage: " + sys.argv[0] + " <street address>"
        exit(1)

    key = "X1-ZWz190sxoxw2dn_9vdv4"
    api = zillow.ValuationApi()
    pp = pprint.PrettyPrinter(indent=4)

    address = ' '.join(sys.argv[1:])
    deep_results = api.GetDeepSearchResults(key, address, 94539)
    #pp.pprint(deep_results.get_dict())

    dr = deep_results
    ed = dr.extended_data;
    row = [ed.last_sold_date, dr.zpid, dr.full_address.street, dr.links.home_details, ed.last_sold_price, dr.zestiamte.amount, ed.bedrooms, ed.bathrooms, ed.finished_sqft, ed.lot_size_sqft, ed.year_built]

    print ', '.join(str(i) for i in row)
