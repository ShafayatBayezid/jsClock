### `Live Demo`
Visit [https://shafayatbayezid.github.io/jsClock/) to view it in your browser.




The code begins by selecting the necessary elements from the HTML document using ```querySelector``` and assigning them to variables. The selected elements include the hands of the analog clock ```secondsHand, minsHand, hoursHand```, the digital clock display ```digiTime```, and the current date display ```currentDate```.

The ```setDate``` function is then defined, which is responsible for updating the clock and date displays. It retrieves the current time using the Date object and calculates the degrees of rotation for each clock hand based on the current time. The calculated degrees are then applied to the corresponding CSS ```transform``` property using the ```style.transform``` property, resulting in the movement of the clock hands.

The digital clock display is also updated by obtaining the current time using ```toLocaleTimeString``` and assigning it to the ```innerHTML``` of the  ```digiTime``` element.

The ```setInterval``` function is used to call the ```setDate``` function every second (1000 milliseconds), ensuring that the clock and digital display are continuously updated.

The code also retrieves the current date using the ```Date``` object and assigns it to the ```date``` variable. The day, month, and year components are extracted from the date and formatted using ```padStart``` to ensure two digits for day and month. The formatted date is then assigned to the ```innerHTML``` of the ```currentDate``` element, displaying it in the format ```"DD.MM.YYYY"```.

Overall, this code combines analog and digital clock functionalities along with displaying the current date, providing an interactive and informative user interface.







