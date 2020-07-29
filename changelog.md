# 10.1.0
1. (Add) Add SAFETY_FUNC_CRITICAL_STOP_RPT message.
1. (Add) Add WATCHDOG_RPT_2 message.

# 10.0.0
1. (Change) Remove VEH_SPECIFIC_RPT_1 because it isn't used and isn't fully defined.
1. (Change) Add units to VEH_DYNAMICS_RPT.  Prior units were likely m/s^2 but cannot confirm.
1. (Change) Slow DATE_TIME_RPT, DOOR_RPT, INTERIOR_LIGHTS_RPT, OCCUPANCY_RPT, and REAR_LIGHTS_RPT to 4Hz to conserve bandwidth.
1. (Change) Slow system messages for CRUISE_CONTROL_BUTTONS, DASH_CONTROLS_LEFT, DASH_CONTROLS_RIGHT, HAZARD_LIGHTS, HEADLIGHT, HORN, MARKER_LAMP, MEDIA_CONTROLS, REAR_PASS_DOOR, SPRAYER, TURN, and WIPER to 10Hz to conserve bandwidth.
1. (Change) Slow PARKING_BRAKE_CMD and PARKING_BRAKE_RPT to 10Hz to conserve bandwidth.  Increase PARKING_BRAKE_AUX_RPT to 10Hz for consistency with other like systems.
1. (Add) Add a field to ACCEL_AUX_RPT, BRAKE_AUX_RPT, and STEERING_AUX_RPT to show when limiting is occuring.
1. (Add) Add Mode/Status/State dbc rules to user_can_protocol.
1. (Fix) Change raw numbered list formatting in this document for consistency and automation.

# 9.1.0
1. (Add) Add WATCHDOG_SANITY_FAULT signal to component report messages.
1. (Add) Add STARTUP value to STATE signal of SAFETY_FUNC_RPT.
1. (Add) Expand value definitions and add comments for MANUAL_INPUT and OUTPUT_VALUE signals in HAZARD_LIGHTS_RPT message.
1. (Fix) Add definitions of MANUAL_INPUT, COMMANDED_VALUE, OUTPUT_VALUE signals in system report messages to the User CAN Protocol document.
1. (Fix) Add comment that elaborates on the definition of the CAN_TIMEOUT_FAULT signal in the component report messages.
1. (Fix) Correct CMD_AC_OFF_ON signal limit within the CABIN_CLIMATE_CMD message.
1. (Fix) Rename CABIN_EBRAKE_OPCTRL to CABIN_SAFETY_BRAKE_OPCTRL for consistency.
1. (Fix) Rename signal values to all caps and underscores for headlight and wiper systems, GLOBAL_RPT, and component reports for consistency.
1. (Fix) Rename FAN OFF signal value to FAN_OFF.
1. (Fix) Add rules to user_can_protocol for naming values.

# 9.0.0
1. (Change) Remove ANTILOCK_BRAKE_RPT and TRACTION_CONTROL_RPT messages. Obsolete.
1. (Change) Remove RAW_PEDAL_POS and RAW_PEDAL_POS_AVAIL signals from ACCEL_AUX_RPT and BRAKE_AUX_RPT messages. Not used, not well defined.
1. (Change) Remove RAW_PEDAL_FORCE and RAW_PEDAL_FORCE_AVAIL signals from ACCEL_AUX_RPT and BRAKE_AUX_RPT messages. Not used, not well defined.
1. (Change) Remove RAW_POSITION signal from STEERING_AUX_RPT message. Not used, not well defined.
1. (Change) Change sign, units, scale, range, and name of the RAW_BRAKE_PRESSURE signal of the BRAKE_AUX_RPT message. Message was less useful and was not well defined.
1. (Change) Change units, scale, range, and name of the RAW_TORQUE signal of the STEERING_AUX_RPT. Message was less useful and was not well defined.
1. (Add) Add DRIVE_TRAIN_FEATURE_ACTIVE_RPT message.
1. (Add) Add GLOBAL_RPT_2 message.
1. (Add) Add obtainable signals to SAFETY_BRAKE_RPT.
1. (Add) Add COMMAND_PERMITTED signal to SAFETY_BRAKE_RPT.
1. (Add) Add VEHICLE_ANGLE_CALIB_STATUS and VEHICLE_ANGLE_CALIB_STATUS_AVAIL signals to STEERING_AUX_RPT.
1. (Fix) Rename signal SPRAY to SPRAYER in COMPONENT_RPT messages.
1. (Fix) Add missing values for SPRAYER in all COMPONENT_RPT messages.
1. (Fix) Rename values CRITICAL_STOP to CRITICAL_STOP1.
1. (Fix) Rename values to replace spaces with underscores in SAFETY_BRAKE_RPT.
1. (Fix) Rename COMMAND in SAFETY_BRAKE_CMD and REPORTED_VALUE in SAFETY_BRAKE_RPT.
1. (Fix) Add units to temperature signals in CABIN_TEMP_CMD and CABIN_TEMP_RPT.
1. (Fix) Add comments to describe the use of the % unit in all applicable signals.

