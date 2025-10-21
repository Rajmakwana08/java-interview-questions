import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Explain Encapsulation and Access Modifiers in Java with examples.",
      answer: "",
      codeExample: `
Encapsulation

  Encapsulation means hiding data and methods inside one unit (class) and protecting the data from direct access from outside the class.
  It is also called data hiding.

Example:

class Student {
    private String name;  // data hidden
    private int age;

    // methods to set and get data
    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }
}


In this example,

  The variables name and age are private, so they cannot be accessed directly.
  They can only be changed or read using methods (setName() and getName()).
      

Simple Explanation:

Encapsulation keeps data safe and secure inside the class.
It allows you to control how the data is used.
You hide the details and only show what is needed.


Advantages:

Protects data (data hiding)
Increases security
Easy to maintain and change code
Helps in modular (clean) programming


---------------------------

Access Modifiers

👉 Without access modifiers, encapsulation cannot work properly, because data will not be protected.

Access modifiers are keywords used to control the visibility (access) of classes, methods, and variables in Java.
They decide who can use what in your program.


🧩 Types of Access Modifiers:
| Modifier              | Access Level                                                  | Can be accessed from                                |
| ----------------------| ------------------------------------------------------------- | --------------------------------------------------- |
| public                | everywhere                                                    | inside same class, same package, and other packages |
| private               | only within the same class                                    | can’t be accessed outside the class                 |
| protected             | within same package + subclasses (even in different packages) | used mostly in inheritance                          |
| default (no modifier) | only within the same package                                  | can’t be accessed outside the package               |


🟦 Example 1: public and private

class Person {
    public String name;   // public → can access anywhere
    private int age;      // private → only inside this class

    public void setAge(int a) {
        age = a;
    }

    public void showInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "Raj";      // allowed (public)
        // p.age = 20;       // ❌ not allowed (private)
        p.setAge(20);        // ✅ allowed using method
        p.showInfo();
    }
}


🟢 Output:
Name: Raj
Age: 20



🟩 Example 2: protected and default

File 1: Animal.java

package pack1;

public class Animal {
    protected String type = "Dog";  // protected
    String sound = "Bark";          // default (no modifier)
}


File 2: Main.java

package pack2;
import pack1.Animal;

class Dog extends Animal {
    void display() {
        System.out.println(type);  // ✅ allowed (protected)
        // System.out.println(sound); // ❌ not allowed (default)
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.display();
    }
}



🟨 In short (for exam writing):

Access Modifiers are used to control the visibility of classes, methods, and variables.
There are four types:
public – accessible everywhere
private – only inside the same class
protected – same package + subclasses
default – only inside the same package

`
    },
    {
      id: 2,
      question: "2. Explain Inheritance and Interface",
      answer: "",
      codeExample: `
🟩 Inheritance (in Java)

Inheritance means one class can use the properties and methods of another class.
It allows you to reuse code and avoid writing the same code again.

It is like a child class getting features from a parent class.


🟦 Example:

// Parent class
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // inherited method from Animal
        d.bark();  // method of Dog class
    }
}


🟢 Output:
Animal is eating
Dog is barking


🟩 Explanation:

Animal is the parent (superclass).
Dog is the child (subclass).
The Dog class inherits the eat() method from the Animal class.
So, we can use both eat() and bark() with the same object.



🟨 Types of Inheritance in Java:

| Type         | Description                                                                                                              | Example           |
| -------------| -------------------------------------------------------------------------------------------------------------------------|-------------------|
| Single       | One class inherits another                                                                                               | class B extends A |
| Multilevel   | Class inherits another which is also inherited                                                                           | A → B → C         |
| Hierarchical | Multiple classes inherit one base class (like multiple child class and one parent class)                                 | A → B, C          |
| Multiple     | Not supported in Java (because of ambiguity) but can be done using interfaces (multiple parent class and on child class) | —                 |
  Hybrid       | combine two or more inheritance 

🟩 Example of Multilevel Inheritance:

class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}

class BabyDog extends Dog {
    void weep() {
        System.out.println("Weeping");
    }
}

public class Main {
    public static void main(String[] args) {
        BabyDog bd = new BabyDog();
        bd.eat();
        bd.bark();
        bd.weep();
    }
}


🟢 Output:
Eating
Barking
Weeping


🟧 Advantages of Inheritance:

Code reusability – write once, use many times.
Easy to maintain and update code.
Supports method overriding (used in polymorphism).
Improves code readability and structure.


🗣️ Short Oral Answer (for viva):

“Inheritance means one class can use the features of another class.
It helps in code reusability.
The extends keyword is used in Java for inheritance.”



-------------------------------------------------------------------------------------


🟩 Interface in Java

An interface is like a blueprint of a class.
It contains only method declarations (no method body).
A class that uses the interface must implement all its methods.

You can think of an interface as a contract —
it tells what to do, but not how to do it.


🧩 Keyword: interface
🧩 Implements Keyword: implements


🟦 Example:

// Interface
interface Animal {
    void eat();   // method without body
    void sleep();
}

// Class implementing the interface
class Dog implements Animal {
    public void eat() {
        System.out.println("Dog is eating");
    }

    public void sleep() {
        System.out.println("Dog is sleeping");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.sleep();
    }
}


🟢 Output:
Dog is eating
Dog is sleeping


🟩 Explanation:

interface Animal defines two methods (eat() and sleep()), but doesn’t give their body.
class Dog implements Animal → means Dog must write (override) those methods.
implements keyword is used instead of extends.


🟧 Important Points:

All methods in an interface are abstract (no body).
Variables in an interface are public, static, and final by default.
A class can implement multiple interfaces (Java supports this).
Interfaces help in achieving multiple inheritance in Java.



🟨 Example: Multiple Interfaces

interface A {
    void show();
}

interface B {
    void display();
}

class Demo implements A, B {
    public void show() {
        System.out.println("Hello from A");
    }

    public void display() {
        System.out.println("Hello from B");
    }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show();
        d.display();
    }
}

🟢 Output:
Hello from A
Hello from B


🟩 Advantages of Interface:

Supports multiple inheritance.
Provides abstraction (hides implementation details).
Makes code more flexible and maintainable.
Helps in achieving loose coupling between classes.


🗣️ Short Oral Answer (for viva):

“An interface is a collection of abstract methods.
It shows what a class should do but not how.
A class uses the implements keyword to provide the code for those methods.”
      `
    },
    {
      id: 3,
      question: "3. Explain Polymorphism",
      answer: "",
      codeExample: `
🟩 Polymorphism (in Java)

Polymorphism means one thing can take many forms.
In Java, it allows methods or objects to behave differently in different situations.

Polymorphism is one of the main features of OOP.


🔹 Types of Polymorphism in Java

  Compile-time Polymorphism (Method Overloading)
  Run-time Polymorphism (Method Overriding)


🟦 1. Compile-time Polymorphism (Method Overloading)

Same method name but different parameters in the same class.
The compiler decides which method to call → hence compile-time.

class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));     // 15
        System.out.println(calc.add(5, 10, 15)); // 30
    }
}


✅ Explanation: Same method add works differently depending on number of parameters.



🟦 2. Run-time Polymorphism (Method Overriding)

Child class provides its own version of a method from parent class.
Which method to call is decided at runtime → hence run-time.

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog(); // Parent reference, child object
        a.sound();            // Dog's method is called → run-time polymorphism
    }
}


🟢 Output:

Dog barks

🟩 Summary for Exams
Type	What it is	Example
Compile-time	Same method name, different parameters	Method overloading
Run-time	Child class changes parent method	Method overriding


🟧 Key Points:

Polymorphism means many forms.
Improves code reusability and flexibility.
Compile-time → method overloading.
Run-time → method overriding.


🗣️ Short Oral Answer (for viva):

“Polymorphism means one method or object can have many forms.
Method overloading is compile-time polymorphism,
and method overriding is run-time polymorphism.”


🟧 Key Points:

Polymorphism means many forms.
Improves code reusability and flexibility.
Compile-time → method overloading.
Run-time → method overriding.


🗣️ Short Oral Answer (for viva):

“Polymorphism means one method or object can have many forms.
Method overloading is compile-time polymorphism,
and method overriding is run-time polymorphism.”

`
    },
    {
      id: 4,
      question: "4. Explain Abstract Class and Abstract Method in Java with examples.",
      answer: "",
      codeExample: `
🟩 Abstraction (in Java)

Abstraction means hiding the implementation details and showing only the functionality to the user.
It focuses on what an object does, not how it does it.

In simple words: “Show only necessary things, hide unnecessary details.”

🔹 How to achieve Abstraction in Java:

  Abstract Class
  Interface

(We already discussed interfaces; now let’s focus on abstract classes)


🟦 Abstract Class Example

abstract class Vehicle {
    abstract void start(); // abstract method (no body)
    
    void stop() {          // regular method (with body)
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {
    void start() {         // providing body of abstract method
        System.out.println("Car started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start(); // Car's implementation
        v.stop();  // inherited method
    }
}


🟢 Output:
Car started
Vehicle stopped


🟩 Explanation:

Vehicle is abstract class → contains abstract method start().
Car extends Vehicle → must provide implementation for start().
Abstraction hides the details of how start() works inside the class.


🟧 Important Points:

Abstract class cannot be instantiated directly.
Abstract class can have abstract and non-abstract methods.
Abstraction is used to hide complex details from the user.
Interfaces are 100% abstraction (all methods abstract by default).


🗣️ Short Oral Answer (for viva):

“Abstraction means hiding the implementation details and showing only the functionality.
Abstract classes and interfaces are used to achieve abstraction in Java.”



🟩 Example: Abstraction with Interface

// Interface (100% abstraction)
interface Vehicle {
    void start();   // abstract method
    void stop();
}

// Class implementing the interface
class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }

    public void stop() {
        System.out.println("Car stopped");
    }
}

// Another class implementing the same interface
class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike started");
    }

    public void stop() {
        System.out.println("Bike stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();  // Interface reference, Car object
        v1.start();               // Car's start
        v1.stop();                // Car's stop

        Vehicle v2 = new Bike(); // Interface reference, Bike object
        v2.start();              // Bike's start
        v2.stop();               // Bike's stop
    }
}


🟢 Output:
Car started
Car stopped
Bike started
Bike stopped



🟩 Explanation:

Vehicle is an interface → defines methods but no body.
Car and Bike implement the interface → provide their own method bodies.
Using interface reference, you can call methods of any class implementing it.
This is abstraction because the user only sees start() and stop() without knowing how each vehicle starts or stops internally.


🟨 Key Points:

Interface achieves 100% abstraction.
Helps in polymorphism — same interface reference can point to different objects.
Makes code flexible, reusable, and easy to maintain.



Why interface is called 100% abstraction

In Java, an abstract class can have:
Abstract methods (no body) ✅
Concrete methods (with body) ❌
  → So abstraction is partial if some methods have body.


An interface in Java:

Before Java 8 → all methods are abstract by default, no method body allowed. ✅
From Java 8 → can have default and static methods, but regular methods still abstract.
      `
    },
    {
      id: 5,
      question: "5. Why is Java called platform-independent but not processor-independent?",
      answer: "",
      codeExample: `
1️⃣ Java is Platform-Independent

Platform-independent means:
You can write Java code once and run it anywhere (Windows, Linux, Mac, etc.) without changing the code.
How? → Because of Java Virtual Machine (JVM).


Step by step:

  You write Java source code → Hello.java
  Java compiler converts it into bytecode → Hello.class
  Bytecode is not machine code, but a standard code understood by JVM.
  JVM exists for all platforms (Windows, Linux, Mac).
  So the same bytecode runs on any platform using its JVM.
✅ That’s why Java is platform-independent → Write once, run anywhere (WORA).


2️⃣ Java is NOT Processor-Independent

Processor-independent would mean:
The same code runs on all types of processors (CPU hardware) without any translation.
But Java is NOT directly processor-independent because:
JVM translates bytecode to machine code specific to that CPU/processor at runtime.
Example: Windows JVM generates code for x86 CPU, Linux JVM generates for ARM CPU, etc.
So the bytecode is universal, but machine code execution depends on processor.


Simple Analogy:

  Platform-independent:
  Think of Java bytecode as a USB drive with movies → you can plug it into any computer with a media player (JVM) and watch.

  Processor-dependent:
  But each computer has a different CPU, so the media player (JVM) must translate the movie into instructions its CPU can understand.


✅ Short Exam Answer:

Java is platform-independent because bytecode can run on any operating system using JVM.
But it is not processor-independent because the JVM converts bytecode into machine code specific to the processor at runtime.
      `
    },
    {
      id: 6,
      question: "6. Explain JDK, JRE, JVM",
      answer: "",
      codeExample: `
1️⃣ JVM (Java Virtual Machine)

  JVM is a virtual machine that runs Java bytecode on any platform.
  It does not know Java source code, only bytecode (.class files).
  JVM is platform-dependent → each OS has its own JVM.

Responsibilities of JVM:
  Loads class files.
  Verifies bytecode.
  Executes bytecode.
Manages memory (Garbage Collection).

✅ Think of JVM as a player that runs Java bytecode on your computer.


2️⃣ JRE (Java Runtime Environment)

  JRE = JVM + Libraries + other files needed to run Java programs.
  You can run Java programs using JRE, but cannot compile Java source code.

Components of JRE:
  JVM (to run programs)
  Core libraries (java.lang, java.util, etc.)
  Supporting files

✅ Think of JRE as a ready-to-run Java environment for your programs.


3️⃣ JDK (Java Development Kit)

  JDK = JRE + Development Tools (compiler, debugger, etc.)
  You need JDK to write and compile Java programs.

JDK contains:
  JRE
  javac compiler (converts .java → .class)
  Tools like jar, javadoc, jdb

✅ Think of JDK as a complete toolkit to write, compile, and run Java programs.



Simple Diagram:
JDK
 └── JRE
      └── JVM

JVM → runs bytecode
JRE → JVM + libraries to run program
JDK → JRE + tools to develop program


Short Exam Answer:

  JVM: Executes Java bytecode on any platform (platform-dependent).
  JRE: Provides JVM + libraries to run Java programs.
  JDK: Full toolkit for Java development (JRE + compiler + tools).

table of difference:
______________________________________________________________________________________________________
| JVM                                    |  JRE                        | JDK                         |
|----------------------------------------|-----------------------------|-----------------------------|
| Runs Java bytecode                     | Environment to run Java     | Complete toolkit for Java   |
| Platform-dependent                     | Includes JVM and libraries  | Includes JRE and tools      |
| Does not include development tools     | Does not include compiler   | Includes Java compiler      |
| Cannot compile Java code               | Cannot compile Java code    | Can compile Java code       |
------------------------------------------------------------------------------------------------------

      `
    },
    {
      id: 7,
      question: "7. Difference between OOPs and POPs",
      answer: "",
      codeExample: `
1️⃣ Procedure-Oriented Programming (POP)

POP focuses on functions or procedures.
Program is divided into functions.
Data is usually global and can be accessed by any function.
Example languages: C, Pascal

Characteristics:
  Based on functions
  Data is not secure (global access)
  Code not easily reusable
  Hard to maintain for large programs


2️⃣ Object-Oriented Programming (OOP)

OOP focuses on objects.
Program is divided into classes and objects.
Data is encapsulated inside objects → more secure
Example languages: Java, C++, Python

Characteristics:
  Based on objects and classes
  Encapsulation, inheritance, polymorphism, abstraction
  Code is reusable and easy to maintain
  Better for large and complex programs


Difference Table (Easy Version)

| POP (Procedure-Oriented Programming) | OOP (Object-Oriented Programming)   |
| ------------------------------------ | ----------------------------------- |
| Focuses on functions/procedures      | Focuses on objects/classes          |
| Data is global and not secure        | Data is encapsulated and secure     |
| Code less reusable                   | Code more reusable                  |
| Hard to maintain large programs      | Easy to maintain large programs     |
| Example: C, Pascal                   | Example: Java, C++                  |

`
    },
    {
      id: 8,
      question: "8. What is Unicode and why is it used in Java",
      answer: "",
      codeExample: `
🟩 What is Unicode?

Unicode is a universal character encoding system used to represent all characters of all languages — letters, digits, symbols, emojis, etc.

Each character is given a unique number (code point) called a Unicode value.
Example:

'A' → U+0041
'अ' → U+0905
'你' → U+4F60


🟦 Why Unicode is used in Java

->Java is an international language — it’s used all over the world.
So it must support many languages (English, Hindi, Chinese, etc.).

->Before Unicode, programming languages (like C/C++) used ASCII, which only supports English (128 characters).

->Unicode supports more than 100,000 characters, covering almost every written language.

->Java uses Unicode internally for all char, String, and text processing, so your Java programs can handle any global text easily.

🟩 Example:

public class Main {
    public static void main(String[] args) {
        char ch1 = 'A';        // English letter
        char ch2 = '\u0905';   // Unicode for 'अ' (Hindi)
        System.out.println(ch1);
        System.out.println(ch2);
    }
}


🟢 Output:
A
अ


🟧 Short Exam Answer:

Unicode is a universal character encoding system that represents characters from all languages.
Java uses Unicode to support international text and make programs platform-independent for all languages.


`
    },
    {
      id: 9,
      question: "9. Explain widening and narrowing type casting.",
      answer: "",
      codeExample: `
🟩 Type Casting in Java

Type casting means converting one data type into another.
There are two types of type casting in Java:

1. Widening (Implicit) Casting
2. Narrowing (Explicit) Casting


🟦 1. Widening Type Casting (Implicit Casting)

➡️ Definition:
Widening means converting a smaller data type into a larger data type automatically.
This is done by Java itself (no extra code needed).

➡️ Reason:
There is no data loss because the larger type can store all values of the smaller type.

➡️ Example:

public class Main {
    public static void main(String[] args) {
        int num = 10;       // int = 4 bytes
        double d = num;     // automatic conversion (int → double)
        System.out.println(d);
    }
}

🟢 Output:
10.0



🟧 2. Narrowing Type Casting (Explicit Casting)

➡️ Definition:
Narrowing means converting a larger data type into a smaller data type manually.
You must write the cast operator — otherwise, Java gives an error.

➡️ Reason:
There is a risk of data loss because the smaller type cannot hold all values of the larger type.

➡️ Example:

public class Main {
    public static void main(String[] args) {
        double d = 10.75;     // double = 8 bytes
        int num = (int) d;    // manual conversion (double → int)
        System.out.println(num);
    }
}

🟢 Output:
10

This is called Narrowing or Explicit casting.
(Notice the decimal part .75 is lost)




🟩 Summary Table
| Widening Casting        | Narrowing Casting                |
| ----------------------- | -------------------------------- |
| Small → Large data type | Large → Small data type          |
| Done automatically      | Done manually using (type)       |
| No data loss            | Possible data loss               |
| Example: int → double   | Example: double → int            |



🧠 Short Oral Answer (for viva):

Widening is automatic conversion from smaller to larger type (no data loss).
Narrowing is manual conversion from larger to smaller type (may lose data).
`
    },
    {
      id: 10,
      question: "10. What are Wrapper Classes in Java? Explain with examples.",
      answer: "",
      codeExample: `
In Java, Wrapper Classes are used to convert primitive data types (like int, char, float) into objects.

➡️ In simple words:
Wrapper classes wrap (cover) primitive data types into objects so that they can be used in places where objects are required — like in collections (ArrayList, HashMap, etc.)


🟦 Why Wrapper Classes are Used

To use primitives as objects
To use Java Collection Framework (which only works with objects)
To use utility methods (like converting numbers to strings)
Supports Autoboxing and Unboxing


🟨 Primitive Types and Their Wrapper Classes
| Primitive Type | Wrapper Class |
| -------------- | ------------- |
| byte           | Byte          |
| short          | Short         |
| int            | Integer       |
| long           | Long          |
| float          | Float         |
| double         | Double        |
| char           | Character     |
| boolean        | Boolean       |


🟧 Example 1: Using Wrapper Class

public class Main {
    public static void main(String[] args) {
        int a = 10;                      // primitive type
        Integer obj = Integer.valueOf(a); // converting primitive to object
        System.out.println(obj);
    }
}


🟢 Output:
10

✅ Here, Integer is the wrapper class for int.



🟪 Example 2: Autoboxing and Unboxing

👉 Autoboxing:
Automatically converting primitive → object

👉 Unboxing:
Automatically converting object → primitive


public class Main {
    public static void main(String[] args) {
        int x = 5;
        Integer obj = x;    // Autoboxing
        int y = obj;        // Unboxing
        System.out.println(x + " " + obj + " " + y);
    }
}


🟢 Output:
5 5 5


🟩 Short Exam Answer:

Wrapper classes are used to convert primitive data types into objects.
They allow primitives to be used in collections and support features like autoboxing and unboxing.
Example: int → Integer, char → Character, boolean → Boolean.

`
    },
    {
      id: 11,
      question: "11. What are primitive and non-primitive data types in Java?",
      answer: "",
      codeExample: `
🟩 1. Primitive Data Types

➡️ Definition:
Primitive data types are basic or fundamental data types that are predefined by Java.
They store simple values — not objects.

➡️ There are 8 primitive data types in Java:
| Type      | Size            | Example                | Description                          |
| --------- | --------------- | ---------------------- | ------------------------------------ |
| byte      | 1 byte          | byte b = 10;           | Small integer values                 |
| short     | 2 bytes         | short s = 1000;        | Small integer range                  |
| int       | 4 bytes         | int a = 5000;          | Common integer type                  |
| long      | 8 bytes         | long l = 100000L;      | Large integer values                 |
| float     | 4 bytes         | float f = 5.5f;        | Decimal numbers (single precision)   |
| double    | 8 bytes         | double d = 10.55;      | Decimal numbers (double precision)   |
| char      | 2 bytes         | char c = 'A';          | Single character (Unicode supported) |
| boolean   | 1 bit (logical) | boolean flag = true;   | True/False values                    |

✅ Primitive types store actual values directly.


🟦 Example:

public class Main {
    public static void main(String[] args) {
        int num = 10;         // primitive type
        char ch = 'A';
        boolean isTrue = true;
        System.out.println(num + " " + ch + " " + isTrue);
    }
}


🟢 Output:
10 A true



🟨 2. Non-Primitive Data Types

➡️ Definition:
Non-primitive data types are created by the programmer and are based on classes.
They store references (addresses) of objects, not actual values.

➡️ Examples:

  String
  Array
  Class
  Interface
  Objects

✅ Non-primitive types can have methods, and their size is not fixed.


🟧 Example:

public class Main {
    public static void main(String[] args) {
        String name = "Raj";      // String (non-primitive)
        int[] numbers = {1, 2, 3}; // Array (non-primitive)
        System.out.println(name);
        System.out.println(numbers[0]);
    }
}


🟢 Output:
Raj
1


🟪 Difference Between Primitive and Non-Primitive Data Types
| Primitive Data Type                | Non-Primitive Data Type              |
| ---------------------------------- | ------------------------------------ |
| Predefined by Java                 | Created by programmer                |
| Stores actual value                | Stores reference (address)           |
| Size is fixed                      | Size is not fixed                    |
| No additional methods              | Have methods and properties          |
| Examples: int, char, boolean       | Examples: String, Array, Class       |

      `
    },
    {
      id: 12,
      question: "12. Explain Types of Variables in Java",
      answer: "",
      codeExample: `
🟩 Types of Variables in Java

In Java, there are three types of variables:

Instance Variables
Static Variables
Local Variables


🟩 1. Instance Variable

➡️ Definition:
An instance variable is a variable that belongs to an object.
Each object has its own copy of the instance variable.

➡️ Declared inside a class, but outside any method — without the static keyword.

🟦 Example:

public class Student {
    int rollNo;     // instance variable
    String name;    // instance variable

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.rollNo = 1;
        s1.name = "Raj";

        Student s2 = new Student();
        s2.rollNo = 2;
        s2.name = "Priya";

        System.out.println(s1.name + " - " + s1.rollNo);
        System.out.println(s2.name + " - " + s2.rollNo);
    }
}


🟢 Output:

Raj - 1
Priya - 2

✅ Each object (s1, s2) has its own separate copy of rollNo and name.


🟨 2. Static Variable

➡️ Definition:
A static variable is a variable that belongs to the class, not to any object.
All objects share the same copy of the static variable.

➡️ Declared using the static keyword inside the class.

🟧 Example:

public class Student {
    int rollNo;           // instance variable
    String name;          // instance variable
    static String college = "ABC College"; // static variable

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.rollNo = 1;
        s1.name = "Raj";

        Student s2 = new Student();
        s2.rollNo = 2;
        s2.name = "Priya";

        // Changing static variable through one object
        s2.college = "XYZ College";

        System.out.println(s1.name + " - " + s1.college);
        System.out.println(s2.name + " - " + s2.college);
    }
}


🟢 Output:
Raj - XYZ College
Priya - XYZ College

✅ Both objects share the same static variable, so the change reflects in both.


🧠 Short Oral Answer (for viva):

Instance variables are object-level variables, each object has its own copy.
Static variables are class-level variables shared by all objects.



🟧 3. Local Variable

➡️ Definition:
A local variable is declared inside a method, constructor, or block.
It is created when the method is called and destroyed when the method ends.

➡️ It is not accessible outside the method or block where it’s declared.
➡️ Must be initialized before use (no default value).

✅ Example:

public class Example {
    void show() {
        int num = 10;   // local variable
        System.out.println(num);
    }
}

📌 num exists only inside the show() method.




🟪 Difference Between Instance, Static, and Local Variables

| Instance Variable                         | Static Variable                              | Local Variable                                  |
| ------------------------------------------| ---------------------------------------------| ------------------------------------------------|
| Belongs to an object                      | Belongs to the class                         | Belongs to a method or block                    |
| Declared inside class but outside methods | Declared inside class using static keyword   | Declared inside a method, constructor, or block |
| Each object has its own copy              | Shared by all objects                        | Exists only while the method is running         |
| Stored in heap memory                     | Stored in method area (class area)           | Stored in stack memory                          |
| Can have a default value                  | Can have a default value                     | No default value (must initialize)              |
| Accessed using object name                | Accessed using class name                    | Accessed only within the same method            |




✅ Tip for exams:
Remember —

Instance → Object level
Static → Class level
Local → Method level
      `
    },
    {
      id: 13,
      question: "13. Explain 1D and 2D array with syntax",
      answer: "",
      codeExample: `
🟩 1. One-Dimensional (1D) Array

➡️ Definition:
A 1D array is a list of elements of the same data type, stored in a single row (one direction).

➡️ It is used to store multiple values in a single variable.

✅ Syntax:

dataType[] arrayName = new dataType[size];
                or
dataType arrayName[] = new dataType[size];


✅ Example:
public class Main {
    public static void main(String[] args) {
        int[] numbers = new int[5] = {10, 20, 30, 40, 50};   // declaring like same this numbers[0] = 10;
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
        
🟢 Output:
10
20
30
40
50


🟦 2. Two-Dimensional (2D) Array

➡️ Definition:
A 2D array is an array of arrays — it stores data in rows and columns (like a table or matrix).

➡️ It is used to represent tabular data.

✅ Syntax:

dataType[][] arrayName = new dataType[rows][columns];


✅ Example:
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {         // this line is same like "int[][] matrix = new int[][] {" java allows
            {1, 2, 3},                When you declare and initialize an array in the same line,
            {4, 5, 6},                Java lets you skip writing new and the data type — because it can infer both automatically.
            {7, 8, 9}
        };
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
  


🟪 Short Difference

| 1D Array                         | 2D Array                              |
| -------------------------------- | ------------------------------------- |
| Stores data in a single row      | Stores data in rows and columns       |
| Accessed using one index         | Accessed using two indexes            |
| Example: int[] a = new int[5];   | Example: int[][] a = new int[3][3];   |

      `
    },
    {
      id: 14,
      question: "14. Classify the types of operators in Java.",
      answer: "",
      codeExample: `
🟩 Operators in Java

➡️ Definition:
Operators are special symbols used to perform operations on variables and values.
Example: +, -, *, /, ==, &&, etc.


🟦 Types of Operators in Java

Java operators are mainly classified into 8 types:


| No.     | Type of Operator      | Description                             | Example                      |
| ------- | ----------------------| --------------------------------------- | ---------------------------- |
| 1       | Arithmetic Operators  | Used to perform mathematical operations | +, -, *, /, %                |
| 2       | Relational Operators  | Used to compare two values              | ==, !=, >, <, >=, <=         |
| 3       | Logical Operators     | Used to combine conditions              | &&, ||                       |
| 4       | Assignment Operators  | Used to assign values to variables      | =, +=, -=, *=, /=            |
| 5       | Unary Operators       | Works on a single operand               | ++, --, +, -, !              |
| 6       | Bitwise Operators     | Works on bits (0s and 1s)               | &,|, ^, ~, <<, >>, >>>       |
| 7       | Ternary Operator      | Used as a short form of if-else         | condition ? value1 : value2  |
| 8       | Type Casting Operator | Used to convert data type               | (int), (double)              |


🟪 Short Oral Answer (for viva):

In Java, operators are symbols that perform operations on variables.
There are 8 types: Arithmetic, Relational, Logical, Assignment, Unary, Bitwise, Ternary, and Type Casting.


-----------------------------------------------------------------------------------


🟩 1. Ternary Operator (?:)

Definition:
A ternary operator is a shortcut for if-else.
It has three parts → condition ? value_if_true : value_if_false

Syntax:
result = (condition) ? value1 : value2;


Example:

public class Main {
    public static void main(String[] args) {
        int a = 10, b = 5;
        int max = (a > b) ? a : b; // if a > b then max = a else max = b
        System.out.println(max);
    }
}


🟢 Output:
10


-------------------------


| Operator | Usage         | Behavior                                                                    |
| -------- | ------------- | --------------------------------------------------------------------------- |
| &        | Single &      | Checks both conditions always (no shortcut)                                 |
| &&       | Double &&     | Short-circuits → if first condition is false, second is not checked         |


same for | and || operators

Example:

int a = 5, b = 10;

// & operator
if(a > 10 & b++ > 5){
    System.out.println("True");
}
System.out.println(b); // b = 11 (incremented)

// && operator
b = 10;
if(a > 10 && b++ > 5){
    System.out.println("True");
}
System.out.println(b); // b = 10 (not incremented because first condition false)


-------------------------


^ (Bitwise XOR) Operator

Definition:
The ^ operator compares each bit of two numbers.
If the bits are different, it gives 1; if they are the same, it gives 0.

Rule:
      0 ^ 0 = 0
      0 ^ 1 = 1
      1 ^ 0 = 1
      1 ^ 1 = 0


example:
public class Main {
    public static void main(String[] args) {
        int a = 5;  // 0101 in binary
        int b = 3;  // 0011 in binary
        int c = a ^ b; // XOR
        System.out.println(c);
    }
}


🟢 Output:

6


Explanation:

  0101 (5)
^ 0011 (3)
  ----
  0110 → 6


      `
    },
    {
      id: 15,
      question: "15. Explain thread and multi threading",
      answer: "",
      codeExample: `
🟩 1. Thread

A thread is the smallest unit of a program that can run independently.
Think of it as one task or one path of execution.

Example (short & simple):

class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();  // start thread
    }
}


Output:
Thread is running

✅ Explanation: start() begins the thread, which runs the run() method.



🟦 2. Multithreading

Multithreading means running many threads at the same time.
Think of it as doing multiple tasks together.

Example (short & simple):

class MyThread extends Thread {
    String name;
    MyThread(String name) { this.name = name; }
    public void run() {
        System.out.println(name + " is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread 1");
        MyThread t2 = new MyThread("Thread 2");
        t1.start();
        t2.start();
    }
}


Output (order may vary):
Thread 1 is running
Thread 2 is running


✅ Explanation: Two threads run at the same time, so the program can do two tasks together.


🟪 Easy Difference Table
| Thread                     | Multithreading                     |
| -------------------------- | -----------------------------------|
| Smallest unit of a program | Many threads running together      |
| Runs one task              | Runs multiple tasks simultaneously |
| Can run alone              | Requires 2 or more threads         |




      `
    },
    {
      id: 16,
      question: "16. Explain control statements (decision + looping)",
      answer: "",
      codeExample: `
Control statements are used to control the flow of a program — which code runs, how many times, and when to stop.

Types of Control Statements:

  1.  Decision Making Statements
  2.  Looping Statements
  3.  Jump Statements


🟦 1. Decision Making Statements

Used to make decisions based on conditions.


if statement: Executes a block if the condition is true.
if-else statement: Chooses between two blocks depending on the condition.
if-else-if ladder: Checks multiple conditions one by one.
switch statement: Selects a block among many based on a value.


(a) if 

int num = 10;
if(num > 0) {
    System.out.println("Number is positive");
}


(b) if-else statement

int num = -5;
if(num > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Negative");
}


(c) if-else-if ladder

int marks = 75;
if(marks >= 90) {
    System.out.println("Grade A");
} else if(marks >= 75) {
    System.out.println("Grade B");
} else if(marks >= 50) {
    System.out.println("Grade C");
} else {
    System.out.println("Fail");
}


(d) switch statement

int day = 3;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Other day");
}

✅ Tips: Use break to exit switch, default is optional.


-----------------------------------


🟨 2. Looping Statements

Used to repeat a block of code multiple times.

for loop: Executes a block for a fixed number of times.
while loop: Executes a block while a condition is true.
do-while loop: Executes a block at least once, then checks the condition.

(a) for loop

for(int i = 1; i <= 5; i++) {
    System.out.println("i = " + i);
}


(b) while loop

int i = 1;
while(i <= 5) {
    System.out.println("i = " + i);
    i++;
}


(c) do-while loop

int i = 1;
do {
    System.out.println("i = " + i);
    i++;
} while(i <= 5);


The do-while loop is called an exit-controlled loop because the condition is checked after executing the loop body, 
so the loop runs at least once, even if the condition is false.


-----------------------------------


🟧 3. Jump Statements

Used to change the normal flow of loops or methods.

break: Exits the current loop or switch immediately.
continue: Skips the current iteration and goes to the next iteration.
return: Exits from the current method immediately.

(a) break

Exits the current loop or switch immediately.

for(int i = 1; i <= 5; i++) {
    if(i == 3) break;
    System.out.println(i);
}


Output:

1
2


(b) continue

Skips the current iteration and goes to the next iteration.

for(int i = 1; i <= 5; i++) {
    if(i == 3) continue;
    System.out.println(i);
}


Output:

1
2
4
5


(c) return

Exits from the current method immediately.

public static void main(String[] args) {
    System.out.println("Start");
    return;
    // System.out.println("End"); // This will not execute
}


Output:

Start
`
    },
    {
      id: 17,
      question: "17. Program: Menu-driven calculator using switch & do-while loop",
      answer: "",
      codeExample: `
import java.util.Scanner;  // for taking user input

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;
        double num1, num2, result;

        do {
            // Display Menu
            System.out.println("\n--- Calculator Menu ---");
            System.out.println("1. Addition");
            System.out.println("2. Subtraction");
            System.out.println("3. Multiplication");
            System.out.println("4. Division");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch(choice) {
                case 1:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();   // user input
                    num2 = sc.nextDouble();
                    result = num1 + num2;
                    System.out.println("Result = " + result);
                    break;

                case 2:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();
                    num2 = sc.nextDouble();
                    result = num1 - num2;
                    System.out.println("Result = " + result);
                    break;

                case 3:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();
                    num2 = sc.nextDouble();
                    result = num1 * num2;
                    System.out.println("Result = " + result);
                    break;

                case 4:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();
                    num2 = sc.nextDouble();
                    if(num2 != 0)
                        System.out.println("Result = " + (num1 / num2));
                    else
                        System.out.println("Cannot divide by zero!");
                    break;

                case 5:
                    System.out.println("Exiting Calculator...");
                    break;

                default:
                    System.out.println("Invalid choice! Please try again.");
            }

        } while(choice != 5); // exit when user selects 5
    }
}




Sample Output:

--- Calculator Menu ---
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
Enter your choice: 1
Enter two numbers: 5 3
Result = 8.0

--- Calculator Menu ---
Enter your choice: 5
Exiting Calculator...

`
    },
    {
      id: 18,
      question: "18. Explain the uses of super keyword with examples.",
      answer: "",
      codeExample: `
🟩 What is super keyword?

➡️ The super keyword in Java is used to refer to the parent (superclass) of the current object.
It helps to access parent class members (variables, methods, and constructors) when they are hidden or overridden by the child class.

🟦 Uses of super keyword

The super keyword is mainly used in three ways:


🟢 1. To access parent class variables

If the child class has a variable with the same name as the parent class,
then super helps to access the parent class variable.

Example:

class Parent {
    int num = 100;
}

class Child extends Parent {
    int num = 200;

    void show() {
        System.out.println("Child num = " + num);
        System.out.println("Parent num = " + super.num); // using super
    }
}

public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.show();
    }
}


Output:

Child num = 200
Parent num = 100


✅ Explanation:
super.num refers to the variable num in the Parent class.


🟢 2. To call parent class method

When a child class overrides a method of its parent,
super can be used to call the parent class’s version of that method.

Example:

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
        super.sound(); // call parent method
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
    }
}


Output:

Dog barks
Animal makes sound


✅ Explanation:
super.sound() calls the sound() method from the Animal (parent) class.


🟢 3. To call parent class constructor

The super() statement is used to call the parent class constructor from the child class constructor.
It must be the first statement inside the child class constructor.

Example:

class Animal {
    Animal() {
        System.out.println("Animal constructor called");
    }
}

class Dog extends Animal {
    Dog() {
        super();  // calls parent constructor
        System.out.println("Dog constructor called");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
    }
}


Output:

Animal constructor called
Dog constructor called


✅ Explanation:
super() calls the parent constructor before executing the child’s constructor.

🟪 Summary Table
| Use of super   | Purpose                       | Example                  |
| ---------------| ----------------------------- | ------------------------ |
| super.variable | Access parent class variable  | super.num                |
| super.method() | Call parent class method      | super.show()             |
| super()        | Call parent class constructor | inside child constructor |



🧠 Short Exam Answer:

The super keyword in Java is used to refer to the parent class.
It can be used to access parent class variables, methods, and constructors that are hidden or overridden by the child class.      
`
    },
    {
      id: 19,
      question: "19. Difference between static and dynamic binding.",
      answer: "",
      codeExample: `
🟩 What is Binding?

➡️ Binding means linking a method call to the method body.
In other words, when Java decides which method to call, that process is called binding.

🟦 1. Static Binding (Early Binding)

  Happens at compile time.
  The method call is fixed (decided) when the code is compiled.
  Used for static, private, and final methods because they cannot be overridden.

Example:

class Test {
    static void display() {   // static method
        System.out.println("Static Binding Example");
    }

    public static void main(String[] args) {
        Test.display();  // resolved at compile time
    }
}


✅ Explanation:
The compiler already knows which display() method to call — that’s static binding.


🟨 2. Dynamic Binding (Late Binding)

  Happens at runtime.
  The method to be called is decided during program execution.
  Used when method overriding occurs (inheritance).

Example:

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();  // parent reference, child object
        a.sound();  // resolved at runtime
    }
}


Output:

Dog barks


✅ Explanation:
At compile time, the compiler only knows a is of type Animal.
At runtime, it checks the actual object (Dog) and calls Dog’s sound() → dynamic binding.

🟪 Difference Table: Static vs Dynamic Binding
| Static Binding                                | Dynamic Binding                            |
| ----------------------------------------------|--------------------------------------------|
| Happens at compile time                       | Happens at runtime                         |
| Works with static, private, and final methods | Works with overridden (non-static) methods |
| Method call is decided by the compiler        | Method call is decided by the JVM          |
| Faster execution                              | Slightly slower execution                  |
| Example: Method Overloading                   | Example: Method Overriding                 |


🧠 Short Exam Answer:

In Java, static binding happens at compile time for static or final methods,
while dynamic binding happens at runtime when a method is overridden in a subclass.
      `
    },
    {
      id: 20,
      question: "20. What is used of static keyword",
      answer: "",
      codeExample: `
🟩 What is static keyword in Java?

➡️ The static keyword is used in Java to create members (variables, methods, or blocks) that belong to the class, not to any specific object.

That means:
  You can access static members without creating an object of the class.


🟦 Uses of static keyword

The static keyword can be used with:

Variables
Methods
Blocks
Nested classes

Let’s see each one 👇


🟢 1. static variable (Class variable)

A variable that is shared by all objects of the class.
Only one copy of the variable exists in memory.

Example:

class Student {
    static String college = "ABC College";  // shared by all
    String name;

    Student(String name) {
        this.name = name;
    }

    void show() {
        System.out.println(name + " - " + college);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Raj");
        Student s2 = new Student("Jatin");

        s1.show();
        s2.show();
    }
}


Output:

Raj - ABC College
Jatin - ABC College


✅ Explanation:
Both students share the same college because it’s static.


🟢 2. static method

Can be called without creating an object.
Can only access static data directly.

Example:

class MathOperation {
    static void add(int a, int b) {   // static method
        System.out.println("Sum = " + (a + b));
    }

    public static void main(String[] args) {
        MathOperation.add(5, 3);  // no object needed
    }
}


Output:

Sum = 8


✅ Explanation:
The method add() is static, so it’s called directly using the class name.


🟢 3. static block

Used to initialize static variables.
Runs once when the class is loaded into memory (before main() method).

Example:

class Demo {
    static int x;

    static {
        x = 10;
        System.out.println("Static block executed");
    }

    public static void main(String[] args) {
        System.out.println("Main method executed");
        System.out.println("x = " + x);
    }
}


Output:

Static block executed
Main method executed
x = 10


✅ Explanation:
Static block runs first, before the main method.


🟢 4. static nested class

A class declared inside another class using static.
It can be accessed without creating an object of the outer class.

Example:

class Outer {
    static class Inner {
        void show() {
            System.out.println("Static Nested Class");
        }
    }

    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner();
        obj.show();
    }
}


Output:

Static Nested Class


🟪 Summary Table
| Use of static       | Meaning                                    | Access             |
| ------------------- | ------------------------------------------ | ------------------ |
| static variable     | Shared by all objects                      | ClassName.variable |
| static method       | Can be called without object               | ClassName.method() |
| static block        | Runs once before main()                    | Automatically      |
| static nested class | Inner class that doesn’t need outer object | ClassName.Inner    |


🧠 Short Exam Answer:

The static keyword in Java is used to make variables, methods, and blocks belong to the class instead of objects.
It allows memory sharing and can be accessed without creating an object.
      `
    },
    {
      id: 21,
      question: "21. Explain final keyword with all three uses.",
      answer: "",
      codeExample: `
.

🟩 What is final keyword in Java?

➡️ The final keyword in Java is used to make something unchangeable (fixed).
It can be applied to variables, methods, and classes.


🟦 1. final variable → Value cannot be changed

Once a final variable is assigned a value,
you cannot change (modify) it again.


Example:

class Example1 {
    public static void main(String[] args) {
        final int x = 10;
        System.out.println("x = " + x);

        // x = 20; ❌ Error – cannot change final variable
    }
}


✅ Explanation:
final variable acts like a constant — value cannot be reassigned.


🟦 2. final method → Cannot be overridden

If a method is declared as final,
it cannot be overridden in a subclass.


Example:

class Parent {
    final void show() {
        System.out.println("Parent class show method");
    }
}

class Child extends Parent {
    // void show() { } ❌ Error – cannot override final method
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();  // calls parent method
    }
}


✅ Explanation:
The method show() is final, so no child class can change its behavior.


🟦 3. final class → Cannot be inherited

If a class is declared as final,
no other class can extend (inherit) it.


Example:

final class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

// class Dog extends Animal { } ❌ Error – cannot inherit final class

public class Main {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sound();
    }
}


✅ Explanation:
The Animal class is final, so it cannot have any subclass.


🟪 Summary Table
| Use of final   | Applied To     | Meaning                 | Example / Effect     |
| ---------------| -------------- | ----------------------- | -------------------- |
| final variable | Variable       | Value cannot be changed | Constant value       |
| final method   | Method         | Cannot be overridden    | Stops overriding     |
| final class    | Class          | Cannot be inherited     | Stops inheritance    |



🧠 Short Exam Answer:

The final keyword in Java is used to make data or behavior fixed.

final variable: value cannot change
final method: cannot be overridden
final class: cannot be inherited
      `
    },
    {
      id: 22,
      question: "22. What are the methods of Object class?",
      answer: "",
      codeExample: `
🟩 What is Object Class in Java?

➡️ The Object class is the parent class of all classes in Java.
Every class you create automatically inherits from Object (directly or indirectly).

So, all Java classes can use the methods defined in the Object class.


🟪 Summary Table
| Method Name        | Purpose / Use                    |
| ------------------ |----------------------------------|
| toString()         | Returns string representation    |
| equals(Object obj) | Compares two objects             |
| hashCode()         | Returns hash value of object     |
| clone()            | Creates duplicate object         |
| finalize()         | Called before object destruction |
| getClass()         | Returns class information        |
| wait()             | Thread waits temporarily         |
| notify()           | Wakes one waiting thread         |
| notifyAll()        | Wakes all waiting threads        |


-------------------------------------------------------------------------------


🟦 1. toString() → Gives text of object

🟢 Use:
It returns a text (string) that describes the object.
By default, it gives a memory address, but we can change it.

Example:

class Student {
    String name = "Raj";
    int age = 20;

    public String toString() {
        return name + " is " + age + " years old";
    }

    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.toString());
    }
}


Output:
Raj is 20 years old


✅ Meaning:
toString() helps show object data in a readable way.


🟦 2. equals() → Checks if two objects are same

🟢 Use:
It checks if two objects are equal.
But by default, it only checks if they are in the same memory location.

Example:

class Demo {
    int id;
    Demo(int id) {
        this.id = id;
    }

    public static void main(String[] args) {
        Demo d1 = new Demo(1);
        Demo d2 = new Demo(1);
        System.out.println(d1.equals(d2)); // false
    }
}


Output:
false


✅ Meaning:
Even though both objects have same value, they are different in memory, so result is false.


🟦 3. hashCode() → Gives a number for object

🟢 Use:
It gives a unique number (called hash code) for every object.
Used in HashMap, HashSet, etc.

Example:

class Test {
    public static void main(String[] args) {
        String s = "Hello";
        System.out.println(s.hashCode());
    }
}


Output:
69609650


✅ Meaning:
This number helps Java find objects faster in memory.


🟦 4. getClass() → Tells which class the object is from

🟢 Use:
It tells the class name of the object at runtime.

Example:

class Example {
    public static void main(String[] args) {
        String s = "Java";
        System.out.println(s.getClass());
    }
}


Output:
class java.lang.String


✅ Meaning:
getClass() helps Java know which class the object belongs to.


🟦 5. clone() → Makes a copy of the object

🟢 Use:
It copies one object into another.

Example:

class Student implements Cloneable {
    int id = 1;
    String name = "Raj";

    public static void main(String[] args) throws CloneNotSupportedException {
        Student s1 = new Student();
        Student s2 = (Student) s1.clone(); // copy created
        System.out.println(s2.id + " " + s2.name);
    }
}


Output:
1 Raj


✅ Meaning:
clone() creates a duplicate object with the same data.


      `
    },
    {
      id: 23,
      question: "23. Explain the steps to create and use a user-defined package.",
      answer: "",
      codeExample: `
🟩 What is a Package in Java?

👉 A package in Java is a folder (group) that contains related classes, interfaces, and sub-packages.

Simple meaning:
Packages are used to organize classes and avoid name conflicts.

🟦 Types of Packages

    Built-in packages – already available (e.g. java.util, java.io)
    User-defined packages – created by the programmer (👉 you)


🟢 Steps to Create and Use a User-Defined Package

Let’s go step-by-step 👇



🧩 Step 1: Create a Package
👉 Use the package keyword at the top of your Java file.


Example (save as MyClass.java):

package mypack;  // step 1: create package

public class MyClass {
    public void show() {
        System.out.println("Hello from MyClass inside mypack package!");
    }
}


✅ Explanation:

The package name is mypack.
The class MyClass belongs to that package.

🗂️ Save this file inside a folder named mypack.

mypack/
   └── MyClass.java


   
🧩 Step 2: Compile the Class

Open Command Prompt (CMD) and go to the folder where your mypack folder is saved.

Then run:
    javac -d . MyClass.java


✅ Explanation:

-d . tells Java to put the .class file in the correct package folder.
After compiling, you’ll get:

    mypack/MyClass.class



🧩 Step 3: Use the Package in Another Program
Now create a new Java file in the same directory, but not inside the package folder.


Example (save as TestPackage.java):

import mypack.MyClass;  // step 3: import package

class TestPackage {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.show();
    }
}



🧩 Step 4: Compile and Run

Compile:
    javac TestPackage.java


Run:
    java TestPackage


Output:
    Hello from MyClass inside mypack package!


✅ It worked! You successfully created and used a user-defined package.

🟪 Summary Table
| Step     | Action                          | Command / Example       |
|----------|---------------------------------|-------------------------|
| 1        | Create a package                | package mypack;         |
| 2        | Save in a folder with same name | mypack/MyClass.java     |
| 3        | Compile with package path       | javac -d . MyClass.java |
| 4        | Import and use in another file  | import mypack.MyClass;  |
| 5        | Run the program                 | java TestPackage        |


🧠 Short Exam Answer:

To create and use a user-defined package in Java:

Declare it using package packagename;.
Save the file in a folder with the same name.
Compile using javac -d . filename.java.
Import it using import packagename.ClassName;.
Use the class in your main program.



------------------------------------------------------------------------------

java.util

java.util is the utility toolbox of Java — it provides all essential classes for data storage, input, 
date/time, random numbers, and collection handling.

| Area              | Use                             |
| ----------------- | --------------------------------|
| Data storage      | ArrayList, HashMap, Set, etc.   |
| Input handling    | Scanner, StringTokenizer        |
| Randomization     | Random                          |
| Date/time         | Date, Calendar                  |
| Sorting/searching | Collections class               |
| Utilities         | Objects, Optional, Formatter    |



java.lang

This package is always imported by default in every Java program.

It contains all the core classes that you use all the time — without needing import.

💡 Common classes from java.lang:

| Class                              | Purpose                               |
| -----------------------------------| ------------------------------------- |
| Object                             | Base class for all classes            |
| String                             | Text handling                         |
| System                             | Input/output (System.out.println())   |
| Math                               | Math functions like sqrt(), pow()     |
| Thread                             | Multithreading                        |
| Exception                          | Exception handling                    |
| Integer, Double, Boolean, etc.     | Wrapper classes for primitive types   |
| Runtime                            | Interact with JVM at runtime          |



| Package                 | Auto Imported | Description                                         |
| ------------------------| --------------| --------------------------------------------------- |
| java.lang               | ✅ Yes       | Basic language classes (String, System, Math, etc.) |
| java.util               | ❌ No        | Collections, Scanner, Random, etc.                  |
| java.io                 | ❌ No        | Input/output                                        |
| java.net                | ❌ No        | Networking                                          |
| java.sql                | ❌ No        | Database connectivity                               |
| java.awt, javax.swing   | ❌ No        | GUI programming                                     |


      `
    },
    {
      id: 24,
      question: "24. Differentiate between == and equals() method.",
      answer: "",
      codeExample: `
The == operator checks whether two references point to the same object in memory,
while the equals() method checks whether two objects have the same content (value).


Example (using ==):
String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);   // false



Example (using equals()):
String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1.equals(s2));   // true


🟪 Summary Table
| Basis              | == Operator                      | equals() Method           |
| -------------------| ---------------------------------| --------------------------|
| Type               | Operator                         | Method from Object class  |
| Use                | Compares memory address          | Compares values (content) |
| Used for           | Both primitives & objects        | Only objects              |
| Returns true       | If both refer to the same object | If both have same content |
| Can be overridden? | ❌ No                            | ✅ Yes                   |
| Example Output     | s1 == s2 → false                 | s1.equals(s2) → true      |



|   Operator   |   Used In                          |   Meaning                                                          |
| ------------ | -----------------------------------| ------------------------------------------------------------------ |
| ==           | Java                               | Compares values (for primitives) or memory addresses (for objects) |
| equals()     | Java                               | Compares contents (object values)                                  |
| ===          | ❌ Not in Java (✅ in JavaScript) | Strictly compares value and type                                   |

`
    },
    {
      id: 25,
      question: "25. What is the importance of -d option while compiling?",
      answer: "",
      codeExample: `
🟩 What is -d option in Java?

When we compile a Java program using the javac command,
the -d option is used to specify the destination folder
where the .class files (bytecode) should be stored.

🧠 Meaning:

-d stands for destination directory.


🧩 Syntax:
    javac -d <folder_name> <filename>.java


✅ Example:

Suppose your file is MyProgram.java, and inside it, you declared:

package mypackage;
public class MyProgram {
    public static void main(String[] args) {
        System.out.println("Hello Package!");
    }
}


Now, compile it like this:

javac -d . MyProgram.java


📘 Explanation:

    javac → Java compiler
    -d . → tells the compiler to create the package folder (mypackage) in the current directory (.)
    MyProgram.java → source file

After compiling, Java will automatically create this folder structure:


mypackage/
   MyProgram.class


⚡ Without -d

    If you don’t use -d, the .class file will be created in the same folder as the .java file —
    and your package structure won’t be created properly.

✅ Short Exam Answer:

    The -d option in Java is used to specify the destination directory for the generated .class files.
    It ensures that the package structure is created properly according to the package declaration in the source file.
      `
    },
    {
      id: 26,
      question: "26. Explain hierarchy of exceptions in Java.",
      answer: "",
      codeExample: `
🟩 Hierarchy of Exceptions in Java

In Java, all exceptions and errors come under one big class called Throwable.
It is the superclass of everything that can be thrown using throw or caught using catch.

🧠 Main Hierarchy Structure:

Object
   └── Throwable
         ├── Exception
         │      ├── Checked Exceptions
         │      │     ├── IOException
         │      │     ├── SQLException
         │      │     └── ClassNotFoundException
         │      └── Unchecked Exceptions (Runtime)
         │            ├── ArithmeticException
         │            ├── NullPointerException
         │            └── ArrayIndexOutOfBoundsException
         └── Error
                ├── OutOfMemoryError
                ├── StackOverflowError
                └── VirtualMachineError



🧩 Explanation of Each Level
| Class                         | Description                                                                  | Examples                                  |
| ------------------------------| -----------------------------------------------------------------------------| ----------------------------------------- |
| Throwable                     | The parent class of all errors and exceptions.                               | —                                         |
| Exception                     | Problems that a program can handle or recover from.                          | IOException, SQLException                 |
| Error                         | Serious problems that occur in the JVM; cannot be handled by the program.    | OutOfMemoryError, StackOverflowError      |
| Checked Exception             | Checked at compile time. You must handle them using try-catch or throws.     | IOException, SQLException                 |
| Unchecked Exception (Runtime) | Checked at runtime. No need to handle them compulsorily.                     | ArithmeticException, NullPointerException |


✅ Simple Example

public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;   // This causes ArithmeticException
        } 
        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}


Output:
Cannot divide by zero!


🧠 Short Exam Answer:

In Java, all exceptions and errors are subclasses of the Throwable class.
It has two main branches:

    Exception (for recoverable problems)
    Error (for serious, unrecoverable problems).

Exceptions are further divided into Checked and Unchecked exceptions.
Cannot divide by zero!


      `
    },
    {
      id: 27,
      question: "27. Difference between checked and unchecked exceptions.",
      answer: "",
      codeExample: `
🟩 Difference Between Checked and Unchecked Exceptions
| Checked Exception                                                 | Unchecked Exception                                                                |
| ------------------------------------------------------------------| -----------------------------------------------------------------------------------|
| Checked at compile time                                           | Checked at runtime                                                                 |
| Must be handled using try-catch or throws keyword                 | Not mandatory to handle                                                            |
| Occurs due to external reasons (like file missing, network error) | Occurs due to programming mistakes                                                 |
| Subclasses of Exception (but not RuntimeException)                | Subclasses of RuntimeException                                                     |
| Example: IOException, SQLException, ClassNotFoundException        | Example: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException |



🧩 Example of Checked Exception
import java.io.*;

class CheckedExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("data.txt"); // File might not exist
        } catch (IOException e) {
            System.out.println("File not found!");
        }
    }
}


🟢 Explanation:
Here, IOException is a checked exception, because the compiler forces you to handle it.


--------------------------------------

🧩 Example of Unchecked Exception
class UncheckedExample {
    public static void main(String[] args) {
        int a = 10 / 0; // Causes ArithmeticException
        System.out.println(a);
    }
}


🟢 Explanation:
Here, ArithmeticException is an unchecked exception, because it occurs during runtime, and handling is optional.



✅ Short Exam Answer:

    Checked exceptions are checked at compile time and must be handled.
    Unchecked exceptions are checked at runtime and handling them is optional.

      `
    },
    {
      id: 28,
      question: "28. Explain try-catch-finally with example.",
      answer: "",
      codeExample: `
🟩 try-catch-finally in Java

These are used for exception handling — to manage runtime errors so that the program doesn’t crash.


🧠 1️⃣ try block

The code that might throw an exception is written inside the try block.

Only one try block is allowed per set.

try {
    // risky code
}


🧠 2️⃣ catch block

The catch block is used to handle the exception thrown by the try block.

You can have multiple catch blocks for different exceptions.

catch (ExceptionType e) {
    // handling code
}


🧠 3️⃣ finally block

The finally block is used to execute code no matter what happens —
whether an exception occurs or not.

Commonly used for closing files, database connections, etc.

finally {
    // code that always runs
}


✅ Full Example:
public class TryCatchFinallyExample {
    public static void main(String[] args) {
        try {
            int a = 10 / 0; // risky code (will cause ArithmeticException)
            System.out.println("This line will not run.");
        } 
        catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        } 
        finally {
            System.out.println("Finally block always executes.");
        }
        System.out.println("Program continues normally...");
    }
}

🧩 Output:
Error: Cannot divide by zero!
Finally block always executes.
Program continues normally...


🧠 Explanation:

The code inside try throws an exception (10 / 0).
The catch block handles it.
The finally block runs no matter what, even if there was an exception.
The program doesn’t crash — it continues to run smoothly.



✅ Short Exam Answer:

    The try-catch-finally block is used for exception handling.
    try contains risky code.
    catch handles exceptions.
    finally always executes (used for cleanup).


-----------------------------------------------------------------------

Can we use nested try-catch blocks? Give a real-world example.


💡 What is a Nested try-catch?

A nested try-catch means:
➡️ A try block inside another try block.

You use it when one part of your code (inside a bigger risky operation) also has its own smaller risky part that needs separate error handling.


🔧 Syntax
try {
    // outer risky code

    try {
        // inner risky code
    } catch (Exception e1) {
        // inner catch block
    }

} catch (Exception e2) {
    // outer catch block
}


🌍 Real-World Example

Imagine a program that reads a file and then parses a number inside it.
Reading a file can cause a FileNotFoundException.
Converting a string to an integer can cause a NumberFormatException.
You can handle both with nested try-catch 👇


✅ Example Code

import java.io.*;
import java.util.*;

public class NestedTryCatchExample {
    public static void main(String[] args) {
        try {
            // Outer try: risky file operation
            File file = new File("data.txt");
            Scanner sc = new Scanner(file); // might throw FileNotFoundException

            try {
                // Inner try: risky number conversion
                String str = sc.nextLine();  // read first line
                int number = Integer.parseInt(str); // might throw NumberFormatException
                System.out.println("Number is: " + number);
            } 
            catch (NumberFormatException e) {
                System.out.println("⚠️ Invalid number format in file!");
            }

            sc.close();
        } 
        catch (FileNotFoundException e) {
            System.out.println("❌ File not found!");
        }

        System.out.println("Program continues...");
    }
}


🧠 Output Examples
Case 1: File doesn’t exist
❌ File not found!
Program continues...

Case 2: File exists but content = "abc"
⚠️ Invalid number format in file!
Program continues...

Case 3: File exists and content = "123"
Number is: 123
Program continues...
      `
    },
    {
      id: 29,
      question: "29. Difference between throw and throws.",
      answer: "",
      codeExample: `
🟩 Difference Between throw and throws in Java

| throw                                            | throws                                                |
| -------------------------------------------------| ------------------------------------------------------|
| Used to actually throw an exception.             | Used to declare that a method may throw an exception. |
| Used inside a method or block.                   | Used in method declaration/signature.                 |
| Can throw only one exception at a time.          | Can declare multiple exceptions separated by commas.  |
| Followed by an object (instance) of Exception.   | Followed by class names of exceptions.                |
| Example: throw new ArithmeticException("Error"); | Example: void readFile() throws IOException           |
| Used for manually throwing exceptions.           | Used to inform the caller about possible exceptions.  |



✅ Example of throw:

public class ThrowExample {
    public static void main(String[] args) {
        int age = 15;
        if (age < 18) {
            throw new ArithmeticException("Not eligible to vote!");
        } else {
            System.out.println("You can vote!");
        }
    }
}


🟢 Explanation:
Here we used throw to manually generate an exception if the condition is not met.



✅ Example of throws:

import java.io.*;

class ThrowsExample {
    void readFile() throws IOException {
        FileReader file = new FileReader("data.txt"); // may cause IOException
    }

    public static void main(String[] args) {
        ThrowsExample obj = new ThrowsExample();
        try {
            obj.readFile(); // handle the exception
        } catch (IOException e) {
            System.out.println("File not found!");
        }
    }
}


🟢 Explanation:
Here, throws is used in the method declaration to tell the compiler
that this method might throw an IOException.



🧠 Short Exam Answer:

throw is used to manually throw an exception,
while throws is used to declare that a method might throw an exception.

`
    },
    {
      id: 30,
      question: "30. Explain Collection Framework architecture.",
      answer: "",
      codeExample: `
🟩 What is the Collection Framework?

The Java Collection Framework (JCF) is a set of classes and interfaces that help store and manage groups of objects efficiently.

It provides ready-made data structures like:
    List
    Set
    Queue
    Map


🧩 Main Interfaces in Collection Framework

At the top of the hierarchy, there are two main parts:

Iterable
   ↓
 Collection
   ↓
 ├── List
 ├── Set
 └── Queue

Map (separate hierarchy)



🧠 1️⃣ Iterable (root interface)

    The parent of all collection interfaces.
    Provides the ability to iterate (loop) through elements.
    Contains one main method: iterator().


🧠 2️⃣ Collection Interface

    Extends Iterable
    It is the root interface of the Collection hierarchy.
    Defines basic methods like add(), remove(), size(), clear().


🧠 3️⃣ List Interface

    Ordered collection (elements are stored in sequence)
    Allows duplicate elements
    Elements can be accessed using index


    Common classes:

        ArrayList
        LinkedList
        Vector
        Stack

🧩 Example:
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");


🧠 4️⃣ Set Interface

    Unordered collection
    Does not allow duplicates

    Common classes:

        HashSet
        LinkedHashSet
        TreeSet

🧩 Example:
Set<Integer> set = new HashSet<>();
set.add(10);
set.add(20);


🧠 5️⃣ Queue Interface

    Used to store elements in FIFO (First In, First Out) order.
    Commonly used in scheduling and buffering.

    Common classes:

        PriorityQueue
        LinkedList

🧩 Example:
Queue<String> q = new LinkedList<>();
q.add("Task1");
q.add("Task2");



🧠 6️⃣ Map Interface (Separate Hierarchy)

    Stores data in key-value pairs.
    Keys are unique, but values can be duplicated.

    Common classes:

        HashMap
        LinkedHashMap
        TreeMap
        Hashtable

🧩 Example:
Map<Integer, String> map = new HashMap<>();
map.put(1, "Raj");
map.put(2, "Jatin");



🧱 Diagram: Collection Framework Architecture

              Iterable
                  │
             Collection
         ┌────────┼─────────┐
        List      Set      Queue
     ┌───────┐  ┌─────┐   ┌───────┐
     ArrayList  HashSet   PriorityQueue
     LinkedList TreeSet   LinkedList
     Vector
     Stack

              Map (separate)
           ┌───────┬─────────┐
        HashMap  LinkedHashMap  TreeMap

`
    },
    {
      id: 31,
      question: "31. Difference between ArrayList and LinkedList.",
      answer: "",
      codeExample: `
Doubly linked list means:
🔹 Diagram
         NULL ← [prev | 10 | next] ↔ [prev | 20 | next] ↔ [prev | 30 | next] → NULL

🟩 Difference Between ArrayList and LinkedList

| ArrayList                                                | LinkedList                                                      |
| ---------------------------------------------------------|-----------------------------------------------------------------|
| Uses a dynamic array to store elements.                  | Uses a doubly linked list to store elements.                    |
| Faster for accessing (reading) elements using index.     | Faster for insertion and deletion of elements.                  |
| Slower in insertion/deletion (because elements shift).   | No shifting needed, just link changes.                          |
| Takes less memory, as it stores only data.               | Takes more memory, as it stores data + next and previous links. |
| Random access is possible using index.                   | Sequential access only (no index-based random access).          |
| Best choice when more reads and fewer inserts/deletes.   | Best choice when more inserts/deletes and fewer reads.          |
| Example class: ArrayList<String> list = new ArrayList<>(); | Example class: LinkedList<String> list = new LinkedList<>();  |


🧩 Example

import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");

        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Car");
        linkedList.add("Bus");

        System.out.println("ArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);
    }
}


Output:
ArrayList: [Apple, Banana]
LinkedList: [Car, Bus]



🧠 Short Exam Answer:

ArrayList uses a dynamic array, while LinkedList uses a doubly linked list.
ArrayList is faster for access, and LinkedList is faster for insertion and deletion.


-------------------------------------------------------------------------------------------

🔹 Full Line
        ArrayList<String> arrayList = new ArrayList<>();


👉 ArrayList<String> arrayList

This part declares a reference variable named arrayList of type ArrayList that stores String elements.
ArrayList → class name
<String> → Generics, which means this ArrayList can store only String type elements
(so it prevents adding integers or other types by mistake)


👉 new ArrayList<>()

This part creates a new ArrayList object in memory.
new → keyword to create an object
ArrayList<>() → constructor that initializes an empty ArrayList
< > → type inference (from Java 7 onward, you don’t need to repeat <String> on the right side)

      `
    },
    {
      id: 32,
      question: "32. Difference between Set and List.",
      answer: "",
      codeExample: `
🟩 Difference Between Set and List

| List                                                                  | Set                                                     |
| ----------------------------------------------------------------------| --------------------------------------------------------|
| Stores elements in order (sequence).                                  | Stores elements in an unordered way.                    |
| Allows duplicate elements.                                            | Does not allow duplicates.                              |
| Elements can be accessed by index (like get(0)).                      | Elements cannot be accessed by index.                   |
| Maintains insertion order (the order in which items are added).       | May not maintain insertion order (depends on Set type). |
| Examples: ArrayList, LinkedList, Vector                               | Examples: HashSet, LinkedHashSet, TreeSet               |
| Good when you need to store data with duplicates and access by index. | Good when you need to store unique data only.           |


🧩 Example

import java.util.*;

public class SetListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Apple"); // duplicate allowed

        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // duplicate ignored

        System.out.println("List: " + list);
        System.out.println("Set: " + set);
    }
}


🧠 Output:
List: [Apple, Banana, Apple]
Set: [Apple, Banana]


✅ Short Exam Answer:

A List allows duplicates and maintains insertion order,
while a Set stores unique elements and usually does not maintain order.


-----------------------------------------------------------------------------------

why i used this List<String> list = new ArrayList<>(); line because:



🧩 Case 1 — Using ArrayList on both sides
ArrayList<String> list = new ArrayList<>();


Now you use list in your code in 10 different places:

list.add("A");
list.remove("B");
doSomething(list);
anotherMethod(list);


Now your boss says:
“We need LinkedList instead of ArrayList for better performance.”

So you change this:

ArrayList<String> list = new ArrayList<>();
to:
LinkedList<String> list = new LinkedList<>();


But ⚠️ now everywhere you used ArrayList type — like in method parameters or returns — you also need to change those.


Example:

public void processData(ArrayList<String> data) {  // you must change here too!
    ...
}


You’d have to replace every "ArrayList" with "LinkedList" all over your project 😩
That’s what we mean by painful — not the one line, but all the places where you used that specific class name.

      `
    },
    {
      id: 33,
      question: "33. Difference between Stack and Vector.",
      answer: "",
      codeExample: `
🟩 Difference Between Stack and Vector

| Vector                                               | Stack                                                                   |
| -----------------------------------------------------| ------------------------------------------------------------------------|
| It is a dynamic array that stores elements in order. | It is a subclass of Vector that follows LIFO (Last In First Out) order. |
| Used for general-purpose dynamic storage.            | Used when you need stack behavior (push and pop).                       |
| Elements are accessed by index.                      | Elements are added or removed only from the top.                        |
| Provides methods like add(), get(), remove().        | Provides extra methods like push(), pop(), peek().                      |
| Does not follow LIFO order.                          | Follows LIFO order.                                                     |
| Example: Vector<Integer> v = new Vector<>();         | Example: Stack<Integer> s = new Stack<>();                              |


🧩 Example

import java.util.*;

public class StackVectorExample {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        vector.add("A");
        vector.add("B");
        vector.add("C");
        System.out.println("Vector: " + vector);

        Stack<String> stack = new Stack<>();
        stack.push("X");
        stack.push("Y");
        stack.push("Z");
        System.out.println("Stack before pop: " + stack);

        stack.pop(); // removes top element
        System.out.println("Stack after pop: " + stack);
    }
}


🧠 Output:
Vector: [A, B, C]
Stack before pop: [X, Y, Z]
Stack after pop: [X, Y]


✅ Short Exam Answer:

A Vector is a dynamic array that stores elements in order.
A Stack is a subclass of Vector that follows LIFO (Last In First Out) and provides methods like push(), pop(), and peek().


      `
    },
    {
      id: 34,
      question: "34. Difference between HashSet and TreeSet.",
      answer: "",
      codeExample: `
🟩 Difference Between HashSet and TreeSet

| HashSet                                              | TreeSet                                           |
| -----------------------------------------------------| --------------------------------------------------|
| Stores elements in random (unordered) order.         | Stores elements in sorted (ascending) order.      |
| Faster for adding, searching, and removing elements. | Slower than HashSet (because it sorts elements).  |
| Uses a hash table internally.                        | Uses a balanced tree (Red-Black Tree) internally. |
| Allows null elements (only one).                     | Does not allow null elements.                     |
| No guarantee of order while iterating.               | Maintains elements in natural or custom order.    |
| Example: HashSet<Integer> hs = new HashSet<>();      | Example: TreeSet<Integer> ts = new TreeSet<>();   |


🧩 Example

import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        HashSet<Integer> hashSet = new HashSet<>();
        hashSet.add(30);
        hashSet.add(10);
        hashSet.add(20);
        System.out.println("HashSet: " + hashSet);

        TreeSet<Integer> treeSet = new TreeSet<>();
        treeSet.add(30);
        treeSet.add(10);
        treeSet.add(20);
        System.out.println("TreeSet: " + treeSet);
    }
}


🧠 Output:
HashSet: [20, 10, 30]   // order may vary (random)
TreeSet: [10, 20, 30]   // sorted order



✅ Short Exam Answer:

HashSet stores elements in random order and is faster,
while TreeSet stores elements in sorted order and is slower because it maintains sorting.

      `
    },
    {
      id: 35,
      question: "35. Explain Iterator interface with example.",
      answer: "",
      codeExample: `
🟩 What is Iterator in Java?

The Iterator interface in Java is used to traverse (loop through) elements of a collection (like ArrayList, HashSet, etc.) one by one.

It is a part of the java.util package.


🧠 Purpose of Iterator

    Helps to access each element in a collection.
    Allows removing elements safely while iterating.
    Replaces the older Enumeration interface.


🧩 Important Methods of Iterator
| Method              | Description                                       |
| ------------------- | ------------------------------------------------- |
|  boolean hasNext()  | Returns true if there is another element to read. |
|  E next()           | Returns the next element in the collection.       |
|  void remove()      | Removes the current element from the collection.  |


✅ Example of Iterator

import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        // Create a list
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        // Get iterator from list
        Iterator<String> itr = list.iterator();

        // Traverse elements one by one
        while (itr.hasNext()) {
            String fruit = itr.next();
            System.out.println(fruit);

            // Example: remove Banana while iterating
            if (fruit.equals("Banana")) {
                itr.remove();
            }
        }

        System.out.println("After removing Banana: " + list);
    }
}


🧠 Output:
Apple
Banana
Cherry
After removing Banana: [Apple, Cherry]



🧩 Explanation:

iterator() gives an Iterator object.
hasNext() checks if there is another element.
next() returns the next element.
remove() deletes the current element safely while iterating.


✅ Short Exam Answer:

The Iterator interface is used to traverse elements of a collection one by one.
It provides methods like hasNext(), next(), and remove() for safe and easy iteration.


---------------------------------------------------------------------------------------------

    Iterator is used in all collection framework yes or no ?

💡 Answer:

👉 Yes,
the Iterator interface can be used with all classes that implement the Collection interface —
like:

ArrayList
LinkedList
HashSet
TreeSet
LinkedHashSet
PriorityQueue
etc.


These all support the method:

    Iterator<E> iterator()



⚠️ But Note:

Iterator cannot be used directly with Maps (HashMap, TreeMap, etc.)
because Map does not extend Collection.

However, you can still use an iterator on Map’s view:

map.keySet().iterator() → for keys
map.values().iterator() → for values
map.entrySet().iterator() → for key-value pairs


✅ Summary Table
| Collection Type | Can use Iterator? | Example                   |
| ----------------| ------------------| --------------------------|
| ArrayList       | ✅ Yes            | list.iterator()           |
| LinkedList      | ✅ Yes            | list.iterator()           |
| HashSet         | ✅ Yes            | set.iterator()            |
| TreeSet         | ✅ Yes            | set.iterator()            |
| HashMap         | ⚠️ Indirectly     | map.entrySet().iterator() |


📘 In short:

✅ Iterator is used in all classes that implement Collection interface,
⚠️ For Map, we use iterator through keySet(), values(), or entrySet().

`
    },
    {
      id: 36,
      question: "36. Difference between ArrayDeque and PriorityQueue.",
      answer: "",
      codeExample: `
🟩 Difference between ArrayDeque and PriorityQueue

| ArrayDeque                                                                    | PriorityQueue                                                                                        |
| ------------------------------------------------------------------------------| -----------------------------------------------------------------------------------------------------|
| It is a double-ended queue, so you can add or remove elements from both ends. | It is a priority-based queue, so elements are arranged by priority (like smallest or largest first). |
| It keeps the order in which you add elements (insertion order).               | It does not keep insertion order, it sorts automatically by priority.                                |
| You can use it like a Queue (FIFO) or a Stack (LIFO).                         | You can use it only as a Queue.                                                                      |
| It does not allow null elements.                                              | It does not allow null elements.                                                                     |
| Best when you need to add/remove from both ends quickly.                      | Best when you need to process elements based on priority (like job scheduling).                      |



✅ Example of ArrayDeque

import java.util.*;

public class ArrayDequeExample {
    public static void main(String[] args) {
        ArrayDeque<String> dq = new ArrayDeque<>();
        dq.add("A");
        dq.addFirst("B");
        dq.addLast("C");
        System.out.println(dq);  // [B, A, C]
    }
}



✅ Example of PriorityQueue

import java.util.*;

public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();    // if you print Descending(high priority) Order Priority Queue change this  
        pq.add(30);                                     -> PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        pq.add(10);
        pq.add(20);
        System.out.println(pq);         // [10, 30, 20]
        System.out.println(pq.peek());  // 10 (highest priority)
    }
}


🧠 In short:

ArrayDeque → Used for fast adding/removing from both ends.
PriorityQueue → Used for automatic sorting by priority.

`
    },
    {
      id: 37,
      question: "37. Difference between HashMap and TreeMap.",
      answer: "",
      codeExample: `
    
| HashMap                                                 | TreeMap                                                              |
| --------------------------------------------------------| ---------------------------------------------------------------------|
| It stores data in random order (no sorting).            | It stores data in sorted order (ascending order of keys by default). |
| It is faster because it uses hashing.                   | It is slower because it uses a Red-Black tree for sorting.           |
| Allows one null key and many null values.               | Does not allow null key, but allows null values.                     |
| Used when order doesn’t matter, and speed is important. | Used when you need elements sorted by key.                           |
| Not thread-safe (needs manual synchronization).         | Also not thread-safe.                                                |


✅ Example of HashMap

import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Mango");
        System.out.println(map);  // Output: Random order like {1=Apple, 2=Mango, 3=Banana}
    }
}


🔄 What does “Random Order” mean?

“Random order” means:

The order of key–value pairs in the output is unpredictable — it depends on how hash codes are calculated and distributed internally.

You might see {1=Apple, 2=Mango, 3=Banana} today,
but after running again, it could be {2=Mango, 1=Apple, 3=Banana}.



✅ Example of TreeMap

import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Mango");
        System.out.println(map);  // Output: {1=Apple, 2=Mango, 3=Banana} (sorted by key)
    }
}


✅ In short:

TreeMap = Always sorted by key (default ascending)
To reverse order → use Collections.reverseOrder()
To sort by value → need manual sorting (using List<Map.Entry>)



🧠 In Short:
HashMap → Fast, unordered, allows one null key.
TreeMap → Sorted, slower, does not allow null key.
      `
    },
    {
      id: 38,
      question: "38. What is LinkedHashMap in Java?",
      answer: "",
      codeExample: `
🟩 What is LinkedHashMap in Java?

    A LinkedHashMap is just like a HashMap, but it remembers the order in which you insert elements.

It is a part of the java.util package and is a child class of HashMap.


🧠 Main Features of LinkedHashMap

| Feature          | Explanation (in simple words)                                           |
| -----------------| ------------------------------------------------------------------------|
| Order maintained | It keeps the insertion order (the order in which keys are added).       |
| Key–Value pairs  | Stores data in the form of key and value.                               |
| Unique keys      | Each key must be unique, values can be duplicate.                       |
| Allows null      | Allows one null key and multiple null values.                           |
| Not thread-safe  | Not synchronized (use Collections.synchronizedMap() for thread safety). |
| Based on         | It is based on HashMap and doubly linked list (for order).              |



✅ Example of LinkedHashMap

import java.util.*;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Mango");

        System.out.println(map);  // Output: {3=Banana, 1=Apple, 2=Mango}
    }
}


🧩 Explanation:

The output follows the same order as insertion (3, 1, 2).
This is the main difference from HashMap, which gives random order.


⚖️ Difference Between HashMap and LinkedHashMap
| HashMap                              | LinkedHashMap                               |
| -------------------------------------|---------------------------------------------|
| Does not maintain order of elements. | Maintains insertion order.                  |
| Based only on hashing.               | Based on hashing + linked list.             |
| Slightly faster.                     | Slightly slower because it maintains order. |


🧠 In short:

LinkedHashMap is like a HashMap that remembers the order in which elements were inserted.
It’s useful when you want both fast access and predictable order.

`
    },
    {
      id: 39,
      question: "39. Explain FileInputStream and FileOutputStream with examples.",
      answer: "",
      codeExample: `
🟩 1. FileInputStream (Reading data from a file)

    The FileInputStream class is used to read data (bytes) from a file.

It reads data byte by byte (useful for reading binary files like images, audio, etc.).


.read()  -> Reads one character (returns int, -1 means EOF)   // this is used in all file operations
.write() ->	Writes one or more characters to file


Example: Read file using FileInputStream

import java.io.*;

public class ReadFile {
    public static void main(String[] args) throws Exception {
        FileInputStream fin = new FileInputStream("input.txt");
        int i;
        while ((i = fin.read()) != -1) {
            System.out.print((char)i); // print content
        }
        fin.close();
    }
}


Key points:
    Reads one byte at a time.
    -1 means end of file.
    (char)i converts byte to character.
      


Example: Write file using FileOutputStream

import java.io.*;

public class WriteFile {
    public static void main(String[] args) throws Exception {
        FileOutputStream fout = new FileOutputStream("output.txt");
        String text = "Hello Java!";
        fout.write(text.getBytes()); // write bytes
        fout.close();
        System.out.println("Data written!");
    }
}


Key points:

    Converts string to bytes using getBytes().
    Writes data byte by byte.
    Always close() the stream after use.



🧠 Memory Trick for Exams

    InputStream → Input (read)
    OutputStream → Output (write)
    Both work with bytes, not characters.


⚖️ Difference Between FileInputStream and FileOutputStream

| FileInputStream                            | FileOutputStream                                   |
| ------------------------------------------ | -------------------------------------------------- |
| Used to read data from a file.             | Used to write data into a file.                    |
| Reads data byte by byte.                   | Writes data byte by byte.                          |
| Example: reading image, audio, text files. | Example: saving image, writing text or data files. |

    `
    },
    {
      id: 40,
      question: "40. What is serialization? Explain its process.",
      answer: "",
      codeExample: `
🟩 What is Serialization?

Serialization is the process of converting an object into a byte stream so that it can be saved to a file, sent over a network, or stored in a database.


Purpose:

To persist objects or transfer them between programs/machines.
Later, the object can be reconstructed using deserialization.


🧠 Deserialization

Deserialization is the reverse process of serialization.
It reconstructs the original object from the byte stream.


🟩 Process of Serialization

1. Make a class implement Serializable interface
    Marker interface (no methods) that tells Java this class can be serialized.
2. Create an object of the class.
3. Use ObjectOutputStream to write the object to a file.
4. Use ObjectInputStream to read the object from the file (deserialization).



✅ Short Exam Answer

Serialization converts an object into a byte stream so it can be saved or sent.
Deserialization reconstructs the object from the byte stream.
Steps:

1. Implement Serializable.
2. Create object.
3. Use ObjectOutputStream to write.
4. Use ObjectInputStream to read.


✅ Very Easy Example
import java.io.*;

// Step 1: Make class serializable
class Student implements Serializable {
    String name = "Raj";
    int age = 20;
}

public class SimpleExample {
    public static void main(String[] args) throws Exception {

        // Step 2: Write object to file (Serialization)
        Student s1 = new Student();  // create object
        FileOutputStream fout = new FileOutputStream("student.txt");
        ObjectOutputStream out = new ObjectOutputStream(fout);
        out.writeObject(s1);  // save object
        out.close();
        System.out.println("Object saved!");

        // Step 3: Read object from file (Deserialization)
        FileInputStream fin = new FileInputStream("student.txt");
        ObjectInputStream in = new ObjectInputStream(fin);
        Student s2 = (Student) in.readObject();  // get object back
        in.close();

        System.out.println("Name: " + s2.name);
        System.out.println("Age: " + s2.age);
    }
}


🧾 Output
Object saved!
Name: Raj
Age: 20



🧩 Short exam answer:

Serialization = Saving object to file.
Deserialization = Reading object from file.
Done using Serializable interface.
`
    },
    {
      id: 41,
      question: "41. Explain Reader/Writer hierarchy.",
      answer: "",
      codeExample: `
🟩 What is Reader/Writer in Java?

The Reader and Writer classes are used to read and write character (text) data in Java.

They are part of the java.io package and are designed for text files,
while InputStream/OutputStream are for binary files (like images, videos).


🧠 Why Reader/Writer?

Because InputStream and OutputStream work with bytes,
but Reader and Writer work with characters (text) — making it easier to handle text data like .txt files.



🗂️ Reader/Writer Class Hierarchy (Structure)

                              java.lang.Object
                                     │
                        ┌────────────┴─────────────────┐
                        │                              │
                java.io.Reader                java.io.Writer
                        │                              │
                 ┌──────┼──────┐                ┌──────┼──────┐
                 │             │                │             │
      BufferedReader  InputStreamReader   BufferedWriter  OutputStreamWriter
                 │                              │
             FileReader                      FileWriter


🟢 Reader Classes (for reading text)

| Class             | Description                                                                             |
| ------------------| ----------------------------------------------------------------------------------------|
| Reader            | Parent (abstract) class for all character input streams. (Base class to read characters)|
| FileReader        | Reads characters from a text file.                                                      |
| BufferedReader    | Reads text from file efficiently using a buffer.                                        |
| InputStreamReader | Converts byte stream to character stream (used with FileInputStream).                   |



🔵 Writer Classes (for writing text)

| Class              | Description                                                                               |
| -------------------| ------------------------------------------------------------------------------------------|
| Writer             | Parent (abstract) class for all character output streams. (Base class to write characters)|
| FileWriter         | Writes characters to a text file.                                                         |
| BufferedWriter     | Writes text efficiently using a buffer.                                                   |
| OutputStreamWriter | Converts character stream to byte stream (used with FileOutputStream).                    |


.read()  -> Reads one character (returns int, -1 means EOF)   // this is used in all file operations
.write() ->	Writes one or more characters to file


✅ Example using FileReader and FileWriter


import java.io.*;

public class ReaderWriterExample {
    public static void main(String[] args) throws Exception {
        // Write data to file
        FileWriter fw = new FileWriter("demo.txt");
        fw.write("Hello Java!");
        fw.close();
        System.out.println("Data written successfully.");

        // Read data from file
        FileReader fr = new FileReader("demo.txt");
        int i;
        while ((i = fr.read()) != -1) {
            System.out.print((char) i);
        }
        fr.close();
    }
}


🧾 Output
Data written successfully.
Hello Java!



💡 Easy to Remember

Reader → Read characters (text)
Writer → Write characters (text)
FileReader / FileWriter → For simple files
BufferedReader / BufferedWriter → For fast reading/writing
InputStream / OutputStream -> Binary files	Bytes
      `
    },
    {
      id: 42,
      question: "42. Explain BufferedReader and BufferedWriter with their advantages.",
      answer: "",
      codeExample: `
🟩 BufferedReader
    The BufferedReader class is used to read text from a file (or input stream) efficiently, using a buffer.

📘 It belongs to the package java.io.
📘 It reads characters, lines, or arrays of characters.


✅ Example of BufferedReader

import java.io.*;

public class BufferedReaderExample {
    public static void main(String[] args) throws Exception {
        FileReader fr = new FileReader("input.txt");
        BufferedReader br = new BufferedReader(fr);

        String line;
        while ((line = br.readLine()) != null) {  // read line by line
            System.out.println(line);
        }

        br.close();
        fr.close();
    }
}


🧠 Explanation:

BufferedReader reads text line by line using readLine().
It uses a buffer (temporary memory) to read large chunks at once → faster than FileReader.
      



🟦 BufferedWriter

    The BufferedWriter class is used to write text to a file efficiently, using a buffer.

📘 It belongs to the package java.io.
📘 It writes characters, strings, or arrays of characters.

✅ Example of BufferedWriter

import java.io.*;

public class BufferedWriterExample {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("output.txt");
        BufferedWriter bw = new BufferedWriter(fw);

        bw.write("Hello Java!");
        bw.newLine();            // to move to next line
        bw.write("BufferedWriter is fast.");
        bw.close();
        fw.close();

        System.out.println("Data written successfully.");
    }
}



🧠 Explanation:

BufferedWriter stores text in a buffer before writing to the file.
This makes writing faster and more efficient than using FileWriter directly.
newLine() is used to write a line break (like pressing Enter).


🟢 Advantages of BufferedReader and BufferedWriter
| BufferedReader                               | BufferedWriter                                  |
| -------------------------------------------- | ----------------------------------------------- |
| Reads large text efficiently using a buffer. | Writes large text efficiently using a buffer.   |
| Can read line by line with readLine().       | Can add new lines easily using newLine().       |
| Faster than FileReader.                      | Faster than FileWriter.                         |
| Reduces the number of read operations.       | Reduces the number of write operations.         |



🧩 In Short:

BufferedReader → Read text fast (line by line).
BufferedWriter → Write text fast (with buffering).
Both improve speed and performance in file handling.


`
    },
    {
      id: 43,
      question: "43. Explain how StringTokenizer can be replaced by modern split() approach and compare their performance. and ( String methods in Java )",
      answer: "",
      codeExample: `
🧠 1️⃣ What is StringTokenizer?

StringTokenizer (from java.util) was used in older Java versions to split a string into tokens (pieces) based on a delimiter.

It’s part of legacy Java (introduced in JDK 1.0), and it’s now mostly replaced by the split() method of the String class.

✅ Example: Using StringTokenizer

import java.util.StringTokenizer;

public class TokenizerExample {
    public static void main(String[] args) {
        String data = "Apple,Banana,Mango";
        StringTokenizer st = new StringTokenizer(data, ","); // comma as delimiter

        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
}


🟩 Output:
Apple
Banana
Mango



2️⃣ Modern Way — Using String.split()

split() is a built-in method in the String class (since JDK 1.4+).
It splits the string based on a regular expression (regex) and returns a String array.

✅ Example: Using split()

public class SplitExample {
    public static void main(String[] args) {
        String data = "Apple,Banana,Mango";
        String[] fruits = data.split(",");  // comma as delimiter

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}


🟩 Output (same):
Apple
Banana
Mango



3️⃣ Key Differences — StringTokenizer vs split()

| Feature           | StringTokenizer                                       | split()                             |
| ------------------| ------------------------------------------------------| ------------------------------------|
| Package           | java.util                                             | java.lang.String                    |
| Return Type       | No return — you get tokens via nextToken() one by one | Returns a String[] array            |
| Delimiter Type    | Simple character(s) only                              | Regular Expression (regex)          |
| Null/Empty Tokens | Skips empty tokens                                    | Keeps empty tokens (optional regex) |
| Thread Safety     | Yes (synchronized)                                    | No                                  |
| Introduced        | JDK 1.0 (Legacy class)                                | JDK 1.4+                            |
| Flexibility       | Limited                                               | Very flexible and powerful          |
| Recommended       | ❌ Deprecated (legacy use only)                       | ✅ Modern, preferred approach      |


------------------------------------------------------------------------------

important and commonly used String methods in Java

1️⃣ substring() — Extract part of a string

👉 Purpose: Returns a part (sub-string) of a string from a given index range.


📘 Syntax:

substring(int beginIndex)
substring(int beginIndex, int endIndex)


✅ Example:
public class Example1 {
    public static void main(String[] args) {
        String text = "HelloWorld";
        System.out.println(text.substring(5));      // from index 5 to end
        System.out.println(text.substring(0, 5));   // from index 0 to 4
    }
}


🟩 Output:

World
Hello


📌 Note: endIndex is exclusive (not included).



2️⃣ equals() and equalsIgnoreCase() — Compare strings

👉 Purpose: Compare two strings for equality.


📘 Syntax:

equals(Object another)
equalsIgnoreCase(String another)


✅ Example:
public class Example2 {
    public static void main(String[] args) {
        String a = "Java";
        String b = "java";
        System.out.println(a.equals(b));             // false
        System.out.println(a.equalsIgnoreCase(b));   // true
    }
}


🟩 Output:

false
true


📌 equals() is case-sensitive
📌 equalsIgnoreCase() is case-insensitive



3️⃣ toUpperCase() and toLowerCase() — Change case

👉 Purpose: Converts all characters in a string to upper or lower case.

✅ Example:
public class Example3 {
    public static void main(String[] args) {
        String word = "JaVa";
        System.out.println(word.toUpperCase());
        System.out.println(word.toLowerCase());
    }
}


🟩 Output:

JAVA
java


📌 Useful for case-insensitive comparisons or standardizing input.



4️⃣ trim() — Remove spaces

👉 Purpose: Removes leading and trailing spaces from a string (not spaces in the middle).

✅ Example:
public class Example4 {
    public static void main(String[] args) {
        String data = "   Hello Java   ";
        System.out.println("Before: [" + data + "]");
        System.out.println("After : [" + data.trim() + "]");
    }
}


🟩 Output:

Before: [   Hello Java   ]
After : [Hello Java]


📌 Useful when processing user input or reading text files.



5️⃣ Length of a String → .length() method (with parentheses)

👉 In Java, strings use a method (not property) called .length() to get the number of characters.

✅ Example:
public class StringLengthExample {
    public static void main(String[] args) {
        String name = "Java";
        System.out.println(name.length());
    }
}


🟩 Output:

4


📌 length() → counts all characters including spaces and symbols.



------------
replace() and replaceAll() — Replace characters or substrings
👉 Purpose: Replace part of a string with another value.

📘 Syntax:

replace(char oldChar, char newChar)
replace(CharSequence target, CharSequence replacement)
replaceAll(String regex, String replacement)

✅ Example:
public class Example5 {
    public static void main(String[] args) {
        String text = "Java is fun";
        System.out.println(text.replace("fun", "powerful"));     // replace word
        System.out.println(text.replace('a', '@'));              // replace character
    }
}


🟩 Output:

Java is powerful
J@v@ is fun


📌 replaceAll() works with regex, while replace() does simple replacement.

`
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },

    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },


    {
      id: 1.1,
      question: "1.1 Write a program for swapping and find a factorial value. Perform swapping without using third variable",
      answer: "",
      codeExample: `
🧠 Algorithm

1. Start
2. Input two numbers: a and b
3. Print original values of a and b
4. Swap without using third variable:
    a = a + b
    b = a - b
    a = a - b
5. Print swapped values
6. Initialize fact = 1
7. For i = 1 to a, multiply fact = fact * i
8. Print factorial of a
9. Stop 



🧩 ASCII Flowchart

        +----------------------+
        |        Start         |
        +----------------------+
                  |
                  v
        +----------------------+
        | Input a, b           |
        +----------------------+
                  |
                  v
        +----------------------+
        | Print original a, b  |
        +----------------------+
                  |
                  v
        +----------------------+
        | a = a + b            |
        | b = a - b            |
        | a = a - b            |
        +----------------------+
                  |
                  v
        +----------------------+
        | Print swapped a, b   |
        +----------------------+
                  |
                  v
        +----------------------+
        | fact = 1, i = 1      |
        +----------------------+
                  |
                  v
        +----------------------+
        | i <= a ?             |
        +----------------------+
            | Yes        | No
            v            v
+------------------+   +----------------------+
| fact = fact * i  |   | Print factorial fact |
| i = i + 1        |   +----------------------+
+------------------+              |
     |                            v
     +------------<----------+----+
                              |
                         +---------+
                         |  Stop   |
                         +---------+



💻 java Program Code
import java.util.Scanner;

public class SwapAndFactorial {
    public static void main(String[] args) {
        
        int a = 10;
        int b = 20;

        // Display before swapping
        System.out.println("Before swapping: a = " + a + ", b = " + b);

        // Swapping without third variable
        a = a + b;
        b = a - b;
        a = a - b;

        // Display after swapping
        System.out.println("After swapping: a = " + a + ", b = " + b);

        // Find factorial of 'a'
        int fact = 1;
        for (int i = 1; i <= a; i++) {
            fact = fact * i;
        }

        // Display factorial result
        System.out.println("Factorial of " + a + " is: " + fact);

        sc.close();
    }
}



📘 Example Output

Enter first number (a): 5
Enter second number (b): 3
Before swapping: a = 5, b = 3
After swapping: a = 3, b = 5
Factorial of 3 is: 6



      
`
    },
    {
      id: 2.2,
      question: "2.1 Write a program to accept a number from the user through command line and  display whether the given number is palindrome or not. ",
      answer: "",
      codeExample: `
      
A palindrome number is a number that reads the same backward as forward.

👉 Example:

121 → reversed is also 121 ✅
1331 → reversed is also 1331 ✅
123 → reversed is 321 ❌ (not same)

So:

121 → Palindrome
1221 → Palindrome
123 → Not Palindrome
---------------------------

import java.util.Scanner;

public class PalindromeStringWay {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        String numStr = sc.nextLine();  // read number as text

        // Reverse using StringBuilder
        String reversed = new StringBuilder(numStr).reverse().toString();

        if (numStr.equals(reversed))
            System.out.println(numStr + " is a Palindrome number.");
        else
            System.out.println(numStr + " is NOT a Palindrome number.");
    }
}




🧾 Example Outputs

Example 1:

Enter a number: 121
121 is a Palindrome number.


Example 2:

Enter a number: 123
123 is NOT a Palindrome number.


Example 3:

Enter a number: 44444
44444 is a Palindrome number.

----------------------------------------------------------------------------------------
🧩 Line:

  String reversed = new StringBuilder(numStr).reverse().toString();



🧠 Step 1: numStr
You already have:

  String numStr = "121";

So here numStr is just the string version of your number.



🧠 Step 2: new StringBuilder(numStr)

👉 This creates a StringBuilder object that stores your string.

In Java, StringBuilder is a special class that helps you easily change or modify strings —
for example, reverse, append, or insert text.

So after this step:

  new StringBuilder(numStr)

you have a StringBuilder containing "121".



🧠 Step 3: .reverse()

Now we call .reverse() on that StringBuilder.

  new StringBuilder(numStr).reverse()

➡️ This reverses the characters inside it.
If the string was "121", it becomes "121" (same).
If it was "123", it becomes "321".



🧠 Step 4: .toString()

After reversing, we still have a StringBuilder object.
To convert it back into a normal String, we use .toString().

So:

  new StringBuilder(numStr).reverse().toString();

→ gives a new String that is the reversed version of numStr.


💡 Final Example:

  String numStr = "123";
  String reversed = new StringBuilder(numStr).reverse().toString();
  System.out.println(reversed);


Output:

  321


----------------------------

🧩 1️⃣ Scanner sc = new Scanner(System.in);

This line means:
  “Create a Scanner object named sc to take input from the keyboard.”

💡 Explanation:

  Scanner → a class in Java (in java.util package) used for taking input.
  new Scanner(System.in) → tells Java to read from the keyboard (that’s what System.in means).
  sc → is just the name of the Scanner object (you can name it anything).


📘 Why we use nextLine()?

Because:

nextLine() reads the entire line of input (until you press Enter).
It stores it as a String.

Later we can use this string for checking palindrome (and even reverse it easily).


✅ Full Example to see it working:

  import java.util.Scanner;

  public class InputExample {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);   // create Scanner to take input
          System.out.print("Enter something: ");
          String text = sc.nextLine();           // read input as string
          System.out.println("You typed: " + text);
      }
  }


When you run this:

  Enter something: Hello
  You typed: Hello
<---------------------------------------------------------------------------------------->
<---------------------------------------------------------------------------------------->

🧠 Algorithm (Step-by-Step)

1. Start
2. Import the Scanner class for user input.
3. Create a Scanner object sc.
4. Ask the user to enter a number.
5. Read the input as a string → numStr.
6. Reverse the string using StringBuilder:
    reversed = new StringBuilder(numStr).reverse().toString();
7. Compare the original and reversed strings:
    If both are equal → the number is a Palindrome.
    Else → it is Not a Palindrome.
8. Display the result.
9. Stop



🧩 ASCII Flowchart

+---------------------------+
|          Start            |
+---------------------------+
           |
           v
+---------------------------+
|  Input number as string   |
|  (numStr)                 |
+---------------------------+
           |
           v
+---------------------------+
|  reversed = reverse(numStr) |
+---------------------------+
           |
           v
+---------------------------+
|  numStr == reversed ?     |
+---------------------------+
     | Yes            | No
     v                v
+------------------+  +----------------------+
| Print "Palindrome" | | Print "Not Palindrome" |
+------------------+  +----------------------+
           |
           v
     +-------------+
     |    Stop     |
     +-------------+

<---------------------------------------------------------------------------------------->
<---------------------------------------------------------------------------------------->


second example or way:
    
import java.util.Scanner;

public class PalindromeEasy {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = sc.nextInt();   // take number from user

        int original = num;
        int reversed = 0;

        while (num > 0) {
            int digit = num % 10;           // get last digit
            reversed = reversed * 10 + digit; // build reversed number
            num = num / 10;                 // remove last digit
        }

        if (original == reversed)
            System.out.println(original + " is a Palindrome number.");
        else
            System.out.println(original + " is NOT a Palindrome number.");
    }
}


----------------------------------------------------------------------------------------

🧩 Step 1:
  int digit = num % 10;

➡️ % means modulus — it gives the remainder after dividing by 10.
That remainder is the last digit of the number.

Example:
  num = 121
  digit = 121 % 10 = 1

So the last digit = 1



🧩 Step 2:
  reversed = reversed * 10 + digit;

➡️ This line builds the reversed number step by step.

At first, reversed = 0.

Then:

  reversed = 0 * 10 + 1 = 1

Next time, when we get another digit (like 2),
we shift the previous digits to the left by multiplying by 10, then add the new digit.

Example:

  reversed = 1 * 10 + 2 = 12



🧩 Step 3:
  num = num / 10;

➡️ This line removes the last digit from the number.

Example:
  num = 121 / 10 = 12

Now the next loop works on 12.

🔁 Full process for 121:

| Step | num | digit = num%10 | reversed = reversed*10+digit | new num = num/10 |
| ---- | --- | -------------- | ---------------------------- | ---------------- |
| 1    | 121 | 1              | 1                            | 12               |
| 2    | 12  | 2              | 12                           | 1                |
| 3    | 1   | 1              | 121                          | 0                |

✅ reversed = 121 same as original → Palindrome!


---------

Let’s carefully understand how this line

  reversed = reversed * 10 + digit;

assigns and updates values step by step.

🧠 Before we start

We have two variables:

reversed = 0     (at the beginning)
num = 121


We take each last digit of num one by one and add it to reversed to make the reversed number.

🔹 Step 1:
digit = 121 % 10 = 1
reversed = 0 * 10 + 1 = 1


➡️ So now reversed = 1
We’ve added the last digit (1) to our reversed number.

Then remove last digit:

num = 121 / 10 = 12

🔹 Step 2:

Now num = 12 and reversed = 1

digit = 12 % 10 = 2
reversed = 1 * 10 + 2 = 12


Let’s break this line:

reversed * 10 → shifts old digits one place left → 1 * 10 = 10

+ digit → adds new digit at the end → 10 + 2 = 12

Now reversed becomes 12.

Then remove last digit again:

num = 12 / 10 = 1

🔹 Step 3:

Now num = 1 and reversed = 12

digit = 1 % 10 = 1
reversed = 12 * 10 + 1 = 121


➡️ So finally reversed = 121

✅ Summary Table

| Step | num | digit | reversed (new value) | How it’s calculated |
| ---- | --- | ----- | -------------------- | ------------------- |
| 1    | 121 | 1     | 1                    | 0×10 + 1            |
| 2    | 12  | 2     | 12                   | 1×10 + 2            |
| 3    | 1   | 1     | 121                  | 12×10 + 1           |

Now reversed = 121 (same as original) → Palindrome!

So the line

reversed = reversed * 10 + digit;


means:
➡️ “Move previous digits left (×10), and then add the new last digit.”

`
    },
    {
      id: 3.3,
      question: "3.3. Write a program to accept an array of integer from the user through command line and find prime numbers from the array.",
      answer: "",
      codeExample: `
What is Prime numbers?

A prime number is a number that is divisible only by 1 and itself.
That means it has exactly two factors → 1 and the number itself.

If a number n is divisible by any number between 2 and n-1,
then it’s not prime.
Otherwise, it is prime.

✅ Example in words

Let’s check if 7 is prime:

  7 ÷ 2 → not divisible
  7 ÷ 3 → not divisible
  7 ÷ 4 → not divisible
  7 ÷ 5 → not divisible
  7 ÷ 6 → not divisible

✅ So, 7 is a Prime number

what is command line

Command line means a text-based way to interact with your computer — instead of clicking icons or menus, you type commands.

💡 Example:
When you open

  Command Prompt in Windows (cmd)
  Terminal in macOS or Linux

That black (or white) screen where you type commands like

  javac PrimeFromArray.java
  java PrimeFromArray 5 7 9

----------------------------------------------------------------------------------------


public class PrimeFromArray {
    public static void main(String[] args) {
        for (String s : args) {
            int num = Integer.parseInt(s);             // convert string to integer
            boolean isPrime = true;

            if (num <= 1) isPrime = false;
            else {
                for (int i = 2; i <= num / 2; i++) {   // check divisibility from 2 to num/2 like how many times loop runs (not divide num value)
                    if (num % i == 0) {                // % means Remainder = what’s left after division 
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime)
                System.out.println(num + " is Prime");
        }
    }
}


🧾 Example Output

Command: java PrimeFromArray 2 4 5 6 11
Output:
2 is Prime
5 is Prime
11 is Prime


------------

💡 What is Remainder?

👉 Remainder means what is left over after dividing one number by another.

🧮 Example 1:

Let’s divide 7 ÷ 2
    2 goes into 7 3 times → because 2 × 3 = 6
    But 7 is 1 more than 6
    So 1 is left over
✅ That 1 left over is called the remainder.

So:

7 ÷ 2 = 3 remainder 1


In math and Java:

  7 / 2 = 3   → quotient
  7 % 2 = 1   → remainder

----------------------------------------------------------------------------------------



🧠 🧩 ASCII Flowchart


+-----------------------------+
|           Start             |
+-----------------------------+
          |
          v
+-----------------------------+
| Read numbers from command   |
| line arguments              |
+-----------------------------+
          |
          v
+-----------------------------+
| For each number in array    |
+-----------------------------+
          |
          v
+-----------------------------+
| num > 1 ?                   |
+-----------------------------+
     | Yes        | No
     v            v
+------------------+   +-------------------+
| Set isPrime=true |   | Skip (not prime) |
+------------------+   +-------------------+
          |
          v
+-----------------------------+
| For i = 2 to num/2         |
| If num % i == 0            |
| then isPrime = false       |
+-----------------------------+
          |
          v
+-----------------------------+
| isPrime == true ?           |
+-----------------------------+
     | Yes        | No
     v            v
+------------------+  +-------------------+
| Print num (Prime)|  | Do nothing        |
+------------------+  +-------------------+
          |
          v
     +------------+
     |   Stop     |
     +------------+



Algorithm (Step-by-Step)

1. Start
2. Read array of numbers from command line arguments.
3. For each number in the array:
    a. If number <= 1, skip (not prime).
    b. Set isPrime = true.
    c. For i from 2 to number/2:
        i. If number % i == 0, set isPrime = false and break loop.
    d. If isPrime is still true, print the number (it’s prime).
4. Stop


`
    },
    {
      id: 4.4,
      question: "4.4. CREATE A CLASS STACK THAT DEFINES AN INTEGER STACK THAT CAN HOLD 10 VALUES. PERFORM PUSH AND POP ACTIONS IN A STACK.",
      answer: "",
      codeExample: `
💻 Java Code

class Stack {
    int arr[] = new int[10];
    int top = -1;

    void push(int value) {
        if (top == 9)
            System.out.println("Stack Overflow!");
        else {
            arr[++top] = value;
            System.out.println(value + " pushed.");
        }
    }

    void pop() {
        if (top == -1)
            System.out.println("Stack Underflow!");
        else
            System.out.println(arr[top--] + " popped.");
    }
}

public class StackDemo {
    public static void main(String[] args) {
        Stack s = new Stack();

        s.push(10);
        s.push(20);
        s.push(30);
        s.pop();
        s.pop();
        s.pop();
        s.pop(); // extra pop to show underflow
    }
}


🧾 Example Output

10 pushed.
20 pushed.
30 pushed.
30 popped.
20 popped.
10 popped.
Stack Underflow!

------------------------------------------------------------------------

⚙️ Algorithm:

1. Start
2. Create a class Stack with:
    an integer array of size 10
    top variable initialized to -1
3. Define push() → add element if stack not full
4. Define pop() → remove element if stack not empty
5. In main(), create an object of Stack
6. Perform few push and pop actions
7. Stop




🧠 Flowchart

           ┌────────────┐
           │   Start    │
           └─────┬──────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Initialize top=-1  │
       │ Stack size = 10    │
       └─────────┬──────────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Push(value) called │
       └─────────┬──────────┘
                 │
                 ▼
     ┌────────────────────────────┐
     │ Is top == 9 ?              │
     └───────┬───────────┬────────┘
             │Yes         │No
             ▼            ▼
 ┌─────────────────┐   ┌───────────────────────────────┐
 │ Print Overflow  │   │ top = top + 1                 │
 │ (stack full)    │   │ arr[top] = value              │
 └─────────────────┘   │ Print “value pushed”          │
                       └──────────┬────────────────────┘
                                  │
                                  ▼
                     ┌────────────────────┐
                     │ Pop() called?      │
                     └───────┬────────────┘
                             │
                             ▼
              ┌────────────────────────────┐
              │ Is top == -1 ?             │
              └───────┬──────────┬─────────┘
                      │Yes        │No
                      ▼           ▼
       ┌──────────────────┐   ┌──────────────────────────┐
       │ Print Underflow  │   │ Print arr[top] + "popped"│
       │ (stack empty)    │   │ top = top - 1            │
       └──────────────────┘   └──────────────────────────┘
                             │
                             ▼
                      ┌───────────────┐
                      │    End        │
                      └───────────────┘


second small flowchart :

+--------+
| Start  |
+--------+
   |
   v
+----------------+
| Create Stack   |
+----------------+
   |
   v
+----------------+
| Push elements  |
+----------------+
   |
   v
+----------------+
| Pop elements   |
+----------------+
   |
   v
+--------+
| Stop   |
+--------+


`
    },
    {
      id: 5.5,
      question: "5.5 Write a program to create a class Publisher with attributes publisher name and publisher id. Derive a subclass Book with attributes bookname, bookid and author name. All these data should be entered by the user. Create two methods getdata() and showdata() to display the details of book and publisher. ",
      answer: "",
      codeExample: `
💻 Java Code

import java.util.Scanner;

class Publisher {
    String publisherName;
    int publisherId;

    void getData(Scanner sc) {
        System.out.print("Enter Publisher Name: ");
        publisherName = sc.nextLine();
        System.out.print("Enter Publisher ID: ");
        publisherId = sc.nextInt();
        sc.nextLine(); // clear buffer
    }

    void showData() {
        System.out.println("\nPublisher Details:");
        System.out.println("Publisher Name: " + publisherName);
        System.out.println("Publisher ID: " + publisherId);
    }
}

class Book extends Publisher {
    String bookName, authorName;
    int bookId;

    void getData(Scanner sc) {
        super.getData(sc);
        System.out.print("Enter Book Name: ");
        bookName = sc.nextLine();
        System.out.print("Enter Book ID: ");
        bookId = sc.nextInt();
        sc.nextLine(); // clear buffer
        System.out.print("Enter Author Name: ");
        authorName = sc.nextLine();
    }

    void showData() {
        super.showData();
        System.out.println("\nBook Details:");
        System.out.println("Book Name: " + bookName);
        System.out.println("Book ID: " + bookId);
        System.out.println("Author Name: " + authorName);
    }
}

public class PublisherBookDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Book b = new Book();
        b.getData(sc);
        b.showData();
        sc.close();
    }
}


🧾 Example Output

Enter Publisher Name: Pearson
Enter Publisher ID: 101
Enter Book Name: Java Basics
Enter Book ID: 202
Enter Author Name: James Gosling

Publisher Details:
Publisher Name: Pearson
Publisher ID: 101

Book Details:
Book Name: Java Basics
Book ID: 202
Author Name: James Gosling


------------------------------------------------------------------------

⚙️ Algorithm

1. Start
2. Create class Publisher with:
    publisherName, publisherId
    method getData() → read publisher info
    method showData() → display publisher info
3. Create subclass Book extending Publisher
    bookName, bookId, authorName
    override getData() to read all info
    override showData() to display all info
4. In main(), create a Book object
5. Call getData() and showData()
6. Stop




🧠 Flowchart

+---------+
|  Start  |
+---------+
    |
    v
+----------------------+
| Input publisher info |
+----------------------+
    |
    v
+----------------------+
| Input book info      |
+----------------------+
    |
    v
+----------------------+
| Display publisher &  |
| book details         |
+----------------------+
    |
    v
+---------+
|  Stop   |
+---------+



      `
    },
    {
      id: 6.6,
      question: "6.6 Create a class with two methods with same name addfunc(), one accepting two integer parameters and other accepting two double parameters. When method is called, the appropriate method should be selected depending on parameters passed(method overloading). ",
      answer: "",
      codeExample: `
💻 Java Source Code

public class AddFunction {

    // Method 1: accepts two integers
    void addfunc(int a, int b) {
        System.out.println("Sum of integers: " + (a + b));
    }

    // Method 2: accepts two doubles
    void addfunc(double x, double y) {
        System.out.println("Sum of doubles: " + (x + y));
    }

    public static void main(String[] args) {
        AddFunction obj = new AddFunction();

        obj.addfunc(5, 10);       // calls integer method
        obj.addfunc(3.5, 2.5);    // calls double method
    }
}


🧾 Example Output

Sum of integers: 15
Sum of doubles: 6.0

------------------------------------------------------------------------

🔷 Flowchart

🧠 Algorithm

1. Start
2. Create a class named AddFunction.
3. Define two methods named addfunc():
    One takes two integers and returns their sum.
    One takes two doubles and returns their sum.
4. In main():
    Call both methods with integer and double arguments.
5. Display the results.
6. Stop



🔷 Flowchart

          +----------------------+
          |        START         |
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Create AddFunction   |
          | class with 2 methods |
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Call addfunc(int,int)|
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Call addfunc(double, |
          |        double)       |
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Display both results |
          +----------+-----------+
                     |
                     v
          +----------------------+
          |         END          |
          +----------------------+


      `
    },
    {
      id: 7.7,
      question: "7.7 Declare a variable called x with integer as the data type in base class and subclass. Make a method named as show() which displays the value of x in the superclass and subclass.",
      answer: "",
      codeExample: `
💻 Java Source Code

class BaseClass {
    int x = 10;

    void show() {
        System.out.println("Value of x in BaseClass: " + x);
    }
}

class SubClass extends BaseClass {
    int x = 20;

    void show() {
        System.out.println("Value of x in SubClass: " + x);
        System.out.println("Value of x in BaseClass (using super): " + super.x);
    }
}

public class MainClass {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        obj.show();
    }
}


🧾 Example Output

Value of x in SubClass: 20
Value of x in BaseClass (using super): 10


------------------------------------------------------------------------

🧠 Algorithm

1. Start
2. Create a base class called BaseClass with an integer variable x.
3. Initialize x in the base class (e.g., x = 10).
4. Create a subclass called SubClass that extends BaseClass.
5. Declare another integer variable x in the subclass (e.g., x = 20).
6. In both classes, define a method show() to display the value of x.
7. In the main() method:
    Create an object of SubClass.
    Call show() from the base class and subclass to display both values.
8. Stop


🔷 Flowchart

          +---------------------+
          |        START        |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Create BaseClass    |
          | int x = 10          |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Create SubClass     |
          | int x = 20          |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Define show() in    |
          | both classes        |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Create SubClass obj |
          | Call show()         |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Display both values |
          +----------+----------+
                     |
                     v
          +---------------------+
          |        END          |
          +---------------------+

      `
    },
    {
      id: 8.8,
      question: "8.8 WRITE A PROGRAM TO CALCULATE THE AREA, CIRCUMFERENCE AND VOLUME FOR ALL SHAPES. [PERFORM THIS APPLICATION USING FINAL CLASS, ABSTRACT CLASS AND INTERFACE]",
      answer: "",
      codeExample: `
💻 Java Source Code

interface Shape2D {
    void area(double r);
    void circumference(double r);
}

abstract class Shape3D {
    abstract void volume(double r);
}

final class Geometry extends Shape3D implements Shape2D {
    public void area(double r) {
        System.out.println("Area of Circle: " + (Math.PI * r * r));
    }
    public void circumference(double r) {
        System.out.println("Circumference of Circle: " + (2 * Math.PI * r));
    }
    void volume(double r) {
        System.out.println("Volume of Sphere: " + ((4.0/3.0) * Math.PI * r * r * r));
    }
}

public class ShapeCalculation {
    public static void main(String[] args) {
        Geometry g = new Geometry();
        double radius = 5.0;

        System.out.println("For Radius = " + radius);
        g.area(radius);
        g.circumference(radius);
        g.volume(radius);
    }
}


🧾 Example Output

For Radius = 5.0
Area of Circle: 78.53981633974483
Circumference of Circle: 31.41592653589793
Volume of Sphere: 523.5987755982989




🧠 Algorithm

1. Start
2. Create an interface Shape2D with methods:
    area()
    circumference()
3. Create an abstract class Shape3D with an abstract method:
    volume()
4. Create a final class Geometry that extends Shape3D and implements Shape2D.
5. In this class:
    Implement methods to calculate area, circumference, and volume for different shapes (circle and sphere).
6. In main(),
    Create an object of Geometry.
    Call methods to calculate and display results.
7. Stop


🔷 Flowchart

          +--------------------------+
          |          START           |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Define interface Shape2D |
          | -> area(), circumference()|
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Define abstract class    |
          | Shape3D -> volume()      |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | final class Geometry     |
          | implements Shape2D       |
          | extends Shape3D          |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Implement area(),        |
          | circumference(), volume()|
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Call methods in main()   |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          |        END               |
          +--------------------------+


`
    },
    {
      id: 9.9,
      question: "9.9 Write a program to enter two integers from the command line and display the division of those two numbers. Handle all the exceptions (i.e. ArrayIndexOutOfBoundsException, NumberFormatException, ArithmeticException) for invalid arguments passed.",
      answer: "",
      codeExample: `
java Program Code

public class DivisionWithExceptions {
    public static void main(String[] args) {
        try {
            int a = Integer.parseInt(args[0]);
            int b = Integer.parseInt(args[1]);
            System.out.println("Result: " + (a / b));
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Please provide two numbers!");
        }
        catch (NumberFormatException e) {
            System.out.println("Error: Enter valid integers!");
        }
        catch (ArithmeticException e) {
            System.out.println("Error: Division by zero not allowed!");
        }
    }
}




output Examples:

🧮 Case 1: Valid input
Command:
    java DivisionWithExceptions 10 2

Output:
    Result: 5



⚠️ Case 2: Missing arguments
Command:
    java DivisionWithExceptions 10

Output:
    Error: Please provide two numbers!

Command:
    java DivisionWithExceptions

Output:
    Error: Please provide two numbers!



🚫 Case 3: Invalid numbers
Command:
    java DivisionWithExceptions ten 5

Output:
    Error: Enter valid integers!


❌ Case 4: Division by zero
Command:
    java DivisionWithExceptions 10 0

Output:
    Error: Division by zero not allowed!


----------------------------------------------------------------

🧠 Algorithm

1. Start
2. Accept two integers from the command line arguments.
3. Convert them from String → int using Integer.parseInt().
4. Divide the first number by the second.
5. Handle possible exceptions using try-catch blocks:
    ArrayIndexOutOfBoundsException → if less than 2 args provided..
    NumberFormatException → if input is not a valid number.
    ArithmeticException → if division by zero.
6. Display the result if no exception occurs.
7. Stop




flowchart

             ┌──────────────────────────┐
             │   Start Program          │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Try block starts         │
             │ Read args[0], args[1]    │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Convert to integers      │
             │ a = Integer.parseInt()   │
             │ b = Integer.parseInt()   │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Perform division (a/b)   │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Print result             │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │      End Program          │
             └──────────────────────────┘

                ┌───────────────────────────────┐
                │        Exception Handling     │
                └───────────────────────────────┘
                          ▲
          ┌───────────────┼──────────────────────────────┐
          │               │                              │
          │               │                              │
┌────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ Missing Args?  │  │ Invalid Number?     │  │ Divide by Zero?     │
│ (ArrayIndex...)│  │ (NumberFormat...)   │  │ (Arithmetic...)     │
└───────┬────────┘  └────────┬───────────┘  └────────┬───────────┘
        │                     │                      │
        ▼                     ▼                      ▼
┌──────────────┐    ┌─────────────────┐    ┌──────────────────────────┐
│ Print Error: │    │ Print Error:    │    │ Print Error:             │
│ Please       │    │ Enter valid     │    │ Division by zero not     │
│ provide two  │    │ integers!       │    │ allowed!                 │
│ numbers!     │    └─────────────────┘    └──────────────────────────┘
└──────────────┘


    `
    },
    {
      id: 10.10,
      question: "10.10 Write a program to perform following actions and store output in file: Accept strings from user, convert it into uppercase and store it in a file. Write double value to a text file and also display the date on which the application was run inside the file. Delete a given file or directory and display appropriate message",
      answer: "",
      codeExample: `
💻 Java Source Code

import java.io.*;
import java.util.*;

public class FileActions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            // Step 1: Accept a string from user
            System.out.print("Enter a string: ");
            String input = sc.nextLine();

            // Step 2: Convert to uppercase
            String upper = input.toUpperCase();

            // Step 3: Create and write to file
            FileWriter fw = new FileWriter("output.txt");
            fw.write("Uppercase String: " + upper + "\n");

            // Step 4: Write a double value
            double num = 123.45;
            fw.write("Double Value: " + num + "\n");

            // Step 5: Write current date
            Date date = new Date();
            fw.write("Date: " + date + "\n");

            fw.close();
            System.out.println("Data written to output.txt successfully!");

            // Step 6: Ask for file or directory to delete
            System.out.print("Enter file or folder name to delete: ");
            String filename = sc.nextLine();

            File file = new File(filename);

            // Step 7: Delete file or show message
            if (file.exists()) {
                if (file.delete()) {
                    System.out.println("File deleted successfully!");
                } else {
                    System.out.println("Unable to delete the file.");
                }
            } else {
                System.out.println("File not found!");
            }

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}


🧾 Example Output

Console Output:

Enter a string: hello world
Data written to output.txt successfully!
Enter file or folder name to delete: output.txt
File deleted successfully!


File Content (before deletion):
Uppercase String: HELLO WORLD
Double Value: 123.45
Date: Sat Oct 05 10:32:00 IST 2025


------------------------------------------------------------------------

🧠 Algorithm

1. Start
2. Accept a string from the user.
3. Convert the string to uppercase.
4. Create a text file (e.g., output.txt).
5. Write the uppercase string into the file.
6. Write a double value (e.g., 123.45) to the same file.
7. Write the current date of program execution in the file.
8. Ask the user to enter a filename to delete.
9. Try to delete the file or directory.
10. Display a message — “File deleted successfully” or “File not found.”
11. Stop


🔷 Flowchart

              ┌───────────────────────────┐
              │        Start              │
              └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Accept string from user   │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Convert to UPPERCASE      │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Write to file:            │
            │ - Text                    │
            │ - Double value            │
            │ - Current date            │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Ask user for file name    │
            │ to delete                 │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Does file exist?          │
            └───────┬──────────┬────────┘
                    │          │
              Yes ──┘          └── No
                    │              │
                    ▼              ▼
       ┌──────────────────┐   ┌────────────────────────┐
       │ Delete file and  │   │ Show message: File not │
       │ show “Deleted”   │   │ found or cannot delete │
       └────────┬─────────┘   └────────────┬──────────┘
                │                          │
                ▼                          ▼
             ┌──────────────────────────────┐
             │            End               │
             └──────────────────────────────┘

`
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },


  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>java Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
