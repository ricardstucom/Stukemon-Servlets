/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import Persistencia.Trainer;
import beans.EjemploEJB;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author 46989075Y
 */
@WebServlet(name = "Batalla", urlPatterns = {"/Batalla"})
public class Batalla extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @EJB
    EjemploEJB miEjb;
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Batalla</title>");            
            out.println("</head>");
            out.println("<body>");
               out.println(" <form action=\"Batalla\" method=\"POST\">");
            out.println("<h1>Servlet Batalla at " + request.getContextPath() + "</h1>");
            List<Trainer> entrenadores = miEjb.selectAllTrainer();
            out.println("<p><select name=\"entrenador\">");

//            for (Trainer c : entrenadores) {
//if(c.getPokemonCollection().size()>0){
//      out.println("<option value=\"" + c.getName() + "\">" + c.getName() + "</option>");
//
//}
//              
//            }
//
//            out.println("</select></p>");
//            out.println(" <input name=\"entrenador\" type=\"submit\" value=\"batalla\">");
//                 Trainer entrenadorPrimero= new Trainer();
//             Trainer entrenadorSegundo = new Trainer();
//             int contador=0;
////             while(contador==0&&contador<2){
//                 if("batalla".equals(request.getParameter("entrenador"))&&contador==0){
//                      String entrenador1 = request.getParameter("entrenador");
//                      contador++;
//                      if(entrenador1 !=null){
//                          entrenadorPrimero=miEjb.getTrainerByNombre(entrenador1);
//                     
//                 }
//                 }else{
//                     if("batalla".equals(request.getParameter("entrenador"))&&contador==1){
//                         String entrenador2 = request.getParameter("entrenador");
//                         contador++;
//                         if(entrenador2 !=null){
//                          entrenadorSegundo=miEjb.getTrainerByNombre(entrenador2);
//                     }
//                     }
//                 }
//             }
        
             
             
             
//             out.println("<h3>Primer entrenador</h3>");
//             out.println("<h2>"+entrenadorPrimero.getName()+"</h2>");
//             out.println(" <form action=\"Batalla\" method=\"POST\">");
//            
//          
//            out.println("<p><select name=\"pokemon\">");
//
//            for (Trainer c : entrenadores) {
//                       out.println(entrenadorPrimero.getPokemonCollection());
//              
//            }
//
//            out.println("</select></p>");
//            
//            
//              out.println("<h3>Segundo entrenador</h3>");
//             out.println("<h2>"+entrenadorSegundo.getName()+"</h2>");
//            out.println("<p><select name=\"pokemon\">");
//
//            for (Trainer c : entrenadores) {
//                       out.println(entrenadorSegundo.getPokemonCollection());
//              
//            }
//
//            out.println("</select></p>");
//            out.println(" <input name=\"entrenador\" type=\"submit\" value=\"batalla\">");
//            out.println("</body>");
//            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
