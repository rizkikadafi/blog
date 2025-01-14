---
categories: lower-level
tags: digital-system analog digital
is_series: true
series_order: 1
series_title: digital-system
---

Do you wonder what are the building blocks that made up the complex system like a computer? 
The evolution of computers is nothing short of extraordinary, starting from simple mechanical devices 
to the sophisticated machines we rely on today. At the heart of it all lies the concept of 
the digital system, a framework built on interconnected components that process and interpret 
information in digital signal. 

From the beginning of the vacuum tube, which was bulky, fragile, and power-hungry, to the revolutionary 
invention of the transistor, these advances laid the foundation for modern computing. 
The transistor made possible the integrated circuit, the heart of digital systems that power everything 
from smartphones to supercomputers. But behind the complexity of a digital system in electronic systems, 
it is basically how to interpret quantities in this case voltage or current (electrical signal) into 
digital form like binary so that they can be interpreted into a more understandable information format.

---

## Numerical Representation 
The system that we rely on today constanly dealing with *quantities*. Quantities are measured, monitored, 
recorded, manipulated arithmetically, observed, or in some other way utilized in most physical systems. 
When we working with various quantities, it is important that we be able to represent their values 
efficiently and accurately. There are basically two ways of representing the numerical value of
quantities: **analog** and **digital**.

### Analog Representation
> Analog Representation
: A way to represented quantities by a *continuously* variable, proportional indicator.

We can take an example of analog representation from physical quantities like temperature. 
Temperature is quantities that can be measured and observed.
We often measured temperature using thermometer. 
Thermometers before the digital revolution used analog representation to measure temperature, 
and many are still in use today, for example Mercury thermometers.
Mercury thermometers use a column of mercury whose height is proportional to temperature.
In this example, the physical quantities (temperature), are coupled to the indicator through 
purely mechanical means. 
In this case, taking advantage of the expansion and contraction of mercury due to rising 
and falling temperatures.

In electrical analog systems, the physical quantity that is being measured or processed is converted
to a proportional voltage or current (electrical signal). This voltage or current is then used by the 
system for display, processing, or control purposes. Sound is an example of a physical quantity that 
can be represented by an electrical analog signal. A microphone is a device that generates an output
voltage that is proportional to the amplitude of the sound waves that strike it. Variations in the 
sound waves will produce variations in the microphone’s output voltage. 
Tape recordings can then store sound waves by using the output voltage of the microphone to 
proportionally change the magnetic field on the tape.

> Analog quantities have an important characteristic, no matter how they are represented: 
*they can vary over a continuous range of values*.

### Digital Representation
> Digital Representation
: A way to represented quantities by a *discrete* or step-by-step variable called *digits*.

A digital thermometer is a simple example of digital representation. It provides the temperature as 
discrete numerical values, such as 22°C or 22.5°C. Although the actual temperature changes 
continuously in the environment, the digital thermometer updates its reading in steps, 
depending on its resolution (e.g., to the nearest 0.1°C or 1°C).

This is in contrast to a traditional mercury thermometer, which represents temperature analogously 
by the continuous rise or fall of mercury in a tube. The digital thermometer's representation is 
easier to read and process because it provides exact numbers rather than relying on 
interpreting a continuous scale.

---

Because of the discrete nature of digital representations, there is no ambiguity
when reading the value of a digital quantity, whereas the value of an analog
quantity is often open to interpretation. 
In practice, when we take a measurement of an analog quantity, we always “round” to a convenient 
level of precision. In other words, we *digitize* the quantity.

> The digital representation is the result of assigning a number of limited precision to a 
continuously variable quantity.

For example, when you take your temperature with a mercury (analog) thermometer, 
the mercury column is usually between two graduation lines,
but you would pick the nearest line and assign it a number of, say, 30.6°C.

## Digital and Analog System
### Digital System
> Digital System
: Collection of devices designed to manipulate logical information or physical quantities which are 
then represented in digital form.

These devices are most often electronic, but they can also be mechanical, magnetic, or pneumatic.
Some of the more familiar digital systems include digital computers and calculators, 
digital audio and video equipment.

