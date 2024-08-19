
class Student {

    private String name;
    private int age;


    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public int getAge() {
        return age;
    }


    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }


    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}


public class encapsulation {
    public static void main(String[] args) {

        Student student = new Student("John", 20);
        System.out.println("Initial Details:");
        student.displayInfo();

        student.setName("Jane");
        student.setAge(25);

        System.out.println("Updated Details:");
        student.displayInfo();
    }
}
