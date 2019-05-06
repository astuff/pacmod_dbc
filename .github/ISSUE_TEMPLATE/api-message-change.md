---
name: API Message Change
about: Use this template to change an API message.
title: ''
labels: ''
assignees: ''

---

## General Instructions
Remember this is a **public forum**, so please keep your comments appropriate.

The GitHub issues list is edited in the "Markdown" markup language.  When you edit the text in an issue, there is both a "write" and a "preview" window.  The write is the code and the preview is the rendered view.  If you want some formatting in your issue, refer to a markdown guide such as [this](https://www.markdownguide.org/basic-syntax/) one.

Before submitting the issue, be sure to do the following.
1. Apply **both** a status label and a type label.
2. Apply the "Ongoing CAN API 3.0 Updates" project.
3. Apply a milestone.  The dates on the milestones relate to the date that the CAN API team is meeting.
4. Assign the issue to yourself and all of the members of the CAN API team.
5. Delete all the instructions and definitions.

For changes to an existing message, copy the current message data from the PACMod System User Guide into this document.  Use the formatting below to markup the changes.  For new messages, extend the example template below as needed.

## Editing Mark Instructions
Remove a line:  ~~Remove this line.~~
Add a line: **Add this line.**

## Definitions
1. **Requirement**: Brief description of the motivation and function of the change.
2. **Message Name**: Name of message as it will appear in the PACMod System User Manual and the Vector DBC file.
3. **Message ID**: 11-bit value for the CAN arbitration field.
4. **Frame Format**: PACMod API always uses "standard".
5. **Data Length Code**: Number of bytes in the message, 0 - 8.  There are no multi-frame CAN messages.
6. **TX Node**: This field will have the value of "PACMOD" or "CUSTOMER_ECU" depending on the device that will transmit the message.
7. **Message Rate**: This is either "event" based or rate in Hz.  All messages are broadcast without solicitation.
8. **Name**: The name of data field as it will appear in the PACMod System User Manual and the Vector DBC file.  The name is immediately followed by a footnote number if there is one.
9. **Type**: This is either "signed" or "unsigned", depending on the data.  A signed number is in two's compliment format.
10. **Bitpos**: Vector DBC bit numbering begins with 0 at the least significant bit of byte 0 and ends with 63 at the most significant bit of byte 7 as follows:

|Byte\Bit|7|6|5|4|3|2|1|0|
|---|---|---|---|---|---|---|---|---|
|**0**|7|6|5|4|3|2|1|0|
|**1**|15|14|13|12|11|10|9|8|
|**2**|23|22|21|20|19|18|17|16|
|**3**|31|30|29|28|27|26|25|24|
|**4**|39|38|37|36|35|34|33|32|
|**5**|47|46|45|44|43|42|41|40|
|**6**|55|54|53|52|51|50|49|48|
|**7**|63|62|61|60|59|58|57|56|

The bit position or start bit of a signal is the bit number of the most significant bit within the signal for Motorola/Big-Endian and the least significant bit within the signal for Intel/Little-Endian.  The API requires Motorola/Big-Endian, so the bit position will always be the bit number of the most significant byte.
11. **Length**: Number of bits in the data field.  PACMod CAN API is Motorola/Big-Endian.
12. **Factor**: Multiply the data by this number to achieve the correct scale for the given units.
13. **Offset**: Add this number to the sum of the data and the factor to achieve the correct offset for the given units.
14. **Min**: Minimum value allowed in the given units by any CAN node receiving this message.
15. **Max**: Maximum value allowed in the given units allowed by any CAN node receiving this message.
16. **Unit**: Engineering units of the data.
17. **Footnote**: Enumeration of values and/or description of field.  Enumerations are all capital letters and words are separated by underscores.  Sentences in a description begin with a capital letter and end with a period.

## Template
Requirement: Add messages per customer request for vehicle accelerometer and gyro data.
Message Name: LINEAR_ACCEL_RPT
Message ID (Decimal): 1049
Message ID (Hexadecimal): 0x419
Frame Format: Standard
Data Length Code: 8
TX Node: PACMOD
Message Rate: 30 Hz

|Name|Type|Bitpos|Length|Factor|Offset|Min|Max|Unit|
|---|---|---|---|---|---|---|---|---|
|LATERAL_NEW_DATA_RX1|Unsigned|0|1|1|0|0|1||
|LONGITUDNAL_NEW_DATA_X1|Unsigned|1|1|1|0|0|1||
|VERTICAL_NEW_DATA_RX1|Unsigned|2|1|1|0|0|1||
|LATERAL_VALID2|Unsigned|3|1|1|0|0|1||
|LONGITUDNAL_VALID2|Unsigned|4|1|1|0|0|1||
|VERTICAL_VALID2|Unsigned|5|1|1|0|0|1||
|LATERAL_ACCEL|Signed|8|16|0.01|0|-327.68|327.67|m/s2|
|LONGITUDNAL_ACCEL|Signed|24|16|0.01|0|-327.68|327.67|m/s2|
|VERTICAL_ACCEL|Signed|40|16|0.01|0|-327.68|327.67|m/s2|

1 0=NEW_DATA_NOT_RX, 1=NEW_DATA_RX
2 0=NOT_VALED, 1=VALID
