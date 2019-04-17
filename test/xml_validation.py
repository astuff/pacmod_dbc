#!/usr/bin/python

import xmlschema

schema = xmlschema.XMLSchema('vehicle_associations.xsd')
print("vehicle_associations.xsd is valid.")

schema.validate('vehicle_associations.xml')
print("vehicle_associations.xml conforms to vehicle_associations.xsd.")
