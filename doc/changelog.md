# 14.1.0
1. (Add) Add status byte signals (CONTROL_STATUS, CONTROLLING_SYSTEMS, and PERFORMANCE_STATUS) to TIPPER_BODY_RPT_00, 01, and 02
1. (Add) Add TRAILER_IDENTIFIER_RPT_05 and update message comment for all TRAILER_IDENTIFIER_RPTs
1. (Add) Add SELF_TEST_ALLOWED to SAFETY_FUNC_RPT_2
1. (Add) Add DBW_WARNING_LEVEL signal to DBW_HEALTH_RPT_00, DBW_HEALTH_RPT_01, and COMPONENT_RPT_00-05
1. (Add) Add SELF_TEST_STATUS to DBW_HEALTH_RPT_00 and DBW_HEALTH_RPT_01

# 14.0.0
1. (Change) Change ROLL_ANGLE to be DOOR_ANGLE and PITCH_ANGLE to be BODY_ANGLE in TIPPER_BODY_AUX_RPT_00 01 02
1. (Change) Removed all Sprayer signals from the WIPER_AUX_RPT. Extended wiper signals by 1 bit each to include ERROR and NOT_AVAIL status values. Change data length code from 2 to 1. A SPRAYER_AUX_RPT and its signals will be added back to the protocol when needed.
1. (Change) Remove YAW_RATE_RPT.
1. (Change) Change BRAKE_MOTOR_RPT_2::ANGULAR_SPEED and STEERING_MOTOR_RPT_2::ANGULAR_SPEED from a factor of 0.1 to a factor of 0.001.
1. (Change) Remove VEHICLE_SPEED_RPT::VEHICLE_SPEED_VALID and add ERROR and NOT_AVAIL data status enums to VEHICLE_SPEED_RPT::VEHICLE_SPEED. Change data length code from 2 to 1.
1. (Change) Restructure Component Report: Remove component type, system present flags, supervisory signals, and can timeout fault. Add local state machine state. Change data length code from 8 to 4.
1. (Change) Moved LOW, MEDIUM, and HIGH enums in the wiper report from 253, 254, 255 to 248, 249, 250 respectivly.
1. (Add) Add DBW_HEALTH_RPT_00 and 01 messages
1. (Add) Add AMBIENT_CONDITION_RPT message
1. (Add) Add signal status enumerations to signals in the AIR_PRESSURE_RPT, BRAKE_AUX_RPT, BRAKE_AUX_RPT_2, ENGINE_AUX_RPT, ENGINE_AUX_RPT_2, ENGINE_BRAKE_AUX_RPT, ENGINE_LOAD_FACTOR_RPT, SHIFT_AUX_RPT, STEERING_AUX_RPT, STEERING_AUX_RPT_2, WHEEL_SPEED_RPT, and WHEEL_SPEED_RPT_2
1. (Add) Add SELF_TEST_STATUS signal to BRAKE_RPT, BRAKE_RPT_2, STEERING_RPT, STEERING_RPT_2, PARKING_BRAKE_RPT, PARKING_BRAKE_RPT_2, TRAILER_AIR_SUPPLY_RPT, and TRAILER_AIR_SUPPLY_RPT_2.
1. (Add) Add TRAILER_IDENTIFIER_RPT_00, 01, 02, 03, 04
1. (Add) Add COMPONENT_AUX_RPT_00 - 05 which includes LOCATION_CODE and KEY_SWITCH_STATUS data.
1. (Add) Add data status enumerations to
    - ACCEL_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - BRAKE_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - BRAKE_RPT_2
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - CABIN_CLIMATE_RPT
        - MAN_AC_OFF_ON
        - MAN_MAX_AC_OFF_ON
        - MAN_DEFROST_OFF_ON
        - MAN_MAX_DEFROST_OFF_ON
        - MAN_DIR_UP_OFF_ON
        - MAN_DIR_DOWN_OFF_ON
        - CMD_AC_OFF_ON
        - CMD_MAX_AC_OFF_ON
        - CMD_DEFROST_OFF_ON
        - CMD_MAX_DEFROST_OFF_ON
        - CMD_DIR_UP_OFF_ON
        - CMD_DIR_DOWN_OFF_ON
        - OUT_AC_OFF_ON
        - OUT_MAX_AC_OFF_ON
        - OUT_DEFROST_OFF_ON
        - OUT_MAX_DEFROST_OFF_ON
        - OUT_DIR_UP_OFF_ON
        - OUT_DIR_DOWN_OFF_ON
    - CABIN_FAN_SPEED_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - CABIN_TEMP_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - CRUISE_CONTROL_BUTTONS_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - DASH_CONTROLS_LEFT_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - DASH_CONTROLS_RIGHT_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - ENGINE_BRAKE_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
        - MAN_AUTO
        - CMD_AUTO
        - OUT_AUTO
    - ENGINE_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - EXHAUST_BRAKE_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - HAZARD_LIGHTS_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - HEADLIGHT_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - HORN_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - MARKER_LAMP_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - MEDIA_CONTROLS_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - PARKING_BRAKE_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - PARKING_BRAKE_RPT_2
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - POWER_TAKE_OFF_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - REAR_PASS_DOOR_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - SPRAYER_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - STEERING_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - STEERING_RPT_2
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TIPPER_BODY_RPT_00
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TIPPER_BODY_RPT_01
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TIPPER_BODY_RPT_02
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TRAILER_AIR_SUPPLY_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TRAILER_AIR_SUPPLY_RPT_2
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TRAILER_BRAKE_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - TURN_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    - WIPER_RPT
        - MANUAL_INPUT
        - COMMANDED_VALUE
        - OUTPUT_VALUE
    
