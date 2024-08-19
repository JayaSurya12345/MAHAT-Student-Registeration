import java.lang.*;
import java.util.*;

interface Companyy{
    float rateOfInterestt();
}
class MUTHUU implements Companyy{
    public float rateOfInterestt(){return 9.15f;}
}
class GROWW implements Companyy{
    public float rateOfInterestt(){return 9.7f;}
}

public class abstractionINTER
{
    public static void main(String[] args)
    {
        Companyy b= new GROWW();
        float interest=b.rateOfInterestt();
        System.out.print("Rate of Interest is "+interest+"%");
    }
}
