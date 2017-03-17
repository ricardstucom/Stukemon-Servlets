/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import Persistencia.Pokemon;
import Persistencia.Trainer;
import beans.EjemploEJB;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.Integer.parseInt;
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
@WebServlet(name = "AltaPokemon", urlPatterns = {"/AltaPokemon"})
public class AltaPokemon extends HttpServlet {

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
            out.println("<title>Servlet AltaPokemon</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet AltaPokemon at " + request.getContextPath() + "</h1>");
            out.println(" <form action=\"AltaPokemon\" method=\"POST\">");
            out.println(" <p> Nombre: <input type=\"text\" name=\"name\" required></p>");
            out.println(" <p> Tipo <input type=\"text\" name=\"tipo\" required></p>");
            out.println(" <p> Habilidad: <input type=\"text\" name=\"habilidad\" required></p>");
            out.println(" <p>Velocidad: <input type=\"number\" name=\"velocidad\" required></p>");
            out.println("  <p>Vida: <input type=\"number\" name=\"vida\" required></p>");
            List<Trainer> entrenadores = miEjb.selectAllTrainer();
            out.println("<p><select name=\"entrenador\">");

            for (Trainer c : entrenadores) {

                out.println("<option value=\"" + c.getName() + "\">" + c.getName() + "</option>");

            }

            out.println("</select></p>");
            out.println(" <input type=\"submit\" value=\"alta\">");
            out.println("</body>");
            out.println("</html>");

            String name = request.getParameter("name");
            String type = request.getParameter("tipo");
            String ability = request.getParameter("habilidad");
            int speed = parseInt(request.getParameter("velocidad"));
            int life = parseInt(request.getParameter("vida"));
            Pokemon p = new Pokemon(name, type, ability, 0, 0, speed, life, 0);
            String nombre = request.getParameter("entrenador");
            Trainer trainerEscogido = miEjb.getTrainerByNombre(nombre);

            p.setTrainer(trainerEscogido);

            for (Trainer b : entrenadores) {
                if (b.getName().equals(trainerEscogido.getName())) {
                    if (b.getPokeballs() >= 6) {
                        out.println("Tiene lleno los pokemons");
                    } else {

                        if (miEjb.insertarPokemon(p)) {
                            out.println("Pokemon insertado");
                        } else {
                            out.println("Ya existe el pokemon");
                        }
                    }
                }
            }

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
