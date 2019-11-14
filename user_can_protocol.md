# User CAN Protocol Standard 3.0

This document the authoritative definition of the User CAN Protocol, commonly called the CAN API.  It is the interface to the PACMod 3.0 System and resides on the User CAN data bus.

## Document References
This document is the authoritative defintion of the User CAN Protocol.  The following documents are supplimental to this document.  They all reside in GitHub (https://github.com/astuff/pacmod_dbc).

- as_pacmod.dbc - The file contains the CAN Message definitions in Vector proprietary DBC file format.
- vehicle_associations.xml - The file contains the availability of each message on each of the different vehicle platforms.
- dbc_description.html - This file is derived from as_pacmod.dbc and vehicle_associations.xml.  It is a human readble version of the same.

## Definitions

- DBC: The as_pacmod.dbc file.
- CAN ID: A CAN ID is the value in the CAN arbitration field that identifies the data in the CAN data field.
- CAN Message: A CAN message is a CAN frame with a specific value in its CAN arbitration field.
- Component: An individual electronic part of the PACMod System that communicates on the User CAN.
- PACMod System: The PACMod System is the PACMod 3.0 System.
- System: A vehicle system that is under by-wire control.
- User CAN: The CAN bus that interfaces to the PACMod System.
- User PC: Any device the customer uses to communicate with the PACMod System.
- Vehicle: A vehicle with under the control of the PACMod System.
- Vehicle Platform: A particular manufacturer make and model compatible with the PACMod System.

## Types of CAN Messages
Command messages are CAN messages from the User PC to command the PACMod System to perform some action.  A command message is identified by a "CMD" in its name.  Report messages from the PACMod System provide feedback to the User PC.  A report message is indicated by a "RPT" in its name.

The global messages affect the PACMod System as a whole (all its systems and/or components).  It is made up of the global command and the global report.  The global command affects the PACMod System as a whole.  The global report reflects the status of the PACMod System as a whole.  Global messages are identified with "GLOBAL" in its name.

System messages are made up of command messages and report messages and have a fixed association to a single vehicle system under by-wire control.  The system command message contains the command specific to its system.  The system report contains an echo of the command, the operator command to the corresponding system, as well as the vehicle response to the command (if available).  It also contains status information.  System auxiliary reports contain additional information related to its system.  Each data field in a system auxiliary report has a corresponding data field that indicates the availability of the data for vehicle.  System messages begin with the name of a system.  Auxiliary messages are identified with "AUX" in its name.

Component reports have a fixed association to a single component.  It contains data fields that indicate the type of its component, the systems available on its component, and the status of its component.

There are other miscellaneous commands and reports.

## CAN IDs ##

The list below constrains the assignment of CAN IDs to specific messages. Its purpose is to give increasing priority to the increasing time-criticality of associated data.

1. 0x000-0x07F - System-wide reports (global and component reports meant to be received by all components)
2. 0x080-0x0FF - System-wide commands (global commands)
3. 0x100-0x1FF - System-based commands
4. 0x200-0x2FF - System-based reports
5. 0x300-0x3FF - System-based auxiliary reports
6. 0x400-0x4FF - Misc. reports, non-time-critical commands
7. 0x500-0x5FF - Internal diagnostic messages (generally undocumented)
8. 0x600-0x7FF - Unused

## Rules for Transmitting CAN Messages

All system messages transmit at 30Hz.  Other messages transmit at 30Hz or less. Transmission of successive messages shall not be back-to-back but must have a minimum separation of 500 microseconds.  See the figure below.  Faster data transmission may prevent PACMod from processing all data and result in inconsistent behavior. If the PACMod System does not receive a command message for a period of 100ms or more while by-wire control is active, the system reverts to manual mode.

The figure below is an example of the minimum separation between the transmission of the BRAKE_CMD, STEERING_CMD, and the ACCEL_CMD messages by the User PC.  The User PC transmits the complete set of messages, each separated by 500us.  The user then transmits the same set of messages again on 30Hz cycle (33.3ms) later.  Each message is again separated by 500us.

![alt_text](/min_xsmn_separation.jpg "min_xsmn_separation.jpg")

## CAN Message Data

The byte order of all CAN messages is Motorola/Big-Endian.

## CAN Message Availability

Each vehicle has a subset of available CAN messages.  The file vehicle_associations.xml specifies the availability of each message.

## Supervisory Enablement Rules

Supervisory enablement rules apply to a vehicle platform when the SUPERVISORY_ENABLE_REQUIRED in the GLOBAL_RPT message is REQUIRED.  This message allows the ECU that trasmits the system command messages and the ECU with overriding enable/disable authority to be separate ECUs.

A vehicle system under PACMod control “shall enable” if all of the following are true:
1. The ENABLE field is received as ALLOW ENABLE.
2. The respective system command message ENABLE field is received as “1” within the allowed time period.
3. The rules for the COUNTER and COMPLEMENT fields in this message are met.
4. The ENABLE field must be equal to ALLOW ENABLE and received in its corresponding message before receiving the system command message with the ENABLE field equal to “1”.

The allowed time period is 3 times the message period of this message. The same vehicle system shall disable immediately if any of the following are true:

1. This ENABLE field is DISABLE ALL SYSTEMS.
2. The respective system command message ENABLE field is “0”
3. The allowed time period has elapsed before a this message is received.
4. The rules for the COUNTER and COMPLEMENT fields in this message not are met.

## Default Bit Values

All undefined bits shall be set to 0.