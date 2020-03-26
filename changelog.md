# 8.0.0
(Change) Change REAR_SEATBELT_BUCKLED to DRIVER_REAR_SEATBELT_BUCKLED.
(Add) Add CABIN_CLIMATE, CABIN_FAN_SPEED, and CABIN_TEMP Systems.
(Add) Add SAFETY_FUNC_CMD, SAFETY_FUNC_RPT, SAFETY_BRAKE_CMD, SAFETY_BRAKE_CMD messages.
(Add) Add PASS_REAR_SEATBELT_BUCKLED add CENTER_REAR_SEATBELT_BUCKLED to OCCUPANCY_RPT message.
(Add) Add FUEL_LEVEL to ENGINE_RPT message.
(Add) Add TIRE_PRESSURE_RPT message.
(Add) Add ANTILOCK_BRAKE_RPT and TRACTION_CONTROL_RPT messages.
(Add) Add PARKING_BRAKE_AUX_RPT message.
(Add) Add additional dim levels to DIM_LEVEL within INTERIOR_LIGHTS_RPT message.
(Fix) Add missing values for all discrete signals in dbc file.
(Fix) Add missing user defined attributes.
(Fix) Reorganize dbc file. No changes to message formats.
(Fix) Fix Wiper System command and report limits.
(Fix) Add units to auxiliary reports with unit of percent.
(Fix) Reorder and spell check the change log.

# 7.2.0
1. (Add) Add USER_NOTIFICATION_CMD.
2. (Add) Add sign to ROTATION_RATE in message STEERING_AUX_RPT.
3. (Add) Add SUPERVISORY_CTRL message and governing rules.
4. (Add) Add ENGINE_RPT message.
5. (Fix) Update .html generator to include message type, message rate, and component address.

# 7.1.0
1. (Change) Change naming from "is_valid" to "avail" for all remaining datafields.
2. (Add) Add Engine Brake System.
3. (Add) Add Marker Lamp System.
4. (Add) Add transmission gear number report.

# 7.0.0
1. (Change) Change SHIFT_AUX_REPORT to make more efficient use of bits.
2. (Add) Add Door System.
3. (Add) Add Door System to Component Report.
4. (Add) Add AMBIENT_LIGHT_SENSOR to INTERIOR_LIGHTS_RPT.
5. (Doc Add) Move protocol details from PACMod System User Manual to user_can_protocol.md

# 6.0.0
1. (Change) Change Data Length Codes (DLCs) to fit data.

# 5.0.0
1. (Change) Move E-Stop from Component Report to ESTOP_RPT.
2. (Change) Change bit position of WRITE_TO_CONFIG in SHIFT_AUX_RPT.
3. (Change) Rename "is_valid" to "avail" for all auxiliary reports.
4. (Change) Rename and add description of USER_INTERACTION.
5. (Add) Add Brake Deccel System.
6. (Add) Add Sprayer System.
7. (Add) Add Wiper System.
8. (Add) Add Command Limit Reports.
9. (Add) Add GLOBAL_INTERNAL_POWER_SUPPLY_FAULT to WATCHDOG_RPT.
10. (Add) Add INTERNAL_SUPPLY_VOLTAGE_FAULT to Component Reports.
11. (Add) Add Flash File Version messages.
12. (Fix) Fix sign of WHEEL_SPD_FRONT_LEFT in WHEEL_SPEED_RPT.
13. (Fix) Add previously implemented WATCHDOG_RPT message to DBC.
14. (Fix) Add transmission rate to VIN_RPT, Software Version Report, WATCHDOG_RPT.
15. (Fix) Add fault values in _RPT messages to DBC.

# 4.1.0
1. (Add) Add Watchdog function to Component Reports.
2. (Fix) Fix the maximum value for datafields in the Component Reports.
3. (Fix) Add transmission rate to DBC.

# 4.0.0
1. (Change) Move CLEAR_FAULTS to GLOBAL_CMD.
2. (Change) Break COMPONENT_RPT into 4 messages with different IDs.
3. (Change) Move counter and compliment bit positions and add system flags to Component Reports.
4. (Add) Add CONFIG_FAULT, CAN_TIMEOUT_FAULT, and ESTOP to Component Reports.
5. (Add) Add GLOBAL_CMD message.
6. (Add) Add NOTIFICATION_CMD message.
7. (Add) Add LINEAR_ACCEL_RPT and ANG_VEL_RPT messages.
8. (Add) Add COMMAND_TIMEOUT to all system reports.