### Analog System
> Analog System
: Collection of devices designed to manipulate physical quantities which are then represented in analog form.

In an analog system, the quantities can vary over a continuous range of values. 
For example, the amplitude of the output signal to the speaker in a radio receiver can have 
any value between zero and its maximum limit.

## Advantages and Limitations of Digital Technique
### Advantages
1. *Digital systems are generally easier to design*. The circuits used in digital
systems are switching circuits, where exact values of voltage or current
are not important, only the range (HIGH or LOW) in which they fall.
2. *Information storage is easy*. This is accomplished by special devices and
circuits that can latch onto digital information and hold it for as long as
necessary. Analog storage capabilities are, by contrast, extremely limited.
3. *Accuracy and precision are easier to maintain throughout the system*. Once
a signal is digitized, the information it contains does not deteriorate as it
is processed. In analog systems, the voltage and current signals tend to
be distorted by the effects of temperature, humidity, and component tolerance 
variations in the circuits that process the signal.
4. *Operation can be programmed*. It is fairly easy to design digital systems
whose operation is controlled by a set of stored instructions called a
*program*. Analog systems can also be *programmed*, but the variety and
the complexity of the available operations are severely limited.
5. *Digital circuits are less affected by noise*. Because exact value of a
voltage is not important, spurious fluctuations in voltage (noise) are not 
as critical in digital systems, as long as the noise is not large enough to 
prevent us from distinguishing a HIGH from a LOW.
6. *More digital circuitry can be fabricated on IC chips*. It is true that analog
circuitry has also benefited from the tremendous development of IC
technology, but its relative complexity and its use of devices that cannot
be economically integrated (high-value capacitors, precision resistors,
inductors, transformers) have prevented analog systems from achieving
the same high degree of integration.

### Limitations
There are really very few drawbacks when using digital techniques. The two
biggest problems are:
1. **The real world nature is analog.**
2. **Processing digitized signals takes time.**

Most physical quantities are analog in nature, and these quantities are often
the inputs and outputs that are being monitored, operated on, and controlled
by a system. We are in the habit of expressing these quantities *digitally*, 
such as when we say that the temperature is 40° (40.2° when we want to be more precise), 
but we are really making a digital approximation to an proportionally analog quantity.

The second drawback to digital systems is that processing these digitized signals (lists of numbers) takes time.
The more precise the numbers need to be, the longer it takes to process them. In many applications, 
these factors are outweighed by the numerous advantages of using digital techniques, and so the conversion
between analog and digital quantities has become quite commonplace in the current technology.

## The Need for ADCs and DACs
To take advantage of digital techniques when dealing with analog inputs
and outputs, four steps must be followed:
1. Convert the physical variable to an electrical signal (analog).
2. Convert the electrical (analog) signal into digital form.
3. Process (operate on) the digital information.
4. Convert the digital outputs back to real-world analog form.

To do that we need **analog-to-digital converter (ADC)** to convert analog signal to digital form
and **digital-to-analog converter (DAC)** to convert the digital outputs to real-world analog form.
One example of conversion between analog and digital is in digital photography. Here's how the process works:
1. **Light Capturing**: Light from the environment passes through the camera lens and strikes an image sensor, 
such as a CCD (Charge-Coupled Device) or CMOS (Complementary Metal-Oxide-Semiconductor) sensor.
2. **Analog Signal Generation**: The image sensor converts the light into an analog electrical signal, 
where the intensity of the light corresponds to the voltage level.
3. **Analog-to-Digital Conversion (ADC)**: The analog electrical signals are then converted into 
digital data through an analog-to-digital converter. Each pixel of the image sensor generates a digital value representing the light's intensity and color.
4. **Digital Storage**: The digital data is stored as a file (e.g., JPEG or RAW) on the camera's memory card.
5. **Digital-to-Analog Conversion (Playback)**: During playback on a screen or monitor, the digital image data 
is converted back to an analog signal to control the display pixels, enabling us to see the image.
