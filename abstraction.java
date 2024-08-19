import java.lang.*;
import java.util.*;
abstract class Company{
    abstract int getRateOfInterest();
}

class MUTHU extends Company{
    int getRateOfInterest(){return 7;}
}
class  GROW extends Company{
    int getRateOfInterest(){return 8;}
}

public class abstraction
{
    public static void main(String[] args)
    {
        Company b= new GROW();
        int interest=b.getRateOfInterest();
        System.out.print("Rate of Interest is "+interest+"%");

    }

}