# 13.2.0
1. (Add) Add GEAR_CMD and GEAR_RPT messages
1. (Add) Add ACCEL_PEDAL_POSITION_VOLTAGE_RPT, BRAKE_MC_VOLTAGE_RPT, BRAKE_PEDAL_POSITION_VOLTAGE_RPT, STEERING_TRQ_SENSOR_VOLTAGE_RPT
1. (Add) Add signal status enumerations to all signals in the TRAILER_WHEEL_SPEED_RPT_00, TRAILER_BRAKE_PRESSURE_RPT_00, 01, 02, 03, and 04
1. (Add) Add COMPONENT_RPT_05 and SOFTWARE_VERSION_RPT_05
1. (Add) Add TRAILER_FAULT_RPT_00, 01, 02, 03, and 04
1. (Add) Add DIFFERENTIAL_LOCKS by-wire system
1. (Add) Add DEVELOPMENT_MODE_REQUEST signal to GLOBAL_CMD and DEVELOPMENT_MODE and DEVELOPMENT_MODE_ALLOWED signals to GLOBAL_RPT_2 
1. (Add) Adding additional enum values for the SHIFT_CMD and SHIFT_RPT to add manual gear control capability
1. (Fix) Fixing certain html margins causing undesirable text wrapping in the dbc description html document

# 13.1.0
1. (Add) Add STEERING_FLUID_PRESSURE signal to the STEERING_AUX_RPT and STEERING_AUX_RPT_2
1. (Add) Add USER_PC_HEALTH_RPT_00 and USER_PC_HEALTH_RPT_01
1. (Add) Add ERROR and NOT_AVAIL enumerations to FIRE_SUPPRESSION_ALARM_STATUS
1. (Add) Add STARTUP enumeration to STATE in SAFETY_FUNC_RPT_2
1. (Add) Add BRAKE_PRESSURE_2 and BRAKE_PRESSURE_2_AVAIL signals to the BRAKE_AUX_RPT and BRAKE_AUX_RPT_2
1. (Add) Add STEERING_CONTROLLER_TYPE and STEERING_CONTROLLER_TYPE_AVAIL signals to the STEERING_AUX_RPT
1. (Add) Add USER_PC_HEALTH_FAULT_00 and USER_PC_HEALTH_FAULT_01 signals to COMPONENT_RPT_00, 01, 02, 03, and 04
1. (Add) Add OVERRIDE_METHOD signal to GLOBAL_RPT_2
1. (Add) Add SAFETY_RESPONSE_RPT
1. (Add) Add BRAKE_RPT_2, PARKING_BRAKE_RPT_2, STEERING_RPT_2, and TRAILER_AIR_SUPPLY_RPT_2
1. (Add) Add BRAKE_AUX_RPT_2 and STEERING_AUX_RPT_2
1. (Add) Add status byte signals (CONTROL_STATUS, CONTROLLING_SYSTEMS, and PERFORMANCE_STATUS) to ACCEL_RPT, BRAKE_RPT, PARKING_BRAKE_RPT, SHIFT_RPT, STEER_RPT, TRAILER_AIR_SUPPLY_RPT, BRAKE_RPT_2, STEER_RPT_2,  PARKING_BRAKE_RPT_2, and TRAILER_AIR_SUPPLY_RPT_2
1. (Add) Add USER_PC_APPLICATION_FAULT signal to the USER_PC_HEALTH_RPT_00 and USER_PC_HEALTH_RPT_01
1. (Add) Add REMOTE_STOP_MODE_CHANGE_ALLOWED signal to the REMOTE_STOP_RPT
1. (Add) Add GNSS_TIME
1. (Add) Add VEHICLE_WARNING_RPT_2
1. (Fix) Fix incorrect max values in the TIRE_PRESSURE_EXTENDED_RPT and TIRE_PRESSURE_EXTENDED_RPT_2
1. (Fix) Removing false formatting spaces that may cause errors in certain dbc parsers

