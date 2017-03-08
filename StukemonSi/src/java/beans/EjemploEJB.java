/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;

import Persistencia.Trainer;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;

/**
 *
 * @author 46989075Y
 */
@Stateless
public class EjemploEJB {

    @PersistenceUnit
    EntityManagerFactory emf;
    
    
    
    public boolean insertarEntrendor(Trainer t){
        if(!existeEntrenador(t)){
            EntityManager em = emf.createEntityManager();
            em.persist(t);
            em.close();
            return true;
        }else{
            return false;
        }
    }
    
    public boolean existeEntrenador(Trainer t){
        EntityManager em = emf.createEntityManager();
        Trainer encontrado = em.find(Trainer.class, t.getName());
        em.close();
        return encontrado != null;
    }
}
