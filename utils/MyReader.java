package utils;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class MyReader {
    BufferedReader reader ;
    public String line;
    public int numbers[];
    public MyReader(String path) {
        try {
            File file = new File(path);
            FileReader fr = new FileReader(file);
            this.reader = new BufferedReader(fr);
        } catch (Throwable t) {
            System.out.print("Error reading file");
        }
    }
    public void nextLine(){
        try {
            this.line = this.reader.readLine();
        } catch (Throwable t) {this.line = null;}
    }
    public void lineToNumbers(){
        try{
            String strArr[] = this.line.split(" ");
            this.numbers  = new int[strArr.length];
            for (int i = 0; i < strArr.length; i++) {
                this.numbers[i] = Integer.parseInt(strArr[i]);
            }
        }catch (Throwable t){}
    }
    public void close(){
        try {
            this.reader.close();
        } catch (Throwable t) {}
    }
}
