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
      question: "10.10 ",
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
