package bb;

import java.util.Scanner;

public class Converter {
	
	public void start() {
		intro();
		calculator();
	}

	/**
	 * 
	 * @return
	 */
	public void calculator() {
		boolean isContinue = true;

		while (isContinue) {
			int modeChosen = conversionMode();

			System.out.println("Temperature to be converted :");
			double temp = userInputFloat();		
			double result;
			switch (modeChosen) {
			// Case 1 : Celsius to Fahrenheit
			case 1:
				result = ((9 * temp)/5) + 32;
				System.out.printf("%.1f°C equal %.1f°F\n", temp, result);
				break;
				// Case 2 : Fahrenheit to Celsius
			case 2:
				result = ((temp - 32)*5)/9;
				// %d = int ; %f = float -> %.2f = print float 2 decimal
				System.out.printf(" %.1f°F equal %.1f°C\n", temp, result);
				break;
			default:
				System.out.println("Not supposed to be here; ERROR; try again");
			}
			// Do user want a new number ?			
			isContinue = isContinue();		
		}
		
		System.out.println("bye, thank you come again !");

	}
	

	/**
	 * Used to print the introduction text
	 */
	public void intro () {
		System.out.println("Celsius degree converter to degrees Fahrenheit and vice versa");
		System.out.println("-------------------------------------------------------------");
	}
	
	/**
	 * ask user which mode to use; Celsius to Fahrenheit or vice versa
	 * @return
	 */
	public int conversionMode () {
		int userChoice = 0; 
		System.out.println("Choose the conversion mode :");
		System.out.println("1 - Convert Celsius to Fahrenheit");
		System.out.println("2 - Convert Fahrenheit to Celsius");	
		do {
			userChoice = (int) userInputFloat();
		} while (userChoice != 1 && userChoice != 2);
		return userChoice;
	}
	
	/**
	 * Do user want to convert one more number ?
	 * @return
	 */
	public boolean isContinue () {
		System.out.println("Do you want to convert an other value ? (Y/N)");
		String userChoice = userInputStrON(); 
		if ("Y".equals(userChoice)) {
			return true;
		} else if ("N".equals(userChoice)) {
			return false;
		} else {
			// error
			return false;
		}
	}
	
    /**
     * Used to collect user's input and check if it's a float
     *
     * @return user choice as float
     */
    public float userInputFloat() {
        Scanner sc = new Scanner(System.in);
        while (!sc.hasNextFloat()) {
            String input = sc.next();
            System.out.printf("\"%s\" is not valid ! Please enter an integer number.\n", input);
        }
        return sc.nextFloat();
    }
    /**
     * Used to collect user's input and check if it's an "O" or "N"
     *
     * @return user choice as String
     * DOC String comparison : https://stackoverflow.com/questions/15354032/comparison-of-java-scanner-string
     */
    public String userInputStrON() {
    	Scanner sc = new Scanner(System.in);
    	String userInput = sc.nextLine().toUpperCase();
    	
    	while ( !"Y".equals(userInput) && !"N".equals(userInput) ) {
    		System.out.printf("\"%s\" is not valid ! Allowed choices are N or Y.\n", userInput);
    		userInput = sc.nextLine().toUpperCase();
    	}
    	return userInput;
    }
	
		
	
	/**
	 * -> NOT USED
	 * round the result
	 * @param AThe value to round
	 * @param number of digits after the decimal point
	 * @return
	 */
	public static double roundResult(double A, int B) {
		return (double) ( (int) (A * Math.pow(10, B) + .5)) / Math.pow(10, B);
	}
}
