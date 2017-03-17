/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;

import Persistencia.Pokemon;
import Persistencia.Trainer;
import java.util.List;
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
    public boolean insertarPokemon(Pokemon t){
        if(!existePokemon(t)){
            EntityManager em = emf.createEntityManager();
            em.persist(t);
            em.close();
           
            
            return true;
            
        }
     return false;
    }
    
    public boolean existePokemon(Pokemon t){
        return(emf.createEntityManager().find(Pokemon.class, t.getName())) !=null;
    }
    public Trainer getTrainerByNombre(String nombre){
        return emf.createEntityManager().find(Trainer.class, nombre);
    }
    public Pokemon getPokemonByNombre(String nombre){
          return emf.createEntityManager().find(Pokemon.class, nombre);
    }
     public Pokemon getPokemonByTrainer(String nombre){
          return emf.createEntityManager().find(Pokemon.class, nombre);
    }
    public List<Trainer> selectAllTrainer(){
        return emf.createEntityManager().createNamedQuery("Trainer.findAll").getResultList();
    }
    public List<Pokemon> selectAllPokemon(){
        return emf.createEntityManager().createNamedQuery("Pokemon.findAll").getResultList();
    }
    public boolean deletePokemonByNombre(String nombre){
        EntityManager em = emf.createEntityManager();
        Pokemon p = em.find(Pokemon.class, nombre);
        if(p != null){
            em.remove(p);
        }
     
        return true;
    }
}