# 8.0.1
1. (Fix) Fix change log.

# 8.0.0
1. (Change) Change REAR_SEATBELT_BUCKLED to DRIVER_REAR_SEATBELT_BUCKLED.
1. (Add) Add CABIN_CLIMATE, CABIN_FAN_SPEED, and CABIN_TEMP Systems.
1. (Add) Add SAFETY_FUNC_CMD, SAFETY_FUNC_RPT, SAFETY_BRAKE_CMD, SAFETY_BRAKE_CMD messages.
1. (Add) Add PASS_REAR_SEATBELT_BUCKLED add CENTER_REAR_SEATBELT_BUCKLED to OCCUPANCY_RPT message.
1. (Add) Add FUEL_LEVEL to ENGINE_RPT message.
1. (Add) Add TIRE_PRESSURE_RPT message.
1. (Add) Add ANTILOCK_BRAKE_RPT and TRACTION_CONTROL_RPT messages.
1. (Add) Add PARKING_BRAKE_AUX_RPT message.
1. (Add) Add additional dim levels to DIM_LEVEL within INTERIOR_LIGHTS_RPT message.
1. (Fix) Add missing values for all discrete signals in dbc file.
1. (Fix) Add missing user defined attributes.
1. (Fix) Reorganize dbc file. No changes to message formats.
1. (Fix) Fix Wiper System command and report limits.
1. (Fix) Add units of percent to accel and brake by-wire system messages.
1. (Fix) Reorder and spell check the change log.
1. (Fix) Change System-wide commands CAN ID range for Safety function commands in user_can_protocol.
1. (Fix) Elaborate on types of CAN messages in user_can_protocol.

# 7.2.0
1. (Add) Add USER_NOTIFICATION_CMD.
1. (Add) Add sign to ROTATION_RATE in message STEERING_AUX_RPT.
1. (Add) Add SUPERVISORY_CTRL message and governing rules.
1. (Add) Add ENGINE_RPT message.
1. (Fix) Update .html generator to include message type, message rate, and component address.

# 7.1.0
1. (Change) Change naming from "is_valid" to "avail" for all remaining datafields.
1. (Add) Add Engine Brake System.
1. (Add) Add Marker Lamp System.
1. (Add) Add transmission gear number report.

# 7.0.0
1. (Change) Change SHIFT_AUX_REPORT to make more efficient use of bits.
1. (Add) Add Door System.
1. (Add) Add Door System to Component Report.
1. (Add) Add AMBIENT_LIGHT_SENSOR to INTERIOR_LIGHTS_RPT.
1. (Doc Add) Move protocol details from PACMod System User Manual to user_can_protocol.md

# 6.0.0
1. (Change) Change Data Length Codes (DLCs) to fit data.

# 5.0.0
1. (Change) Move E-Stop from Component Report to ESTOP_RPT.
1. (Change) Change bit position of WRITE_TO_CONFIG in SHIFT_AUX_RPT.
1. (Change) Rename "is_valid" to "avail" for all auxiliary reports.
1. (Change) Rename and add description of USER_INTERACTION.
1. (Add) Add Brake Deccel System.
1. (Add) Add Sprayer System.
1. (Add) Add Wiper System.
1. (Add) Add Command Limit Reports.
1. (Add) Add GLOBAL_INTERNAL_POWER_SUPPLY_FAULT to WATCHDOG_RPT.
1. (Add) Add INTERNAL_SUPPLY_VOLTAGE_FAULT to Component Reports.
1. (Add) Add Flash File Version messages.
1. (Fix) Fix sign of WHEEL_SPD_FRONT_LEFT in WHEEL_SPEED_RPT.
1. (Fix) Add previously implemented WATCHDOG_RPT message to DBC.
1. (Fix) Add transmission rate to VIN_RPT, Software Version Report, WATCHDOG_RPT.
1. (Fix) Add fault values in _RPT messages to DBC.

# 4.1.0
1. (Add) Add Watchdog function to Component Reports.
1. (Fix) Fix the maximum value for datafields in the Component Reports.
1. (Fix) Add transmission rate to DBC.

# 4.0.0
1. (Change) Move CLEAR_FAULTS to GLOBAL_CMD.
1. (Change) Break COMPONENT_RPT into 4 messages with different IDs.
1. (Change) Move counter and compliment bit positions and add system flags to Component Reports.
1. (Add) Add CONFIG_FAULT, CAN_TIMEOUT_FAULT, and ESTOP to Component Reports.
1. (Add) Add GLOBAL_CMD message.
1. (Add) Add NOTIFICATION_CMD message.
1. (Add) Add LINEAR_ACCEL_RPT and ANG_VEL_RPT messages.
1. (Add) Add COMMAND_TIMEOUT to all system reports.