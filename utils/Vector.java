package utils;
public class Vector {
    int x = 5;
    int y = 5;
    public Vector(int x , int y){
        this.x = x;
        this.y = y;
    }
    /**
     * Вычитаем вектор
     * @param a - Вектор , который мы должны вычесть из текущего
     */
    public void subtractVector (Vector a){
        this.x -= a.x;
        this.y -= a.y;
    }
    /**
     * Возврощаем векторное произведение
     * @param a - Вектор , который мы должны умножить на текущий
     */
    public double getVectorProduct (Vector a){
        return  Math.abs( a.x * this.y - a.y * this.x);
    }
    /**
     * Возврощаем длинну между векторами
     * @param a - Вектор , с  котроым мы ищем длинну
     */
    public double getLong (Vector a){
        return  Math.sqrt((a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y));
    }
}
