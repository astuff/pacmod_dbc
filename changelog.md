# 4.0.0
DBC: (Change) Move CLEAR_FAULTS to GLOBAL_CMD.
DBC: (Change) Break COMPONENT_RPT into 4 messages with different IDs.
DBC: (Change) Move counter and compliment bit positions and add system flags to Component Reports.
DBC: (Add) Add CONFIG_FAULT, CAN_TIMEOUT_FAULT, and ESTOP to Component Reports.
DBC: (Add) Add GLOBAL_CMD message.
DBC: (Add) Add NOTIFICATION_CMD message.
DBC: (Add) Add LINEAR_ACCEL_RPT and ANG_VEL_RPT messages.
DBC: (Add) Add COMMAND_TIMEOUT to all system reports.

# 4.1.0
DBC: (Add) Add Watchdog function to Component Reports.
DBC: (Fix) Fix the maximum value for datafields in the Component Reports.
DBC: (Fix) Add transmssion rate to DBC.

# 5.0.0
1. DBC: (Change) Move E-Stop from Component Report to ESTOP_RPT.
2. DBC: (Change) Change bit position of WRITE_TO_CONFIG in SHIFT_AUX_RPT.
3. DBC: (Change) Rename "is_valid" to "avail" for all auxilary reports.
4. DBC: (Change) Rename and add description of USER_INTERACTION.
5. DBC: (Add) Add Brake Deccel System.
6. DBC: (Add) Add Sprayer System.
7. DBC: (Add) Add Wiper System.
8. DBC: (Add) Add Command Limit Reports.
9. DBC: (Add) Add GLOBAL_INTERNAL_POWER_SUPPLY_FAULT to WATCHDOG_RPT.
10. DBC: (Add) Add INTERNAL_SUPPLY_VOLTAGE_FAULT to Component Reports.
11. DBC: (Add) Add Flash File Version messages.
12. DBC: (Fix) Fix sign of WHEEL_SPD_FRONT_LEFT in WHEEL_SPEED_RPT.
13. DBC: (Fix) Add previously implemented WATCHDOG_RPT message to DBC.
14. DBC: (Fix) Add transmssion rate to VIN_RPT, Software Version Report, WATCHDOG_RPT.
15. DBC: (Fix) Add fault values in _RPT messages to DBC.

# 6.0.0
1. DBC: (Change) Change Data Length Codes (DLCs) to fit data.

# 7.0.0
1. DBC: (Change) Change SHIFT_AUX_REPORT to make more efficient use of bits.
2. DBC: (Add) Add Door System.
3. DBC: (Add) Add Door System to Component Report.
4. DBC: (Add) Add AMBIENT_LIGHT_SENSOR to INTERIOR_LIGHTS_RPT.
5. DOC: (Fix) Move protocol details from PACMod System User Manual to user_can_protocol.md

# 7.1.0
1. DBC: (Change) Change naming from "is_valid" to "avail" for all remaining datafields.
2. DBC: (Add) Add Engine Brake System.
3. DBC: (Add) Add Marker Lamp System.
4. DBC: (Add) Add transmission gear number report.

# Future Release
DBC: (Add) Customer Notification Command message.
DBC: (Add) Add sign to ROTATION_RATE field of the STEERING_AUX_RPT message.
DBC: (Add) Add SUPERVISORY_CTRL message.
DBC: (Add) Add SUPERVISORY_ENABLE_REQUIRED field to the GLOBAL_RPT message.
DBC: (Add) Add ‌SUPERVISORY_TIMEOUT and SUPERVISORY_SANITY_FAULT field to the Component Reports.
DOC: (Add) Add Supervisory Enable/Disable rules to user_can_protocol.md.
DOC: (Add) Add rule about undefined bits to user_can_protocol.md.
DOC: (Add) Add transmission type/rate and address type/address to HTML version of DBC.
DOC: (Add) Add changelog.md.