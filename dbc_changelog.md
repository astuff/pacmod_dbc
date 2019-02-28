# Autonomoustuff User CAN DBC File

The as_pacmod.dbc file is formatted as a Vector DBC file.  This file specifies changes to this file.

## Change 005 Approved 2/22/2019

### Requirements

1. ID conflicts with messages in the DBC.

### Changes

1. Modify – Message: NOTIFICATION_CMD 
   1. Message Properties: 
      1. Address: 0x421.

2. Modify – Message: LINEAR_ACCEL_RPT
   1. Message Properties: 
      1. Address: 0x419.

3. Modify – Message: ANG_VEL_RPT
   1. Message Properties: 
      1. Address: 0x420.

## Change 004 Approved 2/18/2019

### Requirements

1. Update motor reports to align with globe motor message formats.

### Changes

1. Modify – Message: BRAKE_MOTOR_RPT_1 
         1. Modify – Data Field: MOTOR_CURRENT 
                  1. Type – Signed
                  2. Min – -2048.0
                  3. Max – 2048.0
2. Modify – Message: BRAKE_MOTOR_RPT_2
         1. Modify – Data Field: ENCODER_TEMPERATURE 
                  1. Min – - 40
                  2. Max – 210
         2. Modify – Data Field: MOTOR_TEMPERATURE 
                  1. Min – - 40
                  2. Max – 210
         3. Modify – Data Field: ANGULAR_SPEED 
                  1. Type – Signed
                  2. Factor – 0.1
                  3. Min – -12868.0
                  4. Max – 12868.0
                  5. Units – rad/s
3. Modify – Message: STEERING_MOTOR _RPT_1
         1. Modify – Data Field: MOTOR_CURRENT 
                  1. Type – Signed
                  2. Min – -2048.0
                  3. Max – 2048.0
         2. Modify – Data Field: SHAFT_POSITION 
                  1. Unit – Radians
4. Modify – Message: STEERING_MOTOR _RPT_2
         1. Modify – Data Field: ENCODER_TEMPERATURE 
                  1. Min – - 40
                  2. Max – 210
         2. Modify – Data Field: MOTOR_TEMPERATURE
                  1. Min – - 40
                  2. Max – 210
         3. Modify – Data Field: ANGULAR_SPEED
                  1. Type – Signed
                  2. Factor – 0.1
                  3. Min – -12868.0
                  4. Max – 12868.0
                  5. Units – rad/s

## Change 003 Approved 2/14/2019

### Requirements

1. Add a new message to command PACMicro to mute buzzer and turn lights white

2. Add messages per Continental request for vehicle accelerometer and gyro data. 

### Changes

