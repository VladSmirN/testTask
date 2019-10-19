package com.company;
import utils.Vector;
import utils.MyReader;
import java.io.FileWriter;

public class Main {

    public static void main(String[] args) {


        String pathPayload = args[0];;
        String pathAnswer  = args[1];
        double EPS = 0.000001;//погрешность , нужна при сравнение double
        int ans[] = new int[6];
        double maxArea=-1;

        MyReader file  = new MyReader(pathPayload);

        file.nextLine();
        while(file.line != null){

            file.lineToNumbers();
            if(file.numbers.length != 6){
                file.nextLine();
                continue;
            }
            try{
                //Создаем объекты для описания векторов
                Vector a = new Vector(file.numbers[0],file.numbers[1]);
                Vector b = new Vector(file.numbers[2],file.numbers[3]);
                Vector c = new Vector(file.numbers[4],file.numbers[5]);

                // Вычисляем длинну между векторами
                double ab = b.getLong(a);
                double bc = b.getLong(c);
                double ac = a.getLong(c);

                //Проверяем равнобедренный ли треугольник
                if((ab < bc + EPS && ab > bc - EPS) || (ac < bc + EPS && ac > bc - EPS) || (ab < ac + EPS && ab > ac - EPS)){

                    //Считаем площадь треугольника
                    // S=1/2*a*b*sin(a^b) , a*b*sin(a^b) - векторное произвидение векторов a и b
                    b.subtractVector(a);
                    c.subtractVector(a);
                    double area = b.getVectorProduct(c)/2;
                    if(maxArea < area){
                        maxArea = area;
                        ans = file.numbers;
                    }
                }
            }catch(Throwable e){
                System.out.println("Error mathematical calculations for lines - "+file.line);
            }
            file.nextLine();
        }
        file.close();
        try{
            FileWriter writer = new FileWriter(pathAnswer);
            if(maxArea != -1){
                String ansStr = "" ;
                for(int i = 0 ;i < ans.length ;++i){
                    ansStr+=Integer.toString (  ans[i])+' ';
                }
                writer.write(ansStr);
                writer.flush();
            }
            writer.close();
        }catch(Throwable e){
            System.out.print("Error writing file");
        }
        System.out.print("program end");
    }
}
