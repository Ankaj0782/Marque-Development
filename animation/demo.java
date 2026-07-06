import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Dimension;

public class demo {
    public static void main(String[] args) {
        // 1. Create the main window frame
        JFrame frame = new JFrame("Simple Java UI");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        // 2. Create a visual component (a text label)
        JLabel label = new JLabel("Hello, World!", SwingConstants.CENTER);
        label.setPreferredSize(new Dimension(300, 100));
        
        // 3. Add the component to the window and display it
        frame.getContentPane().add(label);
        frame.pack();
        frame.setLocationRelativeTo(null); // Center the window
        frame.setVisible(true);
    }
}