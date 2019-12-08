package com.bellocboris.model;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;



@Repository
public interface UserRepository extends CrudRepository<User, Long> {}


/**
 * we'll need basic CRUD functionality on the User entities, we must also define a UserRepository interface 
 */