1. Add – Message: NOTIFICATION_CMD 
         1. Message Properties: 
                  1. Transmission rule: Periodic 4 Hz.
                  2. Address: Andy’s suggestion 0x417.
         2. Add Data Field 
                  1. Name – BUZZER_MUTE
                  2. Type – Unsigned
                  3. Bitpos – 0
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_MUTED, 1=MUTED
         3. Add Data Field 
                  1. Name – UNDERDASH_LIGHTS_WHITE
                  2. Type – Unsigned
                  3. Bitpos – 1
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_ACTION, 1=WHITE
2. Add – Message: LINEAR_ACCEL_RPT
         1. Message Properties: 
                  1. Transmission rule: Periodic at 30Hz.
                  2. Address: 0x415.
         2. Add Data Field 
                  1. Name – LATERAL_NEW_DATA_RX
                  2. Type – Unsigned
                  3. Bitpos – 0
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
         3. Add Data Field 
                  1. Name – LONGITUDNAL_NEW_DATA_RX
                  2. Type – Unsigned
                  3. Bitpos – 1
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
         4. Add Data Field 
                  1. Name – VERTICAL_NEW_DATA_RX
                  2. Type – Unsigned
                  3. Bitpos – 2
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
         5. Add Data Field 
                  1. Name – LATERAL_VALID
                  2. Type – Unsigned
                  3. Bitpos – 3
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_VALID, 1=VALID
         6. Add Data Field 
                  1. Name – LONGITUDNAL_VALID
                  2. Type – Unsigned
                  3. Bitpos – 4
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_VALID, 1=VALID
         7. Add Data Field 
                  1. Name – VERTICAL_VALID
                  2. Type – Unsigned
                  3. Bitpos – 5
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_VALID, 1=VALID
         8. Add Data Field 
                  1. Name – LATERAL_ACCEL
                  2. Type – Signed
                  3. Bitpos – 8
                  4. Length – 16
                  5. Factor – 0.01
                  6. Offset – 0
                  7. Min – -327.68
                  8. Max – 327.67
                  9. Unit – m/s^2
                  10. Value List:
         9. Add Data Field 
                  1. Name – LONGITUDNAL_ACCEL
                  2. Type – Signed
                  3. Bitpos – 24
                  4. Length – 16
                  5. Factor – 0.01
                  6. Offset – 0
                  7. Min – -327.68
                  8. Max – 327.67
                  9. Unit – m/s^2
                  10. Value List:
         10. Add Data Field 
                   1. Name – VERTICAL_ACCEL
                   2. Type – Signed
                   3. Bitpos – 40
                   4. Length – 16
                   5. Factor – 0.01
                   6. Offset – 0
                   7. Min – -327.68
                   8. Max – 327.67
                   9. Unit – m/s^2
                   10. Value List:

3. Add – Message: ANG_VEL_RPT
         1. Message Properties: 
                  1. Transmission rule: Periodic at 30Hz.
                  2. Address: 0x416.
         2. Add Data Field 
                  1. Name – PITCH_NEW_DATA_RX
                  2. Type – Unsigned
                  3. Bitpos – 0
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
         3. Add Data Field 
                  1. Name – ROLL_NEW_DATA_RX
                  2. Type – Unsigned
                  3. Bitpos – 1
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
         4. Add Data Field 
                  1. Name – YAW_NEW_DATA_RX
                  2. Type – Unsigned
                  3. Bitpos – 2
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
         5. Add Data Field 
                  1. Name – PITCH_VALID
                  2. Type – Unsigned
                  3. Bitpos – 3
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_VALID, 1=VALID
         6. Add Data Field 
                  1. Name – ROLL_VALID
                  2. Type – Unsigned
                  3. Bitpos – 4
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_VALID, 1=VALID
         7. Add Data Field 
                  1. Name – YAW_VALID
                  2. Type – Unsigned
                  3. Bitpos – 5
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NOT_VALID, 1=VALID
         8. Add Data Field 
                  1. Name – PITCH_VEL
                  2. Type – Signed
                  3. Bitpos – 8
                  4. Length – 16
                  5. Factor – 0.001
                  6. Offset – 0
                  7. Min – -32.768
                  8. Max – 32.767
                  9. Unit – rad/s
                  10. Value List:
                  11. Description: Right handed coordinate frame.
         9. Add Data Field 
                  1. Name – ROLL_VEL
                  2. Type – Signed
                  3. Bitpos – 24
                  4. Length – 16
                  5. Factor – 0.001
                  6. Offset – 0
                  7. Min – -32.768
                  8. Max – 32.767
                  9. Unit – rad/s
                  10. Value List:
                  11. Description: Right handed coordinate frame.
         10. Add Data Field 
                   1. Name – YAW_VEL
                   2. Type – Signed
                   3. Bitpos – 40
                   4. Length – 16
                   5. Factor – 0.001
                   6. Offset – 0
                   7. Min – -32.768
                   8. Max – 32.767
                   9. Unit – rad/s
                   10. Value List:
                   11. Description: Right handed coordinate frame.

## Change 002 Approved 12/21/2018

###  Requirements

1. Remove field from system command messages to clear faults which eliminates the need for PACMod components to have to monitor all system command messages.

2. Add global command message to clear faults as a means for a single message to clear latched faults.

3. Add field to component message to report CAN timeout faults to communicate CAN timeouts that are specific to a CAN node.