# 13.0.0
1. (Change) Retructure ENGINE_RPT signal enumerations for MANUAL_INPUT and OUTPUT
1. (Add) Add TRAILER_BRAKE_PRESSURE_RPT_00, 01, 02, and 03
1. (Add) Add TRAILER_WHEEL_SPEED_RPT_00
1. (Add) Add TRAILER_PAYLOAD_RPT_00, 01, and 02
1. (Add) Add TIPPER_BODY_AUX_RPT_00, 01, and 02
1. (Add) Add REMOTE_STOP_RPT
1. (Add) Add BATTERY_VOLTAGE_RPT_1, 2
1. (Add) Add SYSTEM_ENABLED, SYSTEM_OVERRIDE_ACTIVE, and SYSTEM_FAULT_ACTIVE to COMPONENT_RPT_00, 01, 02, 03, and 04
1. (Add) Add negative numbers being two's complement to the protocol description document
1. (Add) Add signal status enumerations to the protocol description document
1. (Add) Reserve internal use and internal development messages in the protocol description document
1. (Add) Misc. minor changes to the protocol description document
1. (Fix) Fix incorrect max values in the AIR_PRESSURE_RPT
1. (Fix) Fix values that were incorrectly made signed in ENGINE_BRAKE_AUX_RPT, TRAILER_WHEEL_SPEED_RPT_00, and ENGINE_LOAD_FACTOR_RPT
1. (Fix) Change improper "%" unit to ratio

# 12.3.0
1. (Add) Add ANTILOCK_BRAKE_DISABLED to DRIVETRAIN_FEATURE_RPT
1. (Add) Add TRACTION_CONTROL_DISABLED to DRIVETRAIN_FEATURE_RPT
1. (Add) Add TIRE_PRESSURE_EXTENDED_RPT
1. (Add) Add TIRE_PRESSURE_EXTENDED_RPT_2
1. (Add) Add TIRE_TEMPERATURE_EXTENDED_RPT
1. (Add) Add TIRE_TEMPERATURE_EXTENDED_RPT_2
1. (Add) Add TIPPER_BODY_CMD_01 and TIPPER_BODY_RPT_01
1. (Add) Add TIPPER_BODY_CMD_02 and TIPPER_BODY_RPT_02
1. (Add) Add ENGINE_LOAD_FACTOR_RPT
1. (Add) Add LIGHT_STATUS_COMMAND to USER_NOTIFICATION_CMD
1. (Add) Add LIGHT_COMMAND_ALTERNATE to USER_NOTIFICATION_CMD
1. (Add) Add SAFETY_FUNC_RPT_2
1. (Add) Add AUTOMS_MAN_SWITCH_RPT

# 12.2.0
1. (Add) Add ENABLE_METHOD to GLOBAL_RPT_2
1. (Add) Add CLEAR_OVERRIDES to GLOBAL_CMD
1. (Add) Add enable methods to user_can_protocol.md
1. (Add) Add TRAILER_AIR_SUPPLY_CMD / RPT
1. (Add) Add TRAILER_BRAKE_CMD / RPT
1. (Add) Add FIRE_SUPPRESSION_RPT
1. (Add) Add Trailer Air Supply and Trailer Brake Systems to Component and Watchdog Reports.
1. (Fix) Change ENGINE_RPT to ENGINE_AUX_RPT
1. (Fix) Change ENGINE_RPT_2 to ENGINE_AUX_RPT_2
1. (Add) Add DIESEL_EXHAUST_FLUID_LEVEL to ENGINE_AUX_RPT
1. (Add) Add OIL_LEVEL to ENGINE_AUX_RPT_2
1. (Add) Add OIL_PRESSURE to ENGINE_AUX_RPT_2
1. (Add) Add ENGINE system, including ENGINE_CMD and ENGINE_RPT
1. (Add) Add SHIFT_IN_PROGRESS to SHIFT_AUX_RPT
1. (Add) Add DRIVELINE_ENGAGED to SHIFT_AUX_RPT
1. (Add) Add ACTUAL_GEAR_RATIO to SHIFT_AUX_RPT
1. (Add) Add comment to BETWEEN_GEARS IN SHIFT_AUX_RPT
1. (Add) Add CARGO_DOOR_OPEN to DOOR_RPT
1. (Fix) Fixed typo in the TIPPER_BODY_RPT Comments section
1. (Fix) Fix missing values for POWER_TAKE_OFF and TIPPER_BODY_00 in the COMPONENT_RPTs

