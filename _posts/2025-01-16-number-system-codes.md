---
title: "Decoding the Digital World: A Beginner's Guide to Number Systems & Codes"
thumbnail:
categories: lower-level
tags: digital-system digital number-system
is_series: true
series_order: 2
series_title: digital-system
---

Have you ever wondered how computers, calculators, or your smartphone can do so many amazing things? 
It all starts with a very simple concept: **numbers**. But these devices don't use numbers in the same way we do. 
They have their own special languages. In this post, we'll break down the core ideas of Number System and Codes 
to understand digital languages.

---

## It All Starts with Binary: The Language of Computers
We use the decimal system (base 10) every day, with its ten digits (0-9). 
This system is natural for us because we have ten fingers. But for a computer, which is made of billions 
of electronic switches, it's much simpler to use a system with only two digits.

This is the **binary system (base 2)**. It uses only **0** and **1**.
- **Analogy**: Think of a light switch. It can only be in one of two states: **OFF (0)** or **ON (1)**. 
Digital circuits work the same way, using different voltage levels to represent these two states. 
Every piece of information in a computer—from a single letter to a complex video—is stored as long 
strings of these 0s and 1s.

## Hexadecimal: A Shorthand for Binary
Binary numbers can get very long and difficult for humans to read. For example, the number 227 in binary is 
`11100011`. That's a lot to write down without making a mistake!

This is where the **hexadecimal system (base 16)** comes in. It acts as a convenient shorthand for binary. 
It uses 16 symbols: the digits 0-9 and the letters A-F (where A=10, B=11, ..., F=15).

The magic of hexadecimal is that every single hex digit represents a group of exactly four binary 
digits (bits).
* Example:
    * The binary number `1110` is `14` in decimal, which is represented by the hex digit `E`.
    * The binary number `0011` is `3` in decimal, which is the hex digit `3`.
    * So, the long binary number `11100011` can be written simply as `E3` in hexadecimal. Much easier, right?

## BCD: The Best of Both Worlds?
What if you want to work with decimal numbers but store them in a way that's easy for digital 
circuits to handle? That's the idea behind Binary Coded Decimal (BCD).

In BCD, you don't convert the entire decimal number to binary. Instead, you convert each decimal 
digit into its own four-bit binary equivalent.
* Example: Let's take the decimal number `97`.
    * In straight binary, `97` is `01100001`. 
    * In BCD, you convert the `9` and the `7` separately: 
        * `9` = `1001` 
        * `7` = `0111` 
        * So, `97` in BCD is `1001` `0111`.

BCD makes converting to and from decimal very easy, which is why it's often used in devices with 
decimal displays like digital clocks and multimeters.

## Other Important Codes
Beyond just representing numbers, computers need codes for other things:
- Alphanumeric Codes (like ASCII): To represent letters, punctuation marks, and special symbols (like $, @, #), 
computers use a standard code. The most common is ASCII (American Standard Code for Information Interchange). 
Every character on your keyboard has a unique binary code assigned to it by ASCII.
- The Gray Code: In a normal binary counting sequence, several bits can change at once 
(e.g., going from 3 (011) to 4 (100)). In high-speed systems, this can cause errors. 
The Gray code solves this by creating a sequence where only one bit ever changes between two consecutive numbers. 
This makes it much more reliable for certain applications, like detecting the precise position of a rotating shaft.
- Parity for Error Detection: When data is sent from one place to another, a stray bit of electrical noise 
can flip a 0 to a 1 or vice versa. A simple way to detect if this has happened is by adding an extra bit, 
called a parity bit, to the data. In an even parity system, the parity bit is chosen to make the total 
number of 1s an even number. The receiving device checks to see if the number of 1s is still even. 
If not, it knows an error occurred.

## Putting It All Together
Understanding these different systems and codes is fundamental to digital electronics. 
Each one has a specific purpose, whether it's for the core operation of the computer (binary), 
for human convenience (hexadecimal), for easy display (BCD), or for reliable operation (Gray code).
