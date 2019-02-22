# User CAN Protcol Standard 3.0 - Approved 2/18/2019 #

This document defines the User CAN Protcol, commonly called the CAN API.

## Document References ##

These documents are authoritative in the following order. The character X indicates the file's version.

1. User CAN Protocol DBC - This file is in Vector proprietary DBC file format stored in this repository. The file name is as_pacmod.dbc.
2. PACMod X.X System Startup Guide - This file is maintained by AutonomouStuff and is available by contacting support@autonomoustuff.com.
3. This document.

## Arbitration Field Ranges ##

The list below constrains the assignment of arbitration values to specific messages. Its purpose is to give increasing priority to the increasing time-criticality of associated data.

1. 0x000-0x07F - System-wide reports (global and component reports meant to be received by all components)
2. 0x080-0x0FF - System-wide commands (global commands)
3. 0x100-0x1FF - System-based commands
4. 0x200-0x2FF - System-based reports
5. 0x300-0x3FF - System-based auxiliary reports
6. 0x400-0x4FF - Misc. reports, non-time-critical commands
7. 0x500-0x5FF - Internal diagnostic messages (generally undocumented)
8. 0x600-0x7FF - Unused