# 12.1.0
1. (Add) Add POWER_TAKE_OFF and TIPPER_BODY_00 by-wire systems.

# 12.0.0
1. (Change) Restructure ENGINE_BRAKE_CMD / RPT to decouple AUTO from the individual LEVELS.
1. (Add) Add WHEEL_SPEED_RPT_2 message and modify WHEEL_SPEED_RPT message to match the new report naming.
1. (Fix) Typo - SHIFT_MODE_AVIAL to SHIFT_MODE_AVAIL
1. (Fix) Fixed navigation bar highlighting in html doc.

# 11.6.0
1. (Add) Add AIR_PRESSURE_RPT, ENGINE_BRAKE_AUX_RPT, and ENGINE_RPT_2 messages.
1. (Add) Add SHIFT_MODE and SHIFT_MODE_AVIAL signals to SHIFT_AUX_RPT message.
1. (Fix) Update HTML Style and add Dark Mode.
1. (Add) Add Visual improvements to HTML doc
1. (Add) Automatically append release tag to end of dbc file name for tagged releases.

# 11.5.0
1. (Add) Add NOTIFICATION_RPT message.
1. (Add) Add BUZZER_ON signal to USER_NOTIFICATION_CMD
1. (Add) Add LED_BRIGHTNESS signal to USER_NOTIFICATION_CMD
1. (Add) Add BUZZER_MUTE_INDICATOR signal to USER_NOTIFICATION_CMD
1. (Fix) Change maximum value from 1 to 10 of LIGHT_COMMAND signal in USER_NOTIFICATION_CMD message. 
1. (Fix) Move documentation related files to "doc" subdirectory.
1. (Fix) Changes to the vehicle associations process.
1. (Fix) Add 0x600-0x6FF reservation to user_can_protocol.md.

# 11.4.0
1. (Add) Add EXHAUST_BRAKE System. This includes the Exhaust Brake Command and Exhaust Brake Report.
1. (Add) Add comments to Engine Brake Command and Report values explaining the levels of braking.
1. (Add) Changed Engine Brake Command and Report values from LOW MEDIUM HIGH to LEVEL_1 - LEVEL_5 and AUTO.
1. (Add) Add ERROR value to PARKING_BRAKE_STATUS signal in the PARKING_BRAKE_AUX_RPT.

# 11.3.0
1. (Add) Add VEHICLE_FAULT_RPT message to communicate diagnostics from the stock vehicle. 
1. (Fix) Add abbreviation table to the user_can_protocolto reduce with length of names and maintain consistency and clarity.
1. (Fix) Rename DECCEL to DECEL, MOD to PACMOD, MINI to PACMINI, AUTO(NOMOUS) to AUTOMS, MANUAL to MAN for consistency.
1. (Fix) Shorten names over 32 characters, and associated names, to comply with Vector DBC limitation:
    1. ACCELERATION_CONTROL_WITH_MAXIMUM_MODE
    1. ACCELERATION_CONTROL_WITH_ADDITION_MODE
    1. NO_ENDURANCE_BRAKE_INTEGRATION_ALLOWED
    1. ENDURANCE_BRAKE_INTEGRATION_ALLOWED
    1. ANY_EXTERNAL_BRAKE_DEMAND_WILL_BE_ACCEPTED
    1. NO_EXTERNAL_BRAKE_DEMAND_WILL_BE_ACCEPTED
    1. ADDITION_MODE_OF_XBR_ACCELERATION_CONTROL
    1. MAXIMUM_MODE_OF_XBR_ACCELERATION_CONTROL
    1. GLOBAL_INTERNAL_POWER_SUPPLY_FAULT
    1. GLOBAL_PACMOD_SYSTEM_FAULT_ACTIVE
    1. DRIVER_REAR_SEATBELT_BUCKLED
    1. DRIVER_REAR_SEATBELT_BUCKLED_AVAIL
    1. CENTER_REAR_SEATBELT_BUCKLED
    1. CENTER_REAR_SEATBELT_BUCKLED_AVAIL
    1. PARKING_BRAKE_INTERLOCK_ACTIVE
    1. PARKING_BRAKE_INTERLOCK_ACTIVE_AVAIL