4. Add a bit to all system reports to communicate command faults.

###  Changes

1. Modify – Messages: All command messages
         1. Remove Data Field 
                  1. Name – CLEAR_FAULTS
                  2. Type – Unsigned
                  3. Bitpos – 3
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_ACTION, 1=CLEAR_NON_ACTIVE_FAULTS

2. Add – Message: GLOBAL_CMD 
         1. Message Properties: 
                  1. Transmission rule: Event based.
                  2. Address: 0x080
         2. Add Data Field 
                  1. Name – CLEAR_FAULTS
                  2. Type – Unsigned
                  3. Bitpos – 0
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_ACTION, 1=CLEAR_NON_ACTIVE_FAULTS

3. Modify – COMPONENT_RPT
         1. Add Data Field
                  1. Name – CAN_TIMEOUT_FAULT
                  2. Type – Unsigned
                  3. Bitpos – 25
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_FAULT, 1=FAULT
4. Modify – Messages: All system reports
         1. Add Data Field
                  1. Name – COMMAND_FAULT
                  2. Type – Unsigned
                  3. Bitpos – 7
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_FAULT, 1=FAULT

## Change 001 Approved 9/28/2018

### Requirements

1. A means to clear latched diagnostics. 

2. A means to communicate a config fault. 

3. A means to monitor operation of the PACMicro.

###  Detailed Changes 

1. Modify – Messages: All command messages
         1. Add Data Field 
                  1. Name – CLEAR_FAULTS
                  2. Type – Unsigned
                  3. Bitpos – 3
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_ACTION, 1=CLEAR_NON_ACTIVE_FAULTS

2. Add – Message: COMPONENT_RPT 
         1. Message Properties: 
                  1. Transmission rule: Broadcast by each PACMod System component on the user CAN at 30Hz.
                  2. Address: 0x20
         2. Data Field
                  1. Name – COMPONENT_TYPE
                  2. Type – Unsigned
                  3. Bitpos – 0
                  4. Length – 8
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 255
                  9. Unit –
                  10. Value List: 0=PACMod, 1=PACMini, 2=PACMicro
         3. Data Field 
                  1. Name – COMPONENT_FUNC
                  2. Type – Unsigned
                  3. Bitpos – 8
                  4. Length – 8
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 255
                  9. Unit –
                  10. Description: Functions being performed by the component.
                  11. Value List: 0=PACMOD, 1=STEERING_AND_STEERING_COLUMN, 2=ACCELERATOR_AND_BRAKING, 3=BRAKING, 4=SHIFTING, 5=STEERING, 6=E_SHIFTER, 7=WATCHDOG
         4. Data Field 
                  1. Name – COUNTER
                  2. Type – Unsigned
                  3. Bitpos – 16
                  4. Length – 4
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Description: Counter shall have the value of 0 with the first message transmission.  It shall increase by 1 with each subsequent message transmission up to and including the value of 0xF.  The next message transmission shall be 0, and this pattern shall repeat. 
         5. Data Field 
                  1. Name – COMPLEMENT
                  2. Type – Unsigned
                  3. Bitpos – 20
                  4. Length – 4
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Description: The COMPLEMENT shall be the complement of the COUNTER.  For example, if COUNTER is 0x1011, then the COMPLEMENT is 0x0100.
         6. Data Field 
                  1. Name – CONFIG_FAULT
                  2. Type – Unsigned
                  3. Bitpos – 24
                  4. Length – 1
                  5. Factor – 1
                  6. Offset – 0
                  7. Min – 0
                  8. Max – 1
                  9. Unit – 
                  10. Value List: 0=NO_FAULT, 1=FAULT

3. Change – Message: GLOBAL_RPT 
         1. Data Field 
                  1. Name – CONFIG_ACTIVE_FAULT
                  2. Description: Logical OR of config faults from all PACMod System components on a given vehicle platform.
         2. Data Field 
                  1. Name – PACMOD_SYSTEM_FAULT_ACTIVE
                  2. Description: Logical OR of all faults from all PACMod System components on a given vehicle platform.