1. (Fix) Rename HEADLIGHTS_ON_AUTO MODE to HEADLIGHTS_ON_AUTO_MODE for consistency.
1. (Fix) Add User CAN, Restrictions, and Abbreviations sections to user_can_protocol to prevent unintended CAN traffic.
1. (Fix) Sort definitions list in user_can_protocol for consistency.

# 11.2.0
1. (Add) Add COMPONENT_READY signal to all COMPONENT_RPT_NN messages.
1. (Add) Add SYSTEM_READY signal to GLOBAL_RPT_2 message.
1. (Add) Add VIN_RPT_2 message.
1. (Fix) Add directional references to the comments of various linear and angular motion signals.
1. (Fix) Fix spelling of "longitudnal" to longitudinal.
1. (Fix) Fix spelling of "NOT_SPRAYNG" to NOT_SPRAYING.
1. (Fix) Set comments for VIN_RPT, WATCHDOG_RPT, YAW_RATE_RPT to "Not for new development."

# 11.1.0
1. (Add) Add BRAKE_REDUCED_ASSIST and BRAKE_REDUCED_ASSIST_AVAIL to BRAKE_AUX_RPT.
1. (Add) Add CRUISE_CONTROL_LIM value CRUISE_CONTROL_BUTTONS system.
1. (Add) Rename DRIVE_TRAIN_FEATURE_ACTIVE_RPT to DRIVE_TRAIN_FEATURE_RPT. Add DRIVE_MODE and DRIVE_MODE_AVAIL signals.
1. (Add) Add BRAKE_INTERLOCK_ACTIVE, PARKING_BRAKE_INTERLOCK_ACTIVE, BRAKE_INTERLOCK_ACTIVE_AVAIL, and PARKING_BRAKE_INTERLOCK_ACTIVE_AVAIL signals to ACCEL_AUX_RPT message.
1. (Add) Rename and add values to LIGHT_COMMAND signal to USER_NOTIFICATION_CMD message.
1. (Add) Add CALIBRATION_STATUS signal to ACCEL_AUX_RPT, BRAKE_AUX_RPT, SHIFT_AUX_RPT, and STEERING_AUX_RPT messages.
1. (Add) Add SANITY_CHECK_REQUIRED, COUNTER, and COMPLEMENT signals to the GLOBAL_CMD message.
1. (Add) Add DISABLE_ALL_SYSTEMS signal to the GLOBAL_RPT_2 message.
1. (Add) Add DRIVE_MODE_INVALID, GLOBAL_CMD_SANITY_FAULT, and GLOBAL_CMD_TIMEOUT signals to the WATCHDOG_RPT_2 message.
1. (Add) Add the Global Command Sanity Check Rules and System Global Disable Rules to the user_can_protocol document.
1. (Fix) Add bitrate to user_can_protocol document.
1. (Fix) Update Vehicle Associations.

# 11.0.0
1. (Change) Change size, bit position, and states of OUTPUT_VALUE signal within SAFETY_BRAKE_RPT.
1. (Change) Change bit position of REPORTED_FAULT signal within SAFETY_BRAKE_RPT.

# 10.3.0
1. (Add) Add PRI_SAFETY_BRAKE_PRESSURE_FAULT signal to SAFETY_FUNC_CRITICAL_STOP_RPT message.

# 10.2.0
1. (Add) Add COMPONENT_RPT_04 and SOFTWARE_VERSION_RPT_04 messages.
1. (Add) Add REMOTE_STOP_CMD signal to the SAFETY_FUNC_CRITICAL_STOP_RPT message.
1. (Add) Add WATCHDOG_SYSTEM_PRESENT_FAULT signal to the COMPONENT_RPT_XX messages.
1. (Fix) Rename PRI_SAFETY_BRAKE_X_FAULT signals in SAFETY_FUNC_CRITICAL_STOP_RPT message.

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